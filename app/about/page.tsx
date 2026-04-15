import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ABOUT_CONTENT } from "@/lib/cms/about"
import { TEAM_MEMBERS } from "@/lib/cms/team"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />

      {/* Hero Section with Storefront Image */}
      <section className="relative bg-[#f9f9f9] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="py-16 lg:py-24 lg:pr-12">
              <p className="text-xs font-bold tracking-wider text-[#ef473f] uppercase mb-4">
                {ABOUT_CONTENT.hero.eyebrow}
              </p>
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-6">
                {ABOUT_CONTENT.hero.heading}
              </h1>
              <div className="space-y-4">
                {ABOUT_CONTENT.hero.body.map((paragraph, i) => (
                  <p key={i} className="text-lg text-[#555] leading-relaxed font-visby">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative h-72 lg:h-full lg:min-h-[480px]">
              <Image
                src={ABOUT_CONTENT.hero.image}
                alt={ABOUT_CONTENT.hero.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team (matches home page styling) */}
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
