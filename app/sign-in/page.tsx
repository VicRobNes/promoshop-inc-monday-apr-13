"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (email && password) {
      localStorage.setItem("promoshop_user", JSON.stringify({
        email,
        firstName: email.split("@")[0],
        lastName: "",
        company: "",
      }))
      router.push("/my-quote")
    } else {
      setError("Please enter your email and password")
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-block mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoshop%20logo%20%281%29-ULOkxaeBgbxEQAGDw1MHJqcCE4bQxC.png"
              alt="PromoShop"
              width={200}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          <h1 className="font-montserrat font-bold text-3xl text-[#1a1a1a] mb-2">
            Welcome Back
          </h1>
          <p className="text-[#666] mb-8 font-visby">
            Sign in to your account to manage quotes and access saved information.
          </p>

          {error && (
            <div className="bg-[#ef473f]/10 border border-[#ef473f]/30 text-[#ef473f] px-4 py-3 rounded mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold tracking-wider text-[#999] uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#e5e5e5] text-[#1a1a1a] px-4 py-3.5 rounded text-sm font-visby focus:border-[#ef473f] focus:outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider text-[#999] uppercase mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-[#e5e5e5] text-[#1a1a1a] px-4 py-3.5 rounded text-sm font-visby focus:border-[#ef473f] focus:outline-none transition-colors pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#1a1a1a] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-[#e5e5e5] bg-white text-[#ef473f] focus:ring-[#ef473f]" />
                <span className="text-sm text-[#666] font-visby">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-[#ef473f] hover:underline font-visby">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#ef473f] text-white py-4 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[#e5e5e5] text-center">
            <p className="text-[#666] font-visby">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-[#ef473f] hover:underline font-semibold">Sign up</Link>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-[#999] hover:text-[#1a1a1a] transition-colors font-visby">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Branding */}
      <div className="hidden lg:flex flex-1 bg-white border-l border-[#e5e5e5] items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-24 h-24 rounded-full bg-[#ef473f] flex items-center justify-center mx-auto mb-8">
            <span className="text-white font-bold text-4xl">ps</span>
          </div>
          <h2 className="font-montserrat font-bold text-2xl text-[#1a1a1a] mb-4">
            Premium Branded Merchandise
          </h2>
          <p className="text-[#666] leading-relaxed font-visby">
            Access your account to manage quotes, save your favorite products, 
            and auto-fill your information for faster ordering.
          </p>
        </div>
      </div>
    </div>
  )
}
