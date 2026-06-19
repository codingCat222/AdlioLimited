import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroCanvas from "@/components/home/HeroCanvas";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Adlio Limited | Building Smarter Businesses Through Technology",
  description: "Adlio Limited is a forward-thinking technology company dedicated to delivering innovative software solutions that help businesses streamline operations, improve efficiency, enhance customer experiences, and achieve sustainable growth.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-[#0F172A] selection:bg-[#3B82F6] selection:text-white`}>
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
          <HeroCanvas />
        </div>
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}