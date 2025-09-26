"use client"
import Link from "next/link"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const carouselImages = [
  "/laurel-and-michael-evans.jpg",
  "/images/cleanroom-1.jpg",
  "/tecnic-bioprocess.jpg",
  "/images/clean-room-3.jpg",
]

const SLIDE_DURATION = 6000

const HeroCarousel: React.FC = () => {
  const [slide, setSlide] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (playing) {
      timerRef.current = window.setTimeout(() => {
        setSlide((prev) => (prev + 1) % carouselImages.length)
        setProgressKey((k) => k + 1) // Restart animation
      }, SLIDE_DURATION)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [slide, playing])

  useEffect(() => {
    if (!playing && timerRef.current) clearTimeout(timerRef.current)
  }, [playing])

  return (
    <section
      style={{
      position: "relative",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      background: "#08678C",
      minHeight: 0,
      }}
    >
      {carouselImages.map((img, idx) => (
      <div
        key={idx}
        style={{
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        opacity: slide === idx ? 1 : 0,
        zIndex: 1,
        transition: "opacity 1s ease",
        animation: slide === idx ? "zoomIn 6s linear forwards" : "none",
        }}
      />
      ))}

      {/* Dark overlay for better text readability */}
      <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
        zIndex: 2,
      }}
      />

      <div className="container mx-auto px-4 h-full flex items-center" style={{ position: "relative", zIndex: 3 }}>
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold font-manrope text-white mb-6 leading-tight">
          Professional <Highlight >HVAC &</Highlight>
          <br />
          <Highlight>Clean Room</Highlight> Solutions
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
          Manufacturing, supplying, and installing world-class HVAC systems and clean room solutions for
          pharmaceutical, biotechnology, and industrial applications.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold"
          asChild
        >
          <Link href="/quote">Get Quote</Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold bg-transparent"
          asChild
        >
          <Link href="/products">View Products</Link>
        </Button>
        </div>

        <div className="flex items-center gap-4">
        <Link
          href="/about"
          className="text-slate-300 hover:text-white font-medium text-lg underline underline-offset-4 transition-colors"
        >
          Learn About AVIVA
        </Link>
        <span className="text-slate-400">•</span>
        <span className="text-slate-300 text-sm">Trusted by 500+ Companies</span>
        </div>
      </div>
      </div>

      {/* Slider controls/Progress */}
      <div
      style={{
        position: "absolute",
        bottom: 30,
        right: 50,
        display: "flex",
        alignItems: "center",
        zIndex: 3,
        color: "#fff",
      }}
      >
      <span style={{ fontFamily: "monospace", fontSize: 18 }}>{String(slide + 1).padStart(2, "0")}</span>
      <div
        style={{
        margin: "0 14px",
        width: 70,
        height: 2,
        background: "rgba(255,255,255,0.3)",
        position: "relative",
        overflow: "hidden",
        }}
      >
        <div
        key={progressKey}
        className="progress-bar"
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          position: "absolute",
          left: 0,
          top: 0,
          transformOrigin: "left",
        }}
        />
      </div>
      <span style={{ fontFamily: "monospace", fontSize: 18 }}>{String(carouselImages.length).padStart(2, "0")}</span>
      <button
        aria-label={playing ? "Pause slideshow" : "Play slideshow"}
        onClick={() => setPlaying((p) => !p)}
        style={{
        cursor: "pointer",
        background: "rgba(0,0,0,0.35)",
        border: "none",
        color: "#FFF",
        borderRadius: "100%",
        marginLeft: 28,
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        }}
      >
        {playing ? (
        <span style={{ fontSize: 20, lineHeight: 0 }}>❚❚</span>
        ) : (
        <span style={{ fontSize: 20, lineHeight: 0 }}>▶</span>
        )}
      </button>
      </div>
      <style>
      {`
      @keyframes zoomIn {
        0% { transform: scale(1.0);}
        100% { transform: scale(1.08);}
      }
      .progress-bar {
        animation: progressBar ${SLIDE_DURATION}ms linear forwards;
      }
      @keyframes progressBar {
        0% { transform: scaleX(0); }
        100% { transform: scaleX(1); }
      }
      `}
      </style>
    </section>
  )
}

export default HeroCarousel
