import Link from "next/link"

interface FooterProps {
  variant?: "dark" | "light"
}

export function Footer({ variant = "dark" }: FooterProps) {
  const isDark = variant === "dark"
  const bgClass = isDark ? "bg-black" : "bg-[#ededed]"
  const textClass = isDark ? "text-white" : "text-[#111]"
  const mutedClass = isDark ? "text-[#777]" : "text-[#666]"
  const borderClass = isDark ? "border-[#2e2e2e]" : "border-[#d0d0d0]"

  return (
    <footer className={`${bgClass} border-t ${borderClass}`}>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#ef473f] flex items-center justify-center">
                <span className="text-white font-bold text-lg">ps</span>
              </div>
              <span className={`font-bebas text-lg tracking-[0.15em] ${textClass}`}>
                PROMOSHOP
              </span>
            </Link>
            <p className={`text-sm ${mutedClass} leading-relaxed`}>
              Your trusted partner for premium promotional products and branded merchandise.
            </p>
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
                    className={`text-sm ${mutedClass} hover:text-[#ef473f] transition-colors`}
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
                    className={`text-sm ${mutedClass} hover:text-[#ef473f] transition-colors`}
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
            <ul className="space-y-2">
              <li className={`text-sm ${mutedClass}`}>
                <span className="block">Canada</span>
                <a href="tel:5192523005" className="hover:text-[#ef473f] transition-colors">
                  (519) 252-3005
                </a>
              </li>
              <li className={`text-sm ${mutedClass}`}>
                <span className="block">USA</span>
                <a href="tel:2483995410" className="hover:text-[#ef473f] transition-colors">
                  (248) 399-5410
                </a>
              </li>
              <li className={`text-sm ${mutedClass}`}>
                <span className="block">Toronto</span>
                <a href="tel:4166288512" className="hover:text-[#ef473f] transition-colors">
                  (416) 628-8512
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t ${borderClass} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className={`text-sm ${mutedClass}`}>
            &copy; {new Date().getFullYear()} PromoShop Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className={`text-sm ${mutedClass} hover:text-[#ef473f] transition-colors`}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={`text-sm ${mutedClass} hover:text-[#ef473f] transition-colors`}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
