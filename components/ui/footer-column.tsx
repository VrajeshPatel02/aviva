import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

interface FooterColumnProps {
  title: string
  links?: Array<{
    label: string
    href: string
  }>
  children?: React.ReactNode
}

export function FooterColumn({ title, links, children }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {links && (
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="text-slate-300 hover:text-white transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {children && <div className="text-slate-300">{children}</div>}
    </div>
  )
}

export function SocialLinks() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <Link
            key={index}
            href={social.href}
            className="text-slate-300 hover:text-white transition-colors duration-200"
            aria-label={social.label}
          >
            <Icon className="w-5 h-5" />
          </Link>
        )
      })}
    </div>
  )
}

export function ContactInfo() {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3 text-slate-300">
        <MapPin className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm">123 Industrial Ave, Mumbai, India</span>
      </div>
      <div className="flex items-center space-x-3 text-slate-300">
        <Phone className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm">+91 98765 43210</span>
      </div>
      <div className="flex items-center space-x-3 text-slate-300">
        <Mail className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm">info@avivahvac.com</span>
      </div>
    </div>
  )
}
