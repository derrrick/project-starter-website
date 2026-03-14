# Context Status

Report the current state of the project:

1. **Current Phase:** Which phase are we in? (0-6)
2. **Modules Referenced:** Which module files have been read in this conversation?
3. **PROJECT.md:** Does it exist? Is it confirmed?
4. **UX-PLAN.md:** Does it exist? Is it confirmed?
5. **Agents:** Which are enabled in .agents-config?
6. **Context Estimate:** Approximate tokens used so far (count files read × avg size)

## Token Estimates per Module

| Category | Avg Tokens | Files |
|----------|-----------|-------|
| CLAUDE.md (router) | ~500 | 1 |
| Phase file | ~800 | 1 at a time |
| Module INDEX | ~600 | 1 |
| Full module | ~1,500 | varies |
| stack/ (all 12) | ~18,000 | 12 |
| business/ (all 5) | ~9,000 | 5 |
| planning/ (all 4) | ~6,000 | 4 |

Suggest which modules could be unloaded (won't be referenced again in current phase).
