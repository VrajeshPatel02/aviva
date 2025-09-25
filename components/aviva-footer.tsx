"use client"

import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const avivaData = {
  company: {
    name: "AVIVA HVAC & Clean Room Industries",
    description:
      "Manufacturing, supplying, and installing world-class HVAC systems and clean room solutions for pharmaceutical, biotechnology, and industrial applications.",
    logo: "/images/aviva-logo.png",
  },
  contact: {
    email: "Info@avivaindustries.in",
    phone: "+91 7201872788",
    address: "Survey No. 257/16, Daman Industrial Estate Near Fire Station Somnath Kachigam, Daman 396210",
  },
  services: {
    hvac: [
      { text: "Air Handling Unit (AHU)", href: "/services/ahu" },
      { text: "Dehumidifier (DHU)", href: "/services/dhu" },
      { text: "Force Draft Ventilation", href: "/services/fdv" },
      { text: "Air Washer System", href: "/services/air-washer" },
      { text: "Fresh Air System", href: "/services/fresh-air" },
      { text: "Exhaust System", href: "/services/exhaust" },
    ],
    cleanroom: [
      { text: "Modular Clean Room", href: "/services/modular-cleanroom" },
      { text: "Clean Room Panels", href: "/services/panels" },
      { text: "Clean Room Doors", href: "/services/doors" },
      { text: "HEPA Filters", href: "/services/hepa-filters" },
      { text: "Laminar Air Flow", href: "/services/laf" },
      { text: "Bio Safety Cabinet", href: "/services/bio-safety" },
    ],
  },
  quickLinks: [
    { text: "About Us", href: "/about" },
    { text: "Our Products", href: "/products" },
    { text: "Industries We Serve", href: "/industries" },
    { text: "Quality Policy", href: "/quality" },
    { text: "Careers", href: "/careers" },
    { text: "Blog", href: "/blog" },
  ],
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

const contactInfo = [
  { icon: Mail, text: avivaData.contact.email, href: `mailto:${avivaData.contact.email}` },
  { icon: Phone, text: avivaData.contact.phone, href: `tel:${avivaData.contact.phone}` },
  { icon: MapPin, text: avivaData.contact.address, isAddress: true },
]

export function AvivaFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={avivaData.company.logo || "/placeholder.svg"}
                alt="AVIVA Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl font-bold text-white">AVIVA</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">{avivaData.company.description}</p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-slate-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-800"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* HVAC Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">HVAC Services</h3>
            <ul className="space-y-3">
              {avivaData.services.hvac.map(({ text, href }) => (
                <li key={text}>
                  <Link href={href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clean Room Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent">Clean Room Services</h3>
            <ul className="space-y-3">
              {avivaData.services.cleanroom.map(({ text, href }) => (
                <li key={text}>
                  <Link href={href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact & Info</h3>
            <ul className="space-y-4 mb-6">
              {contactInfo.map(({ icon: Icon, text, href, isAddress }) => (
                <li key={text}>
                  {href ? (
                    <Link
                      href={href}
                      className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
                    >
                      <Icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-sm">{text}</span>
                    </Link>
                  ) : (
                    <div className="flex items-start gap-3 text-slate-300">
                      <Icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      {isAddress ? (
                        <address className="text-sm not-italic">{text}</address>
                      ) : (
                        <span className="text-sm">{text}</span>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div>
              <h4 className="font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {avivaData.quickLinks.slice(0, 4).map(({ text, href }) => (
                  <li key={text}>
                    <Link href={href} className="text-slate-300 hover:text-white transition-colors text-sm">
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; 2025 AVIVA HVAC & Clean Room Industries. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
