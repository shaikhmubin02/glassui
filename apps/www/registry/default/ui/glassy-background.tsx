"use client"

import React, { ReactNode, useEffect, useState } from "react"

interface GlassyBackgroundProps {
  children: ReactNode
}

interface Shape {
  size: number
  position: { x: number; y: number }
  color: string
  shape: string
}

type AnimatedShapeProps = {
  size: number
  position: { x: number; y: number }
  color: string
  shape: "circle" | "square" // Adjust these options as needed
}

const AnimatedShape = ({
  size,
  position,
  color,
  shape,
}: AnimatedShapeProps) => (
  <div
    className={`absolute mix-blend-multiply filter blur-lg animate-combined ${
      shape === "circle" ? "rounded-full" : "rounded-md"
    }`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${position.x}%`,
      top: `${position.y}%`,
      backgroundColor: color,
      animation: `
        float ${Math.random() * 10 + 10}s ease-in-out infinite,
        pulse ${Math.random() * 4 + 2}s ease-in-out infinite alternate,
        rotate ${Math.random() * 20 + 20}s linear infinite
      `,
    }}
  />
)

export default function GlassyBackground({ children }: GlassyBackgroundProps) {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    const colors = [
      "#FF595E",
      "#FFCA3A",
      "#8AC926",
      "#1982C4",
      "#6A4C93",
      "#FF9E00",
      "#8F00FF",
    ]
    const newShapes = Array.from({ length: 20 }, () => ({
      size: Math.random() * 150 + 50,
      position: { x: Math.random() * 100, y: Math.random() * 100 },
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? "circle" : "square",
    }))
    setShapes(newShapes)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated glassy background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 opacity-30 animate-gradient-x" />
        {shapes.map((shape, index) => (
          <AnimatedShape key={index} {...(shape as AnimatedShapeProps)} />
        ))}
        <div className="absolute inset-0 backdrop-blur-xl" />
      </div>

      {/* Content */}
      {children}
    </div>
  )
}
