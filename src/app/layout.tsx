import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import "./globals.css";

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
      <html lang="en" className={`${GeistSans.variable}`}>
         <body className="min-h-screen bg-background font-sans subpixel-antialiased">
            {children}
         </body>
      </html>
   );
}
