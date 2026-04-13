"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-black" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold tracking-[0.4em] text-[#ef473f] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-bebas text-4xl lg:text-6xl tracking-wide mb-4">
            Contact Us
          </h2>
          <p className="text-[#777] max-w-xl mx-auto leading-relaxed">
            Have questions? Need a custom quote? Our team is here to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ef473f]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#ef473f]" />
              </div>
              <div>
                <h3 className="font-bebas text-lg tracking-wider mb-2">Phone</h3>
                <div className="space-y-1 text-[#999]">
                  <p>
                    <span className="text-[#777] text-sm">Windsor: </span>
                    <a href="tel:5192523005" className="hover:text-[#ef473f] transition-colors">(519) 252-3005</a>
                  </p>
                  <p>
                    <span className="text-[#777] text-sm">Detroit: </span>
                    <a href="tel:2483995410" className="hover:text-[#ef473f] transition-colors">(248) 399-5410</a>
                  </p>
                  <p>
                    <span className="text-[#777] text-sm">Toronto: </span>
                    <a href="tel:4166288512" className="hover:text-[#ef473f] transition-colors">(416) 628-8512</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ef473f]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#ef473f]" />
              </div>
              <div>
                <h3 className="font-bebas text-lg tracking-wider mb-2">Email</h3>
                <a 
                  href="mailto:info@promoshopinc.com" 
                  className="text-[#999] hover:text-[#ef473f] transition-colors"
                >
                  info@promoshopinc.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ef473f]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#ef473f]" />
              </div>
              <div>
                <h3 className="font-bebas text-lg tracking-wider mb-2">Locations</h3>
                <div className="text-[#999] space-y-2">
                  <p>Windsor, ON</p>
                  <p>Detroit, MI</p>
                  <p>Toronto, ON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#141414] border border-[#2e2e2e] rounded-lg p-8">
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#3ecf8e]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#3ecf8e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bebas text-2xl tracking-wider mb-2">Message Sent!</h3>
                  <p className="text-[#777]">We&apos;ll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold tracking-[0.2em] text-[#777] uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1f1f1f] border border-[#2e2e2e] text-white px-4 py-3 rounded text-sm focus:border-[#ef473f] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ef473f] text-white py-4 font-bold uppercase tracking-wider text-sm rounded hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
