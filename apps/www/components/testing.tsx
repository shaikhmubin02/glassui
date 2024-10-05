"use client"

import React, { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Dot {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  color: string
  vx: number
  vy: number
}

export default function AnimatedNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dots, setDots] = useState<Dot[]>([])
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  )
  const { theme } = useTheme()

  const dotCount = 80
  const moveRadius = 120
  const connectionDistance = 150
  const lightColors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"]
  const darkColors = ["#5dade2", "#ec7063", "#58d68d", "#f5b041", "#af7ac5"]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize dots
    const newDots: Dot[] = []
    for (let i = 0; i < dotCount; i++) {
      newDots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        color: (theme === "dark" ? darkColors : lightColors)[
          Math.floor(Math.random() * 5)
        ],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }
    setDots(newDots)

    const updateMousePosition = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    canvas.addEventListener('mousemove', updateMousePosition)
    canvas.addEventListener('mouseleave', () => setMousePos(null))

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener('mousemove', updateMousePosition)
      canvas.removeEventListener('mouseleave', () => setMousePos(null))
    }
  }, [theme]) // Add theme as a dependency

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set background based on theme
      ctx.fillStyle = theme === "dark" ? "#000000" : "#ffffff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot, index) => {
        // Move dots
        dot.x += dot.vx
        dot.y += dot.vy

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1

        if (mousePos) {
          const dx = mousePos.x - dot.x
          const dy = mousePos.y - dot.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < moveRadius) {
            const angle = Math.atan2(dy, dx)
            const push = (1 - distance / moveRadius) * 5 // Reduced push strength
            dot.x -= Math.cos(angle) * push
            dot.y -= Math.sin(angle) * push
          }
        }

        // Subtle pulsing effect
        const scale = 1 + Math.sin(time * 0.003 + index) * 0.1

        // Draw connections
        dots.forEach((otherDot, otherIndex) => {
          if (index !== otherIndex) {
            const dx = dot.x - otherDot.x
            const dy = dot.y - otherDot.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              ctx.beginPath()
              ctx.moveTo(dot.x, dot.y)
              ctx.lineTo(otherDot.x, otherDot.y)
              const gradient = ctx.createLinearGradient(
                dot.x,
                dot.y,
                otherDot.x,
                otherDot.y
              )
              gradient.addColorStop(0, dot.color)
              gradient.addColorStop(1, otherDot.color)
              ctx.strokeStyle = gradient
              ctx.lineWidth = 0.5 * (1 - distance / connectionDistance)
              ctx.stroke()
            }
          }
        })

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size * scale, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dots, mousePos, theme]) // Add theme as a dependency

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  )
}
