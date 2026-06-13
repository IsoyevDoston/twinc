"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SmsConsent() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", role: "", consent: false });
  const hc = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0" style={{ background: "#f8f9fb", minHeight: "80vh" }}>
        <div className="max-w-xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-8">
            <p
              className="text-xs font-bold uppercase mb-3"
              style={{ color: "var(--orange)", letterSpacing: "0.12em" }}
            >
              SMS Opt-In
            </p>
            <h1
              className="font-display font-bold mb-3"
              style={{ fontSize: "2rem", color: "var(--navy-900)", lineHeight: 1.1 }}
            >
              Subscribe to TW INC Text Notifications
            </h1>
            <p className="text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              Stay informed with real-time load updates, delivery confirmations, account
              alerts, and dispatch reminders sent directly to your phone.
            </p>
          </div>

          {submitted ? (
            /* Success state */
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "#fff", border: "1.5px solid #d1fae5" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "#d1fae5" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2
                className="font-display font-bold mb-2"
                style={{ fontSize: "1.25rem", color: "var(--navy-900)" }}
              >
                You&rsquo;re subscribed!
              </h2>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                You&rsquo;ll receive TW INC text notifications at <strong>{form.phone}</strong>.
                Reply <strong>STOP</strong> at any time to unsubscribe.
              </p>
              <p className="text-xs" style={{ color: "var(--text-faint)" }}>
                Msg &amp; Data rates may apply. Message frequency varies.
              </p>
            </div>
          ) : (
            /* Opt-in form */
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8"
              style={{ background: "#fff", border: "1.5px solid var(--border-light)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
            >
              <div className="flex flex-col gap-4 mb-6">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                    Full Name <span style={{ color: "var(--orange)" }}>*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={hc}
                    required
                    placeholder="John Smith"
                    className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none"
                    style={{ border: "1.5px solid var(--border-light)", color: "var(--navy-900)" }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                    Mobile Phone Number <span style={{ color: "var(--orange)" }}>*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={hc}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none"
                    style={{ border: "1.5px solid var(--border-light)", color: "var(--navy-900)" }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--navy-900)" }}>
                    I am a… <span style={{ color: "var(--orange)" }}>*</span>
                  </label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={hc}
                    required
                    className="w-full rounded-lg px-3.5 py-2.5 text-sm outline-none"
                    style={{ border: "1.5px solid var(--border-light)", color: "var(--navy-900)", background: "#fff" }}
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="driver">CDL Driver / Owner-Operator</option>
                    <option value="broker">Freight Broker</option>
                    <option value="shipper">Shipper / Logistics Coordinator</option>
                    <option value="applicant">Driver Applicant</option>
                  </select>
                </div>
              </div>

              {/* Disclosure box */}
              <div
                className="rounded-xl p-4 mb-5 text-xs leading-relaxed"
                style={{ background: "#f8f9fb", border: "1px solid var(--border-light)", color: "var(--text-muted)" }}
              >
                <p className="mb-2">
                  <strong style={{ color: "var(--navy-900)" }}>What you&rsquo;ll receive:</strong>{" "}
                  Account notifications, delivery status updates, security alerts, and
                  dispatch reminders from TW INC Transportation LLC.
                </p>
                <p className="mb-2">
                  <strong style={{ color: "var(--navy-900)" }}>Message frequency:</strong>{" "}
                  Varies by role and active loads (typically 2–10 messages per shipment).
                </p>
                <p className="mb-2">
                  <strong style={{ color: "var(--navy-900)" }}>To opt out:</strong>{" "}
                  Reply <strong>STOP</strong> to any message at any time.
                  Reply <strong>HELP</strong> for support.
                </p>
                <p>
                  Msg &amp; Data rates may apply. View our{" "}
                  <a href="/privacy#sms" style={{ color: "var(--navy-700)", textDecoration: "underline" }}>
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" style={{ color: "var(--navy-700)", textDecoration: "underline" }}>
                    Terms of Service
                  </a>.
                </p>
              </div>

              {/* Consent checkbox */}
              <label className="flex gap-3 items-start cursor-pointer mb-6">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={hc}
                  className="mt-0.5 flex-shrink-0"
                  style={{ accentColor: "var(--orange)", width: 16, height: 16 }}
                />
                <span className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  By checking this box, I consent to receive recurring automated text messages
                  from <strong style={{ color: "var(--navy-900)" }}>TW INC Transportation LLC</strong> at
                  the mobile number provided above. Consent is not a condition of any purchase
                  or employment. I can opt out at any time by replying STOP.
                </span>
              </label>

              <button
                type="submit"
                disabled={!form.consent}
                className="w-full rounded-xl py-3 text-sm font-bold transition-opacity"
                style={{
                  background: form.consent ? "var(--orange)" : "#ccc",
                  color: "#fff",
                  cursor: form.consent ? "pointer" : "not-allowed",
                }}
              >
                Subscribe to SMS Notifications
              </button>
            </form>
          )}

          {/* Already subscribed / unsubscribe note */}
          <p className="text-center text-xs mt-6" style={{ color: "var(--text-faint)" }}>
            Already subscribed? Reply <strong>STOP</strong> to any TW INC text to unsubscribe instantly.
            Questions? Call <a href="tel:+18883439272" style={{ color: "var(--navy-700)" }}>(888) 343-9272</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
