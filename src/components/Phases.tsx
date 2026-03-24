"use client";

import KineticText from "./KineticText";
import RevealOnScroll from "./RevealOnScroll";

const REPO = "https://github.com/derrrick/project-starter";

const phases = [
  {
    num: "01",
    name: "INTAKE",
    desc: "10 structured questions. Problem, user, money, constraints. The conversation IS the work.",
    output: "Answers + open assumptions",
    href: `${REPO}/blob/master/phases/intake.md`,
  },
  {
    num: "02",
    name: "MODULES",
    desc: "INDEX.md decides which of 19 modules load. Stack, business, planning — only what applies.",
    output: "Module selection",
    href: `${REPO}/blob/master/modules/INDEX.md`,
  },
  {
    num: "03",
    name: "STRESS TEST",
    desc: "Challenge every assumption. Kill weak ideas fast. Revenue math, competitive moats, fatal flaws.",
    output: "Assumption log",
    href: `${REPO}/blob/master/phases/stress-test.md`,
  },
  {
    num: "04",
    name: "ASSEMBLE",
    desc: "Build PROJECT.md — the governing document. Every future decision filters through it.",
    output: "PROJECT.md",
    href: `${REPO}/blob/master/phases/assemble.md`,
  },
  {
    num: "05",
    name: "AGENTS + UX",
    desc: "Configure 4 autonomous agents. Map the core user flow. Create UX-PLAN.md.",
    output: "UX-PLAN.md",
    href: `${REPO}/blob/master/phases/agents-ux.md`,
  },
  {
    num: "06",
    name: "BUILD",
    desc: "Design system gate → primary screen → business logic. Modules load as you implement.",
    output: "Shipped product",
    href: `${REPO}/blob/master/phases/build.md`,
  },
];

export default function Phases() {
  return (
    <section id="phases" className="px-6 md:px-12 lg:px-24 py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto">
        <KineticText
          text="SIX AUTONOMOUS PHASES"
          tag="h2"
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em] text-fg mb-4"
          splitBy="chars"
          stagger={0.03}
        />

        <RevealOnScroll>
          <p className="font-body max-w-md text-muted text-lg font-light leading-relaxed mb-20 md:mb-28">
            Sequential. Each phase loads its own context. ~500 tokens at start,
            not 50,000.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {phases.map((phase, i) => (
            <RevealOnScroll key={phase.num} delay={i * 0.06}>
              <a
                href={phase.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <span className="font-display text-6xl text-border leading-none group-hover:text-accent transition-colors">
                  {phase.num}
                </span>
                <h3 className="font-display text-3xl tracking-wide text-fg mt-3 mb-3 group-hover:text-accent transition-colors">
                  {phase.name}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-5">
                  {phase.desc}
                </p>
                <p className="font-mono text-xs text-accent">
                  → {phase.output}
                </p>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
