import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/docs/components/slide-button",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Buttons",
          items: [
            {
              title: "Glass Button",
              href: "/docs/components/glassbutton",
              items: [],
            },
            {
              title: "Magical Button",
              href: "/docs/components/magical-button",
              items: [],
              label: "new",
            },
            {
              title: "Slide Button",
              href: "/docs/components/slide-button",
              items: [],
            },
            {
              title: "Remove Button",
              href: "/docs/components/remove-button",
              items: [],
            },
            {
              title: "Particle Button",
              href: "/docs/components/particle-button",
              items: [],
            },
            {
              title: "Slider Button",
              href: "/docs/components/slider-button",
              items: [],
            },
            {
              title: "Gradient Button",
              href: "/docs/components/gradient-button",
              items: [],
            },
            {
              title: "Iridescent Button",
              href: "/docs/components/iridescent-button",
              items: [],
              label: "new",
            },
          ],
        },
        {
          title: "Cards",
          items: [
            {
              title: "3D Carousel",
              href: "/docs/components/three-d-carousel",
              items: [],
            },
          ],
        },
        {
          title: "Pricing",
          items: [
            {
              title: "Luxurious Crystal",
              href: "/docs/components/luxuriouscrystal",
              items: [],
            },
            {
              title: "Premium Glass",
              href: "/docs/components/premiumglass",
              items: [],
            },
          ],
        },
        {
          title: "Backgrounds",
          items: [
            {
              title: "Network Background",
              href: "/docs/components/network-background",
              items: [],
            },
            {
              title: "Glassy Background",
              href: "/docs/components/glassy-bg",
              items: [],
            },
            {
              title: "Animated Grid",
              href: "/docs/components/animatedgrid",
              items: [],
            },
            {
              title: "Animated Network",
              href: "/docs/components/animatednetwork",
              items: [],
              label:"new",
            },
            {
              title: "Particle Background",
              href: "/docs/components/particle-background",
              items: [],
            },
            {
              title: "Grid Pattern",
              href: "/docs/components/gridpattern",
              items: [],
            },
          ],
        },
      ],
    },
  ],
}
