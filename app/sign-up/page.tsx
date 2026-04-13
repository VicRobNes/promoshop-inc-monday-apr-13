"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react"

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    if (!agreedToTerms) {
      setError("Please agree to the Terms of Service")
      return
    }

    setIsLoading(true)

    // Simulate registration - Replace with actual auth logic when backend is configured
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Store user info in localStorage for demo
    localStorage.setItem("promoshop_user", JSON.stringify({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company,
      phone: formData.phone,
    }))

    // Also set contact info for quote auto-fill
    localStorage.setItem("promoshop_quote_contact", JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      jobTitle: "",
    }))
    
    router.push("/my-quote")
    setIsLoading(false)
  }

  const passwordStrength = () => {
    const password = formData.password
    if (password.length === 0) return { text: "", color: "" }
    if (password.length < 6) return { text: "Weak", color: "text-red-500" }
    if (password.length < 10) return { text: "Medium", color: "text-yellow-500" }
    return { text: "Strong", color: "text-green-500" }
  }

  const strength = passwordStrength()

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex flex-1 bg-[#141414] items-center justify-center p-12">
        <div className="max-w-md">
          <div className="w-24 h-24 rounded-full bg-[#ef473f] flex items-center justify-center mb-8">
            <span className="text-white font-bold text-4xl">ps</span>
          </div>
          <h2 className="font-bebas text-3xl tracking-wide text-white mb-4">
            Join PromoShop Studio
          </h2>
          <p className="text-[#777] leading-relaxed mb-8">
            Create an account to unlock exclusive features and streamline your ordering experience.
          </p>
          
          <div className="space-y-4">
            {[
              "Save favorite products to your wishlist",
              "Auto-fill quote forms with your information",
              "Track order history and reorder easily",
              "Get personalized product recommendations",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#ef473f]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#ef473f]" />
                </div>
                <p className="text-[#999] text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#ef473f] flex items-center justify-center">
              <span className="text-white font-bold text-lg">ps</span>
            </div>
            <span className="font-bebas text-xl tracking-[0.2em] text-white">
              PROMOSHOP <span className="text-[#ef473f]">STUDIO</span>
            </span>
          </Link>

          <h1 className="font-bebas text-4xl tracking-wide text-white mb-2">
            Create Account
          </h1>
          <p className="text-[#777] mb-6">
            Get started with PromoShop Studio today.
          </p>

          {error && (
            <div className="bg-[#ef473f]/10 border border-[#ef473f]/30 text-[#ef473f] px-4 py-3 rounded mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                Company *
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors pr-12"
                  placeholder="Minimum 8 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {strength.text && (
                <p className={`text-xs mt-1 ${strength.color}`}>
                  Password strength: {strength.text}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                placeholder="Re-enter your password"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-[#2e2e2e] bg-[#1f1f1f] text-[#ef473f] focus:ring-[#ef473f] focus:ring-offset-0"
                />
                <span className="text-sm text-[#777]">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#ef473f] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#ef473f] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#ef473f] text-white py-4 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 mt-6"
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#777]">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-[#ef473f] hover:underline font-semibold">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-[#777] hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
