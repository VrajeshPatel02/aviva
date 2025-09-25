"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

const products = [
  {
    title: "Air Handling Unit (AHU)",
    description:
      "Horizontal floor mounted AHU range from 500 CFM to 100,000 CFM for pharmaceutical and industrial applications.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    features: ["Double skin insulated body", "Thermal break profile", "BMS compatible", "Clean room class control"],
  },
  {
    title: "Dehumidifier (DHU)",
    description: "Low RH units applicable for minimum RH up to 5% with built-in desiccant dehumidifier system.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    features: ["Silica bed technology", "PLC control system", "100% effective RH control", "Energy efficient"],
  },
  {
    title: "Clean Room Panels",
    description: "Modular clean room wall and ceiling partitions resistant to chemicals and UV light.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    features: ["Chemical resistant", "Non-combustible", "Easy installation", "GMP compliant"],
  },
  {
    title: "Clean Room Doors",
    description: "Custom-made clean room doors designed for prevention of cross contamination.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80",
    features: ["Minimum air leakage", "Vision windows", "Fire rated options", "GMP standards"],
  },
  {
    title: "HEPA Filters",
    description: "High-efficiency particulate air filters for maintaining clean room classifications.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    features: ["99.97% efficiency", "Various sizes", "Long service life", "Low pressure drop"],
  },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container  mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Our <span className="text-primary">Products</span> & Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive range of HVAC and clean room equipment designed for the most demanding industries
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-80 overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-8 flex flex-col justify-center bg-white group-hover:bg-slate-50 transition-colors duration-500">
                          <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-primary/90 transition-colors duration-300">
                            {product.title}
                          </h3>
                          <p className="text-muted-foreground mb-6 text-balance leading-relaxed">
                            {product.description}
                          </p>
                          <ul className="space-y-3 mb-8">
                            {product.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center text-sm transition-all duration-300"
                                style={{
                                  transform: hoveredCard === index ? "translateX(4px)" : "translateX(0)",
                                  transitionDelay: `${featureIndex * 50}ms`,
                                }}
                              >
                                <div className="w-2 h-2 bg-accent rounded-full mr-3 transition-all duration-300 group-hover:scale-125" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button
                            variant="outline"
                            className="self-start bg-transparent hover:bg-primary hover:text-white border-primary text-primary transition-all duration-300 group-hover:shadow-lg"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:bg-white border-0 transition-all duration-300 hover:scale-110"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5 transition-transform duration-300 hover:-translate-x-0.5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:bg-white border-0 transition-all duration-300 hover:scale-110"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-0.5" />
          </Button>

          <div className="flex justify-center mt-8 space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-primary shadow-lg"
                    : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
