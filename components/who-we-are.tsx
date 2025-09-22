import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-underline-text-one"

export function WhoWeAre() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <AnimatedText
                text="Who We Are"
                textClassName="text-3xl md:text-4xl font-bold text-balance mb-6"
                className="mb-6"
              />
              <p className="text-lg text-muted-foreground text-balance mb-6">
                AVIVA HVAC & Clean Room Industries is a leading manufacturer and supplier of high-quality HVAC systems
                and clean room solutions. Based in Daman, we serve clients across India and internationally.
              </p>
              <p className="text-lg text-muted-foreground text-balance mb-8">
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for
                pharmaceutical, biotechnology, hospital, and industrial sectors requiring controlled environments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="AVIVA Manufacturing Facility"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-balance">
                  To provide world-class HVAC and clean room solutions that ensure optimal environmental control and
                  regulatory compliance for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-balance">
                  To be the leading provider of innovative HVAC and clean room technologies, setting industry standards
                  for quality and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Quality Policy</h3>
                <p className="text-muted-foreground text-balance">
                  We are committed to providing quality products and services while continually improving our quality
                  management system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
