import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — TW INC",
  description: "TW INC Terms of Service. Carrier liability, insurance, and service terms.",
};

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Last updated: June 10, 2024 &nbsp;·&nbsp; TW INC Transportation LLC
            </p>
          </div>

          <div className="prose-custom">
            <Section title="1. Agreement to Terms">
              <p>
                By engaging TW INC Transportation LLC (&ldquo;TW INC,&rdquo; &ldquo;Carrier,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) to transport
                freight, applying for employment, or using our website at twinc.com, you
                (&ldquo;Shipper,&rdquo; &ldquo;Broker,&rdquo; or &ldquo;you&rdquo;) agree to be bound by these Terms of Service
                (&ldquo;Terms&rdquo;). These Terms, together with any applicable rate confirmation or
                transportation agreement, constitute the entire agreement between the parties
                for the transportation of property.
              </p>
              <p>
                TW INC operates under USDOT&nbsp;3860157 and MC&nbsp;1409884, licensed by the Federal
                Motor Carrier Safety Administration (FMCSA) to provide for-hire motor carrier
                transportation services throughout the contiguous 48 United States.
              </p>
            </Section>

            <Section title="2. Services">
              <p>TW INC provides the following freight transportation services:</p>
              <ul>
                <li><strong>53&prime; Dry Van</strong> — general commodities, palletized freight, drop &amp; hook, live load</li>
                <li><strong>Cargo Van / Sprinter</strong> — expedited shipments up to approximately 3,500 lbs</li>
                <li><strong>Power Only</strong> — Carrier provides tractor only; Broker/Shipper provides trailer</li>
                <li><strong>Dedicated Lanes</strong> — contracted capacity on fixed origin/destination pairs</li>
                <li><strong>OTR &amp; Regional</strong> — long-haul and regional coverage across all 48 contiguous states</li>
              </ul>
              <p>
                TW INC reserves the right to decline any shipment at its sole discretion, including
                but not limited to: hazardous materials requiring special permits not held by Carrier,
                freight exceeding legal weight or dimension limits, or shipments that pose safety
                or compliance risks.
              </p>
            </Section>

            <Section title="3. Rates and Payment">
              <SubSection heading="3.1 Rate Confirmation">
                <p>
                  All agreed rates are documented in a written Rate Confirmation Sheet signed by
                  both parties prior to dispatch. Verbal rate agreements are not binding unless
                  confirmed in writing. Carrier rates are quoted exclusive of any fuel surcharges,
                  accessorial charges, or detention fees unless specifically included in the Rate
                  Confirmation.
                </p>
              </SubSection>
              <SubSection heading="3.2 Accessorial Charges">
                <p>The following accessorial charges apply unless waived in writing:</p>
                <ul>
                  <li><strong>Detention:</strong> $60/hour after 2 free hours at shipper or consignee</li>
                  <li><strong>Layover:</strong> $350/day when a driver is held overnight through no fault of Carrier</li>
                  <li><strong>TONU (Truck Ordered Not Used):</strong> 25% of agreed linehaul rate</li>
                  <li><strong>Redelivery / Reconsignment:</strong> Actual costs plus applicable linehaul rate</li>
                  <li><strong>Lumper / Unloading:</strong> At actual cost, billed directly to Broker/Shipper</li>
                </ul>
              </SubSection>
              <SubSection heading="3.3 Payment Terms">
                <p>
                  Unless otherwise specified in a written agreement, invoices are due Net 30 days
                  from date of delivery and submission of clean Proof of Delivery (POD). Invoices
                  unpaid after 30 days accrue interest at 1.5% per month. Carrier reserves the right
                  to place a lien on freight in accordance with applicable state law for unpaid charges.
                </p>
              </SubSection>
            </Section>

            <Section title="4. Carrier Liability &amp; Insurance">
              <SubSection heading="4.1 Cargo Liability">
                <p>
                  TW INC&rsquo;s liability for loss of or damage to freight is governed by the Carmack
                  Amendment (49 U.S.C. § 14706) and is limited to the <strong>actual value of the
                  cargo</strong> at destination, not to exceed <strong>$100,000 per occurrence</strong> unless a higher
                  value is declared in writing and additional charges are agreed upon prior to
                  pickup. Carrier&rsquo;s liability is further subject to the following exclusions:
                </p>
                <ul>
                  <li>Acts of God, public enemy, or authority of law</li>
                  <li>Inherent vice or defect of the commodity</li>
                  <li>Improper packing or loading by Shipper</li>
                  <li>Delay claims (Carrier is not liable for consequential damages from delay)</li>
                </ul>
              </SubSection>
              <SubSection heading="4.2 Insurance Coverage">
                <p>TW INC maintains the following minimum insurance coverage:</p>
                <ul>
                  <li><strong>Public Liability &amp; Property Damage:</strong> $1,000,000 per occurrence (FMCSA-required minimum for property carrier)</li>
                  <li><strong>Cargo Insurance:</strong> $100,000 per occurrence for dry van freight</li>
                  <li><strong>Workers&rsquo; Compensation:</strong> As required by the State of North Carolina</li>
                </ul>
                <p>
                  A Certificate of Insurance (COI) naming the requesting Broker or Shipper as an
                  additional interested party is available upon written request. Carrier does not
                  accept broker or shipper requirements to name them as additional insured unless
                  agreed in a separate written contract.
                </p>
              </SubSection>
              <SubSection heading="4.3 Freight Claims">
                <p>
                  All freight claims must be filed in writing within <strong>9 months</strong> of the date of
                  delivery (or scheduled delivery for non-delivery claims), as required by
                  49 U.S.C. § 14706(e). Claims not filed within this period are time-barred.
                  Civil actions for freight claims must be commenced within <strong>2 years</strong> of the
                  date Carrier disallows the claim in writing. Claims should be submitted to:
                  <br />
                  <a href="mailto:claims@twinc.com">claims@twinc.com</a> or via certified mail to the address below.
                </p>
              </SubSection>
            </Section>

            <Section title="5. Prohibited Commodities">
              <p>TW INC does not accept for transportation without prior written authorization:</p>
              <ul>
                <li>Hazardous materials requiring placards (unless Carrier holds applicable permits)</li>
                <li>Household goods (Carrier is not licensed as a household goods mover)</li>
                <li>Live animals or plants</li>
                <li>Human remains</li>
                <li>Currency, negotiable instruments, or precious metals</li>
                <li>Illegal contraband of any kind</li>
                <li>Temperature-controlled freight (Carrier does not operate reefer equipment)</li>
              </ul>
            </Section>

            <Section title="6. Compliance with Laws">
              <p>
                TW INC operates in full compliance with all applicable federal and state regulations,
                including but not limited to:
              </p>
              <ul>
                <li>Federal Motor Carrier Safety Regulations (49 CFR Parts 380–399)</li>
                <li>FMCSA Electronic Logging Device (ELD) mandate (49 CFR Part 395)</li>
                <li>Federal Motor Carrier Commercial Regulations (49 CFR Parts 370–379)</li>
                <li>FMCSA Drug and Alcohol Clearinghouse requirements (49 CFR Part 382)</li>
                <li>DOT driver qualification and hours-of-service rules</li>
              </ul>
              <p>
                Shipper and Broker represent that all freight tendered to Carrier is accurately
                described, properly classified, packaged, and marked in compliance with applicable
                regulations, including DOT hazmat regulations where applicable.
              </p>
            </Section>

            <Section title="7. Driver Employment Terms">
              <SubSection heading="7.1 Minimum Qualifications">
                <p>All TW INC drivers must meet the following minimum qualifications:</p>
                <ul>
                  <li>Valid CDL-A license (CDL-B for cargo van positions)</li>
                  <li>Minimum 1 year of verifiable OTR or regional driving experience</li>
                  <li>Clean MVR: no more than 2 moving violations in the past 3 years; no DUI/DWI in the past 5 years</li>
                  <li>Must pass a DOT pre-employment physical examination and drug screen</li>
                  <li>Must be registered with the FMCSA Drug and Alcohol Clearinghouse</li>
                  <li>23 years of age or older</li>
                </ul>
              </SubSection>
              <SubSection heading="7.2 Independent Contractors">
                <p>
                  Owner-operators engaged by TW INC as independent contractors enter into a
                  separate Independent Contractor Agreement that governs compensation, equipment
                  standards, insurance requirements, and operational responsibilities. Nothing
                  in these Terms creates an employer-employee relationship for independent contractor
                  engagements.
                </p>
              </SubSection>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TW INC&rsquo;S AGGREGATE LIABILITY
                TO ANY PARTY FOR ANY CLAIM ARISING OUT OF OR RELATED TO THESE TERMS OR THE
                TRANSPORTATION SERVICES SHALL NOT EXCEED THE LESSER OF: (A) THE FREIGHT CHARGES
                PAID FOR THE SPECIFIC SHIPMENT GIVING RISE TO THE CLAIM, OR (B) THE APPLICABLE
                CARGO LIABILITY LIMIT STATED IN SECTION 4.1. IN NO EVENT SHALL TW INC BE LIABLE
                FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR SPECIAL DAMAGES.
              </p>
            </Section>

            <Section title="9. Indemnification">
              <p>
                Broker and Shipper shall defend, indemnify, and hold harmless TW INC and its
                officers, employees, drivers, and agents from and against any claims, losses, or
                expenses (including attorneys&rsquo; fees) arising from: (a) Broker&rsquo;s or Shipper&rsquo;s
                negligence or breach of these Terms; (b) inaccurate freight descriptions or
                improper packaging; or (c) violation of applicable laws by Broker or Shipper.
              </p>
            </Section>

            <Section title="10. Dispute Resolution">
              <p>
                The parties agree to attempt in good faith to resolve any dispute informally
                within 30 days of written notice. If not resolved, disputes shall be submitted
                to binding arbitration administered by the American Arbitration Association
                under its Commercial Arbitration Rules, with proceedings conducted in
                Mecklenburg County, North Carolina. The award may be entered as a judgment
                in any court of competent jurisdiction.
              </p>
              <p>
                Notwithstanding the foregoing, either party may seek injunctive or other
                equitable relief in any court of competent jurisdiction.
              </p>
            </Section>

            <Section title="11. Governing Law">
              <p>
                These Terms are governed by and construed in accordance with the laws of the
                State of North Carolina and applicable federal law (including the Carmack Amendment),
                without regard to conflict-of-law principles.
              </p>
            </Section>

            <Section title="12. Modifications">
              <p>
                TW INC reserves the right to modify these Terms at any time. Updated Terms will
                be posted on our website with a revised effective date. Your continued use of our
                services after such posting constitutes acceptance of the modified Terms.
              </p>
            </Section>

            <Section title="13. Contact">
              <address className="not-italic text-sm" style={{ color: "var(--text-body)" }}>
                <strong>TW INC Transportation LLC</strong><br />
                128 S Tryon St, 19th Floor<br />
                Charlotte, NC 28202<br />
                DOT: 3860157 &nbsp;|&nbsp; MC: 1409884<br />
                Phone: (888) 343-9272<br />
                Email: <a href="mailto:legal@twinc.com">legal@twinc.com</a>
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
