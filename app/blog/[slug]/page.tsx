import { AnimatedText } from "@/components/ui/animated-underline-text-one"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const blogPosts = {
  "understanding-clean-room-classifications": {
    title: "Understanding Clean Room Classifications: A Complete Guide for Pharmaceutical Industries",
    excerpt:
      "Learn about different clean room classes, their applications in pharmaceutical manufacturing, and how to maintain proper environmental controls.",
    content: `
      <h2>Introduction to Clean Room Classifications</h2>
      <p>Clean rooms are critical environments in pharmaceutical manufacturing where contamination control is paramount. Understanding the various classifications and their specific requirements is essential for maintaining product quality and regulatory compliance.</p>
      
      <h2>ISO 14644 Standards</h2>
      <p>The ISO 14644 standard defines clean room classifications based on the maximum allowable number of particles per cubic meter of air. These classifications range from ISO Class 1 (the cleanest) to ISO Class 9.</p>
      
      <h3>Key Classifications for Pharmaceutical Use:</h3>
      <ul>
        <li><strong>ISO Class 5 (Class 100):</strong> Used for sterile product manufacturing, aseptic processing</li>
        <li><strong>ISO Class 7 (Class 10,000):</strong> Suitable for non-sterile pharmaceutical manufacturing</li>
        <li><strong>ISO Class 8 (Class 100,000):</strong> General pharmaceutical manufacturing areas</li>
      </ul>
      
      <h2>Environmental Control Parameters</h2>
      <p>AVIVA's clean room systems maintain precise control over:</p>
      <ul>
        <li>Temperature: 15°C to 25°C (±2°C)</li>
        <li>Relative Humidity: 45% to 60% (±5%)</li>
        <li>Pressure Differential: 5 to 100 Pascal</li>
        <li>Air Changes: 15-20 ACH minimum</li>
      </ul>
      
      <h2>AVIVA's Modular Clean Room Solutions</h2>
      <p>Our modular clean room panels offer several advantages:</p>
      <ul>
        <li>PUF, Rock Wool, and Honeycomb panel options</li>
        <li>Customizable thickness from 40mm to 150mm</li>
        <li>Pre-coated PPGI and Stainless Steel finishes</li>
        <li>Integrated return air systems</li>
      </ul>
      
      <h2>Maintenance and Monitoring</h2>
      <p>Regular monitoring and maintenance are crucial for maintaining clean room classifications. This includes:</p>
      <ul>
        <li>Particle count monitoring</li>
        <li>HEPA filter integrity testing</li>
        <li>Pressure differential verification</li>
        <li>Temperature and humidity logging</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Proper clean room classification and maintenance are essential for pharmaceutical manufacturing success. AVIVA's comprehensive solutions ensure your facility meets all regulatory requirements while maintaining optimal operational efficiency.</p>
    `,
    category: "Clean Room Technology",
    author: "AVIVA Technical Team",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Clean Room", "Pharmaceutical", "ISO Standards", "Environmental Control"],
  },
  "hvac-system-design-pharmaceutical-facilities": {
    title: "HVAC System Design for Pharmaceutical Facilities: Best Practices and Standards",
    excerpt:
      "Discover the critical aspects of HVAC design for pharmaceutical manufacturing, including temperature control, humidity management, and air filtration.",
    content: `
      <h2>Introduction to Pharmaceutical HVAC Design</h2>
      <p>HVAC systems in pharmaceutical facilities serve multiple critical functions beyond basic comfort control. They maintain environmental conditions necessary for product quality, ensure personnel safety, and support regulatory compliance.</p>
      
      <h2>Design Principles</h2>
      <h3>Air Flow Patterns</h3>
      <p>Proper air flow design prevents cross-contamination and maintains pressure differentials:</p>
      <ul>
        <li>Unidirectional flow in critical areas</li>
        <li>Cascade pressure from clean to less clean areas</li>
        <li>Minimum 15 Pascal pressure differential</li>
      </ul>
      
      <h3>Filtration Strategy</h3>
      <p>Multi-stage filtration ensures air quality:</p>
      <ul>
        <li>Pre-filters (G4): Remove large particles</li>
        <li>Fine filters (F7-F9): Secondary filtration</li>
        <li>HEPA filters (H13-H14): Final filtration for critical areas</li>
      </ul>
      
      <h2>AVIVA's AHU Solutions</h2>
      <p>Our Air Handling Units are specifically designed for pharmaceutical applications:</p>
      <ul>
        <li>Capacity range: 500 CFM to 100,000 CFM</li>
        <li>Double skin insulated panels (25-50mm thickness)</li>
        <li>Thermal break profiles prevent condensation</li>
        <li>BMS integration for automated control</li>
      </ul>
      
      <h2>Dehumidification Systems</h2>
      <p>Precise humidity control is critical for many pharmaceutical processes:</p>
      <ul>
        <li>Desiccant dehumidification for low RH requirements (5-45%)</li>
        <li>Integration with tablet coating and FBD equipment</li>
        <li>Energy-efficient reactivation systems</li>
      </ul>
      
      <h2>Regulatory Compliance</h2>
      <p>Our systems meet international standards:</p>
      <ul>
        <li>FDA cGMP requirements</li>
        <li>EU GMP guidelines</li>
        <li>WHO TRS specifications</li>
        <li>ICH Q7 guidelines</li>
      </ul>
      
      <h2>Energy Efficiency</h2>
      <p>Modern pharmaceutical HVAC systems incorporate energy-saving features:</p>
      <ul>
        <li>Variable frequency drives (VFDs)</li>
        <li>Heat recovery systems</li>
        <li>Demand-controlled ventilation</li>
        <li>Smart building management integration</li>
      </ul>
    `,
    category: "HVAC Systems",
    author: "AVIVA Engineering",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=800",
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* Back Navigation */}
      <div className="py-6 px-4 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="text-aviva-green hover:bg-aviva-green/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="max-w-4xl">
              <Badge className="bg-aviva-green text-white mb-6">{post.category}</Badge>
              <AnimatedText
                text={post.title}
                textClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 text-left leading-tight"
                underlineClassName="text-aviva-green"
              />
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
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none 
                prose-headings:text-slate-800 prose-headings:font-bold 
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-slate-600 prose-li:mb-2
                prose-strong:text-slate-800
                prose-ul:space-y-2 prose-ul:mb-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <BookOpen className="w-6 h-6 text-aviva-green" />
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
                  <Badge className="w-fit bg-aviva-green/10 text-aviva-green">{relatedPost.category}</Badge>
                  <CardTitle className="text-lg leading-tight group-hover:text-aviva-green transition-colors">
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
                      className="w-full group border-aviva-green text-aviva-green hover:bg-aviva-green hover:text-white bg-transparent"
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
              <Button className="bg-aviva-green hover:bg-aviva-green/90 px-8 py-3">Get Consultation</Button>
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
