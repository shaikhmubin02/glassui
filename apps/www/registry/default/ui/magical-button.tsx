"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import { Loader2, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ComponentProps {
  buttonText: string
}

export default function Test({
  buttonText = "Magical Button",
}: ComponentProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  useEffect(() => {
    // Cleanup function to cancel any ongoing confetti animations
    return () => {
      confetti.reset()
    }
  }, [])

  return (
    <Button
      className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      disabled={isLoading}
    >
      <span className="relative z-10 flex items-center">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 h-4 w-4" />
        )}
        {buttonText}
      </span>
      <span
        className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <span className="absolute inset-0 bg-white opacity-25 animate-pulse" />
    </Button>
  )
}
