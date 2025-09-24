import { Card, CardContent } from "@/components/ui/card"
// import AnimatedText removed
import { BoxReveal } from "@/components/ui/box-reveal"

const industries = [
  {
    name: "Pharmaceutical Industry",
    description: "Solid, semi-solid, and liquid formulations",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    specialties: ["API Manufacturing", "Injectable Formulations", "Ophthalmic Products"],
  },
  {
    name: "Biotechnology",
    description: "Cell culture and plant culture laboratories",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
    specialties: ["Cell Culture Labs", "Biomedical Plants", "Research Centers"],
  },
  {
    name: "Hospital Sector",
    description: "Sterile environments for medical facilities",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
    specialties: ["Operating Theaters", "ICU Units", "Sterile Processing"],
  },
  {
    name: "Food Production",
    description: "Hygienic processing and packaging facilities",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
    specialties: ["Processing Areas", "Packaging Lines", "Quality Control Labs"],
  },
  {
    name: "Research & Development",
    description: "Controlled environments for R&D activities",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    specialties: ["Microbiology Labs", "Nano Technology", "Formulation Centers"],
  },
  {
    name: "Automotive Industries",
    description: "Clean manufacturing environments",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    specialties: ["Paint Booths", "Assembly Lines", "Quality Testing"],
  },
]

export function IndustriesWeServe() {
  return (
    <section id="industries" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="heading mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Providing specialized HVAC and clean room solutions across diverse sectors with stringent environmental
            control requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{industry.name}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white group-hover:bg-slate-50 transition-colors duration-300">
                  <p className="text-muted-foreground mb-4 text-balance leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.specialties.map((specialty, specialtyIndex) => (
                      <div
                        key={specialtyIndex}
                        className="flex items-center text-sm transition-all duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${specialtyIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 transition-all duration-300 group-hover:scale-125" />
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
