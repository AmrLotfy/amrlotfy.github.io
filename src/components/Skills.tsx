import { Card } from "@/components/ui/card";
import { Code2, Database, Workflow, Zap, Globe, TestTube } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Laravel & PHP",
    description: "Expert in building scalable backend systems, RESTful APIs, and enterprise applications",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    description: "Advanced workflow automation, AI agent integration, and business process optimization",
    color: "from-primary to-accent"
  },
  {
    icon: Database,
    title: "Database Design",
    description: "MySQL optimization, complex queries, database architecture, and performance tuning",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Third-party APIs, webhook systems, microservices architecture, and data synchronization",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Globe,
    title: "eCommerce & SaaS",
    description: "Multi-tenant platforms, payment gateways, subscription billing, and inventory management",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TestTube,
    title: "Unit Testing",
    description: "PHPUnit, test-driven development, quality assurance, and continuous integration",
    color: "from-purple-500 to-pink-500"
  }
];

export const Skills = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized skills in backend development, automation, and enterprise solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {['Livewire', 'MySQL', 'Redis', 'REST APIs', 'OpenAI', 'OpenRouter', 'Telegram Bots', 'WhatsApp Integration', 'Power BI'].map((tag, index) => (
            <span 
              key={index}
              className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-medium hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};