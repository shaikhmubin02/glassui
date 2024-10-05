"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Bug, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"

export function SiteHeader() {
  let pathname = usePathname()
  const router = useRouter()

  const handleReportIssue = () => {
    const issueTitle = encodeURIComponent('Bug Report: [Brief Description]')
    const issueBody = encodeURIComponent(`
      ## Description
      [Provide a clear and concise description of the issue]
      
      ## Steps to Reproduce
      1. [First Step]
      2. [Second Step]
      3. [and so on...]
      
      ## Expected Behavior
      [What you expected to happen]
      
      ## Actual Behavior
      [What actually happened]
      
      ## Screenshots
      [If applicable, add screenshots to help explain your problem]
      
      ## Environment
      - Browser: [e.g. Chrome, Safari]
      - Version: [e.g. 22]
      - Operating System: [e.g. Windows 10, macOS]
      
      ## Additional Context
      [Add any other context about the problem here]`
    )
    const githubIssueUrl = `https://github.com/shaikhmubin02/glassui/issues/new?title=${issueTitle}&body=${issueBody}`
    window.open(githubIssueUrl, '_blank')
  }

  const handleRequestFeature = () => {
    const featureTitle = encodeURIComponent('Feature Request: [Brief Description]')
    const featureBody = encodeURIComponent(`
      ## Feature Description
      [Provide a clear and concise description of the feature you'd like to see]
  
      ## Problem It Solves
      [Explain what problem this feature would solve or how it would improve the user experience]
      
      ## Proposed Solution
      [If you have ideas on how this feature could be implemented, share them here]
      
      ## Alternatives Considered
      [Have you considered any alternative solutions or features? If so, describe them here]
      
      ## Additional Context
      [Add any other context, screenshots, or examples about the feature request here]`
    )
    const githubFeatureUrl = `https://github.com/shaikhmubin02/glassui/issues/new?title=${featureTitle}&body=${featureBody}&labels=enhancement`
    window.open(githubFeatureUrl, '_blank')
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full    ",
          pathname?.includes("/docs")
            ? "-mb-12 bg-[#FAFAFA]   backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:backdrop-blur-xl dark:bg-[#171517]"
            : "-mb-14"
        )}
      >
        {/* <header className="sticky top-0 z-50 w-full -mb-12  lg:backdrop-blur-xl backdrop-filter bg-gradientTopRightLightHeaderSm/70  md:bg-gradientTopRightLightHeader  backdrop-blur supports-[backdrop-filter]:bg-background/60 "> */}
        <div className="container flex h-14 max-w-screen-2xl items-center ">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            {!pathname?.includes("/docs") ? (
              <div className="hidden lg:block lg:w-full">
                {/* <DistortedGlass></DistortedGlass> */}
              </div>
            ) : null}

            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center ">
              <Link
                href="https://github.com/shaikhmubin02/glassui"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href="https://x.com/shaikhmubin_02"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.twitter className="h-3 w-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              {pathname?.includes("/testing") ? (<ModeToggle />): null }
              {pathname?.includes("/docs") ? (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="w-9 px-0">
                        <Bug className="h-4 w-4 text-gray-700 mt-0.5 dark:text-white" />
                        <span className="sr-only">Report or Request</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <DialogHeader className="p-6 pb-4">
                          <DialogTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">Feedback & Ideas</DialogTitle>
                          <DialogDescription className="text-sm text-gray-600 dark:text-gray-300">
                            We value your input! Share your thoughts or suggest improvements.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col space-y-2 p-6 pt-2">
                          <Button variant="outline" className="justify-start hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={handleReportIssue}>
                            <Bug className="h-5 w-5 mr-3 text-red-500" />
                            <span>Report an Issue</span>
                          </Button>
                          <Button variant="outline" className="justify-start hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={handleRequestFeature}>
                            <Lightbulb className="h-5 w-5 mr-3 text-yellow-500" />
                            <span>Request Feature</span>
                          </Button>
                        </div>
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                  <ModeToggle />
                </>
              ) : null}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
