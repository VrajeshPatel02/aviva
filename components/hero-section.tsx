import { Button } from "@/components/ui/button"
import { ChevronRight, Phone, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />

      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">AVIVA</h1>
              <p className="text-xs text-muted-foreground">HVAC & CLEAN ROOM INDUSTRIES</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#industries" className="text-foreground hover:text-primary transition-colors">
              Industries
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 7201872788</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@avivaindustries.in</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Professional <span className="text-primary">HVAC</span> &<span className="text-accent"> Clean Room</span>{" "}
            Solutions
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Manufacturing, supplying, and installing world-class HVAC systems and clean room solutions for
            pharmaceutical, biotechnology, and industrial applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Free Quote
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              View Our Products
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
