import { Phone, Mail, MapPin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AVIVA</h3>
                <p className="text-sm opacity-80">HVAC & CLEAN ROOM INDUSTRIES</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Leading manufacturer and supplier of HVAC systems and clean room solutions for pharmaceutical,
              biotechnology, and industrial applications.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91 7201872788</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@avivaindustries.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5" />
                <span>www.avivaindustries.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <span>
                  Survey No. 257/16, Daman Industrial Estate
                  <br />
                  Near Fire Station Somnath Kachigam, Daman 396210
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">HVAC Systems</li>
              <li className="text-primary-foreground/80">Clean Room Solutions</li>
              <li className="text-primary-foreground/80">Air Handling Units</li>
              <li className="text-primary-foreground/80">Dehumidifiers</li>
              <li className="text-primary-foreground/80">Installation & Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2024 AVIVA HVAC & Clean Room Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
