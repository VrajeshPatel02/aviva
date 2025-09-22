"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const carouselImages = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80",
];

const SLIDE_DURATION = 6000;

const HeroCarousel: React.FC = () => {
  const [slide, setSlide] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (playing) {
      timerRef.current = window.setTimeout(() => {
        setSlide(prev => (prev + 1) % carouselImages.length);
        setProgressKey(k => k + 1); // Restart animation
      }, SLIDE_DURATION);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [slide, playing]);

  useEffect(() => {
    if (!playing && timerRef.current) clearTimeout(timerRef.current);
  }, [playing]);

  return (
    <section
      style={{
        position: "relative",
        height: "90vh", // Changed from 70vh to 90vh
        minHeight: 500,
        width: "100vw",
        overflow: "hidden",
        background: "#08678C"
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
            width: "100%",
            height: "90vh", // Changed from 100% to 90vh
            minHeight: 500,
            opacity: slide === idx ? 1 : 0,
            zIndex: 1,
            transition: "opacity 1s ease",
            animation: slide === idx ? "zoomIn 6s linear forwards" : "none"
          }}
        />
      ))}
      <div style={{
        position: "absolute",
        bottom: 60,
        left: 80,
        color: "#fff",
        zIndex: 2
      }}>
        <div style={{ marginBottom: 24, fontSize: 48, fontWeight: 700, lineHeight: 1.2 }}>
          Professional HVAC & Clean Room Solutions
        </div>
        <div style={{ fontSize: 20, fontWeight: 400 }}>
          Manufacturing, supplying, and installing world-class HVAC systems and clean room solutions for pharmaceutical, biotechnology, and industrial applications.
        </div>
        <div style={{ marginTop: 16 }}>
          <Link href="#about" style={{
            color: "#fff",
            fontWeight: 500,
            textDecoration: "underline",
            fontSize: 18
          }}>About Aviva</Link>
        </div>
      </div>
      {/* Slider controls/Progress */}
      <div style={{
        position: "absolute",
        bottom: 30,
        right: 50,
        display: "flex",
        alignItems: "center",
        zIndex: 3,
        color: "#fff"
      }}>
        <span style={{ fontFamily: "monospace", fontSize: 18 }}>{String(slide + 1).padStart(2, '0')}</span>
        <div style={{
          margin: "0 14px",
          width: 70,
          height: 2,
          background: "rgba(255,255,255,0.3)",
          position: "relative",
          overflow: "hidden"
        }}>
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
              transformOrigin: "left"
            }}
          />
        </div>
        <span style={{ fontFamily: "monospace", fontSize: 18 }}>{String(carouselImages.length).padStart(2, '0')}</span>
        <button
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          onClick={() => setPlaying(p => !p)}
          style={{
            cursor: "pointer",
            background: "rgba(0,0,0,0.35)",
            border: "none",
            color: "#FFF",
            borderRadius: "100%",
            marginLeft: 28,
            width: 32, height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {playing
            ? <span style={{ fontSize: 20, lineHeight: 0 }}>❚❚</span>
            : <span style={{ fontSize: 20, lineHeight: 0 }}>▶</span>
          }
        </button>
      </div>
      <style>{`
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
  );
};

export default HeroCarousel;

