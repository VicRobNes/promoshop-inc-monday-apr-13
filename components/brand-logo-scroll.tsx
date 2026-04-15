"use client"

import Image from "next/image"
import { HOME_CONTENT } from "@/lib/cms/home"

export function BrandLogoScroll() {
  const brands = HOME_CONTENT.brandLogos

  const Tile = ({ brand, tileKey }: { brand: (typeof brands)[0]; tileKey: string }) => (
    <div
      key={tileKey}
      className="flex-shrink-0 mx-6 flex items-center justify-center"
    >
      <div className="w-36 h-16 flex items-center justify-center bg-[#1a1a1a] rounded-lg px-3 border border-[#333] shadow-sm">
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={brand.name}
            width={120}
            height={48}
            className="max-h-10 w-auto object-contain brightness-0 invert"
            unoptimized
          />
        ) : (
          <span className="text-white/60 font-bold text-xs tracking-wider uppercase whitespace-nowrap">
            {brand.name}
          </span>
        )}
      </div>
    </div>
  )

  return (
    <section className="py-8 bg-[#0d0d0d] border-y border-[#2a2a2a] overflow-hidden">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {brands.map((brand, index) => (
            <Tile key={`brand-1-${index}`} brand={brand} tileKey={`brand-1-${index}`} />
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, index) => (
            <Tile key={`brand-2-${index}`} brand={brand} tileKey={`brand-2-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
