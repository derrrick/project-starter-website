const REPO = "https://github.com/derrrick/project-starter";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-2xl tracking-wide text-fg hover:text-accent transition-colors"
          >
            PROJECT-STARTER
          </a>
          <p className="text-sm text-muted mt-1">
            The boilerplate that asks questions first.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`${REPO}/blob/master/README.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-accent transition-colors"
          >
            Docs
          </a>
          <a
            href={`${REPO}/tree/master/modules`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-accent transition-colors"
          >
            Modules
          </a>
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-accent transition-colors"
          >
            GitHub &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
