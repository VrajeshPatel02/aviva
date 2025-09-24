"use client"

import { useState } from "react"
import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"

interface Stats {
  number: string
  label: string
  description: string
}

interface Props {
  clientLogos: string[] // these should just be file names like "logo1.png"
  stats: Stats[]
}

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={120}
      height={60}
      unoptimized // ✅ prevents Next.js from failing if images aren’t from an external domain
      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      onError={() => {
        console.warn(`⚠️ Failed to load: ${src}, showing fallback.`)
        setImgSrc("/images/fallback-logo.png") // fallback must exist in /public/images/
      }}
    />
  )
}

export function OurClientsClient({ clientLogos, stats }: Props) {
  const halfPoint = Math.ceil(clientLogos.length / 2)
  const leftMarqueeLogos = clientLogos.slice(0, halfPoint)
  const rightMarqueeLogos = clientLogos.slice(halfPoint)

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="text-center mb-16">
          <h2 className="heading mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-12">
            We've built lasting partnerships with leading companies across pharmaceutical,
            biotechnology, and industrial sectors worldwide.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquees */}
        {clientLogos.length > 0 ? (
          <>
            {/* Left-moving */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

              <Marquee pauseOnHover className="py-8">
                {leftMarqueeLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="relative h-full w-fit mx-16 flex items-center justify-center"
                  >
                    <LogoImage
                      src={`/clients-logo/${logo}`} // ✅ this will work if logos are in /public/clients-logo/
                      alt={`Client logo ${index + 1}`}
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Right-moving */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

              <Marquee reverse pauseOnHover className="py-8">
                {rightMarqueeLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="relative h-full w-fit mx-16 flex items-center justify-center"
                  >
                    <LogoImage
                      src={`/clients-logo/${logo}`} // ✅ logos should exist here
                      alt={`Client logo ${index + halfPoint + 1}`}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </>
        ) : (
          <p className="text-center text-muted-foreground">No client logos available</p>
        )}
      </div>
    </section>
  )
}
