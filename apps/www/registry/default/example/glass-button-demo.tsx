"use client"

import React from "react"

import GlassButton from "../ui/glass-button"
import { Card } from "@/components/ui/card"

const GlassButtonDemo = () => {
  return (
    <Card className="relative w-full h-[300px] shadow-md bg-gradient-to-br from-purple-400 to-indigo-600">
      <div className="flex flex-col items-center justify-center h-full">
          <GlassButton name="Click Me" />
      </div>
    </Card>
  )
}

export default GlassButtonDemo
