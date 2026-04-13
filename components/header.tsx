"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"

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

  const isDark = variant === "dark"
  const bgClass = isDark ? "bg-black" : "bg-[#ededed]"
  const textClass = isDark ? "text-white" : "text-[#111]"
  const borderClass = isDark ? "border-[#2e2e2e]" : "border-[#d0d0d0]"
  const hoverClass = isDark ? "hover:text-[#ef473f]" : "hover:text-[#ef473f]"

  return (
    <header className={`${bgClass} border-b ${borderClass} sticky top-0 z-50`}>
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold uppercase tracking-wider ${textClass} ${hoverClass} transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Link
            href="/my-quote"
            className="flex items-center gap-2 bg-[#ef473f] text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="w-4 h-4" />
            My Quote
          </Link>
          <Link
            href="/sign-in"
            className={`text-sm font-semibold uppercase tracking-wider ${textClass} ${hoverClass} transition-colors`}
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
        <div className={`lg:hidden ${bgClass} border-t ${borderClass}`}>
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 text-base font-semibold uppercase tracking-wider ${textClass} ${hoverClass}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#2e2e2e]">
              <Link
                href="/sign-in"
                className={`block py-3 text-base font-semibold uppercase tracking-wider ${textClass}`}
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
