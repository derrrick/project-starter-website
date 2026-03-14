"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Phases", href: "#phases" },
  { label: "Modules", href: "#modules" },
  { label: "Commands", href: "#commands" },
  { label: "Agents", href: "#agents" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md" : ""
      }`}
    >
      <a
        href="#"
        className="font-display text-2xl tracking-wide text-fg hover:text-accent transition-colors"
      >
        PROJECT-STARTER
      </a>
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-fg transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://github.com/derrrick/project-starter"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-[0.15em] uppercase text-accent hover:text-fg transition-colors"
        >
          GitHub &rarr;
        </a>
      </div>
    </nav>
  );
}
