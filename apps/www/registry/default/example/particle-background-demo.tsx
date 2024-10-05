import React from "react"

import ParticleBackground from "../ui/particle-background"
import { Card } from "@/components/ui/card"

const ParticleBackgroundDemo = () => {
  return (
    <Card className="relative w-full overflow-hidden shadow-md bg-none z-10">
      <div className="relative w-full h-[400px]">
        <ParticleBackground />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="p-4 backdrop-blur-md bg-white/50 dark:bg-black/50 rounded-lg shadow-lg max-w-xs">
            <p className="text-base font-medium text-gray-900 dark:text-gray-100">
              "Are we the prey? No, we are the hunters... of bugs in our code!"
            </p>
            <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
              - Eren Yeager, debugging the Titan problem
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ParticleBackgroundDemo
