const clients = [
  { name: "Cipla", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Glenmark", logo: "/placeholder.svg?height=80&width=120" },
  { name: "USV", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Aarti Industries", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Micro Labs", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Mylan", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Gufic Biosciences", logo: "/placeholder.svg?height=80&width=120" },
  { name: "AMI Organics", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Medley", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Indchemie", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Sovereign", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Mapra", logo: "/placeholder.svg?height=80&width=120" },
]

export function OurClients() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Trusted by leading pharmaceutical, biotechnology, and industrial companies across India
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              And many more satisfied clients across pharmaceutical, biotechnology, and industrial sectors
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
