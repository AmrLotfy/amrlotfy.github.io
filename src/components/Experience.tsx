const timeline = [
  {
    period: "Oct 2025 — present",
    role: "Principal Software Engineer",
    org: "Hollat",
    description: "Leading architecture and technical direction for enterprise platforms. Designed and built Haiah, an internal AI assistant.",
  },
  {
    period: "Jan 2021 — Sep 2025",
    role: "Senior PHP (Laravel) Developer",
    org: "Hollat",
    description: "Ticketing platform at enterprise scale; delivered for SamaCares, MOT, MEWA, KKESH.",
  },
  {
    period: "Jan 2019 — Jan 2021",
    role: "PHP (Laravel) Developer",
    org: "PiTechnologies",
    description: "Designed dashboards and REST APIs; improved code reusability through modular architecture.",
  },
  {
    period: "Feb 2019 — Mar 2021",
    role: "Outsource Web Developer",
    org: "Seamlabs",
    description: "Created custom dashboards and integrated payment gateways for eCommerce clients.",
  },
  {
    period: "Jan 2019 — Jan 2020",
    role: "PHP Developer",
    org: "Sahwaco",
    description: "Maintained and enhanced the company's real estate management platform.",
  },
  {
    period: "Jul 2017 — Jan 2019",
    role: "PHP Developer",
    org: "Smart Touch Solution (STS)",
    description: "Developed eCommerce, portfolio, and company websites using PHP, Laravel, and WordPress.",
  },
];

const education = {
  period: "2014 — 2018",
  role: "Bachelor of Computer Science",
  org: "October 6 University",
  description: "Graduated with Excellent grade in the graduation project.",
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-10 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span>
          <span>cat experience[].log</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="border-l border-border flex flex-col gap-8 pl-7">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-primary" />
              <div className="font-mono text-xs text-primary mb-1.5">{item.period}</div>
              <h3 className="font-semibold text-base mb-1">
                {item.role} <span className="font-normal text-muted-foreground">· {item.org}</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{item.description}</p>
            </div>
          ))}

          <div className="relative">
            <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-mint" />
            <div className="font-mono text-xs text-mint mb-1.5">{education.period}</div>
            <h3 className="font-semibold text-base mb-1">
              {education.role} <span className="font-normal text-muted-foreground">· {education.org}</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{education.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
