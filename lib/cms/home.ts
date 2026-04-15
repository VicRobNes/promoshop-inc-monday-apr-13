export interface HomeSlide {
  src: string
  alt: string
}

export interface BrandLogoEntry {
  name: string
  logo: string
}

// Home page content. Edited via the upcoming admin dashboard.
export const HOME_CONTENT = {
  hero: {
    logo: "/images/promoshop-studio-logo.png",
    logoAlt: "PromoShop Studio",
    body: [
      "Welcome to our store, where promoting your business is our business. Born from an expertise in building brands, we offer unique, quality promotional products, excellent service, and customer-focused marketing.",
      "From our office, we are your premier source for branding solutions! We present our Signature Collection, carefully selected promotional items that we refresh daily with the newest, hottest, and trendiest products.",
    ],
  },
  slideshow: [
    { src: "/images/slideshow/slide-01.jpg", alt: "PromoShop showcase 1" },
    { src: "/images/slideshow/slide-02.jpg", alt: "PromoShop showcase 2" },
    { src: "/images/slideshow/slide-03.jpg", alt: "PromoShop showcase 3" },
    { src: "/images/hero-merchandise.jpg", alt: "Premium branded merchandise collection" },
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
