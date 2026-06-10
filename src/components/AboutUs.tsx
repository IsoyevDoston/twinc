"use client";

/* All photos from Pexels — no watermarks */
const photos = [
  /* Row 1 — two wide landscape photos */
  {
    src: "https://images.pexels.com/photos/27099095/pexels-photo-27099095.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Red Kenworth semi truck on rural highway",
    col: 2, row: 1,
  },
  {
    src: "https://images.pexels.com/photos/11087837/pexels-photo-11087837.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Red semi truck through mountain landscape",
    col: 2, row: 1,
  },
  /* Row 2+3 — tall portrait + 2 medium + 1 square */
  {
    src: "https://images.pexels.com/photos/33081220/pexels-photo-33081220.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Red semi truck parked roadside",
    col: 1, row: 2,
  },
  {
    src: "https://images.pexels.com/photos/12261472/pexels-photo-12261472.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "White semi truck on highway under cloudy sky",
    col: 2, row: 1,
  },
  {
    src: "https://images.pexels.com/photos/27099096/pexels-photo-27099096.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Blue semi truck on open highway",
    col: 1, row: 1,
  },
  /* Row 3 */
  {
    src: "https://images.pexels.com/photos/37753989/pexels-photo-37753989.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Blue semi truck on mountain highway",
    col: 2, row: 1,
  },
  {
    src: "https://images.pexels.com/photos/6563903/pexels-photo-6563903.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Red semi truck on Nevada desert highway",
    col: 1, row: 1,
  },
];

export default function AboutUs() {
  return (
    <section id="about" style={{ background: "var(--navy-900)" }} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase mb-3" style={{ color: "var(--orange)", letterSpacing: "0.12em" }}>
              TW INC Fleet &amp; Team
            </p>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.05 }}
            >
              Real Trucks. Real People.
              <br />Real Miles.
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
            A modern fleet of Volvo VNL 860s and Freightliner Cascadias operated by
            professional CDL-A drivers out of Charlotte, NC.
          </p>
        </div>

        {/* 4-column masonry photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "210px",
            gap: "10px",
          }}
        >
          {photos.map((p, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{ gridColumn: `span ${p.col}`, gridRow: `span ${p.row}` }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="mt-8 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {[
            { n: "48",   l: "States covered" },
            { n: "24/7", l: "Dispatch support" },
            { n: "100%", l: "ELD compliant" },
            { n: "CLT",  l: "Charlotte, NC HQ" },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <div className="font-display font-black text-white mb-0.5" style={{ fontSize: "2rem", lineHeight: 1 }}>{n}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
