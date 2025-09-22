// app/(sections)/our-clients-section.tsx
import { OurClientsClient } from "./our-clients-section-client"

async function fetchClientLogos(): Promise<string[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "htts://localhost:3000"}/api/client-logos`, {
    cache: "no-store", // avoid caching if logos change often
  })

  if (!response.ok) {
    throw new Error("Failed to fetch client logos")
  }

  return response.json()
}

const stats = [
  { number: "500+", label: "Satisfied Clients", description: "Companies trust our solutions" },
  { number: "1000+", label: "Projects Completed", description: "Successful installations worldwide" },
  { number: "25+", label: "Years Experience", description: "Decades of industry expertise" },
  { number: "50+", label: "Countries Served", description: "Global reach and presence" },
]

export default async function OurClientsSection() {
  const clientLogos = await fetchClientLogos()

  return <OurClientsClient clientLogos={clientLogos} stats={stats} />
}
