import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ABOUT_CONTENT } from "@/lib/cms/about"
import { TEAM_MEMBERS } from "@/lib/cms/team"
import { SiteImage } from "@/components/site-image"
import { TeamMemberAvatar } from "@/components/team-member-avatar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Header />

      {/* Hero Section — image LEFT, text RIGHT */}
      <section className="relative bg-[#0d0d0d] overflow-hidden">
        {/* Large red accent stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ef473f]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Image — LEFT on desktop */}
            <div className="relative h-72 lg:h-full lg:min-h-[480px] order-first lg:order-first">
              <SiteImage
                imageId="about.hero"
                defaultSrc={ABOUT_CONTENT.hero.image}
                alt={ABOUT_CONTENT.hero.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text — RIGHT on desktop */}
            <div className="py-16 lg:py-24 lg:pl-12 order-last">
              <p className="text-xs font-bold tracking-wider text-[#ef473f] uppercase mb-4">
                {ABOUT_CONTENT.hero.eyebrow}
              </p>
              <h1 className="font-montserrat font-black text-4xl lg:text-5xl text-white leading-tight mb-6 tracking-wide">
                {ABOUT_CONTENT.hero.heading}
              </h1>
              <div className="space-y-4">
                {ABOUT_CONTENT.hero.body.map((paragraph, i) => (
                  <p key={i} className="text-lg text-[#aaa] leading-relaxed font-visby">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <TeamMemberAvatar member={member} size={112} />
                </div>
                <h3 className="font-montserrat font-bold text-sm text-white">{member.name}</h3>
                <p className="text-xs text-[#ef473f] font-bold uppercase tracking-wider mt-1">{member.role}</p>
                <p className="text-xs text-[#888] font-visby mt-2 leading-snug">{member.description}</p>
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
