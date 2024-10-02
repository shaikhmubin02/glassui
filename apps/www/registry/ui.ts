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
]