export default function Ticker() {
  const items = [
    "Dry Van", "Cargo Van", "Power Only", "OTR Lanes",
    "Dedicated Routes", "Spot Freight", "Drop & Hook",
    "48 States", "Live Tracking", "ELD Compliant",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-3 border-y" style={{ background: "var(--surface)", borderColor: "var(--border-light)" }}>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-xs font-semibold uppercase px-6" style={{ color: "var(--navy-600)", letterSpacing: "0.1em" }}>
              {item}
            </span>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--orange)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
