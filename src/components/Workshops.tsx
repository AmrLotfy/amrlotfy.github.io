import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Presentation, Users, Clock } from "lucide-react";

const workshops = [
  {
    title: "n8n for Beginners",
    duration: "3 hours",
    description: "Hands-on workshop introducing n8n concepts, building automations, and integrating AI agents. Perfect for developers looking to streamline workflows.",
    topics: ["Workflow Basics", "AI Agent Integration", "Real-world Automation", "Best Practices"]
  },
  {
    title: "AI & Automation Practical Sessions",
    duration: "Multiple Sessions",
    description: "Practical labs and demo workflows demonstrating job automation, RAG systems, and WhatsApp integrations for business processes.",
    topics: ["RAG Implementation", "Job Matching Systems", "WhatsApp Automation", "CRM Integration"]
  },
  {
    title: "Laravel Advanced Techniques",
    duration: "Full Day",
    description: "Deep dive into Laravel best practices, performance optimization, and advanced features for enterprise applications.",
    topics: ["Performance Tuning", "Queue Systems", "API Development", "Testing Strategies"]
  }
];

export const Workshops = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Presentation className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Workshops & Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Instructor for practical workshops on automation, AI, and Laravel development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4 h-full flex flex-col">
                <div>
                  <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                    <Clock className="h-3 w-3 mr-1" />
                    {workshop.duration}
                  </Badge>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {workshop.description}
                  </p>
                </div>

                <div className="flex-grow" />

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Key Topics:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.map((topic, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 rounded-md bg-secondary/70 text-xs border border-border"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground mb-6">
            Interested in booking a workshop or training session for your team?
          </p>
          <a 
            href="mailto:amrlotfy07@gmail.com?subject=Workshop Inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary transition-all duration-300 font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};