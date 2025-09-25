import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedText } from "@/components/ui/animated-underline-text-one"
import { AvivaFooter } from "@/components/aviva-footer"
import { CheckCircle, Award, Users, Globe, Target, Heart } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Quality Excellence",
      description:
        "We are committed to provide quality products and services to our customers and continually improve the effectiveness of the quality management system to achieve customer satisfaction.",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Customer Focus",
      description:
        "We manufacture and design products based on the needs and specifications of our clients, ensuring customized solutions for every requirement.",
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: "Industry Leadership",
      description:
        "Serving diverse sectors including pharmaceutical, biotechnology, hospitals, food processing, and industrial manufacturing with proven expertise.",
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Health & Safety",
      description:
        "We offer services to provide controlled, classified, comfort & healthy air as well as prevention of viable/non-viable contamination.",
    },
  ]

  const industries = [
    "Pharmaceutical Industry (Solid, Semi-Solid and Liquid)",
    "API and Chemical Industries",
    "Research & Development Centers",
    "Topical Product Formulation and Cosmetics",
    "Microbiology Laboratories",
    "Nano Technology Centers",
    // "Aseptic Labs / Sterile Facilities",
    // "Veterinary Product Industries",
    // "Cell Culture & Plant Culture Labs",
    // "Hospital Sector",
    // "Bio Medical Plants / Biotechnology",
    // "Primary Packaging Manufacturing",
    // "Food Production Facilities",
    // "Automotive Industries",
    // "Plastic and Textile Industries",
  ]

  const services = [
    "HVAC System Design & Installation",
    "Clean Room Construction",
    "Air Handling Units",
    "Fan Filter Units",
    "Air Shower Systems",
    "Pass Box Solutions",
    // "Laminar Air Flow Units",
    // "Bio Safety Cabinets",
    // "Sampling & Dispensing Booths",
    // "Air Curtain Systems",
    // "HVAC Ducting",
    // "Stainless Steel Furniture",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 mt-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading mb-2 font-medium">HVAC & Clean <span className="text-primary">Room Industries</span></h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Leading manufacturer and supplier of HVAC systems and clean room solutions, committed to providing quality
              products and services for the most demanding sectors and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading">Who <span className="text-primary">We Are</span></h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AVIVA HVAC & Clean Room Industries is a premier manufacturer specializing in HVAC systems and clean room
                solutions. We provide comprehensive manufacturing, supplying, and installation services for critical
                environments.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expertise spans across pharmaceutical, biotechnology, healthcare, and industrial sectors, where we
                deliver customized solutions that meet the highest standards of quality and compliance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-left">
                  <div className="text-3xl font-bold text-primary mb-2"><NumberTicker value={15}></NumberTicker>+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-primary mb-2"><NumberTicker value={500}>+</NumberTicker>+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Team.jpg"
                alt="AVIVA Facility"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading">Our <span className="text-primary">Core Values</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence drives everything we do, from product design to customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading mb-1">Industries <span className="text-primary">We Serve</span></h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We provide the best solutions for the most demanding sectors and industries, ensuring controlled
                environments that meet strict regulatory requirements.
              </p>
              <div className="grid gap-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mb-2 flex-shrink-0" />
                    <span className="text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="heading mb-2">Our <span className="text-primary"> Services</span> </h2>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-2">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{service}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading mb-6">Quality Policy</h2>
            <p className="text-xl leading-relaxed opacity-90">
              "We are committed to provide quality products and services to our customers and continually improve the
              effectiveness of the quality management system to achieve customer satisfaction."
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading mb-2">Ready to <span className="text-primary">Work With Us?</span></h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your HVAC and clean room requirements. Our experts are ready to provide
            customized solutions for your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="tel:+917201872788"
              className="border border-primary hover:bg-primary/10 text-primary px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Call: +91 7201872788
            </Link>
          </div>
        </div>
      </section>

      <AvivaFooter />
    </main>
  )
}
