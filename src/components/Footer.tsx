import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Amr Lotfy
            </h3>
            <p className="text-sm text-muted-foreground">
                Principal Software Engineer PHP/Laravel Developer & AI Automation Expert
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/amrlotfy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/amr-lotfy-saleh-09438b113/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="mailto:amrlotfy07@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a 
              href="https://wa.me/201006754051" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Amr Lotfy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};