import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AvivaFooter } from "@/components/aviva-footer"
import { Search } from "lucide-react"

// Comprehensive product data based on AVIVA brochure
const allProducts = [
  // HVAC Systems
  {
    slug: "air-handling-unit",
    title: "Air Handling Unit (AHU)",
    category: "HVAC Systems",
    description:
      "Horizontal floor mounted AHU range from 500 CFM to 100,000 CFM for pharmaceutical, clean rooms, industrial buildings, hotels, and hospitals.",
    image: "/air-handling-unit-hvac-system.jpg",
    features: ["500-100,000 CFM Range", "Double Skin Insulated", "BMS Compatible"],
    applications: ["Pharmaceutical", "Clean Rooms", "Hospitals"],
  },
  {
    slug: "dehumidifier",
    title: "Dehumidifier (DHU)",
    category: "HVAC Systems",
    description: "Low RH Unit applicable where minimum RH up to 5% and maximum RH is 45% is required.",
    image: "/dehumidifier-industrial-hvac.jpg",
    features: ["5-45% RH Range", "Desiccant System", "PLC Control"],
    applications: ["Pharmaceutical", "Coating Machines", "Drying Systems"],
  },
  {
    slug: "force-draft-ventilation",
    title: "Force Draft Ventilation (FDV)",
    category: "HVAC Systems",
    description:
      "Ventilation system for non-classified and non-controlled areas with single to three-stage filtration.",
    image: "/force-draft-ventilation-system-industrial.jpg",
    features: ["Multi-Stage Filtration", "Noiseless Operation", "Cost Effective"],
    applications: ["Industrial Areas", "Warehouses", "Production Facilities"],
  },
  {
    slug: "air-washer-system",
    title: "Air Washer System",
    category: "HVAC Systems",
    description: "Adiabatic cooling system using spray water for dust-free air delivery with temperature reduction.",
    image: "/air-washer-system-industrial-cooling.jpg",
    features: ["100% Fresh Air", "Adiabatic Cooling", "Dust Free Delivery"],
    applications: ["Secondary Packing", "Warehouses", "Production Areas"],
  },
  {
    slug: "fresh-air-system",
    title: "Fresh Air System",
    category: "HVAC Systems",
    description: "Treated fresh air unit (TFA) providing 100% fresh air delivery with ambient filtration.",
    image: "/fresh-air-system-hvac-unit.jpg",
    features: ["100% Fresh Air", "Single Skin Unit", "10 Micron Filter"],
    applications: ["Toilet Areas", "Staircase", "Service Floors"],
  },
  {
    slug: "exhaust-system",
    title: "Exhaust System",
    category: "HVAC Systems",
    description: "System for collecting unwanted odor, fumes, gases, and contaminated air for atmospheric discharge.",
    image: "/exhaust-system-industrial-ventilation.jpg",
    features: ["Multi-Stage Filtration", "Negative Pressure", "Odor Control"],
    applications: ["Sink Air Lock", "Washing Areas", "Corridors"],
  },
  {
    slug: "fan-coil-unit",
    title: "Fan Coil Unit (FCU)",
    category: "HVAC Systems",
    description: "Vertical fan coil unit for heating or cooling rooms without ducting connection.",
    image: "/fan-coil-unit-hvac-wall-mounted.jpg",
    features: ["Wall/Ceiling Mounted", "No Ducting Required", "Heating & Cooling"],
    applications: ["Hotels", "Apartments", "Commercial Buildings"],
  },

  // Clean Room Solutions
  {
    slug: "clean-room-panels",
    title: "Clean Room Panels",
    category: "Clean Room Solutions",
    description: "Modular clean room wall and ceiling panels resistant to abrasion, chemicals, and reagents.",
    image: "/clean-room-panels-modular-walls.jpg",
    features: ["Chemical Resistant", "Fire Retardant", "Low Maintenance"],
    applications: ["Pharmaceutical", "Biotechnology", "Research Labs"],
  },
  {
    slug: "clean-room-doors",
    title: "Clean Room Doors",
    category: "Clean Room Solutions",
    description: "Custom-made clean room doors designed as per GMP standards for contamination prevention.",
    image: "/clean-room-doors-pharmaceutical.jpg",
    features: ["GMP Standards", "Air Tight Seal", "Vision Windows"],
    applications: ["Pharmaceutical", "Hospitals", "Research Labs"],
  },
  {
    slug: "clean-room-glass-panels",
    title: "Clean Room Glass View Panels",
    category: "Clean Room Solutions",
    description: "Double glaze view panels suitable for partition walls maintaining temperature levels.",
    image: "/clean-room-glass-view-panel-window.jpg",
    features: ["Double Glazed", "Temperature Control", "Chemical Resistant"],
    applications: ["Clean Room Partitions", "Observation Windows", "Control Rooms"],
  },
  {
    slug: "corner-coving",
    title: "Corner Coving & 3D/2D Corner",
    category: "Clean Room Solutions",
    description: "Aluminum coving for wall panel to wall panel joints and ceiling panel connections.",
    image: "/aluminum-corner-coving-clean-room.jpg",
    features: ["Food Grade Material", "90 Degree Joints", "Easy Installation"],
    applications: ["Panel Joints", "Ceiling Connections", "Right Angle Walls"],
  },

  // Clean Room Equipment
  {
    slug: "laminar-air-flow",
    title: "Laminar Air Flow (LAF)",
    category: "Clean Room Equipment",
    description: "Unidirectional air flow units for contamination control in critical environments.",
    image: "/laminar-air-flow-clean-room-equipment.jpg",
    features: ["HEPA Filtered", "Unidirectional Flow", "Variable Speed"],
    applications: ["Pharmaceutical", "Laboratory", "Sterile Handling"],
  },
  {
    slug: "biosafety-cabinet",
    title: "Biosafety Cabinet",
    category: "Clean Room Equipment",
    description: "Enclosed workspace for safe handling of biological materials with HEPA filtration.",
    image: "/biosafety-cabinet-laboratory-equipment.jpg",
    features: ["HEPA Filtration", "Safe Handling", "Enclosed Workspace"],
    applications: ["Microbiology Labs", "Research Facilities", "Pharmaceutical"],
  },
  {
    slug: "pass-box",
    title: "Pass Box (Static & Dynamic)",
    category: "Clean Room Equipment",
    description: "Transfer chambers for materials between different cleanliness zones.",
    image: "/pass-box-clean-room-transfer-chamber.jpg",
    features: ["Static & Dynamic", "Interlocked Doors", "UV Sterilization"],
    applications: ["Material Transfer", "Clean Room Entry", "Contamination Control"],
  },
  {
    slug: "dispensing-booth",
    title: "Dispensing Booth",
    category: "Clean Room Equipment",
    description: "Controlled environment booth for pharmaceutical dispensing operations.",
    image: "/dispensing-booth-pharmaceutical-clean-room.jpg",
    features: ["Controlled Environment", "HEPA Filtration", "Operator Safety"],
    applications: ["Pharmaceutical Dispensing", "Powder Handling", "Chemical Weighing"],
  },
  {
    slug: "air-shower",
    title: "Air Shower",
    category: "Clean Room Equipment",
    description: "Personnel decontamination chamber with high-velocity HEPA filtered air.",
    image: "/air-shower-clean-room-personnel-decontamination.jpg",
    features: ["High Velocity Air", "HEPA Filtered", "Personnel Decontamination"],
    applications: ["Clean Room Entry", "Personnel Decontamination", "Particle Removal"],
  },

  // Filtration Systems
  {
    slug: "hepa-filters",
    title: "HEPA Filters",
    category: "Filtration Systems",
    description: "High-efficiency particulate air filters for maintaining clean room standards.",
    image: "/hepa-filters-air-filtration.jpg",
    features: ["99.97% Efficiency", "0.3 Micron", "Long Service Life"],
    applications: ["Clean Rooms", "HVAC Systems", "Operating Rooms"],
  },
  {
    slug: "pre-filters",
    title: "Pre-Filters",
    category: "Filtration Systems",
    description: "Primary filtration stage for protecting downstream HEPA filters.",
    image: "/pre-filters-hvac-air-filtration.jpg",
    features: ["Primary Filtration", "HEPA Protection", "Various Efficiencies"],
    applications: ["HVAC Pre-filtration", "AHU Systems", "Industrial Ventilation"],
  },
  {
    slug: "fine-filters",
    title: "Fine Filters",
    category: "Filtration Systems",
    description: "Secondary filtration stage with higher efficiency than pre-filters.",
    image: "/fine-filters-air-filtration-system.jpg",
    features: ["Secondary Filtration", "Higher Efficiency", "Compact Design"],
    applications: ["Clean Room Systems", "HVAC Secondary", "Laboratory Ventilation"],
  },
  {
    slug: "cartridge-filters",
    title: "Cartridge Filters",
    category: "Filtration Systems",
    description: "Replaceable cartridge filters for various air filtration applications.",
    image: "/cartridge-filters-replaceable-air-filtration.jpg",
    features: ["Replaceable Design", "Various Media", "Easy Maintenance"],
    applications: ["Industrial Processes", "Dust Collection", "Air Purification"],
  },

  // HVAC Accessories
  {
    slug: "cooling-coils",
    title: "Cooling Coils (DX & CHW)",
    category: "HVAC Accessories",
    description: "Direct expansion and chilled water cooling coils for air conditioning systems.",
    image: "/cooling-coils-hvac-dx-chw.jpg",
    features: ["DX & CHW Types", "Efficient Heat Transfer", "Corrosion Resistant"],
    applications: ["Air Conditioning", "HVAC Systems", "Process Cooling"],
  },
  {
    slug: "heating-coils",
    title: "Heating Coils (Hot Water & Steam)",
    category: "HVAC Accessories",
    description: "Hot water and steam heating coils for air heating applications.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Hot Water & Steam", "Efficient Heating", "Durable Construction"],
    applications: ["Air Heating", "HVAC Systems", "Process Heating"],
  },
  {
    slug: "dampers",
    title: "Dampers (Manual & Motorized)",
    category: "HVAC Accessories",
    description: "Manual and motorized dampers for air flow control in HVAC systems.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Manual & Motorized", "Air Flow Control", "Reliable Operation"],
    applications: ["Air Flow Control", "HVAC Systems", "Ventilation Control"],
  },
  {
    slug: "air-grills-diffusers",
    title: "Air Grills & Diffusers",
    category: "HVAC Accessories",
    description: "Air distribution grills and diffusers for uniform air flow distribution.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Uniform Distribution", "Various Patterns", "Adjustable Flow"],
    applications: ["Air Distribution", "HVAC Outlets", "Ventilation Systems"],
  },
  {
    slug: "ducting",
    title: "HVAC Ducting",
    category: "HVAC Accessories",
    description: "Galvanized and stainless steel ducting for air distribution systems.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["GI & SS Options", "Various Sizes", "Insulated Available"],
    applications: ["Air Distribution", "HVAC Systems", "Ventilation Networks"],
  },
  {
    slug: "blowers",
    title: "Blowers (Direct Driven)",
    category: "HVAC Accessories",
    description: "Direct driven centrifugal blowers for air movement applications.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Direct Driven", "High Efficiency", "Low Maintenance"],
    applications: ["Air Movement", "HVAC Systems", "Industrial Ventilation"],
  },
]

