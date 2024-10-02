"use client"

import { useCallback, useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SlideButton({
  name1,
  name2,
  onClick,
}: {
  name1: string
  name2: string
  onClick: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = useCallback(() => {
    setIsClicked(true)
    setTimeout(() => {
      onClick()
      setIsClicked(false)
    }, 1000) // 1 second delay
  }, [onClick])

  return (
    <Button
      className="relative overflow-visible bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full transition-all duration-500 ease-in-out group hover:shadow-lg hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      disabled={isClicked}
    >
      <span className="relative z-10 flex items-center transition-all duration-500 ease-in-out group-hover:-translate-x-2">
        <span
          className={`transition-all duration-500 ${
            isHovered ? "opacity-0 -translate-y-8" : "opacity-100"
          }`}
        >
          {name1}
        </span>
        <span
          className={`absolute left-0 transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {name2}
        </span>
        <span className="relative ml-2 transition-all duration-500 ease-in-out">
          <ArrowRight
            className={`h-5 w-5 transition-all duration-1000 ${
              isHovered ? "opacity-0 -translate-y-8" : "opacity-100"
            } ${isClicked ? "translate-x-[200px]" : ""}`}
          />
          <ArrowRight
            className={`absolute top-0 left-0 h-5 w-5 transition-all duration-1000 
            ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
            ${isClicked ? "translate-x-[200px]" : ""}`}
          />
        </span>
      </span>
      <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-full" />
      <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out origin-bottom rounded-full" />
    </Button>
  )
}
