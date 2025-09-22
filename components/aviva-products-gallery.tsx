"use client"

import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4"

const avivaProducts: Gallery4Item[] = [
  {
    id: "air-handling-unit",
    title: "Air Handling Unit (AHU)",
    description:
      "Horizontal floor mounted AHU range from 500 CFM to 100,000 CFM for pharmaceutical and industrial applications with double skin insulated body and thermal break profile.",
    href: "#contact",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "dehumidifier",
    title: "Dehumidifier (DHU)",
    description:
      "Low RH units applicable for minimum RH up to 5% with built-in desiccant dehumidifier system using silica bed technology and PLC control system for 100% effective RH control.",
    href: "#contact",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "clean-room-panels",
    title: "Clean Room Panels",
    description:
      "Modular clean room wall and ceiling partitions resistant to chemicals and UV light. Chemical resistant, non-combustible, easy installation, and GMP compliant for pharmaceutical applications.",
    href: "#contact",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "clean-room-doors",
    title: "Clean Room Doors",
    description:
      "Custom-made clean room doors designed for prevention of cross contamination with minimum air leakage, vision windows, fire rated options, and GMP standards compliance.",
    href: "#contact",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "hepa-filters",
    title: "HEPA Filters",
    description:
      "High-efficiency particulate air filters for maintaining clean room classifications with 99.97% efficiency, various sizes available, long service life, and low pressure drop design.",
    href: "#contact",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "laminar-air-flow",
    title: "Laminar Air Flow Units",
    description:
      "Vertical and horizontal laminar air flow workstations providing ISO Class 5 clean air environment for critical pharmaceutical and biotechnology processes with HEPA filtration.",
    href: "#contact",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1080&q=80",
  },
]

export function AvivaProductsGallery() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <Gallery4
        title="Our Products & Solutions"
        description="Comprehensive range of HVAC and clean room equipment designed for pharmaceutical, biotechnology, and industrial applications with world-class quality and precision."
        items={avivaProducts}
      />
    </div>
  )
}
