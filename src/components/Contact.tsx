const links = [
  { label: "amrlotfy07@gmail.com", href: "mailto:amrlotfy07@gmail.com" },
  { label: "whatsapp", href: "https://wa.me/201006754051" },
  { label: "github.com/amrlotfy", href: "https://github.com/amrlotfy" },
  { label: "linkedin", href: "https://www.linkedin.com/in/amr-lotfy-saleh-09438b113/" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-8 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span>
          <span>cat contact.json</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <p className="text-sm text-muted-foreground mb-8">
          Based in Giza, Egypt · Arabic (native) · English (good) · available for freelance and full-time
          work
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border-b border-border hover:border-primary hover:text-primary transition-colors pb-0.5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:amrlotfy07@gmail.com"
            className="font-mono text-sm px-4 py-2.5 rounded-md bg-primary text-primary-foreground"
          >
            send-email
          </a>
          <a
            href="https://wa.me/201006754051"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-4 py-2.5 rounded-md border border-border text-foreground hover:border-primary transition-colors"
          >
            whatsapp-me
          </a>
          <a
            href="https://amrlotfy.github.io/Amr-Lotfy-Saleh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-4 py-2.5 rounded-md border border-border text-foreground hover:border-primary transition-colors"
          >
            download-cv <span className="text-muted-foreground">--pdf</span>
          </a>
        </div>
      </div>
    </section>
  );
};
