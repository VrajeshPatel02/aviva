"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Favicon from "@/app/favicon.ico"

export default function LoaderOverlay() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Wait for the window load event (all assets, images, etc.)
    const handlePageLoad = () => {
      setTimeout(() => setIsLoading(false), 800) // fade out delay
    }

    if (document.readyState === "complete") {
      handlePageLoad()
    } else {
      window.addEventListener("load", handlePageLoad)
      return () => window.removeEventListener("load", handlePageLoad)
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [])

  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <AnimatePresence>
      {isLoading && (
        
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="relative flex flex-col items-center">
            
            {/* Main Loading Container */}
            <div className="relative w-32 h-32 mb-8">
            
            {/* Outer Ring - Progress Indicator */}
            <div className="absolute inset-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#BDD9B8"
                    strokeWidth="2"
                    opacity="0.3"
                />
                {/* Progress Ring */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#73BF5E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                    className="transition-all duration-300 ease-out"
                    style={{
                    filter: 'drop-shadow(0 0 4px rgba(115, 191, 94, 0.3))'
                    }}
                />
                </svg>
            </div>

            {/* Inner Engineering Grid Pattern */}
            <div className="absolute inset-4 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#08678C" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            {/* Central Favicon Container */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div 
                className={`relative w-16 h-16 transition-all duration-1000 ${
                    isComplete ? 'scale-110' : 'scale-100'
                }`}
                >
                {/* Favicon Background Circle */}
                <div 
                    className="absolute inset-0 rounded-full bg-white shadow-lg transition-all duration-500"
                    style={{
                    boxShadow: isComplete 
                        ? '0 8px 32px rgba(8, 103, 140, 0.3)' 
                        : '0 4px 16px rgba(8, 103, 140, 0.2)'
                    }}
                />
                
                {/* Spinning Favicon Placeholder */}
                <div 
                    className={`absolute inset-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isComplete ? '' : 'animate-spin'
                    }`}
                    style={{ 
                    background: `linear-gradient(135deg, #08678C 0%, #73BF5E 100%)`,
                    animationDuration: '3s'
                    }}
                >
                    {/* HVAC Icon Representation */}
                    <div className="text-white text-xl font-bold">A</div>
                </div>

                {/* Pulsing Glow Effect */}
                <div 
                    className={`absolute inset-0 rounded-full transition-all duration-2000 ${
                    isComplete ? 'opacity-100' : 'opacity-60'
                    }`}
                    style={{
                    background: 'radial-gradient(circle, rgba(162, 217, 154, 0.4) 0%, transparent 70%)',
                    animation: isComplete ? 'none' : 'pulse 2s infinite'
                    }}
                />
                </div>
            </div>

            {/* Corner Technical Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4">
                <div 
                className="w-full h-full rounded-full transition-all duration-1000"
                style={{ 
                    backgroundColor: '#A2D99A',
                    transform: `rotate(${progress * 3.6}deg)`,
                    opacity: 0.7
                }}
                />
            </div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3">
                <div 
                className="w-full h-full rounded-full transition-all duration-1000"
                style={{ 
                    backgroundColor: '#73BF5E',
                    transform: `rotate(${-progress * 2.4}deg)`,
                    opacity: 0.6
                }}
                />
            </div>
            </div>

            {/* Brand Name */}
            <div className="text-center mb-6">
            <h1 
                className="text-2xl font-bold mb-2 transition-all duration-500"
                style={{ 
                color: '#08678C',
                opacity: isComplete ? 1 : 0.8
                }}
            >
                AVIVA HVAC
            </h1>
            <p 
                className="text-sm font-medium tracking-wide transition-all duration-500"
                style={{ 
                color: '#73BF5E',
                opacity: isComplete ? 1 : 0.7
                }}
            >
                Clean Room Industries
            </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex flex-col items-center space-y-3">
            {/* Progress Bar */}
            <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                className="h-full transition-all duration-300 ease-out rounded-full"
                style={{
                    backgroundColor: '#73BF5E',
                    width: `${progress}%`,
                    boxShadow: '0 0 10px rgba(115, 191, 94, 0.5)'
                }}
                />
            </div>
            
            {/* Status Text */}
            <div className="text-sm font-medium" style={{ color: '#08678C' }}>
                {isComplete ? (
                <span className="flex items-center space-x-2">
                    <span>Ready</span>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#73BF5E' }} />
                </span>
                ) : (
                <span>Loading... {Math.round(progress)}%</span>
                )}
            </div>
            </div>
        </div>

        <style jsx>{`
            @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 0.6;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.9;
            }
            }
        `}</style>
        </div>
    )};
    </AnimatePresence>
  )
}
