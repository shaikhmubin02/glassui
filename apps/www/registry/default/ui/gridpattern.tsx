import { useId } from "react"

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

export function GridPattern({
  width = 40,
  height = 40,
  x = 0,
  y = 0,
  strokeWidth = 1,
  className,
  ...props
}: GridPatternProps) {
  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full stroke-neutral-400/30",
        className
      )}
      {...props}
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
    </svg>
  )
}

export default GridPattern
