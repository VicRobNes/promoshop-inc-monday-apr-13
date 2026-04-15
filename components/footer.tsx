"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook, Twitter, ArrowRight } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const { config } = useLocale()

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
    <footer className="bg-[#0d0d0d] border-t border-[#2a2a2a]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            {/* PromoShop Studio logo */}
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/mainmemory/promoshop-logo.png"
                alt="PromoShop Studio"
                width={180}
                height={60}
                className="h-12 w-auto"
                unoptimized
              />
            </Link>
            <p className="text-sm font-visby text-[#888] leading-relaxed mb-6">
              Welcome to our store, where promoting your business is our business. Born from an expertise in building brands, we offer unique, quality promotional products.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-xs font-bold tracking-wider uppercase text-[#ccc] mb-3">
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
                    className="flex-1 bg-[#1a1a1a] border border-[#333] text-white px-4 py-2.5 rounded-full text-sm font-visby focus:border-[#ef473f] focus:outline-none transition-colors placeholder:text-[#666]"
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
                  className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:text-[#ef473f] hover:border-[#ef473f] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#ccc] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Studio", "Brands", "My Quote", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm font-visby text-[#888] hover:text-[#ef473f] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#ccc] mb-4">
              Collections
            </h3>
            <ul className="space-y-2">
              {["Drinkware", "Tops", "Jackets", "Tech", "Bags", "Eco-Aware"].map((item) => (
                <li key={item}>
                  <Link
                    href="/studio"
                    className="text-sm font-visby text-[#888] hover:text-[#ef473f] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (locale-aware) */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#ccc] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 font-visby">
              {config.allContacts.map((contact) => (
                <li key={contact.phoneHref} className="text-sm text-[#888]">
                  <span className="block font-semibold text-[#ccc]">{contact.city}, {contact.region}</span>
                  <a href={contact.phoneHref} className="hover:text-[#ef473f] transition-colors">
                    {contact.phone}
                  </a>
                </li>
              ))}
              <li className="text-sm text-[#888] pt-2">
                <a href="mailto:info@promoshopinc.com" className="hover:text-[#ef473f] transition-colors">
                  info@promoshopinc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ADA Compliance */}
        <div className="mt-8 p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
          <p className="text-xs text-[#888] font-visby leading-relaxed">
            <strong className="text-[#ccc]">ADA Compliance:</strong> We understand the importance of accessibility for all visitors to our website and it is something we take seriously. We are working on bringing this website in-line with WCAG 2.1 A, AA standards to ensure we provide an experience that is accessible to all. Your patience is appreciated as we work through these changes.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-visby text-[#666]">
            &copy; {new Date().getFullYear()} PromoShop Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              href="#" 
              className="text-sm font-visby text-[#666] hover:text-[#ef473f] transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-sm font-visby text-[#666] hover:text-[#ef473f] transition-colors underline-offset-2 hover:underline"
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              className="text-sm font-visby text-[#666] hover:text-[#ef473f] transition-colors underline-offset-2 hover:underline"
            >
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
