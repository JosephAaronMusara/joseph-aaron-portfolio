"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-40 backdrop-blur-md transition-colors",
        scrolled ? "bg-paper/85 border-b border-line" : "bg-paper/60 border-b border-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tightish text-ink"
          aria-label={`${site.name} — home`}
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-base">Joseph</span>
          <span className="text-muted"> · {site.role}</span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-7 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted hover:text-ink link-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <nav className="container-page py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 text-base text-ink hover:bg-line/60"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
