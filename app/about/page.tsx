import Link from "next/link"
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
    <div className="min-h-screen bg-black text-white">
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold tracking-[0.4em] text-[#ef473f] uppercase mb-4">
              About Us
            </p>
            <h1 className="font-bebas text-5xl lg:text-7xl tracking-wide leading-tight mb-6">
              Your Partner in<br />
              <span className="text-[#ef473f]">Premium Branding</span>
            </h1>
            <p className="text-lg text-[#999] leading-relaxed">
              PromoShop has been helping businesses elevate their brand presence 
              with high-quality promotional products. From startups to Fortune 500 companies, 
              we deliver exceptional merchandise that makes a lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 lg:px-8 bg-[#141414]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bebas text-3xl lg:text-4xl tracking-wide mb-6">
                Our Mission
              </h2>
              <p className="text-[#999] leading-relaxed mb-4">
                At PromoShop, we believe that promotional products should be more than just giveaways. 
                They should be premium items that people actually want to use, representing your brand 
                with pride and quality.
              </p>
              <p className="text-[#999] leading-relaxed mb-6">
                That&apos;s why we&apos;ve curated a selection of the world&apos;s best brands including 
                Patagonia, YETI, JBL, and more. When your logo appears on a premium product, 
                it elevates your entire brand perception.
              </p>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 bg-[#ef473f] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black border border-[#2e2e2e] rounded-lg p-6 text-center">
                <p className="font-bebas text-4xl text-[#ef473f] mb-2">15+</p>
                <p className="text-sm text-[#777] uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="bg-black border border-[#2e2e2e] rounded-lg p-6 text-center">
                <p className="font-bebas text-4xl text-[#ef473f] mb-2">500+</p>
                <p className="text-sm text-[#777] uppercase tracking-wider">Happy Clients</p>
              </div>
              <div className="bg-black border border-[#2e2e2e] rounded-lg p-6 text-center">
                <p className="font-bebas text-4xl text-[#ef473f] mb-2">50+</p>
                <p className="text-sm text-[#777] uppercase tracking-wider">Premium Brands</p>
              </div>
              <div className="bg-black border border-[#2e2e2e] rounded-lg p-6 text-center">
                <p className="font-bebas text-4xl text-[#ef473f] mb-2">3</p>
                <p className="text-sm text-[#777] uppercase tracking-wider">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-3xl lg:text-5xl tracking-wide mb-4">
              What We <span className="text-[#ef473f]">Stand For</span>
            </h2>
            <p className="text-[#777] max-w-2xl mx-auto">
              Our core values guide everything we do, from product selection to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-8 text-center hover:border-[#ef473f] transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#ef473f]/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-[#ef473f]" />
                </div>
                <h3 className="font-bebas text-lg tracking-wider mb-3">{value.title}</h3>
                <p className="text-sm text-[#777] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#141414]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-3xl lg:text-5xl tracking-wide mb-4">
              Meet Our <span className="text-[#ef473f]">Team</span>
            </h2>
            <p className="text-[#777] max-w-2xl mx-auto">
              Dedicated professionals ready to help you find the perfect promotional products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-black border border-[#2e2e2e] rounded-lg p-6 text-center hover:border-[#ef473f] transition-colors"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#1f1f1f] flex items-center justify-center">
                  <span className="font-bebas text-2xl text-[#ef473f]">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-bebas text-lg tracking-wider mb-1">{member.name}</h3>
                <p className="text-[#ef473f] text-xs font-bold uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[#777] leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-3xl lg:text-5xl tracking-wide mb-4">
              Our <span className="text-[#ef473f]">Locations</span>
            </h2>
            <p className="text-[#777] max-w-2xl mx-auto">
              Serving businesses across North America with local support and fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-8 text-center">
              <h3 className="font-bebas text-xl tracking-wider mb-2">Windsor, ON</h3>
              <p className="text-sm text-[#777] mb-2">Headquarters</p>
              <a href="tel:5192523005" className="text-[#ef473f] hover:underline">
                (519) 252-3005
              </a>
            </div>
            <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-8 text-center">
              <h3 className="font-bebas text-xl tracking-wider mb-2">Detroit, MI</h3>
              <p className="text-sm text-[#777] mb-2">USA Office</p>
              <a href="tel:2483995410" className="text-[#ef473f] hover:underline">
                (248) 399-5410
              </a>
            </div>
            <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-8 text-center">
              <h3 className="font-bebas text-xl tracking-wider mb-2">Toronto, ON</h3>
              <p className="text-sm text-[#777] mb-2">Greater Toronto Area</p>
              <a href="tel:4166288512" className="text-[#ef473f] hover:underline">
                (416) 628-8512
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer variant="dark" />
    </div>
  )
}
