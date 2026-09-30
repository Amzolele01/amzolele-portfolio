const footerNavigation = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#home"
              className="font-mono text-lg font-semibold tracking-tight"
            >
              AMZOLELE.
            </a>

            <p className="mt-2 text-sm text-muted">
              Software Developer & Technology Builder.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3"
            aria-label="Footer navigation"
          >
            {footerNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} AMZOLELE. All rights reserved.
          </p>

          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}