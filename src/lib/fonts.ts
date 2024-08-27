import { GeistSans } from "geist/font/sans";
import { Manrope } from "next/font/google";

export const manrope = Manrope({
   subsets: ["latin"],
   preload: true,
   variable: "--font-manrope"
});

export const geist = GeistSans;
