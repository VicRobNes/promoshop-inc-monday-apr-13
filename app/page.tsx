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
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />

      {/* Collection Navigation Bar */}
      <section className="border-b border-[#e5e5e5] overflow-x-auto bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center gap-6 py-3">
          {collections.map((col) => (
            <Link
              key={col.name}
              href={col.href}
              className="text-xs font-bold text-[#666] hover:text-[#ef473f] transition-colors whitespace-nowrap uppercase tracking-wider"
            >
              {col.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Hero Section with Logo + Slideshow */}
      <section className="relative bg-[#f9f9f9] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Text + Logo Side */}
            <div className="py-16 lg:py-24 lg:pr-12">
              <Image
                src={HOME_CONTENT.hero.logo}
                alt={HOME_CONTENT.hero.logoAlt}
                width={340}
                height={110}
                className="h-20 lg:h-24 w-auto mb-8"
                priority
              />
              {HOME_CONTENT.hero.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base lg:text-lg text-[#555] leading-relaxed font-visby mb-6 last:mb-10 max-w-lg"
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
                  className="inline-flex items-center gap-2 border-2 border-[#373a36] text-[#373a36] px-8 py-3.5 font-bold uppercase tracking-wider text-sm rounded-full hover:bg-[#373a36] hover:text-white transition-colors"
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
      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-[#1a1a1a] mb-3">
              Meet Our Team
            </h2>
            <p className="text-[#666] font-visby max-w-xl mx-auto">
              These industry experts will ensure your promotions shine.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-[#f0f0f0] flex items-center justify-center border-2 border-[#e5e5e5] group-hover:border-[#ef473f] transition-colors">
                  <span className="font-montserrat font-bold text-2xl text-[#ef473f]">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-sm text-[#1a1a1a]">{member.name}</h3>
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
