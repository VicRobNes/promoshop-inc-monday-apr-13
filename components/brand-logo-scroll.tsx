"use client"

import { HOME_CONTENT } from "@/lib/cms/home"

// NOTE: brand logo SVGs aren't committed yet (see docs/asset-map.md). Until
// they land we render the brand name as a text tile, matching the visual the
// previous version of this component used. Once /brands/<slug>.svg files are
// committed, swap each tile back to a Next.js <Image> using brand.logo.
export function BrandLogoScroll() {
  const brands = HOME_CONTENT.brandLogos

  return (
    <section className="py-10 bg-[#f5f5f5] border-y border-[#e5e5e5] overflow-hidden">
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
