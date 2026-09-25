"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-lg font-semibold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          AMZOLELE JOLINGANA.
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm transition-colors ${
                index === 0
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop theme */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-surface"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border py-4 text-sm last:border-b-0"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}