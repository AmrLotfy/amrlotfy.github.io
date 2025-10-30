import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Laravel", "AI & Automation"];

const projects = [
  {
    title: "Laravel AI Smart Reply",
    category: "Laravel",
    tags: ["Open Source", "AI", "Laravel Package"],
    description: "Published on Packagist - AI-powered multilingual reply generator for CRM & ERP systems using OpenAI and OpenRouter.",
    link: "https://github.com/amrlotfy/laravel-ai-smart-reply",
    featured: true
  },
  {
    title: "Ticketing Management Platform - Hollat.net",
    category: "Laravel",
    tags: ["Laravel", "Enterprise", "Scalable"],
    description: "Enterprise ticketing system serving thousands of users with optimized queries and scalable API architecture.",
    featured: true
  },
  {
    title: "Telegram Business Card Scanner Bot",
    category: "AI & Automation",
    tags: ["AI", "Automation", "n8n"],
    description: "Extracts information from scanned business cards, saves to Excel, and automatically sends meeting invitations.",
  },
  {
    title: "RAG-based WhatsApp Support System",
    category: "AI & Automation",
    tags: ["AI", "RAG", "WhatsApp"],
    description: "Retrieval-Augmented Generation system that provides contextual answers to client WhatsApp messages.",
  },
  {
    title: "Multi-tenant SaaS eCommerce Platform",
    category: "Laravel",
    tags: ["SaaS", "Multi-tenant", "eCommerce"],
    description: "Complete SaaS system for managing online stores with products, orders, and subscription billing.",
  },
  {
    title: "CRM AI Chatbot Assistant",
    category: "AI & Automation",
    tags: ["AI", "CRM", "Chatbot"],
    description: "Intelligent chatbot integrated with CRM to help agents complete tasks faster and more efficiently.",
  },
  {
    title: "Dorra Group Database & Dashboard",
    category: "Laravel",
    tags: ["Enterprise", "Dashboard", "Analytics"],
    description: "Enterprise data system for multiple projects and companies with advanced reporting dashboards.",
  },
  {
    title: "AI Job Matching Workflow",
    category: "AI & Automation",
    tags: ["AI", "Automation", "Matching"],
    description: "Collects job postings, analyzes CVs, ranks matches, and recommends top jobs using AI algorithms.",
  },
  {
    title: "Azura Real Estate CRM",
    category: "Laravel",
    tags: ["CRM", "Laravel", "REST API"],
    description: "Custom CRM for lead management with automated agent rotation system built with Laravel.",
  }
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Backend systems, AI automations, and enterprise solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "shadow-glow" : "border-border hover:border-primary"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className={`group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4 h-full flex flex-col">
                {project.featured && (
                  <Badge className="w-fit bg-primary/20 text-primary border-primary/30">
                    Featured
                  </Badge>
                )}
                
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full bg-secondary/70 text-xs font-medium border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="group/btn text-muted-foreground hover:text-primary hover:bg-accent/50"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};