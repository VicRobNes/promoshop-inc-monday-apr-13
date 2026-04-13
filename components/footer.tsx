"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Linkedin, Facebook, Twitter, ArrowRight } from "lucide-react"

interface FooterProps {
  variant?: "dark" | "light"
}

export function Footer({ variant = "dark" }: FooterProps) {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const isDark = variant === "dark"
  const bgClass = isDark ? "bg-black" : "bg-[#ededed]"
  const textClass = isDark ? "text-white" : "text-[#111]"
  const mutedClass = isDark ? "text-[#777]" : "text-[#666]"
  const borderClass = isDark ? "border-[#2e2e2e]" : "border-[#d0d0d0]"
  const inputBg = isDark ? "bg-[#1f1f1f]" : "bg-white"
  const inputBorder = isDark ? "border-[#2e2e2e]" : "border-[#d0d0d0]"

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter / X", icon: Twitter, href: "#" },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className={`${bgClass} border-t ${borderClass}`}>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#ef473f] flex items-center justify-center">
                <span className="text-white font-bold text-lg">ps</span>
              </div>
              <span className={`font-bebas text-lg tracking-[0.15em] ${textClass}`}>
                PROMOSHOP <span className="text-[#ef473f]">STUDIO</span>
              </span>
            </Link>
            <p className={`text-sm font-visby ${mutedClass} leading-relaxed mb-6`}>
              Your trusted partner for premium promotional products and branded merchandise.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className={`text-[10px] font-bold tracking-[0.2em] uppercase ${textClass} mb-3`}>
                Stay in the Loop
              </h4>
              {subscribed ? (
                <p className="text-sm text-[#3ecf8e] font-semibold">Thanks for subscribing!</p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`flex-1 ${inputBg} border ${inputBorder} ${textClass} px-4 py-2.5 rounded-full text-sm font-visby focus:border-[#ef473f] focus:outline-none transition-colors placeholder:${mutedClass}`}
                  />
                  <button
                    type="submit"
                    className="bg-[#ef473f] text-white px-4 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  title={social.name}
                  className={`w-10 h-10 rounded-full border ${borderClass} flex items-center justify-center ${mutedClass} hover:text-[#ef473f] hover:border-[#ef473f] transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-bebas text-sm tracking-[0.2em] ${textClass} mb-4`}>
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {["Home", "Studio", "Brands", "My Quote", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className={`text-sm font-visby ${mutedClass} hover:text-[#ef473f] transition-colors`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className={`font-bebas text-sm tracking-[0.2em] ${textClass} mb-4`}>
              CATEGORIES
            </h3>
            <ul className="space-y-2">
              {["Drinkware", "Tops", "Jackets", "Tech", "Bags", "Accessories"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/studio?category=${item.toLowerCase()}`}
                    className={`text-sm font-visby ${mutedClass} hover:text-[#ef473f] transition-colors`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-bebas text-sm tracking-[0.2em] ${textClass} mb-4`}>
              CONTACT US
            </h3>
            <ul className="space-y-3 font-visby">
              <li className={`text-sm ${mutedClass}`}>
                <span className="block font-semibold">Windsor, ON</span>
                <a href="tel:5192523005" className="hover:text-[#ef473f] transition-colors">
                  (519) 252-3005
                </a>
              </li>
              <li className={`text-sm ${mutedClass}`}>
                <span className="block font-semibold">Detroit, MI</span>
                <a href="tel:2483995410" className="hover:text-[#ef473f] transition-colors">
                  (248) 399-5410
                </a>
              </li>
              <li className={`text-sm ${mutedClass}`}>
                <span className="block font-semibold">Toronto, ON</span>
                <a href="tel:4166288512" className="hover:text-[#ef473f] transition-colors">
                  (416) 628-8512
                </a>
              </li>
              <li className={`text-sm ${mutedClass} pt-2`}>
                <a href="mailto:info@promoshopinc.com" className="hover:text-[#ef473f] transition-colors">
                  info@promoshopinc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${borderClass} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className={`text-sm font-visby ${mutedClass}`}>
            &copy; {new Date().getFullYear()} PromoShop Inc. All rights reserved.
          </p>
          {/* Legal Links */}
          <div className="flex gap-6">
            <Link 
              href="#" 
              className={`text-sm font-visby ${mutedClass} hover:text-[#ef473f] transition-colors underline-offset-2 hover:underline`}
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className={`text-sm font-visby ${mutedClass} hover:text-[#ef473f] transition-colors underline-offset-2 hover:underline`}
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              className={`text-sm font-visby ${mutedClass} hover:text-[#ef473f] transition-colors underline-offset-2 hover:underline`}
            >
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
