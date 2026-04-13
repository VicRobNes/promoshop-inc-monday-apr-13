import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BRANDS, getBrandBySlug } from "@/lib/brands"
import { PRODUCTS } from "@/lib/products"
import { ProductCard } from "@/components/studio/product-card"

export function generateStaticParams() {
  return BRANDS.map((brand) => ({
    slug: brand.slug,
  }))
}

interface BrandPageProps {
  params: Promise<{ slug: string }>
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)

  if (!brand) {
    notFound()
  }

  // Filter products by this brand
  const brandProducts = PRODUCTS.filter((p) => 
    p.brands.some((b) => b.toLowerCase() === brand.name.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#ededed] text-[#111] font-montserrat">
      <Header />

      {/* Breadcrumb & Hero */}
      <section className="px-6 lg:px-10 pt-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#777] hover:text-[#ef473f] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Brands
          </Link>

          {/* Brand Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="inline-block bg-black text-white px-6 py-3 rounded mb-4">
                <span className="font-bebas text-3xl tracking-wider">
                  {brand.name.toUpperCase()}
                </span>
              </div>
              <p className="text-lg text-[#666] max-w-2xl leading-relaxed">
                {brand.description}
              </p>
            </div>

            <Link
              href="/my-quote"
              className="inline-flex items-center gap-2 bg-[#ef473f] text-white px-6 py-3 font-extrabold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity whitespace-nowrap self-start"
            >
              Build a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {brand.categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 bg-white border border-[#d0d0d0] rounded text-[#666]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-extrabold text-xl uppercase tracking-wide text-black mb-6">
            Products from {brand.name}
          </h2>

          {brandProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {brandProducts.map((product) => (
                <Link 
                  key={product.sku}
                  href={`/studio?brand=${encodeURIComponent(brand.name)}`}
                >
                  <ProductCard
                    product={product}
                    onClick={() => {}}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#d0d0d0] rounded-lg p-12 text-center">
              <p className="font-extrabold text-xl uppercase tracking-wide text-black mb-2">
                Products Coming Soon
              </p>
              <p className="text-[#666] mb-6">
                We&apos;re adding {brand.name} products to our catalog. Contact us for availability.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold text-sm tracking-wider uppercase rounded hover:opacity-80 transition-opacity"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* More Brands CTA */}
      <section className="px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-lg p-8 lg:p-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h3 className="font-extrabold text-xl lg:text-2xl uppercase text-white mb-1">
                Explore More Brands
              </h3>
              <p className="text-[#888] text-sm">
                Discover our full collection of premium brand partners.
              </p>
            </div>
            <Link
              href="/brands"
              className="inline-flex items-center gap-2.5 bg-[#ef473f] text-white px-7 py-3.5 font-extrabold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              View All Brands
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
