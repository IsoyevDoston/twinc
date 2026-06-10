"use client";

/* --------------------------------------------------
   SVG winding-road values section (allgoodtrucking.com style)
   ViewBox 1400 × 1080 — road centered around x=700
   Nodes alternate right (860) / left (540)
-------------------------------------------------- */

const NAVY   = "#0D1F3C";
const ORANGE = "#E8601A";
const MUTED  = "#6B7280";

const NR   = 38;   // node circle radius
const TL   = 88;   // tail line length
const BR   = 11;   // bullet radius
const PAD  = 22;   // gap between bullet and text

// Cubic-bezier winding road ending well inside the 1080px viewBox
const ROAD =
  "M 700 30 C 700 100 980 155 860 245 C 740 335 420 370 545 465 C 670 560 980 600 860 690 C 740 780 420 820 545 910 C 650 975 700 1040 700 1070";

const values = [
  {
    n: "01", cx: 860, cy: 245, side: "right" as const,
    title: "24/7 Dispatch Support",
    lines: ["Our team answers any hour, 7 days a week.", "Always reachable — no voicemail."],
  },
  {
    n: "02", cx: 545, cy: 465, side: "left" as const,
    title: "Modern Equipment",
    lines: ["Volvo VNL 860 and Freightliner Cascadia.", "No old iron — fully ELD compliant."],
  },
  {
    n: "03", cx: 860, cy: 690, side: "right" as const,
    title: "48-State Coverage",
    lines: ["Long-haul and regional across all 48", "contiguous states. We run your lanes."],
  },
  {
    n: "04", cx: 545, cy: 910, side: "left" as const,
    title: "Clean, Reliable Execution",
    lines: ["On-time delivery, clean paperwork,", "and full visibility on every load."],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#EAEAEA" }} className="pt-16 pb-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-center font-display font-bold mb-4"
          style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", color: NAVY }}
        >
          Our Values
        </h2>
        <p className="text-center text-sm mb-2" style={{ color: MUTED }}>
          What sets TW INC apart on every lane, every load.
        </p>
      </div>

      <svg
        viewBox="0 0 1400 1080"
        width="100%"
        style={{ display: "block", maxWidth: 1200, margin: "0 auto" }}
        aria-hidden
      >
        {/* ── Winding road ── */}
        <path
          d={ROAD}
          stroke={NAVY}
          strokeWidth="44"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {values.map(({ n, cx, cy, side, title, lines }) => {
          const dir     = side === "right" ? 1 : -1;
          const tsX     = cx + dir * NR;            // tail start
          const teX     = tsX + dir * TL;           // tail end
          const bX      = teX + dir * BR;           // bullet center
          const textX   = bX + dir * (BR + PAD);   // text anchor
          const anchor  = side === "right" ? "start" : "end";
          const accentX = side === "right" ? textX - 10 : textX + 10;

          return (
            <g key={n}>
              {/* Tail line */}
              <line
                x1={tsX} y1={cy} x2={teX} y2={cy}
                stroke={NAVY} strokeWidth="9" strokeLinecap="round"
              />
              {/* Bullet dot */}
              <circle cx={bX} cy={cy} r={BR} fill={NAVY} />

              {/* Node circle + number */}
              <circle cx={cx} cy={cy} r={NR} fill={ORANGE} />
              <text
                x={cx} y={cy}
                textAnchor="middle" dominantBaseline="central"
                fill="#fff" fontSize="20" fontWeight="700"
                fontFamily="Montserrat, sans-serif"
              >
                {n}
              </text>

              {/* Orange accent bar (road-facing side of text) */}
              <line
                x1={accentX} y1={cy - 28}
                x2={accentX} y2={cy + 38}
                stroke={ORANGE} strokeWidth="4"
              />

              {/* Title */}
              <text
                x={textX} y={cy - 10}
                textAnchor={anchor}
                fill={NAVY} fontSize="22" fontWeight="700"
                fontFamily="Montserrat, sans-serif"
              >
                {title}
              </text>

              {/* Description lines */}
              {lines.map((line, i) => (
                <text
                  key={i}
                  x={textX} y={cy + 18 + i * 22}
                  textAnchor={anchor}
                  fill={MUTED} fontSize="17"
                  fontFamily="Inter, sans-serif"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </section>
  );
}
