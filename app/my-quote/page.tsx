"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useQuote } from "@/lib/quote-context"
import { PRODUCTS } from "@/lib/products"

export default function MyQuotePage() {
  const { 
    items, 
    contactInfo, 
    projectInfo, 
    removeItem, 
    updateItem, 
    clearItems, 
    setContactInfo, 
    setProjectInfo,
    addItem,
    isLoaded 
  } = useQuote()
  
  const [activeTab, setActiveTab] = useState<"items" | "contact" | "project">("items")
  const [submitted, setSubmitted] = useState(false)
  
  // Add sample item state
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")
  const [selectedColour, setSelectedColour] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  const handleAddProduct = () => {
    const product = PRODUCTS.find(p => p.sku === selectedProduct)
    if (!product) return
    
    const colour = product.colours.find(c => c.name === selectedColour)
    
    addItem({
      productSku: product.sku,
      productName: product.name,
      colour: selectedColour || product.colours[0]?.name || "",
      size: selectedSize || product.sizes[0] || "",
      quantity: quantity,
      image: colour?.images[0] || product.colours[0]?.images[0] || "",
    })
    
    // Reset form
    setSelectedProduct("")
    setSelectedColour("")
    setSelectedSize("")
    setQuantity(1)
    setShowAddProduct(false)
  }

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    setSubmitted(true)
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-8 h-8 border-2 border-[#ef473f] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p>Loading your quote...</p>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header variant="dark" />
        <div className="py-24 px-6 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#3ecf8e]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#3ecf8e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-bebas text-4xl tracking-wide mb-4">Quote Submitted!</h1>
            <p className="text-[#777] mb-8">
              Thank you for your quote request. Our team will review your selections and get back to you within 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/studio"
                className="inline-flex items-center justify-center gap-2 bg-[#ef473f] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => {
                  clearItems()
                  setSubmitted(false)
                }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:border-white transition-colors"
              >
                Start New Quote
              </button>
            </div>
          </div>
        </div>
        <Footer variant="dark" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="dark" />

      <div className="py-12 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="mb-10">
            <p className="text-[10px] font-bold tracking-[0.4em] text-[#ef473f] uppercase mb-2">
              Quote Builder
            </p>
            <h1 className="font-bebas text-4xl lg:text-5xl tracking-wide">
              My Quote
            </h1>
            <p className="text-[#777] mt-2">
              Build your quote and submit it for pricing. We&apos;ll get back to you within 24-48 hours.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-[#2e2e2e]">
            {[
              { id: "items", label: "Products", count: items.length },
              { id: "contact", label: "Contact Info" },
              { id: "project", label: "Project Details" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 font-bold text-sm uppercase tracking-wider transition-colors relative ${
                  activeTab === tab.id 
                    ? "text-white" 
                    : "text-[#777] hover:text-white"
                }`}
              >
                {tab.label}
                {"count" in tab && tab.count > 0 && (
                  <span className="ml-2 bg-[#ef473f] text-white text-xs px-2 py-0.5 rounded-full">
                    {tab.count}
                  </span>
                )}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ef473f]" />
                )}
              </button>
            ))}
          </div>

          {/* Items Tab */}
          {activeTab === "items" && (
            <div>
              {items.length === 0 && !showAddProduct ? (
                <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-12 text-center">
                  <ShoppingBag className="w-16 h-16 text-[#777] mx-auto mb-4" />
                  <h3 className="font-bebas text-2xl tracking-wide mb-2">Your Quote is Empty</h3>
                  <p className="text-[#777] mb-6">
                    Add products from our Studio to start building your quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/studio"
                      className="inline-flex items-center justify-center gap-2 bg-[#ef473f] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
                    >
                      Browse Products
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => setShowAddProduct(true)}
                      className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:border-white transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add Product Manually
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Item List */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-4 flex gap-4"
                      >
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-[#1f1f1f] rounded overflow-hidden flex-shrink-0">
                          {item.image && (
                            <Image
                              src={item.image}
                              alt={item.productName}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm uppercase tracking-wide mb-1 truncate">
                            {item.productName}
                          </h4>
                          <p className="text-xs text-[#777] mb-2">
                            SKU: {item.productSku}
                          </p>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-[#2e2e2e] px-2 py-1 rounded">
                              {item.colour}
                            </span>
                            <span className="bg-[#2e2e2e] px-2 py-1 rounded">
                              {item.size}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateItem(item.id, { quantity: Math.max(1, item.quantity - 1) })}
                            className="w-8 h-8 flex items-center justify-center border border-[#2e2e2e] rounded hover:border-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-12 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateItem(item.id, { quantity: item.quantity + 1 })}
                            className="w-8 h-8 flex items-center justify-center border border-[#2e2e2e] rounded hover:border-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-[#777] hover:text-[#ef473f] transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add More Products Form */}
                  {showAddProduct && (
                    <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-6 mb-6">
                      <h3 className="font-bebas text-xl tracking-wide mb-4">Add Product</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                            Product
                          </label>
                          <select
                            value={selectedProduct}
                            onChange={(e) => {
                              setSelectedProduct(e.target.value)
                              setSelectedColour("")
                              setSelectedSize("")
                            }}
                            className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                          >
                            <option value="">Select a product</option>
                            {PRODUCTS.map((p) => (
                              <option key={p.sku} value={p.sku}>
                                {p.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        {selectedProduct && (
                          <>
                            <div>
                              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                                Colour
                              </label>
                              <select
                                value={selectedColour}
                                onChange={(e) => setSelectedColour(e.target.value)}
                                className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                              >
                                <option value="">Select colour</option>
                                {PRODUCTS.find(p => p.sku === selectedProduct)?.colours.map((c) => (
                                  <option key={c.name} value={c.name}>
                                    {c.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                                Size
                              </label>
                              <select
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                              >
                                <option value="">Select size</option>
                                {PRODUCTS.find(p => p.sku === selectedProduct)?.sizes.map((s) => (
                                  <option key={s} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                                Quantity
                              </label>
                              <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                              />
                            </div>
                          </>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={handleAddProduct}
                          disabled={!selectedProduct}
                          className="bg-[#ef473f] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Add to Quote
                        </button>
                        <button
                          onClick={() => setShowAddProduct(false)}
                          className="border border-[#2e2e2e] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:border-white transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    {!showAddProduct && (
                      <button
                        onClick={() => setShowAddProduct(true)}
                        className="inline-flex items-center gap-2 border border-[#2e2e2e] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:border-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Add Another Product
                      </button>
                    )}
                    <Link
                      href="/studio"
                      className="inline-flex items-center gap-2 border border-[#2e2e2e] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:border-white transition-colors"
                    >
                      Browse More Products
                    </Link>
                    {items.length > 0 && (
                      <button
                        onClick={() => setActiveTab("contact")}
                        className="ml-auto inline-flex items-center gap-2 bg-[#ef473f] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === "contact" && (
            <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-6 lg:p-8">
              <h3 className="font-bebas text-2xl tracking-wide mb-6">Your Contact Information</h3>
              <p className="text-[#777] text-sm mb-6">
                Signed-in users can auto-fill this information. <Link href="/sign-in" className="text-[#ef473f] hover:underline">Sign in</Link> to save time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo.firstName}
                    onChange={(e) => setContactInfo({ firstName: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo.lastName}
                    onChange={(e) => setContactInfo({ lastName: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ email: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ phone: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo.company}
                    onChange={(e) => setContactInfo({ company: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={contactInfo.jobTitle}
                    onChange={(e) => setContactInfo({ jobTitle: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                    placeholder="Marketing Manager"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("items")}
                  className="border border-[#2e2e2e] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:border-white transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setActiveTab("project")}
                  className="ml-auto inline-flex items-center gap-2 bg-[#ef473f] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Project Tab */}
          {activeTab === "project" && (
            <form onSubmit={handleSubmitQuote} className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-6 lg:p-8">
              <h3 className="font-bebas text-2xl tracking-wide mb-6">Project Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Event / Project Name
                  </label>
                  <input
                    type="text"
                    value={projectInfo.eventName}
                    onChange={(e) => setProjectInfo({ eventName: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                    placeholder="Annual Conference 2026"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    In-Hands Date
                  </label>
                  <input
                    type="date"
                    value={projectInfo.eventDate}
                    onChange={(e) => setProjectInfo({ eventDate: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Budget Range
                  </label>
                  <select
                    value={projectInfo.budget}
                    onChange={(e) => setProjectInfo({ budget: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000-plus">$25,000+</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    value={projectInfo.notes}
                    onChange={(e) => setProjectInfo({ notes: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none resize-none"
                    placeholder="Tell us about your project, branding requirements, or any questions..."
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="bg-[#1f1f1f] border border-[#2e2e2e] rounded-lg p-4 mb-6">
                <h4 className="font-bebas text-lg tracking-wide mb-3">Quote Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#777]">Products:</span>
                    <span>{items.length} item{items.length !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#777]">Total Units:</span>
                    <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#777]">Contact:</span>
                    <span>{contactInfo.firstName} {contactInfo.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#777]">Company:</span>
                    <span>{contactInfo.company || "Not specified"}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("contact")}
                  className="border border-[#2e2e2e] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:border-white transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={items.length === 0 || !contactInfo.firstName || !contactInfo.email || !contactInfo.company}
                  className="ml-auto inline-flex items-center gap-2 bg-[#ef473f] text-white px-8 py-3 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Quote Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <Footer variant="dark" />
    </div>
  )
}
