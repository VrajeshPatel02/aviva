import type { Metadata } from "next";
import { Montserrat, Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import type React from "react"
import { Suspense } from "react"
import "./globals.css"
import Navbar from "@/components/Navbar"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AVIVA HVAC & Clean Room Industries - Professional HVAC Solutions",
  description:
    "Leading manufacturer and supplier of HVAC systems and clean room solutions for pharmaceutical, biotechnology, and industrial applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${manrope.variable} ${workSans.variable}`}>
        <Navbar />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}