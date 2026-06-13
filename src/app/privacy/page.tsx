import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — TW INC Transportation LLC",
  description:
    "TW INC Transportation LLC Privacy Policy. Covers what personal information we collect, how it is used, who it is shared with, and your SMS and data rights.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        <div className="max-w-3xl mx-auto px-6 py-16">

          {/* Header */}
          <div className="mb-10">
            <p className="text-xs font-bold uppercase mb-3" style={{ color: "var(--navy-600)", letterSpacing: "0.12em" }}>
              Legal
            </p>
            <h1 className="font-display font-bold mb-2" style={{ fontSize: "2.5rem", color: "var(--navy-900)" }}>
              Privacy Policy
            </h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Last updated: June 13, 2025 &nbsp;·&nbsp; TW INC Transportation LLC
            </p>
          </div>

          {/* ── Required summary box ── */}
          <div
            className="rounded-2xl p-6 mb-10"
            style={{ background: "#f0f4ff", border: "1.5px solid #c7d7f9" }}
          >
            <p className="text-xs font-bold uppercase mb-4" style={{ color: "var(--navy-900)", letterSpacing: "0.1em" }}>
              Privacy at a Glance
            </p>
            <div className="grid gap-4">
              {[
                {
                  label: "What we collect",
                  text: "Name, phone number, email, company, shipment details, CDL and employment records for driver applicants, and device/usage data from website visitors.",
                },
                {
                  label: "How we use it",
                  text: "To dispatch freight, process driver applications, send operational SMS/call notifications, maintain FMCSA-required records, and improve our services.",
                },
                {
                  label: "Who we share it with",
                  text: "Freight brokers and shippers (load data only), FMCSA/DOT regulators, background-check agencies, insurance carriers, and our SMS/voice platform provider solely to deliver messages you consent to.",
                },
                {
                  label: "SMS consent",
                  text: "SMS opt-in consent and the mobile phone numbers collected for SMS communications are never shared with third parties or affiliates for their own marketing purposes.",
                },
              ].map(({ label, text }) => (
                <div key={label} className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                    style={{ background: "var(--orange)" }}
                  />
                  <div>
                    <span className="font-semibold text-sm" style={{ color: "var(--navy-900)" }}>
                      {label}:{" "}
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Full policy ── */}
          <div className="prose-custom">

            <Section title="1. Who We Are">
              <p>
                TW INC Transportation LLC (&ldquo;TW INC,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a
                federally licensed motor carrier headquartered at 128 S Tryon St, 19th Floor,
                Charlotte, NC 28202 (USDOT&nbsp;3860157 / MC&nbsp;1409884). This Privacy Policy
                describes how we collect, use, share, and protect information from visitors to our
                website, freight brokers, shippers, and employment applicants (collectively, &ldquo;you&rdquo;).
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <SubSection heading="2.1 Website Visitors">
                <p>When you visit our website we may collect:</p>
                <ul>
                  <li>IP address, browser type, referring URL, and pages visited (via server logs and analytics)</li>
                  <li>Contact information you voluntarily submit through forms (name, company, email, phone number)</li>
                  <li>Cookies and similar technologies to remember preferences and measure traffic (see Section 8)</li>
                </ul>
              </SubSection>
              <SubSection heading="2.2 Freight Brokers &amp; Shippers">
                <p>When you engage our services we collect:</p>
                <ul>
                  <li>Business name, contact name, email address, and phone number</li>
                  <li>Shipment details: origin, destination, commodity, weight, equipment type, and pickup date</li>
                  <li>Rate confirmation and bill of lading (BOL) data</li>
                  <li>Invoicing and payment information required to complete transactions</li>
                </ul>
              </SubSection>
              <SubSection heading="2.3 Driver Applicants &amp; Employees">
                <p>For CDL driver applications and employment we collect:</p>
                <ul>
                  <li>Full legal name, address, date of birth, and Social Security Number (SSN) for background checks</li>
                  <li>Commercial Driver&rsquo;s License (CDL) class, number, state, and expiration</li>
                  <li>10-year employment history and driving record (MVR)</li>
                  <li>Medical Examiner&rsquo;s Certificate (DOT physical) information</li>
                  <li>Drug and alcohol testing records as required by 49 CFR Part 382</li>
                  <li>ELD data including hours of service, location, and driving events during employment</li>
                  <li>Emergency contact information</li>
                  <li>Mobile phone number, if you opt in to SMS notifications (see Section 5)</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul>
                <li><strong>Service delivery</strong> — dispatching loads, communicating transit status, and issuing freight documents</li>
                <li><strong>Employment processing</strong> — reviewing driver applications, conducting DOT-required background checks, MVR reviews, and pre-employment drug screens</li>
                <li><strong>SMS &amp; voice communications</strong> — sending load status updates, appointment reminders, account notifications, security alerts, and delivery confirmations to contacts who have opted in (see Section 5)</li>
                <li><strong>Regulatory compliance</strong> — satisfying FMCSA recordkeeping requirements under 49 CFR Parts 390–395, including driver qualification files and hours-of-service records</li>
                <li><strong>Insurance</strong> — reporting claims and providing documentation to our cargo, liability, and auto carriers</li>
                <li><strong>Safety</strong> — monitoring ELD data for hours-of-service compliance and investigating accidents</li>
                <li><strong>Business operations</strong> — billing, collections, fraud prevention, and service improvement</li>
              </ul>
            </Section>

            <Section title="4. Sharing Your Information">
              <p>We do not sell personal information. We may share information with:</p>
              <ul>
                <li><strong>Freight brokers and shippers</strong> — load details and driver assignment information necessary to execute shipments</li>
                <li><strong>FMCSA and DOT</strong> — as required by federal motor carrier safety regulations</li>
                <li><strong>Background check providers</strong> — consumer reporting agencies (CRAs) for driver qualification under the FCRA</li>
                <li><strong>Drug and alcohol testing facilities</strong> — as required by 49 CFR Part 382</li>
                <li><strong>Insurance carriers</strong> — our cargo, commercial auto, and umbrella carriers</li>
                <li><strong>ELD service providers</strong> — third-party vendors hosting electronic logging device data for FMCSA compliance</li>
                <li><strong>SMS/Voice platform provider</strong> — our business communications provider (currently RingCentral) solely to deliver messages you have consented to receive</li>
                <li><strong>Legal authorities</strong> — in response to lawful requests, subpoenas, or court orders</li>
                <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </Section>

            <Section title="5. SMS Text Message Communications">
              <p>
                TW INC uses SMS text messaging to send operational information to drivers,
                brokers, and shippers who have explicitly consented. By providing your mobile
                phone number and agreeing to receive messages (via our website form or signed
                consent), you agree to receive text messages from TW INC at the number provided.
              </p>

              <SubSection heading="5.1 Types of Messages">
                <ul>
                  <li><strong>Account Notifications</strong> — application status, onboarding steps, and account changes</li>
                  <li><strong>Delivery Notifications</strong> — pickup confirmations, in-transit updates, and delivery alerts</li>
                  <li><strong>Security Alerts</strong> — account access notifications and verification</li>
                  <li><strong>Dispatch / Appointment Reminders</strong> — pickup and delivery window reminders</li>
                </ul>
              </SubSection>

              <SubSection heading="5.2 No Third-Party Sharing of SMS Consent">
                <p>
                  <strong>
                    SMS opt-in consent and the mobile phone numbers collected for SMS
                    communications are never shared with third parties or affiliates for
                    their own marketing or promotional purposes.
                  </strong>{" "}
                  Phone numbers are used solely to deliver the operational messages
                  described above through our communications platform.
                </p>
              </SubSection>

              <SubSection heading="5.3 Message Frequency &amp; Charges">
                <p>
                  Message frequency varies by role and active loads (typically 2–10 messages
                  per shipment). Message and data rates may apply based on your mobile carrier plan.
                  TW INC does not charge for SMS messages.
                </p>
              </SubSection>

              <SubSection heading="5.4 Opt-Out &amp; Help">
                <p>
                  Reply <strong>STOP</strong> to any message to unsubscribe immediately.
                  You will receive one final confirmation and no further messages will be sent.
                  Reply <strong>HELP</strong> for assistance, or contact us at{" "}
                  <a href="tel:+18883439272">(888) 343-9272</a> or{" "}
                  <a href="mailto:support@twincinc.com">support@twincinc.com</a>.
                </p>
              </SubSection>
            </Section>

            <Section title="6. Driver Qualification File Records">
              <p>
                Under FMCSA regulations (49 CFR § 391.51), we maintain a Driver Qualification
                File (DQF) for each employed driver containing application records, MVR, medical
                certificates, road test records, and annual review documentation. DQF records
                are retained for 3 years after a driver leaves employment. ELD and hours-of-service
                records are retained per 49 CFR § 395.8. SMS opt-in records are retained for
                4 years per CTIA guidelines.
              </p>
              <p>
                Driver applicants have rights under the FCRA regarding consumer reports used in
                hiring decisions. Upon adverse action based on a background check, you will
                receive the required pre-adverse and adverse action notices.
              </p>
            </Section>

            <Section title="7. Data Security">
              <p>
                We implement administrative, technical, and physical safeguards including access
                controls, encrypted data transmission (TLS/HTTPS), and secure document storage.
                In the event of a data breach, we will notify affected individuals as required
                by applicable law.
              </p>
            </Section>

            <Section title="8. Cookies">
              <p>
                Our website uses essential cookies necessary for the site to function and analytics
                cookies to understand traffic. You may disable non-essential cookies through your
                browser settings without affecting core functionality.
              </p>
            </Section>

            <Section title="9. Your Rights">
              <p>Depending on your state of residence you may have rights to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of personal information (subject to legal retention requirements)</li>
                <li>Opt out of SMS communications (reply STOP to any message)</li>
              </ul>
              <p>
                California residents may have additional rights under the CCPA/CPRA. Contact us at{" "}
                <a href="mailto:privacy@twincinc.com">privacy@twincinc.com</a> to exercise your rights.
              </p>
            </Section>

            <Section title="10. Retention">
              <p>
                We retain personal information as long as necessary to fulfil the purposes in this
                Policy, comply with legal obligations, and enforce our agreements. FMCSA records
                follow specific regulatory schedules (generally 1–3 years; 10 years for accident
                registers).
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy periodically. Material changes will be posted on
                this page with a revised effective date. Continued use of our services constitutes
                acceptance of the updated Policy.
              </p>
            </Section>

            <Section title="12. Contact">
              <p>Questions about this Policy or your data:</p>
              <address className="not-italic mt-3 text-sm" style={{ color: "var(--text-body)" }}>
                <strong>TW INC Transportation LLC</strong><br />
                128 S Tryon St, 19th Floor<br />
                Charlotte, NC 28202<br />
                Phone: <a href="tel:+18883439272">(888) 343-9272</a><br />
                Email: <a href="mailto:privacy@twincinc.com">privacy@twincinc.com</a>
              </address>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        .prose-custom { color: var(--text-body); font-size: 0.9375rem; line-height: 1.75; }
        .prose-custom p { margin-bottom: 1rem; }
        .prose-custom ul { margin: 0.5rem 0 1rem 1.25rem; list-style: disc; }
        .prose-custom li { margin-bottom: 0.375rem; }
        .prose-custom a { color: var(--navy-700); text-decoration: underline; }
        .prose-custom h2 { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 1.2rem; color: var(--navy-900); margin: 2.5rem 0 0.75rem; }
        .prose-custom h3 { font-weight: 600; font-size: 1rem; color: var(--navy-800); margin: 1.5rem 0 0.5rem; }
        .prose-custom strong { color: var(--navy-900); }
      `}</style>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--navy-900)", margin: "2.5rem 0 0.75rem" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function SubSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{ fontWeight: 600, fontSize: "1rem", color: "var(--navy-800)", margin: "1.5rem 0 0.5rem" }}>
        {heading}
      </h3>
      {children}
    </div>
  );
}
