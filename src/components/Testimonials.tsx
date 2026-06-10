"use client";

const testimonials = [
  {
    quote: "TW INC is one of our most reliable carriers on Southeast lanes. Picks up on time, communicates well, and the paperwork is always clean.",
    name: "Derek Hollis",
    role: "Freight Broker",
    company: "Meridian Transport Solutions",
  },
  {
    quote: "I've been driving for TW INC for over a year. Brand new Volvo, dispatch picks up the phone, and the miles are consistent. I'm not looking anywhere else.",
    name: "Marcus J.",
    role: "OTR Driver",
    company: "TW INC Fleet",
  },
  {
    quote: "After two no-shows from another carrier on our Chicago-to-Charlotte lane, we moved to TW INC. They've covered every single load since.",
    name: "Sandra Lee",
    role: "Logistics Coordinator",
    company: "National Retail Distributors",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2
            className="font-display font-bold mb-2"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.75rem)", color: "var(--navy-900)" }}
          >
            Trusted by Brokers &amp; Drivers
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Real feedback from the people we work with every week.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-8 flex flex-col gap-6"
              style={{ background: "#fff", border: "1px solid var(--border-light)" }}
            >
              <blockquote
                className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--navy-800)", fontStyle: "italic" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid var(--border-light)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: "var(--navy-800)", color: "#fff" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--navy-900)" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
