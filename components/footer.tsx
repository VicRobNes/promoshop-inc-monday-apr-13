"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook, Twitter, ArrowRight } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

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
    <footer className="bg-white border-t border-[#e5e5e5]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/promoshop-logo-full.png"
                alt="PromoShop - Creative happens here"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm font-visby text-[#666] leading-relaxed mb-6">
              Welcome to our store, where promoting your business is our business. Born from an expertise in building brands, we offer unique, quality promotional products.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-xs font-bold tracking-wider uppercase text-[#373a36] mb-3">
                Stay in the Loop
              </h4>
              {subscribed ? (
                <p className="text-sm text-[#6abf4b] font-semibold">Thanks for subscribing!</p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[#f5f5f5] border border-[#e5e5e5] text-[#1a1a1a] px-4 py-2.5 rounded-full text-sm font-visby focus:border-[#ef473f] focus:outline-none transition-colors placeholder:text-[#999]"
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
                  className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#666] hover:text-[#ef473f] hover:border-[#ef473f] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#373a36] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Studio", "Brands", "My Quote", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm font-visby text-[#666] hover:text-[#ef473f] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#373a36] mb-4">
              Collections
            </h3>
            <ul className="space-y-2">
              {["Technology", "Athleisure", "Work from Home", "Unique Ideas", "Give Back", "Eco-Aware"].map((item) => (
                <li key={item}>
                  <Link
                    href="/studio"
                    className="text-sm font-visby text-[#666] hover:text-[#ef473f] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#373a36] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 font-visby">
              <li className="text-sm text-[#666]">
                <span className="block font-semibold text-[#373a36]">Windsor, ON</span>
                <a href="tel:5192523005" className="hover:text-[#ef473f] transition-colors">
                  (519) 252-3005
                </a>
              </li>
              <li className="text-sm text-[#666]">
                <span className="block font-semibold text-[#373a36]">Detroit, MI</span>
                <a href="tel:2483995410" className="hover:text-[#ef473f] transition-colors">
                  (248) 399-5410
                </a>
              </li>
              <li className="text-sm text-[#666]">
                <span className="block font-semibold text-[#373a36]">Toronto, ON</span>
                <a href="tel:4166288512" className="hover:text-[#ef473f] transition-colors">
                  (416) 628-8512
                </a>
              </li>
              <li className="text-sm text-[#666] pt-2">
                <a href="mailto:info@promoshopinc.com" className="hover:text-[#ef473f] transition-colors">
                  info@promoshopinc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ADA Compliance */}
        <div className="mt-8 p-4 bg-[#f9f9f9] border border-[#e5e5e5] rounded-lg">
          <p className="text-xs text-[#666] font-visby leading-relaxed">
            <strong className="text-[#373a36]">ADA Compliance:</strong> We understand the importance of accessibility for all visitors to our website and it is something we take seriously. We are working on bringing this website in-line with WCAG 2.1 A, AA standards to ensure we provide an experience that is accessible to all. Your patience is appreciated as we work through these changes.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#e5e5e5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-visby text-[#999]">
            &copy; {new Date().getFullYear()} PromoShop Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              href="#" 
              className="text-sm font-visby text-[#999] hover:text-[#ef473f] transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-sm font-visby text-[#999] hover:text-[#ef473f] transition-colors underline-offset-2 hover:underline"
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              className="text-sm font-visby text-[#999] hover:text-[#ef473f] transition-colors underline-offset-2 hover:underline"
            >
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
