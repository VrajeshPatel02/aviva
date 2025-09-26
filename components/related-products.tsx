import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface RelatedProduct {
  slug: string
  title: string
  category: string
  description: string
  image: string
}

interface RelatedProductsProps {
  currentProductSlug: string
  category: string
}

// Sample related products data - in a real app, this would come from a database
const allProducts: RelatedProduct[] = [
  {
    slug: "air-handling-unit",
    title: "Air Handling Unit (AHU)",
    category: "HVAC Systems",
    description: "Horizontal floor mounted AHU range from 500 CFM to 100,000 CFM",
    image: "/air-handling-unit-hvac-system.jpg",
  },
  {
    slug: "dehumidifier",
    title: "Dehumidifier (DHU)",
    category: "HVAC Systems",
    description: "Low RH Unit applicable where minimum RH up to 5% is required",
    image: "/dehumidifier-industrial-hvac.jpg",
  },
  {
    slug: "clean-room-panels",
    title: "Clean Room Panels",
    category: "Clean Room Solutions",
    description: "Modular clean room wall and ceiling panels resistant to chemicals",
    image: "/clean-room-panels-modular-walls.jpg",
  },
  {
    slug: "clean-room-doors",
    title: "Clean Room Doors",
    category: "Clean Room Solutions",
    description: "Custom-made clean room doors designed as per GMP standards",
    image: "/clean-room-doors-pharmaceutical.jpg",
  },
  {
    slug: "hepa-filters",
    title: "HEPA Filters",
    category: "Filtration Systems",
    description: "High-efficiency particulate air filters for clean room standards",
    image: "/hepa-filters-air-filtration.jpg",
  },
  {
    slug: "laminar-air-flow",
    title: "Laminar Air Flow (LAF)",
    category: "Clean Room Equipment",
    description: "Unidirectional air flow for contamination control",
    image: "/laminar-air-flow-clean-room-equipment.jpg",
  },
]

export function RelatedProducts({ currentProductSlug, category }: RelatedProductsProps) {
  // Filter products by category and exclude current product
  const relatedProducts = allProducts
    .filter((product) => product.category === category && product.slug !== currentProductSlug)
    .slice(0, 3)

  // If no products in same category, show products from other categories
  const fallbackProducts = allProducts.filter((product) => product.slug !== currentProductSlug).slice(0, 3)

  const productsToShow = relatedProducts.length > 0 ? relatedProducts : fallbackProducts

  if (productsToShow.length === 0) return null

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading">Related Products</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore other solutions in our {category.toLowerCase()} range
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsToShow.map((product) => (
              <Card key={product.slug} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3 bg-background/90">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={`/products/${product.slug}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
