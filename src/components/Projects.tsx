import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Laravel", "AI & Automation", "Open Source"];

const projects = [
  {
    title: "Conan AI",
    path: "~/conan-ai",
    category: "Open Source",
    tags: ["npm", "ai agent", "node.js", "cli"],
    description: "Open source Node.js CLI framework for building personal AI agents. Connects to OpenAI, Anthropic, or OpenRouter. Remembers you across sessions, searches the web, reads files, and fires reminders. Local-first, no cloud.",
    link: "https://github.com/AmrLotfy/Conan-ai",
    featured: true,
  },
  {
    title: "Appointment Booking SaaS",
    path: "~/appointments-saas",
    category: "Laravel",
    tags: ["laravel", "inertia.js", "react", "multi-tenant"],
    description: "Multi-tenant Laravel 12 + Inertia/React SaaS for government and enterprise appointment booking (Saudi/GCC market). Tenant-isolated booking engine with concurrency-safe slot locking, citizen self-service via phone-OTP, an SMS notification pipeline, staff RBAC, and approval workflows. 100+ automated tests.",
    featured: true,
  },
  {
    title: "Haiah — Company AI Assistant",
    path: "~/haiah",
    category: "AI & Automation",
    tags: ["laravel", "ai", "rag", "company project"],
    description: "Internal AI assistant built with Laravel for company use. Handles intelligent Q&A, automates internal workflows, and integrates with company systems using RAG and LLM APIs.",
    featured: true,
  },
  {
    title: "Laravel Chores",
    path: "~/laravel-chores",
    category: "Open Source",
    tags: ["laravel package", "packagist", "php"],
    description: "Batched, checkpointed, resumable data operations for Laravel — write only the per-record logic. Safely processes millions of records (backfills, normalization, cleanup) with automatic resume after crashes or deploys. Keyset pagination, per-record failure isolation, zero external dependencies (MySQL, PostgreSQL, SQLite).",
    link: "https://github.com/AmrLotfy/laravel-chores",
    featured: true,
  },
  {
    title: "Laravel AI Smart Reply",
    path: "~/laravel-ai-smart-reply",
    category: "Open Source",
    tags: ["ai", "laravel package", "packagist"],
    description: "Published on Packagist — AI-powered multilingual reply generator for CRM & ERP systems using OpenAI and OpenRouter.",
    link: "https://github.com/amrlotfy/laravel-ai-smart-reply",
    featured: true,
  },
  {
    title: "Ticketing Management Platform",
    path: "~/hollat-ticketing",
    category: "Laravel",
    tags: ["laravel", "enterprise", "scalable"],
    description: "Enterprise ticketing system for Hollat.net serving thousands of users, with optimized queries and scalable API architecture.",
    featured: true,
  },
  {
    title: "Telegram Business Card Scanner Bot",
    path: "~/card-scanner-bot",
    category: "AI & Automation",
    tags: ["ai", "automation", "n8n"],
    description: "Extracts information from scanned business cards, saves to Excel, and automatically sends meeting invitations.",
  },
  {
    title: "RAG-based WhatsApp Support System",
    path: "~/whatsapp-rag-support",
    category: "AI & Automation",
    tags: ["ai", "rag", "whatsapp"],
    description: "Retrieval-Augmented Generation system that provides contextual answers to client WhatsApp messages.",
  },
  {
    title: "Multi-tenant SaaS eCommerce Platform",
    path: "~/ecommerce-saas",
    category: "Laravel",
    tags: ["saas", "multi-tenant", "ecommerce"],
    description: "Complete SaaS system for managing online stores with products, orders, and subscription billing.",
  },
  {
    title: "CRM AI Chatbot Assistant",
    path: "~/crm-chatbot",
    category: "AI & Automation",
    tags: ["ai", "crm", "chatbot"],
    description: "Intelligent chatbot integrated with CRM to help agents complete tasks faster and more efficiently.",
  },
  {
    title: "Dorra Group Database & Dashboard",
    path: "~/dorra-dashboard",
    category: "Laravel",
    tags: ["enterprise", "dashboard", "analytics"],
    description: "Enterprise data system for multiple projects and companies with advanced reporting dashboards.",
  },
  {
    title: "AI Job Matching Workflow",
    path: "~/job-matching-ai",
    category: "AI & Automation",
    tags: ["ai", "automation", "matching"],
    description: "Collects job postings, analyzes CVs, ranks matches, and recommends top jobs using AI algorithms.",
  },
  {
    title: "Azura Real Estate CRM",
    path: "~/azura-crm",
    category: "Laravel",
    tags: ["crm", "laravel", "rest api"],
    description: "Custom CRM for lead management with an automated agent rotation system built with Laravel.",
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-8 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span>
          <span>ls ~/projects</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-mono text-xs px-3 py-2 rounded-md border transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.toLowerCase().replace(/ & /g, "-")}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col gap-3 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="font-mono text-xs text-primary">{project.path}</div>
              <h3 className="font-semibold text-base">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2 py-1 rounded bg-secondary/60 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary pt-1"
                >
                  <Github className="h-3.5 w-3.5" />
                  view on github
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
