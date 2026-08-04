const links = [
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export const Nav = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <div className="container mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 font-mono text-sm">
        <a href="#" className="text-muted-foreground">
          <span className="text-foreground font-medium">amr</span>@systems
          <span className="opacity-50">:~$</span>
        </a>
        <nav className="flex items-center flex-wrap justify-center gap-x-5 gap-y-1 text-muted-foreground">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
