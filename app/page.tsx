import HeroCarousel from "@/components/hero-carousel"
import { AvivaProductsGallery } from "@/components/aviva-products-gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { IndustriesWeServe } from "@/components/industries-we-serve"
import { WhoWeAre } from "@/components/who-we-are"
import OurClientsSection from "@/components/our-clients-section"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { AvivaFooter } from "@/components/aviva-footer"
import "./globals.css"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <AvivaProductsGallery />
      <WhyChooseUs />
      <IndustriesWeServe />
      <WhoWeAre />
      <OurClientsSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <AvivaFooter />
    </main>
  )
}
