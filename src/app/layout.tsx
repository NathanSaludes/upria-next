import { geist, manrope } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Upria v2",
   description: "Upria version 2 by Nathaniel Saludes",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={`${geist.variable} ${manrope.variable}`}>
         <body className="min-h-screen bg-background font-sans subpixel-antialiased">
            {children}
         </body>
      </html>
   );
}
