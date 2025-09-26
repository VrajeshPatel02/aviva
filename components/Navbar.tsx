"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Phone, Mail, Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const hvacProducts = [
  {
    name: "Air Handling Unit (AHU)",
    href: "/products/air-handling-unit",
    description: "Regulates air flow in pharmaceutical, clean rooms, and industrial buildings",
  },
  {
    name: "Dehumidifier (DHU)",
    href: "/products/dehumidifier",
    description: "Controls humidity levels with desiccant technology for optimal air quality",
  },
  {
    name: "Force Draft Ventilation",
    href: "/products/force-draft-ventilation",
    description: "Maintains ventilation in non-classified areas with multi-stage filtration",
  },
  {
    name: "Air Washer System",
    href: "/products/air-washer-system",
    description: "Provides dust-free 100% fresh air with adiabatic cooling",
  },
  {
    name: "Fresh Air System",
    href: "/products/fresh-air-system",
    description: "Treated fresh air units for positive pressure delivery",
  },
  {
    name: "Exhaust System",
    href: "/products/exhaust-system",
    description: "Removes unwanted odors, fumes, and contaminated air",
  },
  {
    name: "Fan Coil Unit (FCU)",
    href: "/products/fan-coil-unit",
    description: "Heating and cooling units for residential and commercial spaces",
  },
  {
    name: "Air Conditioning",
    href: "/products/air-conditioning",
    description: "Complete air conditioning solutions for various applications",
  },
]

const hvacAccessories = [
  {
    name: "Cooling Coils (DX & CHW)",
    href: "/products/cooling-coils",
    description: "Direct expansion and chilled water cooling coils",
  },
  {
    name: "Heating Coils",
    href: "/products/heating-coils",
    description: "Hot water and steam heating coils for air handling units",
  },
  {
    name: "Dampers (Manual & Motorized)",
    href: "/products/dampers",
    description: "Air flow control dampers for HVAC systems",
  },
  {
    name: "HEPA Terminal Box",
    href: "/products/hepa-terminal-box",
    description: "High-efficiency particulate air filtration terminals",
  },
  {
    name: "Return Air Riser",
    href: "/products/return-air-riser",
    description: "Return air management systems for clean rooms",
  },
  {
    name: "Pre-filters",
    href: "/products/pre-filters",
    description: "Primary filtration for HVAC air handling systems",
  },
  {
    name: "Fine Filters",
    href: "/products/fine-filters",
    description: "Secondary filtration for improved air quality",
  },
  {
    name: "HEPA Filters",
    href: "/products/hepa-filters",
    description: "High-efficiency particulate air filters for clean rooms",
  },
  {
    name: "Air Grills & Diffusers",
    href: "/products/air-grills-diffusers",
    description: "Air distribution grills and diffusers for optimal airflow",
  },
  {
    name: "Air Heaters",
    href: "/products/air-heaters",
    description: "Electric and gas air heating elements",
  },
  {
    name: "Blower Direct Driven",
    href: "/products/blower-direct-driven",
    description: "Direct drive blowers for air handling units",
  },
  {
    name: "Ducting",
    href: "/products/ducting",
    description: "HVAC ductwork for air distribution systems",
  },
  {
    name: "Insulation Materials",
    href: "/products/insulation",
    description: "Thermal insulation for HVAC systems",
  },
  {
    name: "Electrical Panels",
    href: "/products/electrical-panels",
    description: "Control panels for HVAC system automation",
  },
  {
    name: "HVAC Sensors",
    href: "/products/hvac-sensors",
    description: "Temperature, humidity, and pressure sensors",
  },
]

const cleanRoomProducts = [
  {
    name: "Modular Wall Partition",
    href: "/products/modular-wall-partition",
    description: "Chemical resistant modular wall panels for clean rooms",
  },
  {
    name: "Modular Ceiling Partition",
    href: "/products/modular-ceiling-partition",
    description: "Self-suspended ceiling panels with integrated systems",
  },
  {
    name: "Modular Raiser Partition",
    href: "/products/modular-raiser-partition",
    description: "Return air raiser panels with leak-proof installation",
  },
  {
    name: "Glass View Panel",
    href: "/products/glass-view-panel",
    description: "Double glazed view panels for clean room visibility",
  },
  {
    name: "Clean Room Doors",
    href: "/products/clean-room-doors",
    description: "GMP standard doors with minimal air leakage",
  },
  {
    name: "Corner Coving",
    href: "/products/corner-coving",
    description: "Aluminum coving for wall and ceiling joints",
  },
]

