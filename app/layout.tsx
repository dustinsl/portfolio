import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plexmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dustin Long — Full-Stack AI, Dynamics 365 & Azure",
  description:
    "Full-stack developer specializing in Dynamics 365, Power Platform, and Azure — rebuilding enterprise systems that have drifted past their intended configuration, and building applied-AI features on top of them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${plexMono.variable}`}>
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
