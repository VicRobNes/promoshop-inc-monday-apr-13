"use client"

import { useState } from "react"
import Link from "next/link"
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

    // Simulate authentication - Replace with actual auth logic when backend is configured
    await new Promise(resolve => setTimeout(resolve, 1000))

    // For demo purposes, accept any credentials
    if (email && password) {
      // Store user info in localStorage for demo
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
    <div className="min-h-screen bg-black flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-full bg-[#ef473f] flex items-center justify-center">
              <span className="text-white font-bold text-lg">ps</span>
            </div>
            <span className="font-bebas text-xl tracking-[0.2em] text-white">
              PROMOSHOP <span className="text-[#ef473f]">STUDIO</span>
            </span>
          </Link>

          <h1 className="font-bebas text-4xl tracking-wide text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-[#777] mb-8">
            Sign in to your account to manage quotes and access saved information.
          </p>

          {error && (
            <div className="bg-[#ef473f]/10 border border-[#ef473f]/30 text-[#ef473f] px-4 py-3 rounded mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3.5 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3.5 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#2e2e2e] bg-[#1f1f1f] text-[#ef473f] focus:ring-[#ef473f] focus:ring-offset-0"
                />
                <span className="text-sm text-[#777]">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#ef473f] hover:underline">
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

          <div className="mt-8 pt-8 border-t border-[#2e2e2e] text-center">
            <p className="text-[#777]">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-[#ef473f] hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-[#777] hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Branding */}
      <div className="hidden lg:flex flex-1 bg-[#141414] items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-24 h-24 rounded-full bg-[#ef473f] flex items-center justify-center mx-auto mb-8">
            <span className="text-white font-bold text-4xl">ps</span>
          </div>
          <h2 className="font-bebas text-3xl tracking-wide text-white mb-4">
            Premium Branded Merchandise
          </h2>
          <p className="text-[#777] leading-relaxed">
            Access your account to manage quotes, save your favorite products, 
            and auto-fill your information for faster ordering.
          </p>
        </div>
      </div>
    </div>
  )
}
