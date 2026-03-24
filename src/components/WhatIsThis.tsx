"use client";

import KineticText from "./KineticText";
import RevealOnScroll from "./RevealOnScroll";

const deliverables = [
  "PROJECT.md governing document",
  "UX-PLAN.md with screen inventory + interaction states",
  "4 autonomous AI agents on cron (marketer, analyst, seller, researcher)",
  "Design system — 72 skills across 11 visual vibes + 8 type systems",
  "A deployed product",
];

export default function WhatIsThis() {
  return (
    <section
      id="what-is-this"
      className="py-32 md:py-48 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <KineticText
          text="WHAT IS THIS?"
          tag="h2"
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em] text-fg mb-4"
          splitBy="chars"
          stagger={0.03}
        />

        <RevealOnScroll>
          <p className="font-body max-w-md text-muted text-lg font-light leading-relaxed mb-20 md:mb-28">
            Three things you need to understand before you run the command.
          </p>
        </RevealOnScroll>

        {/* Block 01 — What it is */}
        <RevealOnScroll delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-24 pb-20 md:pb-28 border-b border-border">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-5">
                01 / What it is
              </p>
              <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] tracking-tight text-fg">
                NOT A TEMPLATE.
                <br />
                <span className="text-accent">A DECISION ENGINE.</span>
              </h3>
            </div>
            <div>
              <p className="font-body text-lg font-light leading-relaxed text-fg/65 mb-8">
                A context-efficient AI playbook that turns a 10-minute
                conversation into a fully scaffolded SaaS project. It starts at
                ~500 tokens and dynamically loads only the modules your project
                needs &mdash; 19 available across stack, business, and planning.
              </p>

              {/* Context efficiency callout */}
              <div className="bg-surface flex flex-col sm:flex-row gap-px">
                <div className="flex-1 px-6 py-5">
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted mb-2">
                    Dynamic load (2 modules)
                  </p>
                  <p className="font-display text-4xl text-accent">~3,000</p>
                  <p className="font-mono text-xs text-muted mt-1">tokens</p>
                </div>
                <div className="w-px bg-border hidden sm:block" />
                <div className="flex-1 px-6 py-5">
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted mb-2">
                    Old approach (all 19)
                  </p>
                  <p className="font-display text-4xl text-fg/30 line-through decoration-1">
                    ~33,000
                  </p>
                  <p className="font-mono text-xs text-muted mt-1">tokens</p>
                </div>
                <div className="w-px bg-border hidden sm:block" />
                <div className="flex-1 px-6 py-5 flex items-center">
                  <p className="font-body text-sm text-muted leading-relaxed">
                    The dynamic router is why it actually works. 11× less
                    context means more headroom for building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Block 02 — How it works */}
        <RevealOnScroll delay={0.06}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-24 py-20 md:py-28 border-b border-border">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-5">
                02 / How it works
              </p>
              <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] tracking-tight text-fg">
                TEN QUESTIONS.
                <br />
                <span className="text-accent">THEN IT BUILDS.</span>
              </h3>
            </div>
            <div>
              <p className="font-body text-lg font-light leading-relaxed text-fg/65 mb-10">
                You answer 10 questions. It selects the right modules. It
                stress-tests your idea &mdash; kills weak ones fast. Then it
                assembles a governing PROJECT.md that filters every future
                decision. Only then does it build.
              </p>

              {/* Process steps */}
              <div className="space-y-0">
                {[
                  { step: "1", label: "10 questions", note: "Intake phase — problem, user, money, constraints" },
                  { step: "2", label: "Module selection", note: "INDEX.md picks only what applies" },
                  { step: "3", label: "Stress test", note: "Revenue math, fatal flaws, competitive moats" },
                  { step: "4", label: "PROJECT.md assembled", note: "The governing document — everything filters through it" },
                  { step: "5", label: "Build", note: "Design system first → screens → business logic" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-baseline gap-5 py-4 border-b border-border/50 last:border-b-0"
                  >
                    <span className="font-display text-2xl text-border leading-none w-6 shrink-0">
                      {item.step}
                    </span>
                    <code className="font-mono text-sm text-ink shrink-0 min-w-[160px]">
                      {item.label}
                    </code>
                    <span className="font-body text-sm text-muted">
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Block 03 — What you get */}
        <RevealOnScroll delay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-24 pt-20 md:pt-28">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-5">
                03 / What you get
              </p>
              <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] tracking-tight text-fg">
                ONE COMMAND.
                <br />
                <span className="text-accent">FULL STACK.</span>
              </h3>
            </div>
            <div>
              <p className="font-body text-lg font-light leading-relaxed text-fg/65 mb-10">
                Everything that would take a team weeks to wire up, delivered
                from a single shell command.
              </p>

              <div className="space-y-0 mb-10">
                {deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4 border-b border-border/50 last:border-b-0"
                  >
                    <span className="font-mono text-xs text-accent mt-0.5 shrink-0">→</span>
                    <span className="font-body text-sm text-fg/70 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-3 bg-surface px-5 py-3">
                <span className="text-accent font-mono text-sm">$</span>
                <code className="font-mono text-sm text-fg">
                  ./new.sh my-project --ide claude --yolo
                </code>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
