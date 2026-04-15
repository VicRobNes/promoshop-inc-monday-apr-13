import { BRANDS } from "@/lib/brands"

export interface HomeSlide {
  src: string
  alt: string
}

export interface BrandLogoEntry {
  name: string
  logo: string
}

// Home page content. Edited via the upcoming admin dashboard.
//
// Image URLs point at the binaries Abigail dropped into VicRobNes/mainmemory
// (main branch). next.config.mjs allow-lists raw.githubusercontent.com so
// next/image can serve them directly without waiting for binaries to be
// committed into this repo's public/ folder.
const MAINMEMORY_RAW = "https://raw.githubusercontent.com/VicRobNes/mainmemory/main"

export const HOME_CONTENT = {
  hero: {
    // "Promoshop logo (2).png" from Abigail's Photos for PromoShop thread.
    logo: `${MAINMEMORY_RAW}/Promoshop%20logo%20(2).png`,
    logoAlt: "PromoShop Studio",
    body: [
      "Welcome to our store, where promoting your business is our business. Born from an expertise in building brands, we offer unique, quality promotional products, excellent service, and customer-focused marketing.",
      "From our office, we are your premier source for branding solutions! We present our Signature Collection, carefully selected promotional items that we refresh daily with the newest, hottest, and trendiest products.",
    ],
  },
  // The four home-page slideshow images Abigail re-sent on Apr 13. Ordering
  // is a best guess (1.png..4.png) and can be re-ordered from here once
  // Abigail confirms in the Apr 15 review call.
  slideshow: [
    { src: `${MAINMEMORY_RAW}/1.png`, alt: "PromoShop slideshow image 1" },
    { src: `${MAINMEMORY_RAW}/2.png`, alt: "PromoShop slideshow image 2" },
    { src: `${MAINMEMORY_RAW}/3.png`, alt: "PromoShop slideshow image 3" },
    { src: `${MAINMEMORY_RAW}/4.png`, alt: "PromoShop slideshow image 4" },
  ] as HomeSlide[],
  // Brand logos for the scrolling reel — sourced from BRANDS (single source
  // of truth). Add/update logoUrl in lib/brands.ts to change reel images.
  get brandLogos(): BrandLogoEntry[] {
    return BRANDS.map((b) => ({ name: b.name, logo: b.logoUrl ?? "" }))
  },
}
