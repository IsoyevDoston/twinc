"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 48,   suffix: "",    label: "States Covered",     desc: "All contiguous US" },
  { value: 99,   suffix: "%+",  label: "On-Time Delivery",   desc: "Verified by ELD data" },
  { value: 24,   suffix: "/7",  label: "Dispatch Support",   desc: "Always reachable" },
  { value: 100,  suffix: "%",   label: "ELD Compliant",      desc: "Every unit, every load" },
];

function useCountUp(target: number, started: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = target / (1600 / 16);
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setN(target); clearInterval(t); }
      else setN(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [target, started]);
  return n;
}

function StatItem({ value, suffix, label, desc, started }: { value: number; suffix: string; label: string; desc: string; started: boolean }) {
  const n = useCountUp(value, started);
  return (
    <div className="flex flex-col py-10 px-8">
      <div className="font-display font-bold mb-1" style={{ fontSize: "clamp(2.5rem,4vw,3.5rem)", color: "#fff", lineHeight: 1 }}>
        {n}<span style={{ color: "var(--orange)" }}>{suffix}</span>
      </div>
      <div className="text-sm font-semibold mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>{label}</div>
      <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{desc}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden" style={{ background: "var(--navy-900)" }}>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=60')", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          {stats.map((s) => <StatItem key={s.label} {...s} started={started} />)}
        </div>
      </div>
    </section>
  );
}
