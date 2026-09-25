"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
      setTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (newTheme === "light") {
      root.classList.add("light");
    }

    if (newTheme === "dark") {
      root.classList.add("dark");
    }

    if (newTheme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      root.classList.add(prefersDark ? "dark" : "light");
    }
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1">
      <button
        type="button"
        onClick={() => applyTheme("light")}
        aria-label="Use light theme"
        className={`rounded-md px-2 py-1 text-sm transition ${
          theme === "light"
            ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
      >
        ☀
      </button>

      <button
        type="button"
        onClick={() => applyTheme("system")}
        aria-label="Use system theme"
        className={`rounded-md px-2 py-1 text-sm transition ${
          theme === "system"
            ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
      >
        ◐
      </button>

      <button
        type="button"
        onClick={() => applyTheme("dark")}
        aria-label="Use dark theme"
        className={`rounded-md px-2 py-1 text-sm transition ${
          theme === "dark"
            ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
      >
        ☾
      </button>
    </div>
  );
}