const categories = [
  "All Products",
  "HVAC Systems",
  "Clean Room Solutions",
  "Clean Room Equipment",
  "Filtration Systems",
  "HVAC Accessories",
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mt-32">
            <h1 className="heading">Our Products & Solutions</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Comprehensive range of HVAC systems, clean room solutions, and industrial equipment for pharmaceutical,
              biotechnology, and manufacturing industries.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10 pr-4 py-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filters */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All Products" ? "default" : "outline"}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {allProducts.map((product) => (
                <Card key={product.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge variant="secondary" className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm">
                      {product.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">{product.description}</p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.slice(0, 2).map((app, index) => (
                          <span key={index} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {app}
                          </span>
                        ))}
                        {product.applications.length > 2 && (
                          <span className="text-xs text-muted-foreground">+{product.applications.length - 2} more</span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button asChild className="flex-1">
                        <Link href={`/products/${product.slug}`}>View Details</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/contact">Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Need Custom Solutions?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our engineering team can design and manufacture custom HVAC and clean room solutions tailored to your
              specific requirements and industry standards.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Custom Design</h3>
                <p className="text-sm opacity-90">
                  Tailored solutions based on your specific requirements and site conditions.
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <h3 className="font-semibold mb-3">GMP Compliance</h3>
                <p className="text-sm opacity-90">
                  All products designed and manufactured as per GMP and industry standards.
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Complete Support</h3>
                <p className="text-sm opacity-90">From design to installation and after-sales service support.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="tel:+917201872788">Call: +91 7201872788</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AvivaFooter />
    </main>
  )
}
