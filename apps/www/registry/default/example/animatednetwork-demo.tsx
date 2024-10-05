import React from "react"

import AnimatedNetwork from "../ui/animatednetwork"
import { Card } from "@/components/ui/card"

const AnimatedNetworkDemo: React.FC = () => {
  return (
    <Card className="relative w-full overflow-hidden shadow-md">
      <div className="relative w-full h-[400px]">
        <AnimatedNetwork />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="text-center">
            <h1 className="mb-4 text-xl font-semibold text-black dark:text-white">
              Animated Network
            </h1>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Expecto UI-tronum!
            </p>
            <p className="text-xs mt-2 text-gray-700 dark:text-gray-300">
              Summon the guardian of sleek interfaces
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AnimatedNetworkDemo
