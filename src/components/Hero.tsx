import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Available for Freelance</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
              Principal Software Engineer
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                PHP/Laravel Developer - AI Automation Expert
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            8+ years of experience building high-performance web applications, APIs, and enterprise dashboards. 
            Specialized in Laravel, AI workflow automations, and scalable backend solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="group shadow-glow hover:shadow-glow-lg transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://amrlotfy.github.io/Amr-Lotfy-Saleh.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://github.com/amrlotfy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/amr-lotfy-saleh-09438b113/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:amrlotfy07@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};