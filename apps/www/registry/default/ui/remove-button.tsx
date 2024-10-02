"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { X, Loader2, CheckCircle } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function RemoveButton() {
  const [isShaking, setIsShaking] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRemoved, setIsRemoved] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleShake = () => {
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 500)
  }

  const handleRemove = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsRemoved(true)
      toast({
        title: "Item Removed",
        description: "The item has been successfully removed.",
        variant: "default",
      })
    }, 2000)
  }

  useEffect(() => {
    if (isRemoved) {
      const timer = setTimeout(() => setIsRemoved(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isRemoved])

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className={`
            group relative overflow-hidden bg-white text-destructive
            border border-destructive hover:text-white
            transition-all duration-300 ease-out
            ${isShaking ? "animate-shake" : ""}
            shadow-md hover:shadow-lg
            rounded-full px-6 py-2
          `}
          onClick={handleShake}
          disabled={isLoading || isRemoved}
        >
          <span className="relative z-10 flex items-center gap-2 font-semibold">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : isRemoved ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
            {isLoading ? "Removing..." : isRemoved ? "Removed" : "Remove"}
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out transform group-hover:scale-105" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently remove the item
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleRemove}
            className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-200"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}