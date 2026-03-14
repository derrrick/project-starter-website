"use client";

import KineticText from "./KineticText";
import RevealOnScroll from "./RevealOnScroll";

const commands = [
  { cmd: "/route stack", desc: "Load all 12 stack modules" },
  { cmd: "/route business", desc: "Load all 5 business modules" },
  { cmd: "/route planning", desc: "Load all 4 planning modules" },
  { cmd: "/load <module>", desc: "Load a single module by name" },
  { cmd: "/status", desc: "Show loaded modules + context estimate" },
];

const designCommands = [
  { cmd: "/taste", desc: "Cultural institution aesthetic" },
  { cmd: "/vibe-brutalist", desc: "Neo-brutalist — punk meets digital" },
  { cmd: "/vibe-luxury", desc: "Quiet luxury — whisper, don't shout" },
  { cmd: "/vibe-kinetic-type", desc: "Typography IS the design" },
  { cmd: "/vibe-cinematic", desc: "Film-still, A24 energy" },
  { cmd: "/vibe-dense-info", desc: "Bloomberg Terminal meets Monocle" },
  { cmd: "/vibe-organic", desc: "Biomorphic, earthy, gentle" },
  { cmd: "/vibe-retro-digital", desc: "Y2K chrome, pixel fonts" },
  { cmd: "/vibe-maximalist", desc: "Layered chaos, underlying structure" },
  { cmd: "/vibe-motion-showpiece", desc: "Scroll-driven spectacle" },
  { cmd: "/vibe-archive", desc: "Dense catalog, filterable collections" },
  { cmd: "/vibe-tactile", desc: "Hand-drawn, scanned textures, zine energy" },
  { cmd: "/type-editorial", desc: "Magazine authority, high-contrast serifs" },
  { cmd: "/type-display", desc: "Maximum impact at maximum scale" },
  { cmd: "/type-swiss", desc: "Neo-grotesque, Helvetica lineage" },
  { cmd: "/type-condensed", desc: "Tall, narrow, authoritative" },
  { cmd: "/type-mono", desc: "Code aesthetic, terminal energy" },
  { cmd: "/type-warm", desc: "Approachable, organic, craft-adjacent" },
  { cmd: "/type-expressive", desc: "Unconventional, layered, unmissable" },
  { cmd: "/type-variable", desc: "Multi-axis variable fonts" },
  { cmd: "/hero-section", desc: "Scroll-pinned editorial hero" },
  { cmd: "/editorial-layout", desc: "Magazine-style editorial spread" },
  { cmd: "/landing-page", desc: "Full one-page editorial experience" },
  { cmd: "/component-library", desc: "Interaction studies and micro-patterns" },
  { cmd: "/animate-page", desc: "Add scroll triggers and entrance choreography" },
  { cmd: "/remix", desc: "Complete style overhaul from scratch" },
  { cmd: "/anti-slop-audit", desc: "Flag AI slop — banned fonts, lazy gradients" },
];

export default function Commands() {
  return (
    <section id="commands" className="px-6 md:px-12 lg:px-24 py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto">
        <KineticText
          text="COMMANDS"
          tag="h2"
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em] text-fg mb-4"
          splitBy="chars"
          stagger={0.03}
        />

        <RevealOnScroll>
          <p className="font-body max-w-md text-muted text-lg font-light leading-relaxed mb-20 md:mb-28">
            Slash commands for module control and design direction.
          </p>
        </RevealOnScroll>

        {/* Core commands */}
        <RevealOnScroll className="mb-20 md:mb-28">
          <h3 className="font-display text-3xl tracking-wide text-fg mb-8">
            CORE
          </h3>
          <div className="space-y-4">
            {commands.map((c) => (
              <div
                key={c.cmd}
                className="flex items-baseline gap-6 group"
              >
                <code className="font-mono text-sm text-accent shrink-0 w-44">
                  {c.cmd}
                </code>
                <span className="font-body text-sm text-muted group-hover:text-fg transition-colors">
                  {c.desc}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Design commands */}
        <RevealOnScroll>
          <div className="flex items-baseline gap-4 mb-10">
            <h3 className="font-display text-3xl tracking-wide text-fg">
              DESIGN SYSTEM
            </h3>
            <span className="font-mono text-xs text-muted">
              72 skills
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
            {designCommands.map((c) => (
              <div
                key={c.cmd}
                className="flex items-baseline gap-3 group"
              >
                <code className="font-mono text-xs text-ink shrink-0 group-hover:text-accent transition-colors">
                  {c.cmd}
                </code>
                <span className="font-body text-xs text-muted truncate">
                  {c.desc}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
