import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConvexClerkProvider from "./providers/ConvexClerkProviders";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fittness Trainer",
  description: "A modern fittness AI platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <div className="fixed inset-0 -z-1">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050508,#09090f,#0e0d14,#09090f)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,120,20,0.1),transparent_65%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(60,20,80,0.2),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_40%,rgba(0,0,0,0.6)_100%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,130,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,130,50,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
          <div className="pt-24 grow">{children}</div>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
