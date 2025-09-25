import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Ready to Get <span className="text-primary">Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground text-balance mb-8">
            Contact us today for a free consultation and quote for your HVAC and clean room requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/quote"
            >
            <Button size="lg" className="text-lg px-8 py-6">
              Get Free Quote
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our experts</p>
              <p className="font-semibold text-primary">+91 7201872788</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-4">Send us your requirements</p>
              <p className="font-semibold text-primary">info@avivaindustries.in</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Our manufacturing facility</p>
              <p className="font-semibold text-primary text-sm">Daman Industrial Estate, Daman</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
