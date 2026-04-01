import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Creative Counseling by FF",
  description: "Elite consulting for storytellers building careers, protecting ideas, and taking their work to industry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
