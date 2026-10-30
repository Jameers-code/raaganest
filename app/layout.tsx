import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RaagaNest Boys Hostel | Near Vishnu College South Gate, Bhimavaram",
  description:
    "Modern AC and Non-AC student accommodation near Vishnu College South Gate, Bhimavaram. Wholesome Andhra meals, 24/7 security, high-speed Wi-Fi, and complete power backup.",
  keywords:
    "RaagaNest hostel, RaagaNest boys hostel Bhimavaram, hostel near Vishnu College, student hostel Bhimavaram, AC hostel Bhimavaram",
  openGraph: {
    title: "RaagaNest Boys Hostel | Near Vishnu College, Bhimavaram",
    description:
      "Affordable, safe, and modern student hostel opposite Vishnu College South Gate. Book a visit today.",
    url: "https://raaganest.vercel.app",
    siteName: "RaagaNest Boys Hostel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-clip min-h-screen bg-[#07080c] selection:bg-key-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
