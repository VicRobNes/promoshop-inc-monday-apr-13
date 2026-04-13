"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import type { Product, ProductColour } from "@/lib/products"

interface ProductDetailModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [selectedColour, setSelectedColour] = useState<ProductColour | null>(null)

  useEffect(() => {
    if (product && product.colours.length > 0) {
      setSelectedColour(product.colours[0])
    }
  }, [product])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!product || !isOpen) return null

  const images = selectedColour?.images || product.colours[0]?.images || []

  // Determine grid layout based on number of images
  const getImageGridClass = (index: number, total: number) => {
    if (total === 1) return "col-span-2 row-span-2"
    if (total === 2) return "row-span-2"
    if (total === 3 && index === 0) return "row-span-2"
    return ""
  }

  return (
    <div 
      className={`fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-5 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      <div 
        className={`bg-[#ededed] rounded-lg w-full max-w-[1060px] max-h-[94vh] overflow-y-auto grid grid-cols-1 md:grid-cols-[55fr_45fr] shadow-2xl transition-transform duration-300 ${isOpen ? "translate-y-0" : "translate-y-6"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left - Images */}
        <div className="relative bg-[#ddd] rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/15 flex items-center justify-center z-10 hover:bg-[#ef473f] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className={`grid grid-cols-2 gap-0.5 bg-[#c8c8c8] min-h-[320px] md:min-h-[560px] h-full`}>
            {images.slice(0, 4).map((img, index) => (
              <div 
                key={index}
                className={`overflow-hidden bg-[#e0e0e0] ${getImageGridClass(index, Math.min(images.length, 4))}`}
              >
                <div className="relative w-full h-full min-h-[160px] md:min-h-[280px]">
                  <Image
                    src={img}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-400 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Info */}
        <div className="p-7 md:p-11 flex flex-col bg-[#ededed] rounded-b-lg md:rounded-r-lg md:rounded-bl-none overflow-y-auto">
          {/* Product Name */}
          <h2 className="font-extrabold text-2xl md:text-3xl leading-tight uppercase text-black tracking-tight mb-7">
            {product.name}
          </h2>

          {/* Colour Selection */}
          <div className="mb-7">
            <p className="text-sm text-[#111] mb-3.5">
              Select your colors: <strong>{selectedColour?.name || ""}</strong>
            </p>
            <div className="flex flex-wrap gap-2.5">
              {product.colours.map((colour, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColour(colour)}
                  className={`w-11 h-11 rounded-full border-2 transition-all duration-200 flex-shrink-0 hover:scale-105 ${
                    selectedColour?.name === colour.name 
                      ? "border-black shadow-[0_0_0_3px_#ededed,0_0_0_5px_#000]" 
                      : "border-black/10"
                  }`}
                  style={{ backgroundColor: colour.hex }}
                  title={colour.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-7">
            <p className="text-sm text-[#111] mb-3">Select your sizes</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 border border-[#bbb] rounded text-sm font-medium bg-[#ededed] text-[#111] uppercase tracking-wide"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/my-quote"
            className="block w-full bg-black text-white text-center py-4 font-extrabold text-sm tracking-[0.2em] uppercase rounded hover:opacity-80 transition-opacity mb-7"
          >
            Get a Quote
          </Link>

          {/* Description */}
          {product.description && (
            <div className="border-t border-[#ccc] pt-5">
              <h4 className="font-extrabold text-sm tracking-wider uppercase text-black mb-3">
                Product Details
              </h4>
              <p className="text-sm text-[#111] leading-relaxed">
                {product.description}
              </p>
              <div className="mt-4 space-y-2 text-sm text-[#666]">
                <p><strong>SKU:</strong> {product.sku}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Brand:</strong> {product.brands.join(", ")}</p>
                <p><strong>Min. Order:</strong> {product.minQty} units</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
