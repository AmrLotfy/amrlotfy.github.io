const skillGroups: { key: string; items: string[] }[] = [
  { key: "backend", items: ["PHP", "Laravel", "Laravel Livewire", "Node.js", "Inertia.js", "Filament", "Unit Testing"] },
  { key: "ai", items: ["OpenAI", "Anthropic Claude", "OpenRouter", "RAG Systems", "LLM Agents"] },
  { key: "frontend", items: ["React", "Tailwind", "JavaScript"] },
  { key: "database", items: ["MySQL", "Redis"] },
  { key: "automation", items: ["n8n", "WhatsApp Integration", "Telegram Bots"] },
  { key: "other", items: ["Multi-tenant Architecture", "REST APIs", "npm", "Packagist"] },
];

const highlighted = new Set(["PHP", "Laravel", "RAG Systems", "Anthropic Claude"]);

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-10 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span>
          <span>cat skills.json</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.key} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <span className="font-mono text-sm text-muted-foreground w-28 shrink-0">
                "{group.key}":
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`font-mono text-xs px-3 py-1.5 rounded-md border ${
                      highlighted.has(item)
                        ? "border-mint text-mint"
                        : "border-border text-muted-foreground bg-secondary/40"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
