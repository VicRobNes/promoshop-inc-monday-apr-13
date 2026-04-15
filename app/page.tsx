import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BrandLogoScroll } from "@/components/brand-logo-scroll"
import { ContactSection } from "@/components/contact-section"
import { HeroSlideshow } from "@/components/home/hero-slideshow"
import { HOME_CONTENT } from "@/lib/cms/home"
import { TEAM_MEMBERS } from "@/lib/cms/team"

const collections = [
  { name: "No Holds Promo", href: "/studio" },
  { name: "2025 New Products", href: "/studio" },
  { name: "Get Outdoors", href: "/studio" },
  { name: "Distinctive Drinkware", href: "/studio" },
  { name: "Golf", href: "/studio" },
  { name: "Eco-Aware", href: "/studio" },
  { name: "Self-Care", href: "/studio" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Header />

      {/* Collection Navigation Bar */}
      <section className="border-b border-[#2a2a2a] overflow-x-auto bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center gap-6 py-3">
          {collections.map((col) => (
            <Link
              key={col.name}
              href={col.href}
              className="text-xs font-bold text-[#888] hover:text-[#ef473f] transition-colors whitespace-nowrap uppercase tracking-wider"
            >
              {col.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Hero Section with Logo + Slideshow */}
      <section className="relative bg-[#0d0d0d] overflow-hidden">
        {/* Large red accent stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ef473f]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Text + Logo Side */}
            <div className="py-16 lg:py-24 lg:pr-12">
              {HOME_CONTENT.hero.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base lg:text-lg text-[#aaa] leading-relaxed font-visby mb-6 last:mb-10 max-w-lg"
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/brands"
                  className="shimmer-cta inline-flex items-center gap-2 bg-[#ef473f] text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm rounded-full hover:bg-[#d93e36] transition-colors"
                >
                  Browse Our Brands
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </Link>
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2 border-2 border-[#ccc] text-[#ccc] px-8 py-3.5 font-bold uppercase tracking-wider text-sm rounded-full hover:bg-white hover:text-[#111] transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>
            {/* Slideshow Side */}
            <HeroSlideshow slides={HOME_CONTENT.slideshow} />
          </div>
        </div>
      </section>

      {/* Brand Logo Scroll */}
      <BrandLogoScroll />

      {/* Meet Our Team */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-[#111111]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-white mb-3">
              Meet Our Team
            </h2>
            <p className="text-[#888] font-visby max-w-xl mx-auto">
              These industry experts will ensure your promotions shine.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-[#1a1a1a] flex items-center justify-center border-2 border-[#333] group-hover:border-[#ef473f] transition-colors overflow-hidden">
                  {member.imagePath ? (
                    <Image
                      src={member.imagePath}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="font-montserrat font-bold text-2xl text-[#ef473f]">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  )}
                </div>
                <h3 className="font-montserrat font-bold text-sm text-white">{member.name}</h3>
                <p className="text-xs text-[#ef473f] font-bold uppercase tracking-wider mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  )
}
