"use client"

import { useState } from "react"
import { HOME_CONTENT, type BrandLogoEntry } from "@/lib/cms/home"

function BrandTile({ brand }: { brand: BrandLogoEntry }) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="flex-shrink-0 mx-8 flex items-center justify-center">
      <div className="w-32 h-14 flex items-center justify-center bg-white rounded-lg px-4 border border-[#e5e5e5]">
        {errored ? (
          <span className="text-[#373a36]/60 font-bold text-sm tracking-wider uppercase whitespace-nowrap">
            {brand.name}
          </span>
        ) : (
          // Using plain <img> so onError swaps in the text fallback when the
          // SVG asset for a brand isn't committed yet.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-10 w-auto object-contain"
            onError={() => setErrored(true)}
          />
        )}
      </div>
    </div>
  )
}

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
            <BrandTile key={`brand-1-${index}`} brand={brand} />
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, index) => (
            <BrandTile key={`brand-2-${index}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}
