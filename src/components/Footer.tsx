export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <span>amr lotfy saleh — principal software engineer</span>
        <span>© {currentYear}</span>
      </div>
    </footer>
  );
};
