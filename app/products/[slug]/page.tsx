import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedText } from "@/components/ui/animated-underline-text-one"
import { AvivaFooter } from "@/components/aviva-footer"
import { CheckCircle, Shield, Settings } from "lucide-react"

// Product data based on AVIVA brochure
const products = {
  "air-handling-unit": {
    title: "Air Handling Unit (AHU)",
    category: "HVAC Systems",
    description:
      "Horizontal floor mounted AHU range from 500 CFM to 100,000 CFM for pharmaceutical, clean rooms, industrial buildings, hotels, and hospitals.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Double skin insulated body panel (25mm, 50mm thickness)",
      "Horizontally/Vertically Mounted with Single & Double Decker options",
      "Thermal Break/Non-Thermal profile section (Prevention of sweating)",
      "Clean Room Class maintenance by controlling particle count",
      "Environmental attack resistance with PPGI & PCGI fabrication",
      "BMS/Semi-BMS & Non-BMS system design & supply",
    ],
    specifications: {
      "Temperature Limit": "Min. 15°C to Max. 25°C",
      "RH Limit": "Min. 45% to Max. 60%",
      "Pressure Limit": "Min. 5 Pascal to Max. 100 Pascal",
      "CFM Range": "500 CFM to 100,000 CFM",
      "Panel Thickness": "25mm, 50mm",
      Material: "PPGI & PCGI coated panels",
    },
    applications: [
      "Pharmaceutical Industry",
      "Clean Rooms",
      "Industrial Buildings",
      "Hotels & Hospitals",
      "Research Facilities",
    ],
  },
  dehumidifier: {
    title: "Dehumidifier (DHU)",
    category: "HVAC Systems",
    description: "Low RH Unit applicable where minimum RH up to 5% and maximum RH is 45% is required.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "AHU In-Built Desiccant Dehumidifier System",
      "Silica bed, Air Heaters, DEX, Chilled Water provision",
      "Advanced electrical panel & PLC System with high safety features",
      "100% effective to achieve desired RH & Temperature",
      "Desiccant Silica Bed with rotation application",
      "Thermal Break profile section & 43mm panel thickness",
    ],
    specifications: {
      "Temperature Limit": "Min. 15°C to Max. 25°C",
      "RH Limit": "Min. 5% to Max. 45%",
      "Pressure Limit": "Min. 5 Pascal to Max. 100 Pascal",
      "Panel Thickness": "43mm",
      "Control System": "PLC with safety features",
    },
    applications: [
      "FBD/FBP/FBE (Fluid Bed Processing Equipment)",
      "Tablet Coating Machines",
      "Pellet Coating Machines",
      "VTD/Drier Systems",
      "Pharmaceutical Manufacturing",
    ],
  },
  "clean-room-panels": {
    title: "Clean Room Panels",
    category: "Clean Room Solutions",
    description:
      "Modular clean room wall and ceiling panels resistant to abrasion, chemicals, and reagents used for fumigation.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Resistant to abrasion, chemicals & reagents",
      "Non-combustible, non-shedding, water & fire retardant",
      "Low maintenance cost",
      "Hard & flexible in strength",
      "Metal frame in periphery",
      "Interconnecting profile installation",
    ],
    specifications: {
      "Panel Types": "PUF, Rock Wool, Honeycomb",
      Thickness: "40-150mm (varies by type)",
      "Maximum Length": "6000mm",
      "Standard Width": "1200mm",
      "Sheet Thickness": "0.5-1.2mm",
      Colors: "RAL 9002, 9001, 9010 or custom",
    },
    applications: [
      "Pharmaceutical Clean Rooms",
      "Research Laboratories",
      "Biotechnology Facilities",
      "Hospital Clean Areas",
      "Food Processing Facilities",
    ],
  },
  "clean-room-doors": {
    title: "Clean Room Doors",
    category: "Clean Room Solutions",
    description:
      "Custom-made clean room doors designed as per GMP standards for pharmaceutical, hospital, and commercial environments.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Prevention of cross contamination",
      "Minimum air leakages, withstand positive-negative air pressure",
      "GI powder coated/stainless steel construction",
      "Vision windows for easy see-through",
      "Available in standard & customizable sizes",
      "Multiple door types available",
    ],
    specifications: {
      "Sheet Thickness": "1mm GI/SS",
      "Door Types": "Single Leaf, Double Leaf, Sliding",
      "Infill Materials": "Honeycomb, PUF, Rockwool, Glass wool",
      "Frame Options": "GI Powder coated/Aluminum extruded",
      "Partition Compatibility": "50, 80, 100 & 150mm",
    },
    applications: [
      "Pharmaceutical Facilities",
      "Hospital Clean Areas",
      "Research Laboratories",
      "Biotechnology Plants",
      "Commercial Clean Environments",
    ],
  },
  "hepa-filters": {
    title: "HEPA Filters",
    category: "Filtration Systems",
    description: "High-efficiency particulate air filters for maintaining clean room standards and air quality.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "High-efficiency particulate removal",
      "Multiple filtration stages available",
      "Compatible with various HVAC systems",
      "Long service life",
      "Easy maintenance and replacement",
      "Various sizes and configurations",
    ],
    specifications: {
      Efficiency: "99.97% at 0.3 microns",
      "Filter Types": "Pre-filters, Fine filters, HEPA",
      Configurations: "Minipleat, Standard, Custom",
      Applications: "Terminal boxes, AHU integration",
    },
    applications: [
      "Clean Room Systems",
      "HVAC Air Handling Units",
      "Pharmaceutical Manufacturing",
      "Hospital Operating Rooms",
      "Laboratory Environments",
    ],
  },
  "laminar-air-flow": {
    title: "Laminar Air Flow (LAF)",
    category: "Clean Room Equipment",
    description:
      "Laminar air flow units providing unidirectional air flow for contamination control in critical environments.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Unidirectional air flow",
      "HEPA filtered air supply",
      "Stainless steel construction",
      "Easy to clean surfaces",
      "Variable speed control",
      "Low noise operation",
    ],
    specifications: {
      "Air Flow": "Vertical/Horizontal laminar flow",
      Construction: "Stainless steel SS-304",
      Filtration: "HEPA 99.97% efficiency",
      Control: "Variable speed with digital display",
    },
    applications: [
      "Pharmaceutical Dispensing",
      "Laboratory Work Stations",
      "Sterile Product Handling",
      "Research Applications",
      "Quality Control Testing",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <AnimatedText text={product.title} className="text-3xl lg:text-4xl font-bold leading-tight" />
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{product.description}</p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3 text-primary">
                  <Shield className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">GMP Compliant</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <Settings className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">Custom Solutions</span>
                </div>
              </div>
            </div>
            <div className="relative lg:justify-self-end">
              <div className="aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedText text="Key Features" className="text-3xl font-bold" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <AnimatedText text="Technical Specifications" className="text-3xl font-bold" />
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-start py-3 border-b border-border/50 last:border-b-0"
                      >
                        <span className="font-medium text-foreground flex-shrink-0 mr-4">{key}</span>
                        <span className="text-muted-foreground text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <AnimatedText text="Applications" className="text-3xl font-bold" />
                <div className="space-y-4">
                  {product.applications.map((application, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-background rounded-lg border hover:shadow-sm transition-shadow"
                    >
                      <div className="h-3 w-3 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Contact our experts for customized solutions and technical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-medium transition-colors inline-block"
              >
                Get Quote
              </Link>
              <Link
                href="tel:+917201872788"
                className="border border-primary-foreground/20 hover:bg-primary-foreground/10 px-8 py-4 rounded-lg font-medium transition-colors inline-block"
              >
                Call Now: +91 7201872788
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AvivaFooter />
    </main>
  )
}
