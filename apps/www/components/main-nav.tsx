"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Icons, ReactIcon } from "@/components/icons"
import Image from "next/image"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex ">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <div className="hidden rounded-md border border-black/10 p-1 shadow-lg md:block">
          <Image src="/glassui.png" alt="Glass UI" width={16} height={16} />
        </div>
        <span className="hidden text-lg font-bold sm:inline-block">
          Glass UI
        </span>
        <Badge variant="secondary" className="ml-2 text-xs px-1 py-0 h-4 w-8 mt-0.5 bg-gray-300 dark:bg-gray-800 rounded-sm">Beta</Badge>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs/components/slide-button"
          className={cn(
            "text-base font-semibold transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        {/* <Link
          href="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blocks
        </Link> */}
      </nav>
    </div>
  )
}
