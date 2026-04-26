"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore storage failure
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink hover:border-ink/40 transition-colors"
    >
      {/* Render both icons but only show the one matching state to avoid hydration flicker */}
      <Sun
        size={16}
        className={theme === "dark" ? "block" : "hidden"}
        aria-hidden
      />
      <Moon
        size={16}
        className={theme === "dark" ? "hidden" : "block"}
        aria-hidden
      />
    </button>
  );
}
