import { Building2, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Principal Software Engineer",
    organization: "Enterprise Platforms",
    period: "2022 - Present",
    description: "Leading architecture and technical direction for enterprise platforms. Managing cross-functional teams and driving technical innovation.",
    highlights: [
      "Led architecture for multi-tenant SaaS platforms",
      "Implemented AI-powered automation workflows",
      "Mentored development teams and conducted code reviews"
    ]
  },
  {
    type: "work",
    title: "Senior PHP (Laravel) Developer",
    organization: "Various Clients",
    period: "2018 - 2022",
    description: "Developed large-scale ticketing systems, dashboards, and integrated n8n automations for enterprise clients.",
    highlights: [
      "Built Hollat.net ticketing platform serving 1000+ users",
      "Integrated AI chatbots with CRM systems",
      "Worked with SamaCares, MOT, MEWA, KKESH (KSA)"
    ]
  },
  {
    type: "work",
    title: "PHP Developer",
    organization: "eCommerce & Startups",
    period: "2016 - 2018",
    description: "Built eCommerce platforms, real estate CRMs, and custom dashboards for various industries.",
    highlights: [
      "Developed multiple Laravel-based online stores",
      "Created custom CRM for real estate lead management",
      "Implemented REST APIs and third-party integrations"
    ]
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "October 6 University",
    period: "2014 - 2018",
    description: "Graduated with Excellent grade. Focused on software engineering, algorithms, and database systems.",
  }
];

export const Experience = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground">
            8+ years journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-8 animate-fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary shadow-glow z-10" />

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="ml-20 md:ml-0 md:w-1/2">
                  <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${
                        item.type === 'work' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-accent/20 text-accent'
                      }`}>
                        {item.type === 'work' ? <Building2 className="h-5 w-5" /> : <GraduationCap className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {item.organization}
                        </p>
                        <p className="text-sm text-primary/80 mt-1">
                          {item.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {item.highlights && (
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};