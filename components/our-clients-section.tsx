// app/(sections)/our-clients-section.tsx
import { OurClientsClient } from "./our-clients-section-client"

// async function fetchClientLogos(): Promise<string[]> {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "htts://localhost:3000"}/api/client-logos`, {
//     cache: "no-store", // avoid caching if logos change often
//   })

//   if (!response.ok) {
//     throw new Error("Failed to fetch client logos")
//   }

//   return response.json()
// }

const stats = [
  { number: "500+", label: "Satisfied Clients", description: "Companies trust our solutions" },
  { number: "1000+", label: "Projects Completed", description: "Successful installations worldwide" },
  { number: "25+", label: "Years Experience", description: "Decades of industry expertise" },
  { number: "50+", label: "Countries Served", description: "Global reach and presence" },
]

const clients_logos = [
  "aarti-industries-ltd.png",
  "accra-pac.png",
  "ami-organics-ltd.png",
  "calibre.png",
  "cipla.png",
  "glenmark.png",
  "global.png",
  "gufic.png",
  "indchmie.png",
  "mapra.png",
  "medley.png",
  "megafine.png",
  "micro-labs-ltd.png",
  "modison.png",
  "mylan.png",
  "rppl.png",
  "skant.png",
  "sovereign.png",
  "usv.png",
  "vvf.png"
]

export default async function OurClientsSection() {
  // const clientLogos = await fetchClientLogos()

  return <OurClientsClient clientLogos={clients_logos} stats={stats} />
}
