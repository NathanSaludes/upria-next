import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Upria v2",
  description: "Upria version 2 by Nathaniel Saludes"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className="min-h-screen bg-background font-sans subpixel-antialiased">
        {children}
      </body>
    </html>
  );
}
