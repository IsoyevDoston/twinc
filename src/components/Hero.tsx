"use client";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 560 }}>
      {/* Aerial view: US semi truck on winding forest road */}
      <img
        src="https://images.pexels.com/photos/6563903/pexels-photo-6563903.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
        alt="TW INC truck on open highway"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Very light gradient — photo stays nearly full bleed */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(5,12,28,0.50) 72%, rgba(5,12,28,0.85) 100%)",
        }}
      />

      {/* Text at bottom — PLIO.io style */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-10 md:pb-14">
        <h1
          className="font-display font-bold text-white mb-3"
          style={{
            fontSize: "clamp(2.8rem, 6.5vw, 6.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
          }}
        >
          Freight Moved.
          <br />
          On Time,{" "}
          <span style={{ color: "var(--orange)" }}>Every Time.</span>
        </h1>
        <p
          className="text-base md:text-lg max-w-lg"
          style={{ color: "rgba(255,255,255,0.65)", fontWeight: 300 }}
        >
          US OTR carrier based in Charlotte, NC. Dry van, cargo van, and power-only
          across all 48 states.
        </p>
      </div>
    </section>
  );
}
