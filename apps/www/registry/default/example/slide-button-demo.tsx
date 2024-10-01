"use client"

import React from "react"

import SlideButton from "../ui/slide-button"

const SlideButtonDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SlideButton
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
