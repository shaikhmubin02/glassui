"use client"

import React from "react"

import MagicalButton from "../ui/magical-button"
import { Card } from "@/components/ui/card"

const MagicalButtonDemo = () => {
  return (
    
    <Card className='relative w-full h-[300px] shadow-md dark:bg-gray-950 dark:text-white'>
      <div className="flex flex-col items-center justify-center h-full">
        <MagicalButton buttonText="Magical Button" />
      </div>
    </Card>
  )
}

export default MagicalButtonDemo
