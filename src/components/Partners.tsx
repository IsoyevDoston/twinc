"use client";

const partners = [
  { name: "C.H. Robinson",     domain: "chrobinson.com",       color: "#00AEC7" },
  { name: "Echo Global",        domain: "echofreight.com",      color: "#F47920" },
  { name: "Coyote Logistics",   domain: "coyotelogistics.com",  color: "#003087" },
  { name: "TQL",                domain: "tql.com",              color: "#CC0000" },
  { name: "XPO Logistics",      domain: "xpo.com",              color: "#FF0000" },
  { name: "Uber Freight",       domain: "uberfreight.com",      color: "#000000" },
  { name: "Arrive Logistics",   domain: "arrive.com",           color: "#FF5722" },
  { name: "Redwood Logistics",  domain: "redwoodlogistics.com", color: "#5C3B1E" },
  { name: "Worldwide Express",  domain: "wwex.com",             color: "#0033A0" },
  { name: "MoLo Solutions",     domain: "molo.com",             color: "#1A1A2E" },
  { name: "GlobalTranz",        domain: "globaltranz.com",      color: "#004990" },
  { name: "Nolan Transportation", domain: "ntgfreight.com",     color: "#003366" },
];

/* Favicon via Google's S2 service — reliable for any major domain */
const logoUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export default function Partners() {
  return (
    <section className="py-14 overflow-hidden" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p
          className="text-xs font-bold uppercase mb-2"
          style={{ color: "var(--text-faint)", letterSpacing: "0.12em" }}
        >
          Our Partners
        </p>
        <h2
          className="font-display font-bold"
          style={{ fontSize: "1.75rem", color: "var(--navy-900)" }}
        >
          Trusted by Leading Brokerages
        </h2>
      </div>

      {/* Scrolling logo strip */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-24 pointer-events-none"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 z-10 w-24 pointer-events-none"
          style={{ background: "linear-gradient(to left, #fff, transparent)" }}
        />

        <div className="flex overflow-hidden">
          {[0, 1].map((pass) => (
            <div
              key={pass}
              className="flex gap-5 flex-shrink-0 items-center"
              style={{
                animation: "partners-scroll 40s linear infinite",
                paddingRight: "1.25rem",
              }}
            >
              {partners.map((p) => (
                <div
                  key={`${pass}-${p.domain}`}
                  className="flex-shrink-0 flex items-center gap-3 rounded-xl px-5 py-3.5"
                  style={{
                    background: "#fff",
                    border: "1.5px solid var(--border-light)",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                    minWidth: 170,
                    height: 64,
                  }}
                >
                  {/* Favicon from Google S2 — reliable for all major companies */}
                  <img
                    src={logoUrl(p.domain)}
                    alt={p.name}
                    width={36}
                    height={36}
                    className="flex-shrink-0 rounded-md object-contain"
                    style={{ background: "#f8f8f8", padding: 2 }}
                    onError={(e) => {
                      /* Fall back to a colored initial badge */
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const badge = el.nextSibling as HTMLElement;
                      if (badge) badge.style.display = "flex";
                    }}
                  />
                  {/* Fallback initial badge (hidden by default) */}
                  <div
                    className="flex-shrink-0 rounded-md items-center justify-center text-white font-bold text-base"
                    style={{
                      display: "none",
                      width: 36,
                      height: 36,
                      background: p.color,
                    }}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <span
                    className="text-sm font-semibold whitespace-nowrap"
                    style={{ color: "var(--navy-900)" }}
                  >
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partners-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
