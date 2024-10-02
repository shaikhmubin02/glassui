"use client"

import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Blocks } from "lucide-react"

import { Separator } from "@/components/ui/separator"

import BgNoiseWrapper from "./texture-wrapper"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Announcement() {
  const pathname = usePathname()
  return (
    <Link
      href="/docs/components/slide-button"
          className={cn(
            "group inline-flex items-center rounded-lg border border-black/10 bg-transparent px-3 py-1 text-sm font-medium text-neutral-800 shadow-sm",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
    >
      <Blocks className="h-4 w-4 group-hover:rotate-6 group-hover:fill-cyan-300" />{" "}
      <Separator className="mx-2 h-4 bg-neutral-900" orientation="vertical" />{" "}
      <span>New! Glass UI animated button</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
      {/* <BgNoiseWrapper> */}
      {/* </BgNoiseWrapper> */}
    </Link>
  )
}
