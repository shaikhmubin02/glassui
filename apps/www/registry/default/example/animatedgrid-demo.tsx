import React from "react"

import AnimatedGrid from "../ui/animatedgrid"
import { Card } from "@/components/ui/card"

const AnimatedGridDemo = () => {
  return (
    <Card className="relative w-full overflow-hidden shadow-md bg-none">
      <div className="relative w-full h-[400px]">
        <AnimatedGrid className="absolute inset-0 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="p-4 backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-lg shadow-lg max-w-xs">
            <p className="text-base font-medium text-gray-800 dark:text-gray-200">
              "The hardest choices require the strongest wills."
            </p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              - Thanos, on choosing the right UI components
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AnimatedGridDemo
