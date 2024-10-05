"use client"

import React from "react"

import { Card } from "@/components/ui/card"

import SliderButton from "../ui/slider-button"

const SlideButtonDemo = () => {
  return (
    <Card className="relative w-full h-[300px] shadow-md dark:bg-gray-950 dark:text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <SliderButton
          name1="Discover More"
          name2="Let's Go"
          onClick={() => {
            console.log("clicked")
          }}
        />
      </div>
    </Card>
  )
}

export default SlideButtonDemo
