const workshops = [
  {
    title: "n8n for Beginners",
    duration: "3 hours",
    description: "Hands-on workshop introducing n8n concepts, building automations, and integrating AI agents. Perfect for developers looking to streamline workflows.",
    topics: ["Workflow Basics", "AI Agent Integration", "Real-world Automation", "Best Practices"],
  },
  {
    title: "AI & Automation Practical Sessions",
    duration: "Multiple sessions",
    description: "Practical labs and demo workflows demonstrating job automation, RAG systems, and WhatsApp integrations for business processes.",
    topics: ["RAG Implementation", "Job Matching Systems", "WhatsApp Automation", "CRM Integration"],
  },
  {
    title: "Laravel Advanced Techniques",
    duration: "Full day",
    description: "Deep dive into Laravel best practices, performance optimization, and advanced features for enterprise applications.",
    topics: ["Performance Tuning", "Queue Systems", "API Development", "Testing Strategies"],
  },
];

export const Workshops = () => {
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span>
          <span>ls ~/workshops</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              className="flex flex-col gap-3 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <span className="font-mono text-xs text-primary w-fit px-2 py-1 rounded bg-primary/10">
                {workshop.duration}
              </span>
              <h3 className="font-semibold text-base">{workshop.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{workshop.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                {workshop.topics.map((topic) => (
                  <span
                    key={topic}
                    className="font-mono text-[11px] px-2 py-1 rounded bg-secondary/60 text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Interested in booking a workshop or training session for your team?
          </p>
          <a
            href="mailto:amrlotfy07@gmail.com?subject=Workshop Inquiry"
            className="font-mono text-sm px-4 py-2.5 rounded-md border border-border text-foreground hover:border-primary transition-colors"
          >
            get-in-touch
          </a>
        </div>
      </div>
    </section>
  );
};
