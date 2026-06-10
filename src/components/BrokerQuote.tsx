"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function BrokerQuote() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    company: "", contact: "", email: "", phone: "",
    origin: "", destination: "", equipment: "", weight: "",
    commodity: "", pickupDate: "", notes: "",
  });

  const hc = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="brokers" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — editorial, no checklist */}
          <div>
            <p className="text-xs font-bold uppercase mb-5" style={{ color: "var(--navy-600)", letterSpacing: "0.12em" }}>
              For Freight Brokers
            </p>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", color: "var(--navy-900)" }}
            >
              Request a
              <br />
              Rate Quote
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-muted)", maxWidth: 360 }}>
              We work with brokers directly. No middlemen, no runaround.
              Submit a load and get a competitive rate back the same day.
            </p>

            {/* 3 key facts — replaces the checklist */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { stat: "2 hr",   desc: "Quote turnaround" },
                { stat: "48",     desc: "States covered" },
                { stat: "99%+",   desc: "On-time delivery" },
              ].map(({ stat, desc }) => (
                <div key={stat}>
                  <div
                    className="font-display font-bold mb-1"
                    style={{ fontSize: "2rem", color: "var(--navy-900)", lineHeight: 1 }}
                  >
                    {stat}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{desc}</div>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-6"
              style={{ background: "var(--surface)", border: "1px solid var(--border-light)" }}
            >
              <div className="text-xs font-semibold uppercase mb-3" style={{ color: "var(--text-faint)", letterSpacing: "0.08em" }}>
                Authority on File
              </div>
              <div className="grid grid-cols-2 gap-y-2 text-sm" style={{ color: "var(--text-body)" }}>
                <span style={{ color: "var(--text-muted)" }}>DOT</span><span className="font-medium">3860157</span>
                <span style={{ color: "var(--text-muted)" }}>MC</span><span className="font-medium">1409884</span>
                <span style={{ color: "var(--text-muted)" }}>Safety Rating</span><span className="font-medium">Satisfactory</span>
                <span style={{ color: "var(--text-muted)" }}>Insurance</span><span className="font-medium">COI on request</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border-light)" }}>
            <h3 className="font-semibold text-lg mb-6" style={{ color: "var(--navy-900)" }}>Load Quote Request</h3>

            {sent ? (
              <div className="flex flex-col items-center text-center gap-4 py-14">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "var(--navy-800)" }}
                >
                  <ArrowRight size={20} color="#fff" />
                </div>
                <div>
                  <div className="font-semibold text-lg mb-1" style={{ color: "var(--navy-900)" }}>Request Received</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>We'll respond within 2 business hours.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Brokerage *</label>
                    <input name="company" required value={form.company} onChange={hc} placeholder="Broker Co." className="field" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Contact *</label>
                    <input name="contact" required value={form.contact} onChange={hc} placeholder="Your name" className="field" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={hc} placeholder="you@broker.com" className="field" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Phone</label>
                    <input name="phone" value={form.phone} onChange={hc} placeholder="(555) 000-0000" className="field" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Origin *</label>
                    <input name="origin" required value={form.origin} onChange={hc} placeholder="Chicago, IL" className="field" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Destination *</label>
                    <input name="destination" required value={form.destination} onChange={hc} placeholder="Atlanta, GA" className="field" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Equipment *</label>
                    <select name="equipment" required value={form.equipment} onChange={hc} className="field" style={{ cursor: "pointer" }}>
                      <option value="">Select...</option>
                      <option>53′ Dry Van</option>
                      <option>Cargo Van</option>
                      <option>Power Only</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Weight (lbs)</label>
                    <input name="weight" value={form.weight} onChange={hc} placeholder="38,000" className="field" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Commodity</label>
                    <input name="commodity" value={form.commodity} onChange={hc} placeholder="General Freight" className="field" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Pickup Date</label>
                    <input name="pickupDate" type="date" value={form.pickupDate} onChange={hc} className="field" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Notes</label>
                  <textarea name="notes" value={form.notes} onChange={hc} rows={3}
                    placeholder="Special instructions, hazmat, appointment windows..." className="field" style={{ resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-orange w-full justify-center mt-1" style={{ padding: "13px 28px" }}>
                  Submit Quote Request <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
