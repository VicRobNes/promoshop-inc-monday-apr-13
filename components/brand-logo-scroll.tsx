"use client"

const brands = [
  { name: "Patagonia" },
  { name: "YETI" },
  { name: "Stanley" },
  { name: "JBL" },
  { name: "Rhone" },
  { name: "VSSL" },
  { name: "Marine Layer" },
  { name: "Tentree" },
  { name: "Cotopaxi" },
  { name: "Herschel" },
  { name: "The North Face" },
  { name: "Nike" },
]

export function BrandLogoScroll() {
  return (
    <section className="py-10 bg-[#f5f5f5] border-y border-[#e5e5e5] overflow-hidden">
      <div className="mb-6 text-center">
        <p className="text-xs font-bold tracking-wider text-[#999] uppercase">
          Trusted Brands We Partner With
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-32 h-14 flex items-center justify-center bg-white rounded-lg px-4 border border-[#e5e5e5]">
                <span className="text-[#373a36]/60 font-bold text-sm tracking-wider uppercase whitespace-nowrap">
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
              <div className="w-32 h-14 flex items-center justify-center bg-white rounded-lg px-4 border border-[#e5e5e5]">
                <span className="text-[#373a36]/60 font-bold text-sm tracking-wider uppercase whitespace-nowrap">
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
