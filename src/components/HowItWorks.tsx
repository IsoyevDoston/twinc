"use client";

const steps = [
  { n: "01", title: "Submit Load or Apply",     desc: "Brokers fill out the quote form. Drivers send an application. Takes 2 minutes either way." },
  { n: "02", title: "Quick Response",            desc: "Our team replies with a rate or connects you to recruiting within 2 business hours." },
  { n: "03", title: "Confirmation & Docs",       desc: "Rate conf, COI, and driver assignment issued same day. FMCSA-compliant every time." },
  { n: "04", title: "Pickup & Transit",          desc: "On-site at the pickup window. ELD tracking active. 24/7 dispatch for in-transit updates." },
  { n: "05", title: "Delivery & Invoicing",      desc: "Delivered on time. BOL and POD sent at drop. Clean invoicing, no missing paperwork." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: "var(--navy-900)" }} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", color: "#fff", lineHeight: 1.05 }}
          >
            How We Move
            <br />
            <span style={{ color: "var(--orange)" }}>Your Freight</span>
          </h2>
          <p className="text-sm max-w-xs" style={{ color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
            From first contact to final delivery — five straightforward steps,
            no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px" style={{ background: "rgba(255,255,255,0.07)" }}>
          {steps.map((s) => (
            <div key={s.n} className="p-7 flex flex-col gap-4" style={{ background: "var(--navy-900)" }}>
              <div
                className="text-xs font-bold"
                style={{ color: "var(--orange)", letterSpacing: "0.08em" }}
              >
                {s.n}
              </div>
              <div
                className="font-display font-bold text-base leading-snug"
                style={{ color: "#fff" }}
              >
                {s.title}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="#brokers"
            className="btn-orange"
            style={{ fontSize: "0.875rem" }}
          >
            Request a Rate
          </a>
          <a
            href="tel:8883439272"
            className="text-sm font-semibold transition-colors"
            style={{ color: "rgba(255,255,255,0.45)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")}
          >
            (888) 343-9272
          </a>
        </div>
      </div>
    </section>
  );
}
