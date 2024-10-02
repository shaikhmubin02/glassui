"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SliderButton({
  name1,
  name2,
  onClick,
}: {
  name1: string
  name2: string
  onClick: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      className="relative overflow-hidden bg-background text-foreground hover:text-white border-2 border-primary px-6 py-3 rounded-md transition-all duration-300 ease-in-out group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex items-center transition-transform duration-300 ease-in-out group-hover:-translate-x-5">
        <span
          className={`transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {name1}
        </span>
        <span
          className={`absolute left-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {name2}
        </span>
        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-5" />
      </span>
      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
    </Button>
  )
}
