"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Services",      href: "#services" },
  { label: "Our Fleet",     href: "#fleet" },
  { label: "For Brokers",   href: "#brokers" },
  { label: "Drive With Us", href: "#drivers" },
  { label: "Contact",       href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-light)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px rgba(13,31,60,0.06)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <Image src="/logo.png" alt="TW INC" width={110} height={40} className="object-contain" priority />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: scrolled ? "var(--text-body)" : "rgba(255,255,255,0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? "var(--navy-800)" : "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? "var(--text-body)" : "rgba(255,255,255,0.8)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:8883439272"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.7)" }}
          >
            <Phone size={14} />
            (888) 343-9272
          </a>
          <a href="#brokers" className="btn-orange" style={{ padding: "9px 20px" }}>Get a Quote</a>
        </div>

        {/* Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: scrolled ? "var(--navy-800)" : "#fff" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t" style={{ background: "#fff", borderColor: "var(--border-light)" }}>
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                {l.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t" style={{ borderColor: "var(--border-light)" }}>
              <a href="#drivers" onClick={() => setOpen(false)} className="btn-outline-navy justify-center">Apply to Drive</a>
              <a href="#brokers" onClick={() => setOpen(false)} className="btn-orange justify-center">Get a Quote</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
