"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Phone, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const hvacProducts = [
  {
    name: "Air Handling Unit (AHU)",
    href: "/products/air-handling-unit",
    description: "Regulates air flow in pharmaceutical, clean rooms, and industrial buildings",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Dehumidifier (DHU)",
    href: "/products/dehumidifier",
    description: "Controls humidity levels with desiccant technology for optimal air quality",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Force Draft Ventilation",
    href: "/products/force-draft-ventilation",
    description: "Maintains ventilation in non-classified areas with multi-stage filtration",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Air Washer System",
    href: "/products/air-washer-system",
    description: "Provides dust-free 100% fresh air with adiabatic cooling",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Fresh Air System",
    href: "/products/fresh-air-system",
    description: "Treated fresh air units for positive pressure delivery",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Exhaust System",
    href: "/products/exhaust-system",
    description: "Removes unwanted odors, fumes, and contaminated air",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Fan Coil Unit (FCU)",
    href: "/products/fan-coil-unit",
    description: "Heating and cooling units for residential and commercial spaces",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Air Conditioning",
    href: "/products/air-conditioning",
    description: "Complete air conditioning solutions for various applications",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const hvacAccessories = [
  {
    name: "Cooling Coils (DX & CHW)",
    href: "/products/cooling-coils",
    description: "Direct expansion and chilled water cooling coils",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Heating Coils",
    href: "/products/heating-coils",
    description: "Hot water and steam heating coils for air handling units",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Dampers (Manual & Motorized)",
    href: "/products/dampers",
    description: "Air flow control dampers for HVAC systems",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "HEPA Terminal Box",
    href: "/products/hepa-terminal-box",
    description: "High-efficiency particulate air filtration terminals",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Return Air Riser",
    href: "/products/return-air-riser",
    description: "Return air management systems for clean rooms",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Pre-filters",
    href: "/products/pre-filters",
    description: "Primary filtration for HVAC air handling systems",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Fine Filters",
    href: "/products/fine-filters",
    description: "Secondary filtration for improved air quality",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "HEPA Filters",
    href: "/products/hepa-filters",
    description: "High-efficiency particulate air filters for clean rooms",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Air Grills & Diffusers",
    href: "/products/air-grills-diffusers",
    description: "Air distribution grills and diffusers for optimal airflow",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Air Heaters",
    href: "/products/air-heaters",
    description: "Electric and gas air heating elements",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Blower Direct Driven",
    href: "/products/blower-direct-driven",
    description: "Direct drive blowers for air handling units",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ducting",
    href: "/products/ducting",
    description: "HVAC ductwork for air distribution systems",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Insulation Materials",
    href: "/products/insulation",
    description: "Thermal insulation for HVAC systems",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Electrical Panels",
    href: "/products/electrical-panels",
    description: "Control panels for HVAC system automation",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "HVAC Sensors",
    href: "/products/hvac-sensors",
    description: "Temperature, humidity, and pressure sensors",
    image: "/placeholder.svg?height=60&width=60",
  },
]

const cleanRoomProducts = [
  {
    name: "Modular Wall Partition",
    href: "/products/modular-wall-partition",
    description: "Chemical resistant modular wall panels for clean rooms",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Modular Ceiling Partition",
    href: "/products/modular-ceiling-partition",
    description: "Self-suspended ceiling panels with integrated systems",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Modular Raiser Partition",
    href: "/products/modular-raiser-partition",
    description: "Return air raiser panels with leak-proof installation",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Glass View Panel",
    href: "/products/glass-view-panel",
    description: "Double glazed view panels for clean room visibility",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Clean Room Doors",
    href: "/products/clean-room-doors",
    description: "GMP standard doors with minimal air leakage",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Corner Coving",
    href: "/products/corner-coving",
    description: "Aluminum coving for wall and ceiling joints",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const cleanRoomEquipment = [
  {
    name: "Static Pass Box",
    href: "/products/static-pass-box",
    description: "Material transfer chambers for contamination control",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Dynamic Pass Box",
    href: "/products/dynamic-pass-box",
    description: "Automated pass-through systems with interlocking",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Laminar Air Flow (LAF)",
    href: "/products/laminar-air-flow",
    description: "Unidirectional air flow workstations",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "HLAF",
    href: "/products/hlaf",
    description: "Horizontal laminar air flow systems",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Sampling/Dispensing Booth",
    href: "/products/sampling-dispensing-booth",
    description: "Controlled environment booths for material handling",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Biosafety Cabinet",
    href: "/products/biosafety-cabinet",
    description: "Biological safety cabinets for laboratory protection",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Dust Collector",
    href: "/products/dust-collector",
    description: "Industrial dust collection and filtration systems",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Industrial Heavy Duty Racks",
    href: "/products/industrial-racks",
    description: "Heavy-duty storage racks for industrial applications",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lockers & Cabinets",
    href: "/products/lockers-cabinets",
    description: "Storage solutions for clean room environments",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Air Shower",
    href: "/products/air-shower",
    description: "Personnel decontamination chambers",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Fume Hood",
    href: "/products/fume-hood",
    description: "Laboratory fume extraction systems",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Modular Laboratory Furniture",
    href: "/products/laboratory-furniture",
    description: "Complete laboratory furniture solutions",
    image: "/placeholder.svg?height=60&width=60",
  },  
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navbarBg = isHomePage
    ? isScrolled || isHovered
      ? "bg-white/95 backdrop-blur-md shadow-lg"
      : "bg-white/10 backdrop-blur-md"
    : "bg-white shadow-lg"

  const textColor = isHomePage ? (isScrolled || isHovered ? "text-gray-900" : "text-white") : "text-gray-900"

  const logoTextColor = isHomePage ? (isScrolled || isHovered ? "text-primary" : "text-white") : "text-primary"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHomePage ? "border-b border-white/10" : "border-b border-gray-200",
        navbarBg,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="border-b border-white/10 hidden lg:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-end space-x-6 text-sm">
            <div className={cn("flex items-center space-x-1 transition-colors", textColor)}>
              <Phone className="w-4 h-4" />
              <span>+91 7201872788</span>
            </div>
            <div className={cn("flex items-center space-x-1 transition-colors", textColor)}>
              <Mail className="w-4 h-4" />
              <span>info@avivaindustries.in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot_2025-09-19_191943-removebg-preview%281%29-cRUwDAG1YuxqM0eZyjdOQXHxofPYSG.png"
              alt="AVIVA Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className={cn("text-xl font-bold transition-colors", logoTextColor)}>AVIVA</h1>
              <p
                className={cn(
                  "text-xs transition-colors",
                  isHomePage ? (isScrolled || isHovered ? "text-gray-600" : "text-white/80") : "text-gray-600",
                )}
              >
                HVAC & CLEAN ROOM INDUSTRIES
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("bg-transparent hover:bg-white/10 transition-colors", textColor)}>
                  HVAC
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[900px] grid-cols-2 gap-8 p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">Products</h3>
                      <div className="grid gap-3">
                        {hvacProducts.map((product) => (
                          <NavigationMenuLink
                            key={product.name}
                            href={product.href}
                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                            />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                                {product.name}
                              </div>
                              <div className="text-xs text-gray-600 mt-1 line-clamp-2">{product.description}</div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-4">Accessories</h3>
                      <div className="grid gap-2 max-h-96 overflow-y-auto pr-2">
                        {hvacAccessories.map((accessory) => (
                          <NavigationMenuLink
                            key={accessory.name}
                            href={accessory.href}
                            className="group flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                          >
                            <img
                              src={accessory.image || "/placeholder.svg"}
                              alt={accessory.name}
                              className="w-8 h-8 object-cover rounded flex-shrink-0"
                            />
                            <div className="flex-1">
                              <div className="text-xs font-medium text-gray-900 group-hover:text-primary transition-colors">
                                {accessory.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{accessory.description}</div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("bg-transparent hover:bg-white/10 transition-colors", textColor)}>
                  Clean Room
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[900px] grid-cols-2 gap-8 p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">Products</h3>
                      <div className="grid gap-3">
                        {cleanRoomProducts.map((product) => (
                          <NavigationMenuLink
                            key={product.name}
                            href={product.href}
                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                            />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                                {product.name}
                              </div>
                              <div className="text-xs text-gray-600 mt-1 line-clamp-2">{product.description}</div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-4">Equipment</h3>
                      <div className="grid gap-2 max-h-96 overflow-y-auto pr-2">
                        {cleanRoomEquipment.map((equipment) => (
                          <NavigationMenuLink
                            key={equipment.name}
                            href={equipment.href}
                            className="group flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                          >
                            <img
                              src={equipment.image || "/placeholder.svg"}
                              alt={equipment.name}
                              className="w-8 h-8 object-cover rounded flex-shrink-0"
                            />
                            <div className="flex-1">
                              <div className="text-xs font-medium text-gray-900 group-hover:text-primary transition-colors">
                                {equipment.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{equipment.description}</div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className={cn("px-4 py-2 hover:text-primary transition-colors", textColor)}>
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" className={cn("px-4 py-2 hover:text-primary transition-colors", textColor)}>
                  Contact
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" className={cn("px-4 py-2 hover:text-primary transition-colors", textColor)}>
                  Blog
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button size="sm" className="hidden md:flex bg-primary hover:bg-primary/90 text-white">
                Get Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={cn("lg:hidden p-2 transition-colors", textColor)}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              {/* Contact info for mobile */}
              <div className="space-y-2 pb-4 border-b border-white/20">
                <div className={cn("flex items-center space-x-2 text-sm", textColor)}>
                  <Phone className="w-4 h-4" />
                  <span>+91 7201872788</span>
                </div>
                <div className={cn("flex items-center space-x-2 text-sm", textColor)}>
                  <Mail className="w-4 h-4" />
                  <span>info@avivaindustries.in</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <div className={cn("font-semibold text-lg", textColor)}>HVAC</div>
                  <div className="pl-4 space-y-2">
                    <div className={cn("text-sm font-medium text-primary overflow-auto", textColor)}>Products</div>
                    {hvacProducts.slice(0, 4).map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className={cn("block text-sm pl-2 py-1 hover:text-primary transition-colors", textColor)}
                        onClick={closeMobileMenu}
                      >
                        {product.name}
                      </Link>
                    ))}
                    <div className={cn("text-sm font-medium text-accent mt-3", textColor)}>Accessories</div>
                    {hvacAccessories.slice(0, 4).map((accessory) => (
                      <Link
                        key={accessory.name}
                        href={accessory.href}
                        className={cn("block text-sm pl-2 py-1 hover:text-primary transition-colors", textColor)}
                        onClick={closeMobileMenu}
                      >
                        {accessory.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className={cn("font-semibold text-lg", textColor)}>Clean Room</div>
                  <div className="pl-4 space-y-2">
                    <div className={cn("text-sm font-medium text-primary", textColor)}>Products</div>
                    {cleanRoomProducts.slice(0, 3).map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className={cn("block text-sm pl-2 py-1 hover:text-primary transition-colors", textColor)}
                        onClick={closeMobileMenu}
                      >
                        {product.name}
                      </Link>
                    ))}
                    <div className={cn("text-sm font-medium text-accent mt-3", textColor)}>Equipment</div>
                    {cleanRoomEquipment.slice(0, 3).map((equipment) => (
                      <Link
                        key={equipment.name}
                        href={equipment.href}
                        className={cn("block text-sm pl-2 py-1 hover:text-primary transition-colors", textColor)}
                        onClick={closeMobileMenu}
                      >
                        {equipment.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/about"
                  className={cn("hover:text-primary transition-colors font-medium", textColor)}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={cn("hover:text-primary transition-colors font-medium", textColor)}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className={cn("hover:text-primary transition-colors font-medium", textColor)}
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>

                <Link href="/contact" onClick={closeMobileMenu}>
                  <Button size="sm" className="w-fit bg-primary hover:bg-primary/90 text-white mt-4">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
