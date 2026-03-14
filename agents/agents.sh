#!/bin/bash
# agents.sh — Autonomous agent runner for project-starter-website
#
# Usage:
#   ./agents/agents.sh <agent-name>     Run a specific agent
#   ./agents/agents.sh all              Run all enabled agents
#   ./agents/agents.sh status           Show agent status
#
# Designed to be called by cron or manually.
# Each agent is a Claude Code session that reads its SOUL.md and updates HEARTBEAT.md.

set -euo pipefail

AGENTS_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$AGENTS_DIR")"
CONFIG_FILE="${AGENTS_DIR}/.agents-config"

# ── Helpers ────────────────────────────────────────────────────────

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"
}

check_claude() {
  if ! command -v claude &> /dev/null; then
    echo "Error: Claude CLI not found. Install it first."
    exit 1
  fi
}

load_config() {
  if [[ ! -f "$CONFIG_FILE" ]]; then
    echo "Error: .agents-config not found. Run scaffold first."
    exit 1
  fi
}

# ── Agent Runner ───────────────────────────────────────────────────

run_agent() {
  local agent_name="$1"
  local agent_dir="${AGENTS_DIR}/${agent_name}"

  if [[ ! -d "$agent_dir" ]]; then
    log "ERROR: Agent directory not found: ${agent_dir}"
    return 1
  fi

  if [[ ! -f "${agent_dir}/SOUL.md" ]]; then
    log "ERROR: SOUL.md not found for agent: ${agent_name}"
    return 1
  fi

  log "Starting agent: ${agent_name}"

  cd "$PROJECT_DIR"

  # Run Claude with the agent's SOUL.md as context
  claude --print \
    "You are the ${agent_name} agent. Read your SOUL.md at agents/${agent_name}/SOUL.md, \
    read all context files listed in it, then execute your responsibilities. \
    Update your HEARTBEAT.md at agents/${agent_name}/HEARTBEAT.md when done. \
    Update agents/shared-context/MEMORY.md if you discover cross-agent insights." \
    2>&1 | tee -a "${agent_dir}/agent.log"

  log "Completed agent: ${agent_name}"
}

# ── Status ─────────────────────────────────────────────────────────

show_status() {
  echo "=== Agent Status ==="
  echo ""

  load_config

  local enabled_agents
  enabled_agents=$(cat "$CONFIG_FILE" | grep -o '"[a-z]*"' | tr -d '"' | head -20)

  for agent in $enabled_agents; do
    local heartbeat="${AGENTS_DIR}/${agent}/HEARTBEAT.md"
    if [[ -f "$heartbeat" ]]; then
      local last_run
      last_run=$(grep "Last run:" "$heartbeat" | head -1 | sed 's/.*Last run: //')
      echo "  ${agent}: last run ${last_run}"
    else
      echo "  ${agent}: no heartbeat file"
    fi
  done
}

# ── Main ───────────────────────────────────────────────────────────

main() {
  local command="${1:-help}"

  case "$command" in
    all)
      check_claude
      load_config
      local enabled_agents
      enabled_agents=$(cat "$CONFIG_FILE" | grep -o '"[a-z]*"' | tr -d '"' | head -20)
      for agent in $enabled_agents; do
        run_agent "$agent" || log "WARN: Agent ${agent} failed"
      done
      ;;
    status)
      show_status
      ;;
    help|-h|--help)
      echo "Usage: ./agents/agents.sh <agent-name|all|status>"
      echo ""
      echo "Agents:"
      echo "  marketer    Content and marketing automation"
      echo "  analyst     Metrics and monitoring"
      echo "  seller      Outbound sales pipeline"
      echo "  researcher  Competitive intelligence"
      echo ""
      echo "Commands:"
      echo "  all         Run all enabled agents"
      echo "  status      Show last run status"
      ;;
    *)
      check_claude
      run_agent "$command"
      ;;
  esac
}

main "$@"
