import { useEffect, useState } from "react";

type Line =
  | { kind: "prompt"; text: string }
  | { kind: "field"; key: string; value: string; big?: boolean; mint?: boolean };

const lines: Line[] = [
  { kind: "prompt", text: "$ whoami" },
  { kind: "field", key: "name", value: "Amr Lotfy Saleh", big: true },
  { kind: "field", key: "role", value: "Principal Software Engineer" },
  { kind: "field", key: "stack", value: "Laravel · AI Agents · Multi-tenant SaaS" },
  { kind: "field", key: "based", value: "Giza, Egypt" },
  { kind: "field", key: "status", value: "available for freelance", mint: true },
];

export const Hero = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisibleCount(lines.length);
      setDone(true);
      return;
    }
    let i = 0;
    const step = () => {
      i += 1;
      setVisibleCount(i);
      if (i < lines.length) {
        setTimeout(step, i === 1 ? 260 : 180);
      } else {
        setDone(true);
      }
    };
    const t = setTimeout(step, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="pt-16 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-lg border border-border bg-card overflow-hidden shadow-glow-lg">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">amr@systems — zsh</span>
          </div>
          <div className="px-6 py-8 sm:px-8 sm:py-9 font-mono text-sm leading-loose min-h-[260px]">
            {lines.slice(0, visibleCount).map((line, i) =>
              line.kind === "prompt" ? (
                <div key={i} className="text-muted-foreground">
                  {line.text}
                </div>
              ) : (
                <div key={i}>
                  <span className="text-muted-foreground">&gt; {line.key}</span>
                  {"  "}
                  {line.big ? (
                    <span className="block font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-1 mb-2 text-balance">
                      {line.value}
                    </span>
                  ) : (
                    <span className={line.mint ? "text-mint" : "text-foreground"}>{line.value}</span>
                  )}
                </div>
              )
            )}
            {done && (
              <div>
                $ <span className="inline-block w-2 h-4 bg-primary align-middle animate-blink" />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href="#work"
            className="font-mono text-sm px-4 py-2.5 rounded-md bg-primary text-primary-foreground"
          >
            view-work <span className="opacity-75">→</span>
          </a>
          <a
            href="https://amrlotfy.github.io/Amr-Lotfy-Saleh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-4 py-2.5 rounded-md border border-border text-foreground"
          >
            download-cv <span className="text-muted-foreground">--pdf</span>
          </a>
        </div>
      </div>
    </section>
  );
};
