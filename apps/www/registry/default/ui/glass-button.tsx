"use client"

import { useCallback, useState } from "react"

import { Button } from "@/components/ui/button"

export default function GlassButton({
  name = "Glass Button",
}: {
  name?: string
}) {
  const [cracked, setCracked] = useState(false)

  const handleClick = useCallback(() => {
    setCracked(true)
    setTimeout(() => setCracked(false), 2000) // Reset after 2 seconds
  }, [])

  return (
    <>
      <Button
        onClick={handleClick}
        className={`
          relative overflow-hidden
          bg-opacity-10 bg-white backdrop-filter backdrop-blur-xl
          border border-opacity-20 border-white
          shadow-lg
          text-white font-semibold
          px-8 py-4 rounded-xl
          transition-all duration-300 ease-in-out
          hover:bg-opacity-20 hover:scale-105
          active:scale-95
          before:content-[''] before:absolute before:inset-0
          before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:opacity-20
          before:transform before:rotate-45 before:transition-transform before:duration-1000
          hover:before:translate-x-full
        `}
      >
        {name}
        {cracked && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                id="crack-gradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            {Array.from({ length: 50 }).map((_, i) => (
              <path
                key={i}
                d={`M${50 + Math.random() * 50},${50 + Math.random() * 50} 
                   Q${Math.random() * 100},${Math.random() * 100} 
                    ${Math.random() * 100},${Math.random() * 100}
                   T${Math.random() * 100},${Math.random() * 100}`}
                stroke="url(#crack-gradient)"
                strokeWidth={Math.random() * 2 + 0.5}
                fill="none"
                className="crack-line"
                style={{
                  animationDelay: `${Math.random() * 0.5}s`,
                  opacity: Math.random() * 0.5 + 0.5,
                }}
              />
            ))}
          </svg>
        )}
      </Button>
      <style jsx>{`
        .crack-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: crack 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        @keyframes crack {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </>
  )
}
