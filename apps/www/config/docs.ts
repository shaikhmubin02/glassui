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
              label: "new",
            },
            {
              title: "Magical Button",
              href: "/docs/components/magical-button",
              items: [],
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
              label: "new",
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
      ],
    },
  ],
}
