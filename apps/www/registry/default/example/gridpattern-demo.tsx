import React from "react"

import GridPattern from "../ui/gridpattern"
import { Card } from "@/components/ui/card"

const GridPatternDemo = () => {
  return (
    <Card className="relative w-full overflow-hidden shadow-md bg-none">
      <div className="relative w-full h-[400px]">
        <GridPattern />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-bold text-black z-10 pointer-events-none dark:text-white">
          <p className="text-2xl font-normal text-center text-semibold">
            I&apos;m Batman.
          </p>
        </div>
      </div>
    </Card>
  )
}

export default GridPatternDemo
