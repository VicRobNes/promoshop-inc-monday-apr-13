"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag, Phone, Heart, User } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Studio", href: "/studio" },
  { name: "Brands", href: "/brands" },
  { name: "My Quote", href: "/my-quote" },
  { name: "About", href: "/about" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`bg-white ${scrolled ? "shadow-sm" : ""} sticky top-0 z-50 transition-all duration-300`}>
      {/* Top utility bar */}
      <div className="bg-[#373a36] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between py-2">
          <a
            href="tel:5192523005"
            className="flex items-center gap-1.5 text-xs font-visby"
          >
            <Phone className="w-3 h-3" />
            Need help with something? Give us a call: (519) 252-3005
          </a>
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/sign-in" className="flex items-center gap-1.5 text-xs font-visby hover:text-[#ef473f] transition-colors">
              <User className="w-3 h-3" />
              Login / Register
            </Link>
            <Link href="/my-quote" className="flex items-center gap-1.5 text-xs font-visby hover:text-[#ef473f] transition-colors">
              <Heart className="w-3 h-3" />
              Wishlist
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8 border-b border-[#e5e5e5]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoshop%20logo%20%281%29-ULOkxaeBgbxEQAGDw1MHJqcCE4bQxC.png"
            alt="PromoShop"
            width={200}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded transition-colors ${
                  isActive
                    ? "text-[#ef473f]"
                    : "text-[#373a36] hover:text-[#ef473f]"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link
            href="/my-quote"
            className="relative flex items-center gap-2 bg-[#ef473f] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <ShoppingBag className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Get a Quote</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-[#373a36]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e5e5e5]">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 text-base font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? "text-[#ef473f]" : "text-[#373a36] hover:text-[#ef473f]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-[#e5e5e5] flex flex-col gap-3">
              <a
                href="tel:5192523005"
                className="flex items-center gap-2 py-2 text-sm font-semibold text-[#666]"
              >
                <Phone className="w-4 h-4" />
                (519) 252-3005
              </a>
              <Link
                href="/my-quote"
                className="flex items-center justify-center gap-2 bg-[#ef473f] text-white py-3 font-bold uppercase tracking-wider text-sm rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingBag className="w-4 h-4" />
                Get a Quote
              </Link>
              <Link
                href="/sign-in"
                className="block py-2 text-sm font-semibold uppercase tracking-wider text-[#373a36] text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login / Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