const cleanRoomEquipment = [
  {
    name: "Static Pass Box",
    href: "/products/static-pass-box",
    description: "Material transfer chambers for contamination control",
  },
  {
    name: "Dynamic Pass Box",
    href: "/products/dynamic-pass-box",
    description: "Automated pass-through systems with interlocking",
  },
  {
    name: "Laminar Air Flow (LAF)",
    href: "/products/laminar-air-flow",
    description: "Unidirectional air flow workstations",
  },
  {
    name: "HLAF",
    href: "/products/hlaf",
    description: "Horizontal laminar air flow systems",
  },
  {
    name: "Sampling/Dispensing Booth",
    href: "/products/sampling-dispensing-booth",
    description: "Controlled environment booths for material handling",
  },
  {
    name: "Biosafety Cabinet",
    href: "/products/biosafety-cabinet",
    description: "Biological safety cabinets for laboratory protection",
  },
  {
    name: "Dust Collector",
    href: "/products/dust-collector",
    description: "Industrial dust collection and filtration systems",
  },
  {
    name: "Industrial Heavy Duty Racks",
    href: "/products/industrial-racks",
    description: "Heavy-duty storage racks for industrial applications",
  },
  {
    name: "Lockers & Cabinets",
    href: "/products/lockers-cabinets",
    description: "Storage solutions for clean room environments",
  },
  {
    name: "Air Shower",
    href: "/products/air-shower",
    description: "Personnel decontamination chambers",
  },
  {
    name: "Fume Hood",
    href: "/products/fume-hood",
    description: "Laboratory fume extraction systems",
  },
  {
    name: "Modular Laboratory Furniture",
    href: "/products/laboratory-furniture",
    description: "Complete laboratory furniture solutions",
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileSection, setExpandedMobileSection] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null)
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
    setExpandedMobileSection(null)
  }

  const toggleMobileSection = (section) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section)
  }

  const navbarBg = isHomePage
    ? isScrolled || isHovered
      ? "bg-white/95 backdrop-blur-md shadow-lg"
      : "bg-white/10 backdrop-blur-md"
    : "bg-white shadow-lg"

  const textColor = isHomePage ? (isScrolled || isHovered ? "text-gray-900" : "text-white") : "text-gray-900"
  const logoTextColor = isHomePage ? (isScrolled || isHovered ? "text-primary" : "text-white") : "text-primary"

  return (
    <>
      <style jsx>{`
        .dropdown-enter {
          opacity: 0;
          transform: translateY(-10px) scale(0.95);
        }
        .dropdown-enter-active {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dropdown-exit {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .dropdown-exit-active {
          opacity: 0;
          transform: translateY(-10px) scale(0.95);
          transition: all 150ms cubic-bezier(0.4, 0, 1, 1);
        }
        .mobile-menu-enter {
          max-height: 0;
          opacity: 0;
        }
        .mobile-menu-enter-active {
          max-height: 1000px;
          opacity: 1;
          transition: max-height 300ms ease-out, opacity 200ms ease-out;
        }
        .section-expand {
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Contact Bar - Desktop Only */}
        <div className={`border-b ${isHomePage ? 'border-white/10' : 'border-gray-200'} hidden lg:block`}>
          <div className="container mx-auto px-6 py-2">
            <div className="flex items-center justify-end space-x-8 text-sm">
              <div className={`flex items-center space-x-2 transition-colors ${textColor}`}>
                <Phone className="w-4 h-4" />
                <span>+91 7201872788</span>
              </div>
              <div className={`flex items-center space-x-2 transition-colors ${textColor}`}>
                <Mail className="w-4 h-4" />
                <span>info@avivaindustries.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot_2025-09-19_191943-removebg-preview%281%29-cRUwDAG1YuxqM0eZyjdOQXHxofPYSG.png"
                alt="AVIVA Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className={`text-xl font-bold transition-colors ${logoTextColor}`}>AVIVA</h1>
                <p className={`text-xs transition-colors ${isHomePage ? (isScrolled || isHovered ? 'text-gray-600' : 'text-white/80') : 'text-gray-600'}`}>
                  HVAC & CLEAN ROOM INDUSTRIES
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* HVAC Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('hvac')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${textColor} hover:bg-white/10`}>
                  <span className="font-medium">HVAC</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {activeDropdown === 'hvac' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 dropdown-enter-active">
                    <div className="grid grid-cols-2 gap-12">
                      <div>
                        <div className="flex items-center space-x-2 mb-6">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">PRODUCTS</h3>
                        </div>
                        <div className="space-y-1">
                          {hvacProducts.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                            >
                              <ChevronRight className="w-4 h-4 text-gray-400 mt-1 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                                  {product.name}
                                </div>
                                <div className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-6">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">ACCESSORIES</h3>
                        </div>
                        <div className="space-y-1 max-h-96 overflow-y-auto pr-4">
                          {hvacAccessories.map((accessory) => (
                            <Link
                              key={accessory.name}
                              href={accessory.href}
                              className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            >
                              <ChevronRight className="w-3 h-3 text-gray-400 mt-1 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                              <div className="flex-1">
                                <div className="text-xs font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                                  {accessory.name}
                                </div>
                                <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">{accessory.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Clean Room Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('cleanroom')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${textColor} hover:bg-white/10`}>
                  <span className="font-medium">Clean Room</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {activeDropdown === 'cleanroom' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 dropdown-enter-active">
                    <div className="grid grid-cols-2 gap-12">
                      <div>
                        <div className="flex items-center space-x-2 mb-6">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">PRODUCTS</h3>
                        </div>
                        <div className="space-y-1">
                          {cleanRoomProducts.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                            >
                              <ChevronRight className="w-4 h-4 text-gray-400 mt-1 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                                  {product.name}
                                </div>
                                <div className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-6">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">EQUIPMENT</h3>
                        </div>
                        <div className="space-y-1 max-h-96 overflow-y-auto pr-4">
                          {cleanRoomEquipment.map((equipment) => (
                            <Link
                              key={equipment.name}
                              href={equipment.href}
                              className="group flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            >
                              <ChevronRight className="w-3 h-3 text-gray-400 mt-1 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                              <div className="flex-1">
                                <div className="text-xs font-medium text-gray-900 group-hover:text-green-500 transition-colors">
                                  {equipment.name}
                                </div>
                                <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">{equipment.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              <Link href="/about" className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${textColor} hover:bg-white/10`}>
                About
              </Link>
              <Link href="/contact" className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${textColor} hover:bg-white/10`}>
                Contact
              </Link>
              <Link href="/blog" className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${textColor} hover:bg-white/10`}>
                Blog
              </Link>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link href="/quote">
                <Button
                  className="hidden md:flex items-center px-6 py-2.5 bg-primary text-white font-medium rounded-lg  transform hover:scale-105 transit  ion-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>Get Quote</span>
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${textColor} hover:bg-white/10`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 mobile-menu-enter-active">
            <div className="container mx-auto px-6 py-6">
              {/* Contact info for mobile */}
              <div className="space-y-3 pb-6 border-b border-white/20 mb-6">
                <div className={`flex items-center space-x-3 text-sm ${textColor}`}>
                  <Phone className="w-4 h-4" />
                  <span>+91 7201872788</span>
                </div>
                <div className={`flex items-center space-x-3 text-sm ${textColor}`}>
                  <Mail className="w-4 h-4" />
                  <span>info@avivaindustries.in</span>
                </div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {/* HVAC Section */}
                <div className="section-expand">
                  <button
                    onClick={() => toggleMobileSection('hvac')}
                    className={`flex items-center justify-between w-full text-left font-semibold text-lg py-2 ${textColor}`}
                  >
                    HVAC
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${expandedMobileSection === 'hvac' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedMobileSection === 'hvac' && (
                    <div className="mt-4 pl-6 space-y-4 border-l-2 border-primary/30">
                      <div>
                        <div className={`text-sm font-semibold text-primary mb-3 uppercase tracking-wider`}>Products</div>
                        <div className="space-y-2">
                          {hvacProducts.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className={`block text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200 ${textColor}`}
                              onClick={closeMobileMenu}
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className={`text-sm font-semibold text-orange-500 mb-3 uppercase tracking-wider`}>Accessories</div>
                        <div className="space-y-2">
                          {hvacAccessories.map((accessory) => (
                            <Link
                              key={accessory.name}
                              href={accessory.href}
                              className={`block text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200 ${textColor}`}
                              onClick={closeMobileMenu}
                            >
                              {accessory.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Clean Room Section */}
                <div className="section-expand">
                  <button
                    onClick={() => toggleMobileSection('cleanroom')}
                    className={`flex items-center justify-between w-full text-left font-semibold text-lg py-2 ${textColor}`}
                  >
                    Clean Room
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${expandedMobileSection === 'cleanroom' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedMobileSection === 'cleanroom' && (
                    <div className="mt-4 pl-6 space-y-4 border-l-2 border-primary/30">
                      <div>
                        <div className={`text-sm font-semibold text-primary mb-3 uppercase tracking-wider`}>Products</div>
                        <div className="space-y-2">
                          {cleanRoomProducts.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className={`block text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200 ${textColor}`}
                              onClick={closeMobileMenu}
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className={`text-sm font-semibold text-green-500 mb-3 uppercase tracking-wider`}>Equipment</div>
                        <div className="space-y-2">
                          {cleanRoomEquipment.map((equipment) => (
                            <Link
                              key={equipment.name}
                              href={equipment.href}
                              className={`block text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200 ${textColor}`}
                              onClick={closeMobileMenu}
                            >
                              {equipment.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Other Navigation Links */}
                <Link
                  href="/about"
                  className={`block font-semibold text-lg py-2 hover:bg-white/10 rounded-lg px-3 transition-all duration-200 ${textColor}`}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`block font-semibold text-lg py-2 hover:bg-white/10 rounded-lg px-3 transition-all duration-200 ${textColor}`}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className={`block font-semibold text-lg py-2 hover:bg-white/10 rounded-lg px-3 transition-all duration-200 ${textColor}`}
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile CTA Button - Fixed at bottom */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Link href="/contact">
            <Button
              className="flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <span>Get Quote</span>
            </Button>
        </Link>
      </div>
    </>
  )
}