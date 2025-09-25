"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "AVIVA's clean room solutions have been instrumental in maintaining our pharmaceutical manufacturing standards. Their attention to detail and compliance with GMP requirements is exceptional.",
    author: "Dr. Rajesh Kumar",
    position: "Quality Head",
    company: "Leading Pharmaceutical Company",
    rating: 5,
  },
  {
    quote:
      "The HVAC systems installed by AVIVA have significantly improved our facility's environmental control. Their technical expertise and after-sales support are outstanding.",
    author: "Priya Sharma",
    position: "Facility Manager",
    company: "Biotechnology Research Center",
    rating: 5,
  },
  {
    quote:
      "We have been working with AVIVA for over 5 years. Their custom manufacturing capabilities and timely delivery have made them our preferred partner for clean room projects.",
    author: "Amit Patel",
    position: "Project Director",
    company: "Industrial Manufacturing",
    rating: 5,
  },
  {
    quote:
      "AVIVA's team provided excellent consultation and delivered a complete clean room solution that exceeded our expectations. Highly recommended for pharmaceutical applications.",
    author: "Dr. Sunita Mehta",
    position: "R&D Head",
    company: "Pharmaceutical Research Lab",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Don't just take our word for it. Here's what industry leaders say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-12">
              <div className="text-center">
                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-balance mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                      ★
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonials[currentIndex].author}</div>
                  <div className="text-primary font-medium">{testimonials[currentIndex].position}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-background shadow-lg"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-background shadow-lg"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
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
