import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TW INC — US OTR Carrier | Charlotte, NC",
  description: "TW INC is a licensed US OTR carrier based in Charlotte, NC operating Volvo and Freightliner fleets. Dry van, cargo van, and power only. DOT: 3860157 | MC: 1409884.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
