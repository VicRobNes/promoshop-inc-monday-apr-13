import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BrandLogoScroll } from "@/components/brand-logo-scroll"
import { ContactSection } from "@/components/contact-section"

const collections = [
  { name: "No Holds Promo", href: "/studio" },
  { name: "2025 New Products", href: "/studio" },
  { name: "Get Outdoors", href: "/studio" },
  { name: "Distinctive Drinkware", href: "/studio" },
  { name: "Golf", href: "/studio" },
  { name: "Eco-Aware", href: "/studio" },
  { name: "Self-Care", href: "/studio" },
]

const categories = [
  {
    name: "Technology",
    description: "Stay connected and make an impression! From wireless chargers to laptop sleeves, we have the latest and greatest products to keep you and your business running smoothly and attracting attention.",
    image: "/images/category-technology.jpg",
    href: "/studio",
  },
  {
    name: "Athleisure",
    description: "Premium activewear and casual apparel that blends comfort with style. Perfect for corporate wellness programs and branded team gear that people actually want to wear.",
    image: "/images/category-athleisure.jpg",
    href: "/studio",
  },
  {
    name: "Work from Home",
    description: "Elevate the remote work experience with premium desk accessories, tech gear, and comfort items that keep your brand top of mind no matter where your team is working.",
    image: "/images/category-wfh.jpg",
    href: "/studio",
  },
  {
    name: "Unique Ideas",
    description: "Stand out from the crowd with creative, unexpected promotional products that leave a lasting impression on your audience and spark conversation.",
    image: "/images/category-unique.jpg",
    href: "/studio",
  },
  {
    name: "Give Back",
    description: "Products with purpose. Support meaningful causes while promoting your brand with socially responsible merchandise that makes a real difference.",
    image: "/images/category-giveback.jpg",
    href: "/studio",
  },
]

const teamMembers = [
  { name: "Phil Duym", role: "Owner & President" },
  { name: "Amy Duquette", role: "Account Executive" },
  { name: "Ania Wlodarkiewicz", role: "Account Executive" },
  { name: "Alex Cyrenne", role: "Account Executive" },
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

      {/* Hero Section with Image */}
      <section className="relative bg-[#f9f9f9] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Text Side */}
            <div className="py-16 lg:py-24 lg:pr-12">
              <Image
                src="/images/promoshop-logo-full.png"
                alt="PromoShop - Creative happens here"
                width={300}
                height={100}
                className="h-20 lg:h-24 w-auto mb-8"
              />
              <p className="text-base lg:text-lg text-[#555] leading-relaxed font-visby mb-8 max-w-lg">
                Welcome to our store, where promoting your business is our business. Born from an expertise in building brands, we offer unique, quality promotional products, excellent service, and customer-focused marketing.
              </p>
              <p className="text-base lg:text-lg text-[#555] leading-relaxed font-visby mb-10 max-w-lg">
                From our office, we are your premier source for branding solutions! We present our Signature Collection, carefully selected promotional items that we refresh daily with the newest, hottest, and trendiest products.
              </p>
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
            {/* Image Side */}
            <div className="relative h-72 lg:h-full lg:min-h-[500px]">
              <Image
                src="/images/hero-merchandise.jpg"
                alt="Premium branded merchandise collection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logo Scroll */}
      <BrandLogoScroll />

      {/* Category Sections with Alternating Image/Text Layout */}
      {categories.map((category, index) => (
        <section
          key={category.name}
          className={`py-0 ${index % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${
              index % 2 !== 0 ? "lg:direction-rtl" : ""
            }`}>
              {/* Image */}
              <div className={`relative h-64 lg:h-96 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div className={`py-12 lg:py-16 ${index % 2 !== 0 ? "lg:order-1 lg:pr-12" : "lg:pl-12"}`}>
                <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-[#1a1a1a] mb-4">
                  {category.name}
                </h2>
                <p className="text-[#666] leading-relaxed font-visby mb-6">
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 bg-[#ef473f] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded-full hover:bg-[#d93e36] transition-colors"
                >
                  Browse Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

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
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-[#f0f0f0] flex items-center justify-center border-2 border-[#e5e5e5] group-hover:border-[#ef473f] transition-colors">
                  <span className="font-montserrat font-bold text-2xl text-[#ef473f]">
                    {member.name.split(" ").map(n => n[0]).join("")}
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
