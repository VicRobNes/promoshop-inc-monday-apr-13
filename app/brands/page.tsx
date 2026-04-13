import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BRANDS, getFeaturedBrands } from "@/lib/brands"

export default function BrandsPage() {
  const featuredBrands = getFeaturedBrands()
  const otherBrands = BRANDS.filter(b => !b.featured)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[10px] font-bold tracking-[0.4em] text-[#ef473f] uppercase mb-4">
              Our Partners
            </p>
            <h1 className="font-bebas text-5xl lg:text-7xl tracking-wide leading-tight mb-6">
              Premium Brands<br />
              <span className="text-[#ef473f]">We Work With</span>
            </h1>
            <p className="text-lg text-[#999] leading-relaxed">
              We partner with the world&apos;s best brands to bring you quality promotional products 
              that represent your company with pride.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-12 px-6 lg:px-8 border-t border-[#2e2e2e]">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-bebas text-2xl tracking-wider text-[#777] mb-8">Featured Brands</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBrands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.slug}`}
                className="group bg-[#141414] border border-[#2e2e2e] rounded-lg p-8 hover:border-[#ef473f] transition-all duration-300"
              >
                {/* Brand Logo Placeholder */}
                <div className="w-full h-20 bg-[#1f1f1f] rounded flex items-center justify-center mb-6 group-hover:bg-[#2e2e2e] transition-colors">
                  <span className="font-bebas text-2xl tracking-wider text-white/60 group-hover:text-white transition-colors">
                    {brand.name.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-bebas text-xl tracking-wider mb-2 group-hover:text-[#ef473f] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed mb-4">
                  {brand.description}
                </p>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {brand.categories.slice(0, 3).map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 bg-[#2e2e2e] rounded text-[#999]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#ef473f] text-sm font-semibold uppercase tracking-wider">
                  View Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Other Brands */}
      <section className="py-12 px-6 lg:px-8 border-t border-[#2e2e2e]">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-bebas text-2xl tracking-wider text-[#777] mb-8">More Brands</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {otherBrands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.slug}`}
                className="group bg-[#141414] border border-[#2e2e2e] rounded-lg p-6 hover:border-[#ef473f] transition-all duration-300 text-center"
              >
                <div className="w-full h-12 flex items-center justify-center mb-3">
                  <span className="font-bebas text-lg tracking-wider text-white/60 group-hover:text-white transition-colors">
                    {brand.name.toUpperCase()}
                  </span>
                </div>
                <p className="text-[10px] font-bold tracking-wider uppercase text-[#ef473f] opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#141414] mt-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-bebas text-3xl lg:text-4xl tracking-wide mb-4">
            Looking for a Specific Brand?
          </h2>
          <p className="text-[#777] mb-8 max-w-xl mx-auto">
            We work with hundreds of brands. If you don&apos;t see what you&apos;re looking for, 
            reach out and we&apos;ll source it for you.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#ef473f] text-white px-10 py-4 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer variant="dark" />
    </div>
  )
}
