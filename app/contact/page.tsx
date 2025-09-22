"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { AnimatedText } from "@/components/ui/animated-underline-text-one"
import { AvivaFooter } from "@/components/aviva-footer"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Address",
      details: [
        "Survey No. 257/16, Daman Industrial Estate",
        "Near Fire Station Somnath Kachigam",
        "Daman 396210, Kachigam",
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Phone",
      details: ["+91 7201872788"],
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email",
      details: ["Info@avivaindustries.in"],
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ]

  const services = [
    "HVAC System Design",
    "Clean Room Construction",
    "Air Handling Units",
    "Dehumidifier Systems",
    "Clean Room Panels",
    "Clean Room Doors",
    "HEPA Filtration",
    "Laminar Air Flow",
    "Maintenance & Support",
    "Other",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <AnimatedText text="Get in Touch" className="text-4xl lg:text-6xl font-bold mb-6" />
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to discuss your HVAC and clean room requirements? Our experts are here to help you find the perfect
              solution for your industry needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <AnimatedText text="Send us a Message" className="text-3xl font-bold mb-8" />
              <Card>
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-accent mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <AnimatedText text="Contact Information" className="text-3xl font-bold mb-8" />
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact */}
              <Card className="mt-8 bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Need Immediate Assistance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 opacity-90">For urgent inquiries or technical support, call us directly.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+917201872788"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-medium transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href="mailto:Info@avivaindustries.in"
                      className="border border-primary-foreground/20 hover:bg-primary-foreground/10 px-6 py-2 rounded-lg font-medium transition-colors text-center"
                    >
                      Send Email
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText text="Visit Our Facility" className="text-3xl font-bold mb-4" />
            <p className="text-lg text-muted-foreground">
              Located in Daman Industrial Estate, we welcome visits to our manufacturing facility.
            </p>
          </div>
          <div className="bg-background rounded-lg p-4 shadow-lg">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-muted-foreground">
                  Survey No. 257/16, Daman Industrial Estate
                  <br />
                  Near Fire Station Somnath Kachigam, Daman 396210
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AvivaFooter />
    </main>
  )
}
