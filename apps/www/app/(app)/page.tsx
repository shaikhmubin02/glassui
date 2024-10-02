import Link from "next/link"
import { IceCream } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Announcement } from "@/components/announcement"
import { FadeIn } from "@/components/fade-in"
import {
  Icons,
  ReactIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "@/components/icons"
import { FeaturesSection } from "@/components/landing/feature-section"
import {
  LatestComponent,
} from "@/components/landing/featured-component"
import { PageActions, PageHeader } from "@/components/page-header"
import BgNoiseWrapper from "@/components/texture-wrapper"
import { GradientHeading } from "@/registry/default/ui/gradient-heading"

export default function IndexPage() {
  return (
    <div className=" isolate min-h-screen overflow-hidden bg-white bg-gradientTopRightLight pb-8 sm:pb-12 md:pb-0">
      <BgNoiseWrapper url="/egg-shell-noise.png">
        <div className="container relative pt-12">
          <PageHeader>
            <FadeIn>
              <Announcement />
            </FadeIn>
            <FadeIn>
              <GradientHeading
                size="xl"
                weight="bold"
                className="text-center text-xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
              >
                UI library for <br className="hidden md:block" /> 
                Design Engineers
              </GradientHeading>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-wrap items-center justify-center gap-1 text-center text-base  leading-3  text-foreground md:text-2xl md:font-normal md:leading-6">
                <span>Ready-to-use</span>
                <div className="hidden -rotate-45 rounded-full border border-black/10 p-1 shadow-lg md:block">
                  <ReactIcon className=" h-6 w-6   " aria-hidden="true" />
                </div>
                <span> components for your React apps.</span>

                <span>Shadcn compatible.</span>
                <div className="rounded-full border border-black/10 p-1 shadow-lg">
                  <Icons.logo className="h-5 w-5" />
                </div>
                <span>Styled with tailwindcss.</span>
                <div className="hidden -rotate-45 rounded-full border border-black/10 p-1 shadow-lg md:block ">
                  <TailwindCSSIcon className="h-6 w-6  " aria-hidden="true" />
                </div>
                <span className="">Copy and paste. Open Source. Typed. </span>
                <div className="rounded-xs hidden border border-black/10 p-1 shadow-lg md:block">
                  <TypeScriptIcon className="h-6 w-6 " aria-hidden="true" />
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <PageActions>
                <Link href="/docs" className={cn(buttonVariants(), "rounded-full")}>
                  Get Started
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/shaikhmubin02/glassui"
                  className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
                >
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </PageActions>
            </FadeIn>
          </PageHeader>

          <FadeIn>
            <section className="w-full space-y-4 md:block">
              <div className=" mx-auto   max-w-7xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-[44px]">
                <LatestComponent />
              </div>
            </section>
          </FadeIn>
        </div>
      </BgNoiseWrapper>
    </div>
  )
}
IndexPage.theme = "light"
