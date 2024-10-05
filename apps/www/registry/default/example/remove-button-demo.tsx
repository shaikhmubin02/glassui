"use client"

import React from "react"

import { Card } from "@/components/ui/card"

import RemoveButton from "../ui/remove-button"

const RemoveButtonDemo = () => {
  return (
    <Card className="relative w-full h-[300px] shadow-md dark:bg-gray-950 dark:text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <RemoveButton />
      </div>
    </Card>
  )
}

export default RemoveButtonDemo
