import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — TW INC",
  description: "TW INC Privacy Policy. How we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-0">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase mb-3" style={{ color: "var(--navy-600)", letterSpacing: "0.12em" }}>
              Legal
            </p>
            <h1 className="font-display font-bold mb-2" style={{ fontSize: "2.5rem", color: "var(--navy-900)" }}>
              Privacy Policy
            </h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Last updated: June 10, 2024 &nbsp;·&nbsp; TW INC Transportation LLC
            </p>
          </div>

          <div className="prose-custom">
            <Section title="1. Who We Are">
              <p>
                TW INC Transportation LLC (&ldquo;TW INC,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a federally licensed motor
                carrier headquartered at 128 S Tryon St, 19th Floor, Charlotte, NC 28202 (DOT&nbsp;3860157 /
                MC&nbsp;1409884). This Privacy Policy describes how we collect, use, and protect
                information from visitors to our website, freight brokers, shippers, and
                employment applicants (collectively, &ldquo;you&rdquo;).
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <SubSection heading="2.1 Website Visitors">
                <p>When you visit our website we may collect:</p>
                <ul>
                  <li>IP address, browser type, referring URL, and pages visited (via server logs and analytics)</li>
                  <li>Contact information you voluntarily submit through quote request or contact forms (name, company, email, phone)</li>
                  <li>Cookies and similar technologies to remember preferences and measure traffic (see Section 7)</li>
                </ul>
              </SubSection>
              <SubSection heading="2.2 Freight Brokers &amp; Shippers">
                <p>When you request a rate quote or engage our services we collect:</p>
                <ul>
                  <li>Business name, contact name, email address, and phone number</li>
                  <li>Shipment details: origin, destination, commodity, weight, equipment type, and pickup date</li>
                  <li>Rate confirmation and bill of lading (BOL) data</li>
                  <li>Invoicing and payment information as required to complete transactions</li>
                </ul>
              </SubSection>
              <SubSection heading="2.3 Driver Applicants &amp; Employees">
                <p>For CDL driver applications and employment we collect:</p>
                <ul>
                  <li>Full legal name, address, date of birth, Social Security Number (SSN) for background checks</li>
                  <li>Commercial Driver&rsquo;s License (CDL) class, number, state, and expiration</li>
                  <li>10-year employment history and driving record (MVR)</li>
                  <li>Medical Examiner&rsquo;s Certificate (DOT physical) information</li>
                  <li>Drug and alcohol testing records as required by 49 CFR Part 382</li>
                  <li>ELD (Electronic Logging Device) data including hours of service, location, and driving events during employment</li>
                  <li>Emergency contact information</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul>
                <li><strong>Service delivery</strong> — to dispatch loads, communicate transit status, and issue freight documents</li>
                <li><strong>Employment</strong> — to process driver applications, conduct DOT-required background checks, MVR reviews, and pre-employment drug screens</li>
                <li><strong>Regulatory compliance</strong> — to satisfy FMCSA recordkeeping requirements under 49 CFR Parts 390–395, including driver qualification files, hours-of-service records, and accident registers</li>
                <li><strong>Insurance</strong> — to report claims and provide required documentation to our cargo, liability, and auto insurance carriers</li>
                <li><strong>Safety &amp; security</strong> — to monitor ELD data for hours-of-service compliance and to investigate accidents</li>
                <li><strong>Communications</strong> — to respond to inquiries, send rate confirmations, and provide load updates</li>
                <li><strong>Business operations</strong> — billing, collections, fraud prevention, and improving our services</li>
              </ul>
            </Section>

            <Section title="4. Sharing Your Information">
              <p>We do not sell personal information. We may share information with:</p>
              <ul>
                <li><strong>Freight brokers and shippers</strong> — load details and driver assignment information as necessary to execute shipments</li>
                <li><strong>FMCSA and DOT</strong> — as required by federal motor carrier safety regulations</li>
                <li><strong>Background check providers</strong> — consumer reporting agencies (CRAs) for driver qualification in compliance with the Fair Credit Reporting Act (FCRA)</li>
                <li><strong>Drug and alcohol testing facilities</strong> — as required by 49 CFR Part 382</li>
                <li><strong>Insurance carriers</strong> — our cargo insurance carrier (minimum $100,000 per occurrence), commercial auto liability carrier, and any applicable umbrella carriers</li>
                <li><strong>ELD service providers</strong> — third-party vendors that host electronic logging device data for FMCSA compliance</li>
                <li><strong>Legal and regulatory authorities</strong> — in response to lawful requests, subpoenas, court orders, or to protect rights and safety</li>
                <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of company assets</li>
              </ul>
            </Section>

            <Section title="5. Driver Qualification File Records">
              <p>
                Under FMCSA regulations (49 CFR § 391.51), we maintain a Driver Qualification File (DQF)
                for each employed driver containing application records, MVR, medical certificates, road
                test records, and annual review documentation. DQF records are retained for 3 years
                after the driver leaves our employment. ELD and hours-of-service records are retained
                for the minimum periods required by 49 CFR § 395.8.
              </p>
              <p>
                Driver applicants have rights under the FCRA regarding consumer reports used in hiring
                decisions. Upon adverse action based on a background check, you will receive the required
                pre-adverse and adverse action notices.
              </p>
            </Section>

            <Section title="6. Data Security">
              <p>
                We implement administrative, technical, and physical safeguards to protect your
                information, including access controls, encrypted data transmission (TLS/HTTPS), and
                secure document storage. However, no method of transmission over the Internet is 100%
                secure. In the event of a data breach affecting your personal information, we will
                notify affected individuals as required by applicable law.
              </p>
            </Section>

            <Section title="7. Cookies">
              <p>
                Our website uses essential cookies necessary for the site to function and analytics
                cookies (e.g., Google Analytics) to understand traffic patterns. You may disable
                non-essential cookies through your browser settings without affecting core functionality.
              </p>
            </Section>

            <Section title="8. Your Rights">
              <p>Depending on your state of residence you may have rights to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of personal information (subject to legal retention requirements)</li>
                <li>Opt out of certain marketing communications</li>
              </ul>
              <p>
                California residents may have additional rights under the California Consumer Privacy Act
                (CCPA/CPRA). To exercise your rights, contact us at{" "}
                <a href="mailto:privacy@twinc.com">privacy@twinc.com</a>.
              </p>
            </Section>

            <Section title="9. Retention">
              <p>
                We retain personal information for as long as necessary to fulfil the purposes described
                in this Policy, comply with legal obligations, resolve disputes, and enforce our
                agreements. FMCSA-mandated records are retained according to their specific regulatory
                schedules (generally 1–3 years for most records; 10 years for accident registers).
              </p>
            </Section>

            <Section title="10. Third-Party Links">
              <p>
                Our website may contain links to third-party sites (e.g., FMCSA SAFER system). We are
                not responsible for the privacy practices of those sites and encourage you to review
                their policies.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy periodically. Material changes will be posted on this
                page with a revised &ldquo;Last updated&rdquo; date. Your continued use of our website or services
                after any change constitutes acceptance of the updated Policy.
              </p>
            </Section>

            <Section title="12. Contact">
              <p>
                Questions about this Policy or our data practices should be directed to:
              </p>
              <address className="not-italic mt-3 text-sm" style={{ color: "var(--text-body)" }}>
                <strong>TW INC Transportation LLC</strong><br />
                128 S Tryon St, 19th Floor<br />
                Charlotte, NC 28202<br />
                Phone: (888) 343-9272<br />
                Email: <a href="mailto:privacy@twinc.com">privacy@twinc.com</a>
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
