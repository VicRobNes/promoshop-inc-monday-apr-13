export interface Brand {
  id: string
  name: string
  slug: string
  description: string
  categories: string[]
  featured?: boolean
}

export const BRANDS: Brand[] = [
  {
    id: "patagonia",
    name: "Patagonia",
    slug: "patagonia",
    description: "Outdoor apparel and gear built for adventure. Known for quality, durability, and environmental responsibility.",
    categories: ["Jackets", "Tops", "Vests", "Bags"],
    featured: true
  },
  {
    id: "yeti",
    name: "YETI",
    slug: "yeti",
    description: "Premium coolers, drinkware, and gear designed for the wild. Built to withstand the elements.",
    categories: ["Drinkware", "Coolers", "Bags"],
    featured: true
  },
  {
    id: "stanley",
    name: "Stanley",
    slug: "stanley",
    description: "Legendary drinkware with over 100 years of heritage. Known for rugged durability and timeless design.",
    categories: ["Drinkware"],
    featured: true
  },
  {
    id: "jbl",
    name: "JBL",
    slug: "jbl",
    description: "Premium audio equipment and speakers. Professional-grade sound for any environment.",
    categories: ["Tech", "Audio"],
    featured: true
  },
  {
    id: "rhone",
    name: "Rhone",
    slug: "rhone",
    description: "Performance apparel designed for the modern athlete. Premium fabrics with innovative technology.",
    categories: ["Tops", "Activewear"],
    featured: true
  },
  {
    id: "vssl",
    name: "VSSL",
    slug: "vssl",
    description: "Adventure-ready gear and drinkware. Designed for those who push boundaries.",
    categories: ["Drinkware", "Outdoor"],
    featured: true
  },
  {
    id: "marine-layer",
    name: "Marine Layer",
    slug: "marine-layer",
    description: "California-inspired casual wear. Exceptionally soft fabrics with laid-back style.",
    categories: ["Tops", "Casual"],
    featured: false
  },
  {
    id: "tentree",
    name: "Tentree",
    slug: "tentree",
    description: "Sustainable apparel with a mission. Every purchase plants 10 trees.",
    categories: ["Tops", "Sustainable"],
    featured: false
  },
  {
    id: "cotopaxi",
    name: "Cotopaxi",
    slug: "cotopaxi",
    description: "Colorful outdoor gear with a conscience. Adventure-ready and responsibly made.",
    categories: ["Bags", "Jackets", "Outdoor"],
    featured: false
  },
  {
    id: "herschel",
    name: "Herschel",
    slug: "herschel",
    description: "Modern bags and accessories with heritage design. Perfect for work and travel.",
    categories: ["Bags", "Accessories"],
    featured: false
  },
  {
    id: "the-north-face",
    name: "The North Face",
    slug: "the-north-face",
    description: "Iconic outdoor brand for explorers. Technical gear for any adventure.",
    categories: ["Jackets", "Bags", "Outdoor"],
    featured: false
  },
  {
    id: "nike",
    name: "Nike",
    slug: "nike",
    description: "World-renowned athletic wear. Innovation and performance in every product.",
    categories: ["Tops", "Activewear", "Accessories"],
    featured: false
  }
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find(b => b.slug === slug)
}

export function getFeaturedBrands(): Brand[] {
  return BRANDS.filter(b => b.featured)
}
