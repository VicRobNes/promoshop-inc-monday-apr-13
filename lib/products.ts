export interface ProductColour {
  name: string
  hex: string
  images: string[]
}

export interface Product {
  sku: string
  name: string
  category: string
  brands: string[]
  gender: string[]
  colours: ProductColour[]
  sizes: string[]
  minQty: number
  description?: string
  decoLocations?: string[]
  decoMethods?: string[]
}

// Product data from Abigail's Studio code
export const PRODUCTS: Product[] = [
  { 
    sku: "DRK 004", 
    name: "VSSL Rift Tumbler 16 oz", 
    category: "Drinkware", 
    brands: ["VSSL"], 
    gender: ["Unisex"], 
    colours: [
      { name: "Sahara", hex: "#c4a96e", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/fa86c508-f30b-4a15-9759-a33ac25648b5/Rift+Tumbler.png?format=1500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/75d6f125-ede1-4cf6-a3fe-867ce8204ed9/63.png?format=500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/0ccfea25-7f4c-4a59-b611-dd8a71e94b3a/64.png?format=500w"] },
      { name: "Pacific Blue", hex: "#2e7fa0", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/fa86c508-f30b-4a15-9759-a33ac25648b5/Rift+Tumbler.png?format=1500w"] },
      { name: "Ash", hex: "#b0aba3", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/fa86c508-f30b-4a15-9759-a33ac25648b5/Rift+Tumbler.png?format=1500w"] },
      { name: "Stone", hex: "#c2b89a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/fa86c508-f30b-4a15-9759-a33ac25648b5/Rift+Tumbler.png?format=1500w"] },
      { name: "Wild Sage", hex: "#8aad7e", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/fa86c508-f30b-4a15-9759-a33ac25648b5/Rift+Tumbler.png?format=1500w"] }
    ], 
    sizes: ["16oz"], 
    minQty: 24,
    description: "Premium 16oz tumbler with double-wall vacuum insulation. Perfect for hot or cold beverages on the go."
  },
  { 
    sku: "DRK 008", 
    name: "VSSL Nest Mug 10oz", 
    category: "Drinkware", 
    brands: ["VSSL"], 
    gender: ["Unisex"], 
    colours: [
      { name: "Black", hex: "#1a1a1a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/97710ecf-2ead-46ed-9603-f3dfa1b330c5/Nest+Mug+10+oz.png?format=2500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/b1508abb-a2c3-4023-9815-c20d92418c13/66.png?format=2500w"] },
      { name: "Cream", hex: "#f5eed8", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/97710ecf-2ead-46ed-9603-f3dfa1b330c5/Nest+Mug+10+oz.png?format=2500w"] }
    ], 
    sizes: ["10oz"], 
    minQty: 24,
    description: "Compact 10oz mug with stackable design. Great for travel and outdoor adventures."
  },
  { 
    sku: "TOP 001", 
    name: "Rhone Course to Court 1/4 Zip", 
    category: "Tops", 
    brands: ["Rhone"], 
    gender: ["Womens"], 
    colours: [
      { name: "Snow White", hex: "#f8f8f8", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/e0a608f2-3047-4dc0-abb4-c652614d0bd4/Rhone+WOmens+1_4+Zip.png?format=2500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/fecd0893-d632-4760-af45-dbc8632ca975/57.png?format=500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/a0316386-e8a7-40a6-a8d5-63d4b46282c3/58.png?format=500w"] },
      { name: "Navy Blue", hex: "#1b2a4a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/e0a608f2-3047-4dc0-abb4-c652614d0bd4/Rhone+WOmens+1_4+Zip.png?format=2500w"] },
      { name: "Sand", hex: "#d4c5a0", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/e0a608f2-3047-4dc0-abb4-c652614d0bd4/Rhone+WOmens+1_4+Zip.png?format=2500w"] },
      { name: "Black", hex: "#1a1a1a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/e0a608f2-3047-4dc0-abb4-c652614d0bd4/Rhone+WOmens+1_4+Zip.png?format=2500w"] }
    ], 
    sizes: ["XS", "S", "M", "L", "XL", "XXL"], 
    minQty: 24,
    description: "Versatile 1/4 zip pullover designed for performance. Moisture-wicking fabric with 4-way stretch."
  },
  { 
    sku: "TOP 009", 
    name: "Rhone Rise 1/4 Zip", 
    category: "Tops", 
    brands: ["Rhone"], 
    gender: ["Mens", "Womens"], 
    colours: [
      { name: "Black", hex: "#1a1a1a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/0fc09448-21b2-4623-b0e3-11e14d045449/Rhone+Mens+Rise+1_4+Zip.png?format=2500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/cf5eb53e-5807-49b1-9aec-5aa323de7f57/60.png?format=500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/e7fea4b4-15e7-4483-b0ca-b735cf51d491/61.png?format=500w"] },
      { name: "Bright White", hex: "#ffffff", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/0fc09448-21b2-4623-b0e3-11e14d045449/Rhone+Mens+Rise+1_4+Zip.png?format=2500w"] },
      { name: "Navy Blue", hex: "#1b2a4a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/0fc09448-21b2-4623-b0e3-11e14d045449/Rhone+Mens+Rise+1_4+Zip.png?format=2500w"] },
      { name: "Asphalt", hex: "#5c5c5c", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/0fc09448-21b2-4623-b0e3-11e14d045449/Rhone+Mens+Rise+1_4+Zip.png?format=2500w"] }
    ], 
    sizes: ["S", "M", "L", "XL", "XXL"], 
    minQty: 24,
    description: "Premium quarter-zip with soft-touch fabric. Perfect for layering or standalone wear."
  },
  { 
    sku: "JAK 003", 
    name: "Patagonia Better Sweater Jacket", 
    category: "Jackets", 
    brands: ["Patagonia"], 
    gender: ["Mens"], 
    colours: [
      { name: "Black", hex: "#1a1a1a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/d08f303f-e454-4e6a-ba6f-5487ae4dc09f/Mens+Pat+Better+Sweater+Jacket.png?format=2500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/4ad54c6b-ee91-4b46-b3b2-2c75736772fc/44.png?format=500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/9fca48f5-bcd7-4e79-8490-edb4c436f4a1/45.png?format=500w"] },
      { name: "New Navy", hex: "#1d3461", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/d08f303f-e454-4e6a-ba6f-5487ae4dc09f/Mens+Pat+Better+Sweater+Jacket.png?format=2500w"] },
      { name: "River Rock Green", hex: "#6e8c6a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/d08f303f-e454-4e6a-ba6f-5487ae4dc09f/Mens+Pat+Better+Sweater+Jacket.png?format=2500w"] }
    ], 
    sizes: ["S", "M", "L", "XL", "XXL"], 
    minQty: 24,
    description: "Classic Patagonia fleece jacket made with recycled polyester. Warm, durable, and eco-friendly."
  },
  { 
    sku: "JAK 004", 
    name: "Patagonia Better Sweater Jacket (Womens)", 
    category: "Jackets", 
    brands: ["Patagonia"], 
    gender: ["Womens"], 
    colours: [
      { name: "Black", hex: "#1a1a1a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/32b587df-74c0-4c7a-96d2-32b7f80a96f2/Womens+Pat+Better+Sweater+Jacket.png?format=500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/403eba4b-591b-439a-8c20-26847c390605/41.png?format=500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/920ff120-e173-4db1-8eab-44ee6047c214/42.png?format=500w"] },
      { name: "Birch White", hex: "#f0ede6", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/32b587df-74c0-4c7a-96d2-32b7f80a96f2/Womens+Pat+Better+Sweater+Jacket.png?format=500w"] },
      { name: "Light Violet", hex: "#b28fc0", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/32b587df-74c0-4c7a-96d2-32b7f80a96f2/Womens+Pat+Better+Sweater+Jacket.png?format=500w"] }
    ], 
    sizes: ["XS", "S", "M", "L", "XL"], 
    minQty: 24,
    description: "Women's fit Better Sweater with feminine contours. Warm fleece with smooth exterior."
  },
  { 
    sku: "TEC 001", 
    name: "JBL GO 4", 
    category: "Tech", 
    brands: ["JBL"], 
    gender: ["Unisex"], 
    colours: [
      { name: "White", hex: "#f5f5f5", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/72128c40-7663-4f9c-9a3d-c5c5d619faac/JBL+Go+4.png?format=500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/90fd89b6-80ea-43c1-b0d6-b993bb9b45e4/14.png?format=500w", "https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/40333492-dab5-4258-9a5a-6b4481809697/15.png?format=2500w"] },
      { name: "Black", hex: "#1a1a1a", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/72128c40-7663-4f9c-9a3d-c5c5d619faac/JBL+Go+4.png?format=500w"] },
      { name: "Blue", hex: "#4472c4", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/72128c40-7663-4f9c-9a3d-c5c5d619faac/JBL+Go+4.png?format=500w"] },
      { name: "Red", hex: "#c0392b", images: ["https://images.squarespace-cdn.com/content/v1/6996114205ae570d4f1d5401/72128c40-7663-4f9c-9a3d-c5c5d619faac/JBL+Go+4.png?format=500w"] }
    ], 
    sizes: ["One Size"], 
    minQty: 12,
    description: "Ultra-portable Bluetooth speaker with JBL Pro Sound. Waterproof and dustproof for outdoor use."
  },
]

export function getCategories(): string[] {
  const categories = new Set<string>()
  PRODUCTS.forEach(p => categories.add(p.category))
  return ["All", ...Array.from(categories)]
}

export function getBrands(): string[] {
  const brands = new Set<string>()
  PRODUCTS.forEach(p => p.brands.forEach(b => brands.add(b)))
  return ["All", ...Array.from(brands)]
}

export function getGenders(): string[] {
  return ["All", "Mens", "Womens", "Unisex"]
}
