"use client"

import React, { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

interface ParticleBackgroundProps {
  particleCount?: number
  lightModeColors?: string[]
  darkModeColors?: string[]
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 100,
  lightModeColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"],
  darkModeColors = ["#FFD700", "#FF69B4", "#00CED1", "#FF6347", "#32CD32"],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const createParticles = () => {
      const particles: Particle[] = []
      const colors = theme === "dark" ? darkModeColors : lightModeColors
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      return particles
    }

    particlesRef.current = createParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = createParticles()
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [particleCount, lightModeColors, darkModeColors, theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: theme === "dark" ? "screen" : "multiply" }}
    />
  )
}

export default ParticleBackground