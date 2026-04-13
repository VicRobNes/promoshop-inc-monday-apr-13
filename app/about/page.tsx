import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Award, Globe, Heart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

const teamMembers = [
  {
    name: "Phil Duym",
    role: "Owner & President",
    description: "Leading PromoShop's vision for premium branded merchandise."
  },
  {
    name: "Amy Duquette",
    role: "Account Executive",
    description: "Dedicated to delivering exceptional client experiences."
  },
  {
    name: "Ania Wlodarkiewicz",
    role: "Account Executive",
    description: "Helping brands find the perfect promotional products."
  },
  {
    name: "Alex Cyrenne",
    role: "Account Executive",
    description: "Building lasting partnerships with our clients."
  }
]

const values = [
  {
    icon: Users,
    title: "Client-First Approach",
    description: "We put your needs at the center of everything we do. Your success is our success."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We partner only with premium brands that meet our strict quality standards."
  },
  {
    icon: Globe,
    title: "North American Reach",
    description: "Serving businesses across North America with dedicated local support."
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Committed to eco-friendly options through our ecopromos.com initiative."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />

      {/* Hero Section with Image */}
      <section className="relative bg-[#f9f9f9] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="py-16 lg:py-24 lg:pr-12">
              <p className="text-xs font-bold tracking-wider text-[#ef473f] uppercase mb-4">
                About Us
              </p>
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                Your Partner in Premium Branding
              </h1>
              <p className="text-lg text-[#555] leading-relaxed font-visby mb-4">
                Welcome to our store, where promoting your business is our business. Born from an expertise in building brands, we offer unique, quality promotional products, excellent service, and customer-focused marketing.
              </p>
              <p className="text-lg text-[#555] leading-relaxed font-visby">
                From our office, we are your premier source for branding solutions!
              </p>
            </div>
            <div className="relative h-72 lg:h-full lg:min-h-[480px]">
              <Image
                src="/images/about-office.jpg"
                alt="PromoShop creative office workspace"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-[#1a1a1a] mb-6">
                Our Mission
              </h2>
              <p className="text-[#555] leading-relaxed mb-4 font-visby">
                At PromoShop, we believe that promotional products should be more than just giveaways.
                They should be premium items that people actually want to use, representing your brand
                with pride and quality.
              </p>
              <p className="text-[#555] leading-relaxed mb-6 font-visby">
                That&apos;s why we&apos;ve curated a selection of the world&apos;s best brands including
                Patagonia, YETI, JBL, and more. When your logo appears on a premium product,
                it elevates your entire brand perception.
              </p>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 bg-[#ef473f] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded-full hover:bg-[#d93e36] transition-colors"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg p-6 text-center">
                <p className="font-montserrat font-bold text-3xl text-[#ef473f] mb-2">15+</p>
                <p className="text-sm text-[#999] uppercase tracking-wider font-visby">Years Experience</p>
              </div>
              <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg p-6 text-center">
                <p className="font-montserrat font-bold text-3xl text-[#ef473f] mb-2">500+</p>
                <p className="text-sm text-[#999] uppercase tracking-wider font-visby">Happy Clients</p>
              </div>
              <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg p-6 text-center">
                <p className="font-montserrat font-bold text-3xl text-[#ef473f] mb-2">50+</p>
                <p className="text-sm text-[#999] uppercase tracking-wider font-visby">Premium Brands</p>
              </div>
              <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg p-6 text-center">
                <p className="font-montserrat font-bold text-3xl text-[#ef473f] mb-2">3</p>
                <p className="text-sm text-[#999] uppercase tracking-wider font-visby">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#f9f9f9]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-[#1a1a1a] mb-3">
              What We Stand For
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto font-visby">
              Our core values guide everything we do, from product selection to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-[#e5e5e5] rounded-lg p-8 text-center hover:border-[#ef473f] transition-colors shadow-sm"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#ef473f]/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-[#ef473f]" />
                </div>
                <h3 className="font-montserrat font-bold text-sm uppercase tracking-wider text-[#1a1a1a] mb-3">{value.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed font-visby">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-[#1a1a1a] mb-3">
              Meet Our Team
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto font-visby">
              These industry experts will ensure your promotions shine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg p-6 text-center hover:border-[#ef473f] transition-colors group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white border-2 border-[#e5e5e5] group-hover:border-[#ef473f] flex items-center justify-center transition-colors">
                  <span className="font-montserrat font-bold text-xl text-[#ef473f]">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-sm text-[#1a1a1a] mb-1">{member.name}</h3>
                <p className="text-[#ef473f] text-xs font-bold uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[#666] leading-relaxed font-visby">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#f9f9f9]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-[#1a1a1a] mb-3">
              Our Locations
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto font-visby">
              Serving businesses across North America with local support and fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e5e5e5] rounded-lg p-8 text-center shadow-sm hover:border-[#ef473f] transition-colors">
              <h3 className="font-montserrat font-bold text-lg text-[#1a1a1a] mb-2">Windsor, ON</h3>
              <p className="text-sm text-[#999] mb-2 font-visby">Headquarters</p>
              <a href="tel:5192523005" className="text-[#ef473f] hover:underline font-visby">
                (519) 252-3005
              </a>
            </div>
            <div className="bg-white border border-[#e5e5e5] rounded-lg p-8 text-center shadow-sm hover:border-[#ef473f] transition-colors">
              <h3 className="font-montserrat font-bold text-lg text-[#1a1a1a] mb-2">Detroit, MI</h3>
              <p className="text-sm text-[#999] mb-2 font-visby">USA Office</p>
              <a href="tel:2483995410" className="text-[#ef473f] hover:underline font-visby">
                (248) 399-5410
              </a>
            </div>
            <div className="bg-white border border-[#e5e5e5] rounded-lg p-8 text-center shadow-sm hover:border-[#ef473f] transition-colors">
              <h3 className="font-montserrat font-bold text-lg text-[#1a1a1a] mb-2">Toronto, ON</h3>
              <p className="text-sm text-[#999] mb-2 font-visby">Greater Toronto Area</p>
              <a href="tel:4166288512" className="text-[#ef473f] hover:underline font-visby">
                (416) 628-8512
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  )
}
