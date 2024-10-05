import { Registry } from "@/registry/schema"

export const ui: Registry = [
  {
    name: "minimal-card",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/minimal-card.tsx"],
  },
  {
    name: "three-d-carousel",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/three-d-carousel.tsx"],
  },
  {
    name: "glass-button",
    type: "components:ui",
    dependencies: ["shadcn"],
    files: ["ui/glass-button.tsx"],
  },
  {
    name: "magical-button",
    type: "components:ui",
    dependencies: ["framer-motion", "shadcn"],
    files: ["ui/magical-button.tsx"],
  },
  {
    name: "slide-button",
    type: "components:ui",
    dependencies: ["framer-motion", "shadcn"],
    files: ["ui/slide-button.tsx"],
  },
  {
    name: "slider-button",
    type: "components:ui",
    dependencies: ["framer-motion", "shadcn"],
    files: ["ui/slider-button.tsx"],
  },
  {
    name: "remove-button",
    type: "components:ui",
    dependencies: ["shadcn"],
    files: ["ui/remove-button.tsx"],
  },
  {
    name: "gradient-button",
    type: "components:ui",
    dependencies: ["shadcn"],
    files: ["ui/gradient-button.tsx"],
  },
  {
    name: "particle-button",
    type: "components:ui",
    dependencies: ["shadcn"],
    files: ["ui/particle-button.tsx"],
  },
  {
    name: "network-background",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/network-background.tsx"],
  },
  {
    name: "glassy-background",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/glassy-background.tsx"],
  },
  {
    name: "animatedgrid",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/animatedgrid.tsx"],
  },
  {
    name: "animatednetwork",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/animatednetwork.tsx"],
  },
  {
    name: "gridpattern",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/gridpattern.tsx"],
  },
  {
    name: "luxuriouscrystal",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/luxuriouscrystal.tsx"],
  },
  {
    name: "iridescent-button",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/iridescent-button.tsx"],
  },
  {
    name: "particle-background",
    type: "components:ui",
    dependencies: ["react-particles"],
    files: ["ui/particle-background.tsx"],
  },
  {
    name: "premiumglass",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/premiumglass.tsx"],
  },
]