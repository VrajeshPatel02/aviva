import type { Metadata } from "next";
import "./globals.css";
import type React from "react"
import { Suspense } from "react"
import Navbar from "@/components/Navbar"
import LoaderOverlay from "@/components/LoaderOverlay"

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
      <body>
        {/* <LoaderOverlay /> */}
        <Suspense fallback={null}>
          <Navbar />
          {children}
        </Suspense>
      </body>
    </html>
  )
}