import { AnimatedText } from "@/components/ui/animated-underline-text-one"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Blog post data
const blogPosts = {
  "understanding-clean-room-classifications": {
    title: "Understanding Clean Room Classifications: A Complete Guide for Pharmaceutical Industries",
    excerpt:
      "Learn about different clean room classes, their applications in pharmaceutical manufacturing, and how to maintain proper environmental controls.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Introduction to Clean Room Classifications",
      },
      {
        type: "paragraph",
        text: "Clean rooms are critical environments in pharmaceutical manufacturing where contamination control is paramount. Understanding the various classifications and their specific requirements is essential for maintaining product quality and regulatory compliance.",
      },
      {
        type: "heading",
        level: 2,
        text: "ISO 14644 Standards",
      },
      {
        type: "paragraph",
        text: "The ISO 14644 standard defines clean room classifications based on the maximum allowable number of particles per cubic meter of air. These classifications range from ISO Class 1 (the cleanest) to ISO Class 9.",
      },
      {
        type: "heading",
        level: 3,
        text: "Key Classifications for Pharmaceutical Use:",
      },
      {
        type: "list",
        items: [
          { text: "ISO Class 5 (Class 100): Used for sterile product manufacturing, aseptic processing" },
          { text: "ISO Class 7 (Class 10,000): Suitable for non-sterile pharmaceutical manufacturing" },
          { text: "ISO Class 8 (Class 100,000): General pharmaceutical manufacturing areas" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Environmental Control Parameters",
      },
      {
        type: "paragraph",
        text: "AVIVA's clean room systems maintain precise control over:",
      },
      {
        type: "list",
        items: [
          "Temperature: 15°C to 25°C (±2°C)",
          "Relative Humidity: 45% to 60% (±5%)",
          "Pressure Differential: 5 to 100 Pascal",
          "Air Changes: 15-20 ACH minimum",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "AVIVA's Modular Clean Room Solutions",
      },
      {
        type: "paragraph",
        text: "Our modular clean room panels offer several advantages:",
      },
      {
        type: "list",
        items: [
          "PUF, Rock Wool, and Honeycomb panel options",
          "Customizable thickness from 40mm to 150mm",
          "Pre-coated PPGI and Stainless Steel finishes",
          "Integrated return air systems",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Maintenance and Monitoring",
      },
      {
        type: "paragraph",
        text: "Regular monitoring and maintenance are crucial for maintaining clean room classifications. This includes:",
      },
      {
        type: "list",
        items: [
          "Particle count monitoring",
          "HEPA filter integrity testing",
          "Pressure differential verification",
          "Temperature and humidity logging",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Proper clean room classification and maintenance are essential for pharmaceutical manufacturing success. AVIVA's comprehensive solutions ensure your facility meets all regulatory requirements while maintaining optimal operational efficiency.",
      },
    ],
    category: "Clean Room Technology",
    author: "AVIVA Technical Team",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/laminar-air-flow-clean-room-equipment.jpg?height=400&width=800",
    tags: ["Clean Room", "Pharmaceutical", "ISO Standards", "Environmental Control"],
  },
  "hvac-system-design-pharmaceutical-facilities": {
    title: "HVAC System Design for Pharmaceutical Facilities: Best Practices and Standards",
    excerpt:
      "Discover the critical aspects of HVAC design for pharmaceutical manufacturing, including temperature control, humidity management, and air filtration.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Introduction to Pharmaceutical HVAC Design",
      },
      {
        type: "paragraph",
        text: "HVAC systems in pharmaceutical facilities serve multiple critical functions beyond basic comfort control. They maintain environmental conditions necessary for product quality, ensure personnel safety, and support regulatory compliance.",
      },
      {
        type: "heading",
        level: 2,
        text: "Design Principles",
      },
      {
        type: "heading",
        level: 3,
        text: "Air Flow Patterns",
      },
      {
        type: "paragraph",
        text: "Proper air flow design prevents cross-contamination and maintains pressure differentials:",
      },
      {
        type: "list",
        items: [
          "Unidirectional flow in critical areas",
          "Cascade pressure from clean to less clean areas",
          "Minimum 15 Pascal pressure differential",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Filtration Strategy",
      },
      {
        type: "paragraph",
        text: "Multi-stage filtration ensures air quality:",
      },
      {
        type: "list",
        items: [
          "Pre-filters (G4): Remove large particles",
          "Fine filters (F7-F9): Secondary filtration",
          "HEPA filters (H13-H14): Final filtration for critical areas",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "AVIVA's AHU Solutions",
      },
      {
        type: "paragraph",
        text: "Our Air Handling Units are specifically designed for pharmaceutical applications:",
      },
      {
        type: "list",
        items: [
          "Capacity range: 500 CFM to 100,000 CFM",
          "Double skin insulated panels (25-50mm thickness)",
          "Thermal break profiles prevent condensation",
          "BMS integration for automated control",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Dehumidification Systems",
      },
      {
        type: "paragraph",
        text: "Precise humidity control is critical for many pharmaceutical processes:",
      },
      {
        type: "list",
        items: [
          "Desiccant dehumidification for low RH requirements (5-45%)",
          "Integration with tablet coating and FBD equipment",
          "Energy-efficient reactivation systems",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Regulatory Compliance",
      },
      {
        type: "paragraph",
        text: "Our systems meet international standards:",
      },
      {
        type: "list",
        items: [
          "FDA cGMP requirements",
          "EU GMP guidelines",
          "WHO TRS specifications",
          "ICH Q7 guidelines",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Energy Efficiency",
      },
      {
        type: "paragraph",
        text: "Modern pharmaceutical HVAC systems incorporate energy-saving features:",
      },
      {
        type: "list",
        items: [
          "Variable frequency drives (VFDs)",
          "Heat recovery systems",
          "Demand-controlled ventilation",
          "Smart building management integration",
        ],
      },
    ],
    category: "HVAC Systems",
    author: "AVIVA Engineering",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    image: "/industrial-dehumidifier-installation.jpg?height=400&width=800",
    tags: ["HVAC Design", "Pharmaceutical", "Air Handling", "Compliance"],
  },
}

const relatedPosts = [
  {
    slug: "air-handling-unit-maintenance-guide",
    title: "Air Handling Unit Maintenance: Ensuring Optimal Performance",
    category: "Maintenance",
    readTime: "6 min read",
  },
  {
    slug: "dehumidification-systems-pharmaceutical-manufacturing",
    title: "Dehumidification Systems in Pharmaceutical Manufacturing",
    category: "Environmental Control",
    readTime: "10 min read",
  },
  {
    slug: "hepa-filtration-technology-advances",
    title: "HEPA Filtration Technology: Latest Advances",
    category: "Filtration Technology",
    readTime: "7 min read",
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Component to render structured content
function RenderContent({ content }: { content: any[] }) {
  return (
    <div className="space-y-6">
      {content.map((item, index) => {
        switch (item.type) {
          case "heading":
            return item.level === 2 ? (
              <h2 key={index} className="heading text-2xl font-bold text-slate-800 mt-12 mb-6">
                {item.text}
              </h2>
            ) : (
              <h3 key={index} className="text-xl font-bold text-slate-800 mt-8 mb-4">
                {item.text}
              </h3>
            )
          case "paragraph":
            return (
              <p
                key={index}
                className="text-slate-600 leading-relaxed mb-6 font-worksans"
                dangerouslySetInnerHTML={{ __html: item.text }} // Minimal HTML for inline formatting like <strong>
              />
            )
          case "list":
            return (
              <ul key={index} className="space-y-2 mb-6 list-disc pl-6">
                {item.items.map((listItem: string, i: number) => (
                  <li
                    key={i}
                    className="text-slate-600"
                    dangerouslySetInnerHTML={{ __html: listItem }} // Minimal HTML for inline formatting
                  />
                ))}
              </ul>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* Back Navigation */}
      <div className="py-6 px-4 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto mt-12">
          <Link href="/blog">
            <Button variant="ghost" className="text-accent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="max-w-4xl">
              <Badge className="bg-accent text-white mb-6">{post.category}</Badge>
              <h1 className="heading font-medium">{post.title}</h1>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-slate-600 max-w-4xl">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="ml-auto">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-4xl">
              <div className="aspect-[2/1]">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 max-w-4xl">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
            <RenderContent content={post.content} />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <BookOpen className="w-6 h-6 text-accent font-worksans" />
              <h2 className="text-3xl font-bold text-slate-800">Related Articles</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card
                key={relatedPost.slug}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
              >
                <CardHeader className="space-y-4">
                  <Badge className="w-fit bg-accent/10 text-accent">{relatedPost.category}</Badge>
                  <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
                    {relatedPost.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    {relatedPost.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full group border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Need Expert HVAC Solutions?</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Contact AVIVA's technical team for customized HVAC and clean room solutions for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 px-8 py-3">Get Consultation</Button>
            </Link>
            <Link href="/products/air-handling-unit">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 bg-transparent"
              >
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}