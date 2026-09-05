export const Summary = () => {
  return (
    <section className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-5 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span>
          <span>cat summary.md</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
          <span className="text-foreground font-semibold">Principal Software Engineer</span> and{" "}
          <span className="text-foreground font-semibold">AI systems builder</span> with 8+ years shipping
          high-performance web apps, APIs, and enterprise dashboards (PHP/Laravel). Author of open-source AI
          tooling on npm and Packagist — currently building a CRM, a multi-tenant SaaS booking platform, and
          an internal agentic assistant at Hollat.
        </p>
      </div>
    </section>
  );
};
