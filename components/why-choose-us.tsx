import { Shield, Wrench, Award, Headphones, Factory, CheckCircle } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-underline-text-one"

const reasons = [
  {
    icon: Shield,
    title: "GMP Compliance",
    description:
      "All our products meet GMP standards and regulatory requirements for pharmaceutical and biotech industries.",
  },
  {
    icon: Wrench,
    title: "Custom Manufacturing",
    description: "We design and manufacture products based on specific client needs and specifications.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Proven track record in delivering high-quality HVAC and clean room solutions across industries.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Comprehensive after-sales support and maintenance services to ensure optimal performance.",
  },
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description:
      "Complete control over quality and delivery timelines with our state-of-the-art manufacturing facility.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality control processes and testing to ensure products meet the highest standards.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 ">
        <div className="relative z-10 mx-auto max-w-xl text-center md:space-y-6">
          <h1 className="heading">
            Why Choose AVIVA?
          </h1>
          <p className="text-balance">
            We offer comprehensive solutions for controlled, classified, and comfort air systems with prevention of
            viable and non-viable contamination.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                <reason.icon className="size-4" />
                <h3 className="text-sm font-medium">{reason.title}</h3>
              </div>
              <p className="text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}