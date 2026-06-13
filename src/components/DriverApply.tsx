"use client";

import { useState } from "react";
import { ArrowRight, DollarSign, MapPin, Star, Clock } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Competitive Pay",  desc: "CPM or percentage. Weekly direct deposit. Performance bonuses." },
  { icon: MapPin,     title: "OTR & Regional",   desc: "Home time options. Long-haul and regional lanes available." },
  { icon: Star,       title: "Modern Equipment", desc: "Late-model Volvo VNL 860 and Freightliner Cascadia. No old iron." },
  { icon: Clock,      title: "Consistent Miles", desc: "We keep drivers loaded. Strong broker relationships mean you move." },
];

const testimonials = [
  {
    quote: "TW INC is one of our most reliable carriers on Southeast lanes. Picks up on time, communicates well, and the paperwork is always clean. That's rare.",
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
    quote: "After two no-shows from another carrier on our Chicago-to-Charlotte lane, we moved to TW INC. They've covered every single load since. Solid people.",
    name: "Sandra Lee",
    role: "Logistics Coordinator",
    company: "National Retail Distributors",
  },
];

export default function DriverApply() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    cdlClass: "", experience: "", endorsements: "", violations: "", message: "",
    smsConsent: false,
  });
  const hc = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  return (
    <div id="drivers">
      {/* 1 — Hero truck photos */}
      <section className="relative overflow-hidden" style={{ background: "var(--navy-900)" }}>
        <div className="grid md:grid-cols-2 h-[65vh] min-h-[420px]">
          {/* Left photo — Volvo VNL on the road */}
          <div className="relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/27099095/pexels-photo-27099095.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Volvo VNL on the highway"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent 50%, rgba(13,31,60,0.7) 100%)" }}
            />
            <div
              className="absolute bottom-5 left-5 rounded-lg px-3 py-1.5 text-xs font-semibold"
              style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
            >
              Volvo VNL 860
            </div>
          </div>
          {/* Right photo — Freightliner Cascadia */}
          <div className="relative overflow-hidden hidden md:block">
            <img
              src="https://images.pexels.com/photos/11087837/pexels-photo-11087837.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Freightliner Cascadia on the highway"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to left, transparent 50%, rgba(13,31,60,0.7) 100%)" }}
            />
            <div
              className="absolute bottom-5 right-5 rounded-lg px-3 py-1.5 text-xs font-semibold"
              style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
            >
              Freightliner Cascadia
            </div>
          </div>
          {/* Center overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <p className="text-xs font-bold uppercase mb-3" style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em" }}>
              Now Hiring · CDL-A Drivers
            </p>
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem,5vw,3.75rem)", lineHeight: 1.05 }}
            >
              Drive With
              <br />
              <span style={{ color: "var(--orange)" }}>TW INC</span>
            </h2>
            <p className="text-base max-w-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              OTR and regional positions open. Modern fleet.
              Consistent miles. Dispatch that answers.
            </p>
            <a
              href="#apply-form"
              className="btn-orange"
            >
              Apply Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 2 — Benefits */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h3
            className="font-display font-bold mb-10 text-center"
            style={{ fontSize: "1.5rem", color: "var(--navy-900)" }}
          >
            What You Get From Day One
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl p-6"
                style={{ background: "var(--surface)", border: "1px solid var(--border-light)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "var(--navy-50)" }}
                >
                  <Icon size={18} style={{ color: "var(--navy-700)" }} />
                </div>
                <div className="font-semibold text-sm mb-1.5" style={{ color: "var(--navy-900)" }}>{title}</div>
                <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Application form */}
      <section id="apply-form" className="py-16" style={{ background: "var(--surface)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <h3 className="font-display font-bold mb-2" style={{ fontSize: "1.75rem", color: "var(--navy-900)" }}>
              Driver Application
            </h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Fill out the form and our recruiting team will call within 1 business day.
            </p>
          </div>

          {sent ? (
            <div
              className="rounded-2xl p-12 flex flex-col items-center text-center gap-4"
              style={{ background: "#fff", border: "1px solid var(--border-light)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "var(--navy-800)" }}
              >
                <ArrowRight size={22} color="#fff" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-1" style={{ color: "var(--navy-900)" }}>Application Submitted!</div>
                <div className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>Our recruiting team will contact you within 1 business day.</div>
                <a href="tel:8883439272" className="text-sm font-semibold" style={{ color: "var(--navy-700)" }}>
                  Or call (888) 343-9272
                </a>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ background: "#fff", border: "1px solid var(--border-light)" }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>First Name *</label>
                  <input name="firstName" required value={form.firstName} onChange={hc} placeholder="John" className="field" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Last Name *</label>
                  <input name="lastName" required value={form.lastName} onChange={hc} placeholder="Smith" className="field" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Phone *</label>
                  <input name="phone" required value={form.phone} onChange={hc} placeholder="(555) 000-0000" className="field" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={hc} placeholder="john@email.com" className="field" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>CDL Class *</label>
                  <select name="cdlClass" required value={form.cdlClass} onChange={hc} className="field" style={{ cursor: "pointer" }}>
                    <option value="">Select...</option>
                    <option>Class A</option>
                    <option>Class B</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Years Experience *</label>
                  <select name="experience" required value={form.experience} onChange={hc} className="field" style={{ cursor: "pointer" }}>
                    <option value="">Select...</option>
                    <option>1–2 years</option>
                    <option>3–5 years</option>
                    <option>6–10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Endorsements (if any)</label>
                <input name="endorsements" value={form.endorsements} onChange={hc} placeholder="Hazmat, Tanker, Doubles…" className="field" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Violations / Accidents (last 3 yrs)</label>
                <input name="violations" value={form.violations} onChange={hc} placeholder="None, or describe briefly" className="field" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Anything else?</label>
                <textarea name="message" value={form.message} onChange={hc} rows={3}
                  placeholder="Preferred routes, home time needs…" className="field" style={{ resize: "vertical" }} />
              </div>
              {/* SMS Opt-in */}
              <label className="flex gap-3 items-start cursor-pointer mt-1">
                <input
                  type="checkbox"
                  name="smsConsent"
                  checked={form.smsConsent}
                  onChange={hc}
                  className="mt-0.5 flex-shrink-0"
                  style={{ accentColor: "var(--orange)", width: 15, height: 15 }}
                />
                <span className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  I consent to receive text messages (account notifications, dispatch updates,
                  delivery alerts) from TW INC Transportation LLC at the phone number above.
                  Msg &amp; Data rates may apply. Reply STOP to opt out. View our{" "}
                  <a href="/privacy" style={{ color: "var(--navy-700)", textDecoration: "underline" }}>Privacy Policy</a>.
                </span>
              </label>
              <button type="submit" className="btn-navy w-full justify-center mt-1" style={{ padding: "13px 28px" }}>
                Submit Application <ArrowRight size={16} />
              </button>
              <p className="text-xs text-center" style={{ color: "var(--text-faint)" }}>
                Or call recruiting: <a href="tel:8883439272" className="font-semibold" style={{ color: "var(--navy-700)" }}>(888) 343-9272</a>
              </p>
            </form>
          )}
        </div>
      </section>

      {/* 4 — Testimonials */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h3
            className="font-display font-bold mb-10"
            style={{ fontSize: "1.5rem", color: "var(--navy-900)" }}
          >
            Trusted by Brokers &amp; Drivers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl p-7 flex flex-col gap-5"
                style={{ background: "var(--surface)", border: "1px solid var(--border-light)" }}
              >
                <blockquote
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--navy-800)", fontStyle: "italic" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid var(--border-light)" }}>
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
    </div>
  );
}
