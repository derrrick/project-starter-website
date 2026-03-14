"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface KineticTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "chars" | "words";
  stagger?: number;
  delay?: number;
  scrub?: boolean;
}

export default function KineticText({
  text,
  className = "",
  tag: Tag = "h2",
  splitBy = "chars",
  stagger = 0.02,
  delay = 0,
  scrub = false,
}: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const units =
      splitBy === "chars"
        ? text.split("").map((char) => (char === " " ? "\u00A0" : char))
        : text.split(" ");

    el.innerHTML = "";
    const spans = units.map((unit) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.overflow = "hidden";

      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.textContent = splitBy === "words" ? unit + "\u00A0" : unit;
      inner.style.transform = "translateY(110%)";

      span.appendChild(inner);
      el.appendChild(span);
      return inner;
    });

    const tl = gsap.timeline({
      scrollTrigger: scrub
        ? {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          }
        : {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
      delay,
    });

    tl.to(spans, {
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [text, splitBy, stagger, delay, scrub]);

  return <Tag ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className} />;
}
