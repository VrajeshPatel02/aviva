import { AnimatedText } from "@/components/ui/animated-underline-text-one"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    slug: "understanding-clean-room-classifications",
    title: "Understanding Clean Room Classifications: A Complete Guide for Pharmaceutical Industries",
    excerpt:
      "Learn about different clean room classes, their applications in pharmaceutical manufacturing, and how to maintain proper environmental controls.",
    category: "Clean Room Technology",
    author: "AVIVA Technical Team",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    slug: "hvac-system-design-pharmaceutical-facilities",
    title: "HVAC System Design for Pharmaceutical Facilities: Best Practices and Standards",
    excerpt:
      "Discover the critical aspects of HVAC design for pharmaceutical manufacturing, including temperature control, humidity management, and air filtration.",
    category: "HVAC Systems",
    author: "AVIVA Engineering",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    slug: "air-handling-unit-maintenance-guide",
    title: "Air Handling Unit Maintenance: Ensuring Optimal Performance and Longevity",
    excerpt:
      "A comprehensive maintenance guide for AHUs, covering routine inspections, filter replacements, and troubleshooting common issues.",
    category: "Maintenance",
    author: "AVIVA Service Team",
    publishDate: "2024-01-05",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    slug: "dehumidification-systems-pharmaceutical-manufacturing",
    title: "Dehumidification Systems in Pharmaceutical Manufacturing: Critical Applications",
    excerpt:
      "Explore the importance of precise humidity control in pharmaceutical processes and how dehumidification systems ensure product quality.",
    category: "Environmental Control",
    author: "AVIVA Technical Team",
    publishDate: "2023-12-28",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    slug: "hepa-filtration-technology-advances",
    title: "HEPA Filtration Technology: Latest Advances and Applications",
    excerpt:
      "Stay updated with the latest developments in HEPA filter technology and their applications across various industries.",
    category: "Filtration Technology",
    author: "AVIVA Research Team",
    publishDate: "2023-12-20",
    readTime: "7 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    slug: "modular-clean-room-design-trends",
    title: "Modular Clean Room Design: Trends and Innovations in 2024",
    excerpt:
      "Discover the latest trends in modular clean room construction, including sustainable materials and smart monitoring systems.",
    category: "Design Innovation",
    author: "AVIVA Design Team",
    publishDate: "2023-12-15",
    readTime: "9 min read",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
]

const categories = [
  "All",
  "Clean Room Technology",
  "HVAC Systems",
  "Maintenance",
  "Environmental Control",
  "Filtration Technology",
  "Design Innovation",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedText
            text="AVIVA Knowledge Hub"
            textClassName="text-5xl md:text-6xl font-bold text-slate-800 mb-6"
            underlineClassName="text-aviva-green"
          />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest insights, best practices, and innovations in HVAC systems, clean room
            technology, and pharmaceutical manufacturing solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-aviva-green hover:bg-aviva-green/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-aviva-green text-white">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-aviva-green transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full bg-aviva-green hover:bg-aviva-green/90 group">
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

      {/* Regular Posts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-aviva-green text-white text-xs">{post.category}</Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-aviva-green transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full group border-aviva-green text-aviva-green hover:bg-aviva-green hover:text-white bg-transparent"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Subscribe to our newsletter for the latest insights in HVAC technology and clean room solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-aviva-green"
            />
            <Button className="bg-aviva-green hover:bg-aviva-green/90 px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
