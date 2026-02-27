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
            <div className="absolute inset-0 bg-[#060504]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,100,20,0.08),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(255,140,30,0.05),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_50%,rgba(0,0,0,0.8)_100%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,40,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,40,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,40,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,40,0.02)_1px,transparent_1px)] bg-[size:8px_8px]"></div>
          </div>
          <div className="pt-24 grow">{children}</div>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
