"use client";

const cols = [
  { title: "Services", links: [
    { label: "53′ Dry Van",      href: "#services" },
    { label: "Cargo Van",        href: "#services" },
    { label: "Power Only",       href: "#services" },
    { label: "Dedicated Lanes",  href: "#services" },
    { label: "OTR & Regional",   href: "#services" },
  ]},
  { title: "Company", links: [
    { label: "About Us",         href: "#about" },
    { label: "Our Fleet",        href: "#fleet" },
    { label: "Drive With Us",    href: "#drivers" },
    { label: "Contact Us",       href: "/contact" },
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "FMCSA Lookup",     href: "https://safer.fmcsa.dot.gov/query.asp?query_type=queryCarrierSnapshot&query_param=USDOT&query_string=3860157" },
  ]},
  { title: "Drivers", links: [
    { label: "Apply to Drive",   href: "#drivers" },
    { label: "Benefits",         href: "#drivers" },
    { label: "Requirements",     href: "#drivers" },
    { label: "Call Recruiting",  href: "tel:8883439272" },
  ]},
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-900)" }}>
      {/* CTA strip */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="font-display font-bold mb-1"
              style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", color: "#fff" }}
            >
              Ready to Join Our Team?
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              CDL-A drivers — OTR and regional positions open now.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href="#drivers" className="btn-orange">Apply to Drive</a>
            <a
              href="tel:8883439272"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold border transition-all"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              (888) 343-9272
            </a>
          </div>
        </div>
      </div>

      {/* Main links */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            {/* Text logo — avoids white-box PNG issue */}
            <div
              className="font-display font-black mb-1"
              style={{ fontSize: "1.75rem", color: "#fff", letterSpacing: "-0.01em", lineHeight: 1 }}
            >
              TW INC
            </div>
            <div
              className="mb-5"
              style={{ width: 40, height: 2, background: "var(--orange)", marginTop: 6 }}
            />
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
              Licensed US OTR carrier.
              <br />Volvo &amp; Freightliner fleet.
            </p>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              DOT: 3860157 · MC: 1409884
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div
                className="text-xs font-bold uppercase mb-4"
                style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}
              >
                {c.title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Large brand watermark — numeo.ai style: big, visible */}
      <div className="overflow-hidden" aria-hidden>
        <div
          className="font-display font-black text-center select-none"
          style={{
            fontSize: "clamp(7rem, 24vw, 22rem)",
            lineHeight: 0.82,
            letterSpacing: "-0.02em",
            color: "rgba(255,255,255,0.10)",
          }}
        >
          TW INC
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2024 TW INC · 128 S Tryon St, 19th Floor, Charlotte, NC 28202
          </span>
          <div className="flex gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.2)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.2)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
