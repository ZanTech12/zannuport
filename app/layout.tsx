import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zannu Adedeji Sunday | Full-Stack IoT & Embedded Systems Engineer",
    template: "%s | Zannu Adedeji Sunday",
  },
  description: "Bridging the gap between physical hardware and modern software. Building practical technology solutions spanning EdTech, IoT, Edge AI, and Automation.",
  keywords: ["IoT", "Embedded Systems", "ESP32", "Next.js", "Computer Vision", "Edge AI", "Zannu Adedeji", "Software Engineer"],
  authors: [{ name: "Zannu Adedeji Sunday" }],
  openGraph: {
    title: "Zannu Adedeji Sunday | Full-Stack IoT & Embedded Systems Engineer",
    description: "Bridging the gap between physical hardware and modern software. Building practical technology solutions spanning EdTech, IoT, Edge AI, and Automation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zannu Adedeji Sunday | Full-Stack IoT & Embedded Systems Engineer",
    description: "Bridging the gap between physical hardware and modern software.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-300 font-sans relative overflow-x-hidden">
        
        {/* Global Ambient Tech Grid Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)] opacity-50"></div>
          {/* Top Glowing Orb */}
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
          {/* Bottom Glowing Orb */}
          <div className="absolute bottom-[-200px] right-0 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        </div>

        {/* Global Navbar */}
        <Navbar />

        {/* Main Content Wrapper */}
        <div className="relative z-10 flex-grow w-full flex flex-col">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />

      </body>
    </html>
  );
}