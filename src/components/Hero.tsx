"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function splitChars(el: HTMLElement) {
  const text = el.textContent || "";
  el.textContent = "";
  return text.split("").map((char) => {
    const outer = document.createElement("span");
    outer.style.display = "inline-block";
    outer.style.overflow = "hidden";
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.textContent = char === " " ? "\u00A0" : char;
    inner.style.transform = "translateY(115%)";
    outer.appendChild(inner);
    el.appendChild(outer);
    return inner;
  });
}

const REPO = "https://github.com/derrrick/project-starter";

export default function Hero() {
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    const chars1 = splitChars(line1Ref.current!);
    const chars2 = splitChars(line2Ref.current!);

    tl.to(chars1, {
      y: 0,
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.035,
    })
      .to(
        chars2,
        {
          y: 0,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.035,
        },
        "-=0.5"
      )
      .from(
        tagRef.current,
        { opacity: 0, y: 16, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      )
      .from(
        descRef.current,
        { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .from(
        ctaRef.current,
        { opacity: 0, y: 14, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-end pb-24 md:pb-32 pt-32">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full">
        {/* Kinetic display type */}
        <div className="mb-16 md:mb-24">
          <h1
            ref={line1Ref}
            className="font-display text-[clamp(5rem,15vw,14rem)] leading-[0.85] tracking-[-0.02em] text-fg"
          >
            PROJECT
          </h1>
          <h1
            ref={line2Ref}
            className="font-display text-[clamp(5rem,15vw,14rem)] leading-[0.85] tracking-[-0.02em] text-accent"
          >
            STARTER
          </h1>
        </div>

        {/* Asymmetric info block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="md:max-w-md">
            <p
              ref={tagRef}
              className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-5"
            >
              Solo-founder bootstrap framework
            </p>
            <p
              ref={descRef}
              className="font-body text-lg md:text-xl font-light leading-relaxed text-fg/65"
            >
              Run one command. Answer 10 questions about your idea. Wake up
              to a fully built SaaS &mdash; landing page, auth, payments,
              database, design system, and 4 AI agents that market, analyze,
              sell, and research for you. Automatically.
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-col gap-3 shrink-0">
            <div className="inline-flex items-center gap-3 bg-surface px-5 py-3">
              <span className="text-accent font-mono text-sm">$</span>
              <code className="font-mono text-sm text-fg">
                ./new.sh my-project --ide claude --yolo
              </code>
            </div>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-fg text-bg px-6 py-3.5 font-mono text-sm hover:bg-accent transition-colors"
            >
              View on GitHub &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
