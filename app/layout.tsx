import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dustin Long — Full-Stack Developer | Dynamics 365, Power Platform & Azure",
  description:
    "Full-stack developer specializing in Dynamics 365, Power Platform, and Azure — rebuilding enterprise systems that have drifted past their intended configuration, and building applied-AI features on top of them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-surface text-ink">
        {children}
      </body>
    </html>
  );
}
