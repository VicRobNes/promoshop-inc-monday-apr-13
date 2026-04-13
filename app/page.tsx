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
  { name: "Technology", description: "Stay connected and make an impression! From wireless chargers to laptop sleeves, we have the latest and greatest products to keep you and your business running smoothly and attracting attention.", href: "/studio" },
  { name: "Athleisure", description: "Premium activewear and casual apparel that blends comfort with style. Perfect for corporate wellness programs and branded team gear.", href: "/studio" },
  { name: "Work from Home", description: "Elevate the remote work experience with premium desk accessories, tech gear, and comfort items that keep your brand top of mind.", href: "/studio" },
  { name: "Unique Ideas", description: "Stand out from the crowd with creative, unexpected promotional products that leave a lasting impression on your audience.", href: "/studio" },
  { name: "Give Back", description: "Products with purpose. Support meaningful causes while promoting your brand with socially responsible merchandise.", href: "/studio" },
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
      
      {/* Collection Navigation */}
      <section className="border-b border-[#e5e5e5] overflow-x-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center gap-6 py-3">
          {collections.map((col) => (
            <Link
              key={col.name}
              href={col.href}
              className="text-sm font-semibold text-[#666] hover:text-[#ef473f] transition-colors whitespace-nowrap"
            >
              {col.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 lg:py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoshop%20logo%20%281%29-ULOkxaeBgbxEQAGDw1MHJqcCE4bQxC.png"
              alt="PromoShop"
              width={280}
              height={70}
              className="h-16 w-auto mx-auto"
            />
          </Link>
          <p className="text-base lg:text-lg text-[#666] leading-relaxed font-visby max-w-3xl mx-auto">
            Welcome to our store, where promoting your business is our business. Born from an expertise in building brands, we offer unique, quality promotional products, excellent service, and customer-focused marketing. From our office, we are your premier source for branding solutions! We present our Signature Collection, carefully selected promotional items that we refresh daily with the newest, hottest, and trendiest products.
          </p>
        </div>
      </section>

      {/* Brand Logo Scroll */}
      <BrandLogoScroll />

      {/* Category Sections */}
      {categories.map((category, index) => (
        <section key={category.name} className={`py-16 lg:py-20 px-6 lg:px-8 ${index % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"}`}>
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-[#1a1a1a] mb-4">
                  {category.name}
                </h2>
                <p className="text-[#666] leading-relaxed font-visby mb-6">
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 bg-[#ef473f] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
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
            <p className="text-[#666] font-visby">
              These industry experts will ensure your promotions shine.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#f0f0f0] flex items-center justify-center border border-[#e5e5e5]">
                  <span className="font-montserrat font-bold text-xl text-[#ef473f]">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-sm text-[#1a1a1a]">{member.name}</h3>
                <p className="text-xs text-[#999] font-visby">{member.role}</p>
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
