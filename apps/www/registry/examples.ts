import { Registry } from "@/registry/schema"

export const examples: Registry = [
  {
    name: "minimal-card-demo",
    type: "components:example",
    registryDependencies: ["minimal-card"],
    files: ["example/minimal-card-demo.tsx"],
  },
  {
    name: "three-d-carousel-demo",
    type: "components:example",
    registryDependencies: ["three-d-carousel"],
    files: ["example/three-d-carousel-demo.tsx"],
  },
  {
    name: "glass-button-demo",
    type: "components:example",
    registryDependencies: ["glass-button"],
    files: ["example/glass-button-demo.tsx"],
  },
  {
    name: "magical-button-demo",
    type: "components:example",
    registryDependencies: ["magical-button"],
    files: ["example/magical-button-demo.tsx"],
  },
  {
    name: "slide-button-demo",
    type: "components:example",
    registryDependencies: ["slide-button"],
    files: ["example/slide-button-demo.tsx"],
  },
  {
    name: "slider-button-demo",
    type: "components:example",
    registryDependencies: ["slider-button"],
    files: ["example/slider-button-demo.tsx"],
  },
  {
    name: "remove-button-demo",
    type: "components:example",
    registryDependencies: ["remove-button"],
    files: ["example/remove-button-demo.tsx"],
  },
  {
    name: "gradient-button-demo",
    type: "components:example",
    registryDependencies: ["gradient-button"],
    files: ["example/gradient-button-demo.tsx"],
  },
]
