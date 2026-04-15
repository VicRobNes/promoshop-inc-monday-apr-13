"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import type { Product, ProductColour } from "@/lib/products"
import { useQuote } from "@/lib/quote-context"
import { ProductLightbox } from "./product-lightbox"

interface ProductDetailModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [selectedColour, setSelectedColour] = useState<ProductColour | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [imageIndex, setImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const { addItem } = useQuote()
  const router = useRouter()

  // Reset selections whenever a new product is opened.
  useEffect(() => {
    if (product && product.colours.length > 0) {
      setSelectedColour(product.colours[0])
      setSelectedSize(null)
      setImageIndex(0)
    }
  }, [product])

  // Reset the image carousel when the colour changes.
  useEffect(() => {
    setImageIndex(0)
  }, [selectedColour])

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

  const images = selectedColour?.images ?? product?.colours[0]?.images ?? []

  const goPrev = useCallback(() => {
    if (images.length === 0) return
    setImageIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  const goNext = useCallback(() => {
    if (images.length === 0) return
    setImageIndex((i) => (i + 1) % images.length)
  }, [images.length])

  // Keyboard nav for the inline carousel (lightbox manages its own keys).
  useEffect(() => {
    if (!isOpen || lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      else if (e.key === "ArrowRight") goNext()
      else if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, lightboxOpen, goPrev, goNext, onClose])

  if (!product || !isOpen) return null

  const canAdd = Boolean(selectedColour && selectedSize)

  const handleAddToQuote = () => {
    if (!canAdd || !selectedColour || !selectedSize) return
    addItem({
      productSku: product.sku,
      productName: product.name,
      colour: selectedColour.name,
      size: selectedSize,
      quantity: 1,
      image: selectedColour.images[0] ?? "",
    })
    onClose()
    router.push("/my-quote")
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-5 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      >
        <div
          className={`bg-[#ededed] rounded-lg w-full max-w-[1060px] max-h-[94vh] overflow-y-auto grid grid-cols-1 md:grid-cols-[55fr_45fr] shadow-2xl transition-transform duration-300 ${isOpen ? "translate-y-0" : "translate-y-6"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left - Image carousel */}
          <div className="relative bg-[#ddd] rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden flex flex-col">
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/15 flex items-center justify-center z-20 hover:bg-[#ef473f] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative flex-1 min-h-[320px] md:min-h-[480px] bg-[#e0e0e0]">
              {images[imageIndex] && (
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Open full-screen view"
                  className="absolute inset-0 cursor-zoom-in group"
                >
                  <Image
                    src={images[imageIndex]}
                    alt={`${product.name} - ${selectedColour?.name ?? ""} (${imageIndex + 1}/${images.length})`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                  <span className="absolute top-3.5 left-3.5 w-8 h-8 rounded-full bg-black/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </button>
              )}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      goPrev()
                    }}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#373a36] flex items-center justify-center shadow-md z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      goNext()
                    }}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#373a36] flex items-center justify-center shadow-md z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 p-3 bg-[#d4d4d4] overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={`${img}-${i}`}
                    type="button"
                    onClick={() => setImageIndex(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`relative w-16 h-16 rounded overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      i === imageIndex ? "border-[#ef473f]" : "border-transparent hover:border-[#999]"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                  </button>
                ))}
              </div>
            )}
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
                Select your colour: <strong>{selectedColour?.name || ""}</strong>
              </p>
              <div className="flex flex-wrap gap-2.5">
                {product.colours.map((colour, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColour(colour)}
                    aria-label={colour.name}
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
              <p className="text-sm text-[#111] mb-3">
                Select your size{selectedSize ? <>: <strong>{selectedSize}</strong></> : null}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => {
                  const active = selectedSize === size
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 border rounded text-sm font-medium uppercase tracking-wide transition-colors ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-[#bbb] bg-[#ededed] text-[#111] hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleAddToQuote}
              disabled={!canAdd}
              className={`block w-full text-center py-4 font-extrabold text-sm tracking-[0.2em] uppercase rounded transition-opacity mb-2 ${
                canAdd ? "bg-black text-white hover:opacity-80" : "bg-[#bbb] text-white cursor-not-allowed"
              }`}
            >
              Add to Quote
            </button>
            <p className={`text-xs text-[#777] mb-5 ${canAdd ? "invisible" : ""}`}>
              Pick a colour and size to add this product to your quote.
            </p>

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

      {/* Full-screen lightbox overlays the modal */}
      <ProductLightbox
        isOpen={lightboxOpen}
        images={images}
        initialIndex={imageIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setImageIndex}
        title={`${product.name}${selectedColour ? ` \u2014 ${selectedColour.name}` : ""}`}
      />
    </>
  )
}
