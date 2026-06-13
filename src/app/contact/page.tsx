"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const reasons = [
  { value: "driver",  label: "I want to drive for TW INC (CDL-A / Owner-Operator)" },
  { value: "broker",  label: "I'm a freight broker looking to move loads" },
  { value: "shipper", label: "I'm a shipper with freight to move" },
  { value: "other",   label: "Other / General inquiry" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", reason: "", message: "",
  });

  const hc = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <>
      <Navbar />
      <main className="pt-24" style={{ background: "#f8f9fb", minHeight: "100vh" }}>

        {/* Page header */}
        <div style={{ background: "var(--navy-900)" }} className="pt-12 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold uppercase mb-3" style={{ color: "var(--orange)", letterSpacing: "0.12em" }}>
              Get in Touch
            </p>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.05 }}
            >
              Contact TW INC
            </h1>
            <p className="text-sm max-w-lg" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              Whether you&rsquo;re a driver looking to join our fleet, a broker with freight to move,
              or a shipper needing a reliable carrier — fill out the form and we&rsquo;ll get back
              to you within one business day.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-10">

            {/* ── Left: contact info ── */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(888) 343-9272",
                  href: "tel:+18883439272",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@twincinc.com",
                  href: "mailto:info@twincinc.com",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "128 S Tryon St, 19th Floor\nCharlotte, NC 28202",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-4 rounded-2xl p-5"
                  style={{ background: "#fff", border: "1.5px solid var(--border-light)" }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--navy-900)" }}
                  >
                    <Icon size={18} color="var(--orange)" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase mb-1" style={{ color: "var(--text-faint)", letterSpacing: "0.08em" }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className="text-sm font-medium" style={{ color: "var(--navy-900)" }}>
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium whitespace-pre-line" style={{ color: "var(--navy-900)" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div
                className="rounded-2xl p-5 text-xs leading-relaxed"
                style={{ background: "#fff", border: "1.5px solid var(--border-light)", color: "var(--text-muted)" }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--navy-900)" }}>Office Hours</p>
                <p>Mon – Fri: 8 AM – 6 PM ET</p>
                <p>Dispatch: 24 / 7</p>
                <p className="mt-2">
                  <span className="font-semibold" style={{ color: "var(--navy-900)" }}>DOT:</span> 3860157 &nbsp;·&nbsp;
                  <span className="font-semibold" style={{ color: "var(--navy-900)" }}>MC:</span> 1409884
                </p>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="md:col-span-2">
              {sent ? (
                <div
                  className="rounded-2xl p-12 flex flex-col items-center text-center gap-4 h-full"
                  style={{ background: "#fff", border: "1.5px solid var(--border-light)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(232,96,26,0.1)" }}
                  >
                    <ArrowRight size={24} color="var(--orange)" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg mb-2" style={{ color: "var(--navy-900)" }}>
                      Message Received!
                    </h2>
                    <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                      We&rsquo;ll follow up at <strong>{form.phone || form.email}</strong> within one business day.
                    </p>
                    {smsConsent && (
                      <p className="text-xs" style={{ color: "var(--text-faint)" }}>
                        You&rsquo;ve opted in to SMS updates. Reply STOP at any time to unsubscribe.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="rounded-2xl p-8 flex flex-col gap-5"
                  style={{ background: "#fff", border: "1.5px solid var(--border-light)", boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
                >
                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                        Full Name <span style={{ color: "var(--orange)" }}>*</span>
                      </label>
                      <input
                        name="name" required value={form.name} onChange={hc}
                        placeholder="John Smith"
                        className="field w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                        Phone Number <span style={{ color: "var(--orange)" }}>*</span>
                      </label>
                      <input
                        name="phone" type="tel" required value={form.phone} onChange={hc}
                        placeholder="(555) 000-0000"
                        className="field w-full"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                      Email Address
                    </label>
                    <input
                      name="email" type="email" value={form.email} onChange={hc}
                      placeholder="john@company.com"
                      className="field w-full"
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                      Reason for Contact <span style={{ color: "var(--orange)" }}>*</span>
                    </label>
                    <select
                      name="reason" required value={form.reason} onChange={hc}
                      className="field w-full"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="" disabled>Select one…</option>
                      {reasons.map((r) => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                      Message
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={hc} rows={4}
                      placeholder="Tell us what you need…"
                      className="field w-full"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {/* ── SMS Consent (required by RingCentral 10DLC) ── */}
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "#f8f9fb", border: "1.5px solid var(--border-light)" }}
                  >
                    <label className="flex gap-3 items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={smsConsent}
                        onChange={(e) => setSmsConsent(e.target.checked)}
                        className="flex-shrink-0 mt-0.5"
                        style={{ accentColor: "var(--orange)", width: 16, height: 16 }}
                      />
                      <span className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        I agree to receive text messages from{" "}
                        <strong style={{ color: "var(--navy-900)" }}>TW INC Transportation LLC</strong>{" "}
                        at the phone number provided above, including account notifications,
                        delivery updates, and dispatch reminders.{" "}
                        <strong style={{ color: "var(--navy-900)" }}>Messaging frequency may vary.</strong>{" "}
                        <strong style={{ color: "var(--navy-900)" }}>Message and data rates may apply.</strong>{" "}
                        <strong style={{ color: "var(--navy-900)" }}>You can opt out any time by texting STOP.</strong>{" "}
                        For assistance, text <strong style={{ color: "var(--navy-900)" }}>HELP</strong> or
                        visit our website at{" "}
                        <a href="https://twithrow.com" style={{ color: "var(--navy-700)", textDecoration: "underline" }}>
                          twithrow.com
                        </a>.
                        {" "}Visit{" "}
                        <a href="/privacy" style={{ color: "var(--navy-700)", textDecoration: "underline" }}>
                          twithrow.com/privacy
                        </a>{" "}
                        for our Privacy Policy and{" "}
                        <a href="/terms" style={{ color: "var(--navy-700)", textDecoration: "underline" }}>
                          twithrow.com/terms
                        </a>{" "}
                        for Terms of Service. SMS opt-in consent is not shared with third parties or affiliates.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-orange w-full justify-center"
                    style={{ padding: "13px 28px" }}
                  >
                    Send Message <ArrowRight size={16} />
                  </button>

                  <p className="text-xs text-center" style={{ color: "var(--text-faint)" }}>
                    Or call us directly:{" "}
                    <a href="tel:+18883439272" className="font-semibold" style={{ color: "var(--navy-700)" }}>
                      (888) 343-9272
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
