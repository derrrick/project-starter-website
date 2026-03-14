"use client";

import KineticText from "./KineticText";
import RevealOnScroll from "./RevealOnScroll";

const REPO = "https://github.com/derrrick/project-starter";

const moduleGroups = [
  {
    category: "STACK",
    count: 12,
    dir: "stack",
    modules: [
      { name: "cost", desc: "Free-tier defaults, upgrade gates tied to MRR" },
      { name: "backend", desc: "Node.js / Hono / Next.js API routes" },
      { name: "database", desc: "Postgres + Supabase + Drizzle + Upstash" },
      { name: "frontend", desc: "Next.js App Router, RSC, Zustand" },
      { name: "ui-system", desc: "7 UI libraries evaluated per project" },
      { name: "auth", desc: "Conditional — only if user accounts needed" },
      { name: "payments", desc: "Stripe lifecycle + webhooks" },
      { name: "email", desc: "Conditional — transactional + marketing" },
      { name: "infra", desc: "Vercel, GitHub Actions, Sentry, PostHog" },
      { name: "analytics", desc: "PostHog — 1M events free" },
      { name: "ai-integration", desc: "Conditional — Claude API, embeddings" },
      { name: "agents", desc: "Autonomous business automation" },
    ],
  },
  {
    category: "BUSINESS",
    count: 5,
    dir: "business",
    modules: [
      { name: "pricing", desc: "Unit math tables, flat monthly default" },
      { name: "gtm", desc: "Validate 10 people, PH/HN launch, ONE channel" },
      { name: "marketing", desc: "Conditional — B2C / content-driven" },
      { name: "sales", desc: "Conditional — B2B + ACV > $50/mo" },
      { name: "ops", desc: "Solo tooling, email-first support, cron automation" },
    ],
  },
  {
    category: "PLANNING",
    count: 4,
    dir: "planning",
    modules: [
      { name: "roadmap", desc: "MTP, cut test, 4 milestones over 12 weeks" },
      { name: "financial-model", desc: "Revenue projections, cohort analysis" },
      { name: "legal-lite", desc: "Always recommended — terms, privacy, compliance" },
      { name: "retro", desc: "Post-launch template for next iteration" },
    ],
  },
];

export default function Modules() {
  return (
    <section id="modules" className="px-6 md:px-12 lg:px-24 py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto">
        <KineticText
          text="19 MODULES"
          tag="h2"
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em] text-fg mb-4"
          splitBy="chars"
          stagger={0.03}
        />

        <RevealOnScroll>
          <p className="font-body max-w-md text-muted text-lg font-light leading-relaxed mb-20 md:mb-28">
            Load on-demand via{" "}
            <code className="font-mono text-sm text-accent">/load module</code>{" "}
            or{" "}
            <code className="font-mono text-sm text-accent">
              /route domain
            </code>
            . Never all at once.{" "}
            <a
              href={`${REPO}/tree/master/modules`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-accent transition-colors"
            >
              Browse all &rarr;
            </a>
          </p>
        </RevealOnScroll>

        <div className="space-y-20 md:space-y-28">
          {moduleGroups.map((group, gi) => (
            <RevealOnScroll key={group.category} delay={gi * 0.1}>
              <div className="flex items-baseline gap-4 mb-10">
                <a
                  href={`${REPO}/tree/master/${group.dir}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-4xl md:text-5xl tracking-wide text-fg hover:text-accent transition-colors"
                >
                  {group.category}
                </a>
                <span className="font-mono text-xs text-muted">
                  {group.count}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
                {group.modules.map((mod) => (
                  <a
                    key={mod.name}
                    href={`${REPO}/blob/master/${group.dir}/${mod.name}.md`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline gap-4 group"
                  >
                    <code className="font-mono text-sm text-ink shrink-0 group-hover:text-accent transition-colors">
                      {mod.name}
                    </code>
                    <span className="font-body text-sm text-muted">
                      {mod.desc}
                    </span>
                  </a>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
