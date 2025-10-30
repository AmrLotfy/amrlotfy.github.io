import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MessageCircle, Download, MapPin, Languages } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "amrlotfy07@gmail.com",
    href: "mailto:amrlotfy07@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+20 100 675 4051",
    href: "https://wa.me/201006754051",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "amr-lotfy-saleh",
    href: "https://www.linkedin.com/in/amr-lotfy-saleh-09438b113/",
    color: "from-primary to-accent"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "amrlotfy",
    href: "https://github.com/amrlotfy",
    color: "from-gray-500 to-gray-700"
  }
];

export const Contact = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Available for freelance projects, full-time opportunities, and technical workshops
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card 
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="font-semibold">6 October, Giza, Egypt</p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Languages className="h-8 w-8 mx-auto mb-3 text-primary" />
            <p className="text-sm text-muted-foreground mb-1">Languages</p>
            <p className="font-semibold">Arabic (Native), English (Good)</p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Download className="h-8 w-8 mx-auto mb-3 text-primary" />
            <p className="text-sm text-muted-foreground mb-1">Download</p>
            <Button 
              variant="link" 
              className="font-semibold p-0 h-auto text-foreground hover:text-primary"
              asChild
            >
              <a href="https://amrlotfy.github.io/Amr-Lotfy-Saleh.pdf" target="_blank" rel="noopener noreferrer">
                View CV (PDF)
              </a>
            </Button>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a complete Laravel application, AI automation workflows, or technical consulting - 
              I'm here to help turn your ideas into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow hover:shadow-glow-lg" asChild>
                <a href="mailto:amrlotfy07@gmail.com">
                  Send an Email
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10" asChild>
                <a href="https://wa.me/201006754051" target="_blank" rel="noopener noreferrer">
                  WhatsApp Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};