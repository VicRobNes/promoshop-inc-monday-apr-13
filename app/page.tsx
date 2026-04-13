import Link from "next/link"
import { ArrowRight, Palette, Truck, HeadphonesIcon, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BrandLogoScroll } from "@/components/brand-logo-scroll"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="dark" />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold tracking-[0.4em] text-[#ef473f] uppercase mb-4">
              Promoshop Studio
            </p>
            <h1 className="font-montserrat font-extrabold text-5xl lg:text-7xl tracking-tight leading-tight mb-6 uppercase">
              Premium Merch<br />
              <span className="text-[#ef473f]">For Premium Brands</span>
            </h1>
            <p className="text-lg text-[#999] leading-relaxed mb-8 max-w-xl font-visby">
              Curated collections from the world&apos;s best brands. From Patagonia jackets to YETI drinkware, 
              we make branded merchandise effortless.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/brands"
                className="inline-flex items-center gap-2 bg-[#ef473f] text-white px-8 py-4 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
              >
                Browse Our Brands
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/brands"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm rounded hover:border-white transition-colors"
              >
                View All Brands
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logo Scroll */}
      <BrandLogoScroll />

      {/* THIS SITE WAS BUILT TO MAKE YOUR LIFE EASIER Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl lg:text-6xl tracking-wide mb-4">
              This Site Was Built To Make<br />
              <span className="text-[#ef473f]">Your Life Easier</span>
            </h2>
            <p className="text-[#777] max-w-2xl mx-auto leading-relaxed font-visby">
              We handle the complexity so you can focus on what matters. Premium products, 
              streamlined ordering, and dedicated support at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-8 text-center hover:border-[#ef473f] transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#ef473f]/10 flex items-center justify-center">
                <Palette className="w-8 h-8 text-[#ef473f]" />
              </div>
              <h3 className="font-bebas text-xl tracking-wider mb-3">Curated Selection</h3>
              <p className="text-sm text-[#777] leading-relaxed">
                Hand-picked products from premium brands that represent quality and style.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-8 text-center hover:border-[#ef473f] transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#ef473f]/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#ef473f]" />
              </div>
              <h3 className="font-bebas text-xl tracking-wider mb-3">Quality Guaranteed</h3>
              <p className="text-sm text-[#777] leading-relaxed">
                Every product meets our strict quality standards. Your brand deserves the best.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-8 text-center hover:border-[#ef473f] transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#ef473f]/10 flex items-center justify-center">
                <Truck className="w-8 h-8 text-[#ef473f]" />
              </div>
              <h3 className="font-bebas text-xl tracking-wider mb-3">Fast Delivery</h3>
              <p className="text-sm text-[#777] leading-relaxed">
                Efficient production and shipping to meet your deadlines, every time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-8 text-center hover:border-[#ef473f] transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#ef473f]/10 flex items-center justify-center">
                <HeadphonesIcon className="w-8 h-8 text-[#ef473f]" />
              </div>
              <h3 className="font-bebas text-xl tracking-wider mb-3">Dedicated Support</h3>
              <p className="text-sm text-[#777] leading-relaxed">
                Personal account managers ready to help you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#141414]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-bebas text-3xl lg:text-5xl tracking-wide mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-[#777] mb-8 max-w-xl mx-auto">
            Browse our curated collection and start building your quote today. 
            No minimums on quotes, just premium products.
          </p>
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 bg-[#ef473f] text-white px-10 py-4 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
          >
            Explore the Studio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer variant="dark" />
    </div>
  )
}
