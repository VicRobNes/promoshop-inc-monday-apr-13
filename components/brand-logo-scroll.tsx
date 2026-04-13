"use client"

// Brand logos from PromoShop's offerings
const brands = [
  { name: "Patagonia", logo: "/brands/patagonia.svg" },
  { name: "YETI", logo: "/brands/yeti.svg" },
  { name: "Stanley", logo: "/brands/stanley.svg" },
  { name: "JBL", logo: "/brands/jbl.svg" },
  { name: "Rhone", logo: "/brands/rhone.svg" },
  { name: "VSSL", logo: "/brands/vssl.svg" },
  { name: "Marine Layer", logo: "/brands/marine-layer.svg" },
  { name: "Tentree", logo: "/brands/tentree.svg" },
  { name: "Cotopaxi", logo: "/brands/cotopaxi.svg" },
  { name: "Herschel", logo: "/brands/herschel.svg" },
]

export function BrandLogoScroll() {
  return (
    <section className="py-12 bg-black border-y border-[#2e2e2e] overflow-hidden">
      <div className="mb-8 text-center">
        <p className="text-[10px] font-bold tracking-[0.3em] text-[#777] uppercase">
          Trusted Brands We Partner With
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-32 h-16 flex items-center justify-center bg-[#1f1f1f] rounded-lg px-4">
                <span className="text-white/60 font-bold text-sm tracking-wider uppercase whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-32 h-16 flex items-center justify-center bg-[#1f1f1f] rounded-lg px-4">
                <span className="text-white/60 font-bold text-sm tracking-wider uppercase whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
