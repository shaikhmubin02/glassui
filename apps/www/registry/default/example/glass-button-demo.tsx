"use client"

import React from "react"

import GlassButton from "../ui/glass-button"

const GlassButtonDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center h-48 w-96 rounded-md bg-gradient-to-br from-purple-400 to-indigo-600">
        <GlassButton name="Click Me" />
      </div>
    </div>
  )
}

export default GlassButtonDemo
