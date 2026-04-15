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
// NOTE: image paths below temporarily point at files already committed to
// public/images/ so the build stays green. Swap them for the new assets
// listed in docs/asset-map.md once those binaries land on the branch.
export const HOME_CONTENT = {
  hero: {
    // TODO: replace with /images/promoshop-studio-logo.png (Promoshop logo (2).png from mainmemory)
    logo: "/images/promoshop-logo-full.png",
    logoAlt: "PromoShop Studio",
    body: [
      "Welcome to our store, where promoting your business is our business. Born from an expertise in building brands, we offer unique, quality promotional products, excellent service, and customer-focused marketing.",
      "From our office, we are your premier source for branding solutions! We present our Signature Collection, carefully selected promotional items that we refresh daily with the newest, hottest, and trendiest products.",
    ],
  },
  // TODO: replace with /images/slideshow/slide-0N.jpg once Abigail's hero shots are uploaded.
  slideshow: [
    { src: "/images/hero-merchandise.jpg", alt: "Premium branded merchandise collection" },
    { src: "/images/category-technology.jpg", alt: "PromoShop showcase \u2014 technology" },
    { src: "/images/category-athleisure.jpg", alt: "PromoShop showcase \u2014 athleisure" },
    { src: "/images/category-unique.jpg", alt: "PromoShop showcase \u2014 unique ideas" },
  ] as HomeSlide[],
  brandLogos: [
    { name: "Patagonia", logo: "/brands/patagonia.svg" },
    { name: "YETI", logo: "/brands/yeti.svg" },
    { name: "Stanley", logo: "/brands/stanley.svg" },
    { name: "JBL", logo: "/brands/jbl.svg" },
    { name: "Rhone", logo: "/brands/rhone.svg" },
    { name: "VSSL", logo: "/brands/vssl.svg" },
    { name: "Peter Millar", logo: "/brands/peter-millar.svg" },
    { name: "Johnnie-O", logo: "/brands/johnnie-o.svg" },
    { name: "Helly Hansen", logo: "/brands/helly-hansen.svg" },
    { name: "Marine Layer", logo: "/brands/marine-layer.svg" },
    { name: "Tentree", logo: "/brands/tentree.svg" },
    { name: "Cotopaxi", logo: "/brands/cotopaxi.svg" },
    { name: "Herschel", logo: "/brands/herschel.svg" },
    { name: "The North Face", logo: "/brands/the-north-face.svg" },
    { name: "Nike", logo: "/brands/nike.svg" },
  ] as BrandLogoEntry[],
}
