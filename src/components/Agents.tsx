"use client";

import KineticText from "./KineticText";
import RevealOnScroll from "./RevealOnScroll";

const REPO = "https://github.com/derrrick/project-starter";

const agents = [
  {
    name: "MARKETER",
    schedule: "Mon / Wed / Fri — 9am",
    enabled: true,
    tasks: [
      "Content creation + blog posts",
      "Social media scheduling",
      "Email sequences",
      "Distribution channel execution",
    ],
    href: `${REPO}/tree/master/templates/agents/marketer`,
  },
  {
    name: "ANALYST",
    schedule: "Daily — 6am",
    enabled: true,
    tasks: [
      "KPI tracking + anomaly detection",
      "Cohort analysis",
      "Cost monitoring",
      "Assumption validation",
    ],
    href: `${REPO}/tree/master/templates/agents/analyst`,
  },
  {
    name: "SELLER",
    schedule: "Daily — 8am",
    enabled: false,
    tasks: [
      "Outbound prospecting",
      "Pipeline management",
      "B2B lead qualification",
      "Follow-up sequences",
    ],
    href: `${REPO}/tree/master/templates/agents/seller`,
  },
  {
    name: "RESEARCHER",
    schedule: "Weekly — Sun 10am",
    enabled: false,
    tasks: [
      "Competitive intelligence",
      "Market signal monitoring",
      "Trend analysis",
      "Adjacent opportunity scouting",
    ],
    href: `${REPO}/tree/master/templates/agents/researcher`,
  },
];

export default function Agents() {
  return (
    <section id="agents" className="px-6 md:px-12 lg:px-24 py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto">
        <KineticText
          text="AUTONOMOUS AGENTS"
          tag="h2"
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em] text-fg mb-4"
          splitBy="chars"
          stagger={0.03}
        />

        <RevealOnScroll>
          <div className="max-w-lg mb-20 md:mb-28">
            <p className="font-body text-lg font-light leading-relaxed text-muted mb-4">
              Agents run autonomously on cron schedules via{" "}
              <a
                href="https://github.com/anthropics/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent transition-colors"
              >
                OpenClaw
              </a>
              . Each has a{" "}
              <a
                href={`${REPO}/tree/master/templates/agents/marketer`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent transition-colors"
              >
                SOUL.md
              </a>{" "}
              (identity) and HEARTBEAT.md (running log). Shared context
              keeps them aligned.
            </p>
            <p className="font-body text-sm text-muted">
              Requires{" "}
              <a
                href="https://github.com/anthropics/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-accent hover:text-fg transition-colors"
              >
                OpenClaw
              </a>{" "}
              &mdash; the open-source framework that orchestrates headless
              agent sessions on a schedule.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {agents.map((agent, i) => (
            <RevealOnScroll key={agent.name} delay={i * 0.08}>
              <a
                href={agent.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-display text-4xl tracking-wide text-fg group-hover:text-accent transition-colors">
                    {agent.name}
                  </h3>
                  <span
                    className={`font-mono text-[10px] tracking-[0.15em] uppercase ${
                      agent.enabled ? "text-accent" : "text-muted"
                    }`}
                  >
                    {agent.enabled ? "On" : "Off"}
                  </span>
                </div>

                <p className="font-mono text-xs text-muted mb-5">
                  {agent.schedule}
                </p>

                <ul className="space-y-2">
                  {agent.tasks.map((task) => (
                    <li
                      key={task}
                      className="font-body text-sm text-muted/80 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-border"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-16">
          <a
            href={`${REPO}/tree/master/templates/agents`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-ink hover:text-accent transition-colors"
          >
            Browse agent templates on GitHub &rarr;
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
