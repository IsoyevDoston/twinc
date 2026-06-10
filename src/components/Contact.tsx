"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20" style={{ background: "#1B3A6B" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Phone, title: "Call Us",  value: "(888) 343-9272", sub: "24/7 dispatch · Mon–Fri 7am–7pm",    href: "tel:8883439272" },
            { icon: MapPin, title: "Office",  value: "128 S Tryon St, 19th Fl",   sub: "Charlotte, NC 28202",    href: "https://maps.google.com/?q=128+S+Tryon+St+Charlotte+NC" },
            { icon: Mail,   title: "Email",   value: "info@twinc.com",             sub: "General inquiries",      href: "mailto:info@twinc.com" },
          ].map(({ icon: Icon, title, value, sub, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 rounded-xl p-6 transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.09)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.07)" }}>
                <Icon size={18} style={{ color: "rgba(255,255,255,0.6)" }} />
              </div>
              <div>
                <div className="text-xs font-medium mb-1 uppercase" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>{title}</div>
                <div className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.88)" }}>{value}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
