"use client"

import React from "react"

import SliderButton from "../ui/slider-button"

const SlideButtonDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SliderButton
        name1="Discover More"
        name2="Let's Go"
        onClick={() => {
          console.log("clicked")
        }}
      />
    </div>
  )
}

export default SlideButtonDemo
