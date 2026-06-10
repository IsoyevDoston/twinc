"use client";

const trucks = [
  {
    brand: "Volvo VNL",
    series: "760 / 860",
    type: "Long-Haul OTR",
    accent: "#1B3A6B",
    desc: "The Volvo VNL is our primary OTR power unit. Built for the long haul — superior driver comfort, I-Shift automated transmission, and outstanding fuel economy on every interstate mile.",
    specs: [
      ["Engine",    "D13 Volvo"],
      ["Trans.",    "Automated I-Shift"],
      ["Safety",    "Collision Mitigation"],
      ["ELD",       "FMCSA Compliant"],
    ],
  },
  {
    brand: "Freightliner",
    series: "Cascadia",
    type: "OTR & Regional",
    accent: "#0F2449",
    desc: "America's best-selling Class 8 truck. The Cascadia's aerodynamic cab and Detroit engine deliver outstanding uptime and efficiency. Conventional cab, long-hood — built in the USA.",
    specs: [
      ["Engine",    "Detroit DD15"],
      ["Trans.",    "DT12 Automated"],
      ["Safety",    "Detroit Assurance 5.0"],
      ["ELD",       "FMCSA Compliant"],
    ],
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="label mb-3">Our Fleet</div>
            <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--navy-900)" }}>
              Volvo & Freightliner
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Late-model conventional cab Class 8 trucks. Well-maintained, ELD compliant, driven by professionals.
          </p>
        </div>

        {/* Truck cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {trucks.map((t) => (
            <div
              key={t.brand}
              className="rounded-2xl overflow-hidden card-md"
              style={{ border: "1px solid var(--border-light)" }}
            >
              {/* Branded header */}
              <div
                className="relative flex flex-col justify-end px-8 py-8 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${t.accent} 0%, #234880 100%)`,
                  minHeight: "180px",
                }}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Ghost brand name */}
                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-black select-none"
                  style={{ fontSize: "5rem", color: "rgba(255,255,255,0.07)", lineHeight: 1, letterSpacing: "-0.02em" }}
                  aria-hidden
                >
                  {t.brand.split(" ")[0].toUpperCase()}
                </div>

                <div className="relative z-10">
                  <div className="text-xs font-semibold uppercase mb-1 tracking-wider" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em" }}>
                    {t.type}
                  </div>
                  <div className="font-display font-bold" style={{ fontSize: "1.75rem", color: "#fff", lineHeight: 1.1 }}>
                    {t.brand}
                  </div>
                  <div className="text-sm mt-1 font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {t.series} Series
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-7">
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                  {t.desc}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {t.specs.map(([k, v]) => (
                    <div key={k} className="rounded-lg px-4 py-3" style={{ background: "var(--surface)" }}>
                      <div className="text-xs font-medium mb-0.5 uppercase" style={{ color: "var(--text-faint)", letterSpacing: "0.07em" }}>{k}</div>
                      <div className="text-sm font-semibold" style={{ color: "var(--navy-800)" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-4"
          style={{ background: "var(--navy-900)" }}
        >
          {[
            { n: "Class 8",  l: "Conventional Cab" },
            { n: "53′",      l: "Dry Van Trailers" },
            { n: "100%",     l: "ELD Compliant" },
            { n: "48",       l: "State Authority" },
          ].map(({ n, l }, i) => (
            <div
              key={l}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none", borderTop: "none" }}
            >
              <div className="font-display font-bold text-3xl mb-1" style={{ color: "#fff" }}>{n}</div>
              <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
