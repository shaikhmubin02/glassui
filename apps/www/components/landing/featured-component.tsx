import Link from "next/link"
import { ArrowRight, SparklesIcon } from "lucide-react"


import { GradientHeading } from "@/registry/default/ui/gradient-heading"

import { Badge } from "../ui/badge"
import ShaderLensBlur from "@/registry/default/ui/shader-lens-blur"

export function LatestComponent() {
  return (
    <div className="relative flex w-full flex-col  p-2  md:flex-row md:items-center md:gap-24 md:p-6">
      <Badge
        variant="outline"
        className="absolute left-4 top-6 rounded-[14px] border border-black/10 text-base md:left-6"
      >
        <SparklesIcon className="  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
        Latest component
      </Badge>
      <div className="flex flex-col justify-center pb-2 pl-2 pt-16 md:items-center">
        <div className="flex  gap-2">
          <div>
            <GradientHeading>Blur Shader</GradientHeading>
            <Link
              href="/docs/components/shader-lens-blur"
              className="flex items-center gap-1 "
            >
              A shader that blurs the edges of your content
              <ArrowRight className="hidden h-4 w-4 md:block" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 flex max-w-xl grow flex-col items-center justify-center space-y-0 rounded-[14px]  p-4 md:mt-0 md:rounded-md">
        <ShaderLensBlur />
      </div>
    </div>
  )
}
