"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag, Phone } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Studio", href: "/studio" },
  { name: "Brands", href: "/brands" },
  { name: "My Quote", href: "/my-quote" },
  { name: "About", href: "/about" },
]

interface HeaderProps {
  variant?: "dark" | "light"
}

export function Header({ variant = "dark" }: HeaderProps) {
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

  const isDark = variant === "dark"
  const bgBase = isDark ? "bg-black" : "bg-[#ededed]"
  const bgScrolled = isDark ? "bg-black/95 backdrop-blur-md" : "bg-[#ededed]/95 backdrop-blur-md"
  const textClass = isDark ? "text-white" : "text-[#111]"
  const borderClass = isDark ? "border-[#2e2e2e]" : "border-[#d0d0d0]"
  const pillBg = isDark ? "bg-[#1f1f1f]" : "bg-white"
  const pillActiveBg = isDark ? "bg-[#2e2e2e]" : "bg-[#e0e0e0]"

  return (
    <header className={`${scrolled ? bgScrolled : bgBase} ${scrolled ? `border-b ${borderClass} shadow-sm` : ""} sticky top-0 z-50 transition-all duration-300`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ef473f] flex items-center justify-center">
            <span className="text-white font-bold text-lg">ps</span>
          </div>
          <span className={`font-bebas text-xl tracking-[0.2em] ${textClass}`}>
            PROMOSHOP <span className="text-[#ef473f]">STUDIO</span>
          </span>
        </Link>

        {/* Desktop Navigation - Pill Style */}
        <div className={`hidden lg:flex lg:items-center lg:gap-1 ${pillBg} rounded-full px-1.5 py-1.5`}>
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? `${pillActiveBg} ${textClass}`
                    : `${isDark ? "text-[#999] hover:text-white" : "text-[#666] hover:text-[#111]"}`
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          {/* Phone Link */}
          <a
            href="tel:5192523005"
            className={`flex items-center gap-1.5 text-xs font-semibold tracking-wider ${isDark ? "text-[#999] hover:text-white" : "text-[#666] hover:text-[#111]"} transition-colors`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">(519) 252-3005</span>
          </a>

          {/* Get a Quote CTA with shimmer animation */}
          <Link
            href="/my-quote"
            className="relative flex items-center gap-2 bg-[#ef473f] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full hover:opacity-90 transition-opacity overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <ShoppingBag className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Get a Quote</span>
          </Link>

          <Link
            href="/sign-in"
            className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-[#999] hover:text-white" : "text-[#666] hover:text-[#111]"} transition-colors`}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`lg:hidden ${textClass}`}
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
        <div className={`lg:hidden ${isDark ? "bg-black" : "bg-[#ededed]"} border-t ${borderClass}`}>
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 text-base font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? "text-[#ef473f]" : `${textClass} hover:text-[#ef473f]`
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-[#2e2e2e] flex flex-col gap-3">
              <a
                href="tel:5192523005"
                className={`flex items-center gap-2 py-2 text-sm font-semibold ${isDark ? "text-[#999]" : "text-[#666]"}`}
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
                className={`block py-2 text-sm font-semibold uppercase tracking-wider ${textClass}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
