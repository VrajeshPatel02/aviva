"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What types of HVAC systems does AVIVA manufacture?",
    answer:
      "AVIVA manufactures a comprehensive range of HVAC systems including Air Handling Units (AHU), Dehumidifiers (DHU), Force Draft Ventilation systems, Air Washer Systems, Fresh Air Systems, and Exhaust Systems. All our systems are designed to meet pharmaceutical, biotechnology, and industrial standards.",
  },
  {
    question: "Do you provide clean room solutions for pharmaceutical companies?",
    answer:
      "Yes, we specialize in complete clean room solutions including Modular Clean Rooms, Clean Room Panels, Clean Room Doors, HEPA Filters, Laminar Air Flow systems, and Bio Safety Cabinets. Our solutions comply with GMP standards and various clean room classifications from ISO 5 to ISO 8.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve diverse industries including Pharmaceutical, Biotechnology, Healthcare/Hospitals, Food & Beverage Production, Research & Development facilities, and Automotive Industries. Each solution is customized to meet specific industry requirements and regulatory standards.",
  },
  {
    question: "Do you provide installation and maintenance services?",
    answer:
      "AVIVA provides complete turnkey solutions including design, manufacturing, installation, commissioning, and ongoing maintenance services. Our experienced team ensures proper installation and provides comprehensive after-sales support to maintain optimal system performance.",
  },
  {
    question: "Are your systems compliant with international standards?",
    answer:
      "Yes, all our HVAC and clean room systems are designed and manufactured to comply with international standards including GMP, FDA, WHO, EU-GMP, and ISO standards. We ensure our solutions meet the stringent requirements of pharmaceutical and biotechnology industries worldwide.",
  },
  {
    question: "What is the typical lead time for HVAC system delivery?",
    answer:
      "Lead times vary depending on the complexity and customization requirements of the project. Standard systems typically take 4-6 weeks, while complex custom solutions may require 8-12 weeks. We work closely with clients to meet their project timelines and provide regular updates throughout the manufacturing process.",
  },
  {
    question: "Do you offer energy-efficient HVAC solutions?",
    answer:
      "Yes, energy efficiency is a core focus of our designs. Our systems incorporate advanced technologies like variable frequency drives, heat recovery systems, and intelligent controls to minimize energy consumption while maintaining optimal performance. We help clients reduce operational costs and environmental impact.",
  },
  {
    question: "Can you handle international projects?",
    answer:
      "AVIVA has successfully completed projects in over 50 countries worldwide. We have experience with international shipping, customs procedures, and local installation requirements. Our team can coordinate with local partners to ensure smooth project execution anywhere in the world.",
  },
]

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Get answers to common questions about our HVAC and clean room solutions, services, and processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-primary transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-200" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="h-px bg-slate-200 mb-4" />
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          {/* <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-3 text-slate-900">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our technical experts are here to help you find the perfect HVAC and clean room solution for your specific
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Contact Our Experts
              </button>
              <button className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
