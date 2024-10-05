"use client"

import { useEffect, useId, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeWidth?: number
  className?: string
  [key: string]: any
}

export function AnimatedGrid({
  width = 40,
  height = 40,
  x = 0,
  y = 0,
  strokeWidth = 1,
  className,
  ...props
}: GridPatternProps) {
  const id = useId()
  const [hoveredCell, setHoveredCell] = useState<{
    row: number
    col: number
  } | null>(null)
  const [mousePosition, setMousePosition] = useState<{
    x: number
    y: number
  } | null>(null)

  const handleMouseMove = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    const svg = event.currentTarget
    const rect = svg.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    const col = Math.floor(mouseX / width)
    const row = Math.floor(mouseY / height)

    setHoveredCell({ row, col })
    setMousePosition({ x: mouseX, y: mouseY })
  }

  const handleMouseLeave = () => {
    setHoveredCell(null)
    setMousePosition(null)
  }

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-auto h-full w-full stroke-neutral-400/30 [--highlighted-grid-color:theme(colors.neutral.400/30)] dark:[--highlighted-grid-color:theme(colors.neutral.700/30)]",
        className
      )}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <line x1="0" y1="0" x2={width} y2="0" strokeWidth={strokeWidth} />
          <line x1="0" y1="0" x2="0" y2={height} strokeWidth={strokeWidth} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <AnimatePresence>
        {hoveredCell && (
          <motion.rect
            key={`${hoveredCell.row}-${hoveredCell.col}`}
            x={hoveredCell.col * width}
            y={hoveredCell.row * height}
            width={width}
            height={height}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            fill="var(--highlighted-grid-color)"
          />
        )}
      </AnimatePresence>
      {mousePosition && (
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r={width / 2}
          fill="none"
          stroke="var(--highlighted-grid-color)"
          strokeWidth={2}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
      )}
      {mousePosition && (
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r={width / 4}
          fill="var(--highlighted-grid-color)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
      )}
    </svg>
  )
}

export default AnimatedGrid
