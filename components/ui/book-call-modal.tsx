"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Phone, Mail, Calendar } from "lucide-react"

interface BookCallModalProps {
  children: React.ReactNode
  redirectUrl?: string
}

export function BookCallModal({ children, redirectUrl = "https://calendly.com/nxtwise" }: BookCallModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to external link
    window.open(redirectUrl, "_blank")

    setIsOpen(false)
    setIsSubmitting(false)
    setFormData({ email: "", phone: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#004AAD] flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Book Your Strategy Call
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-[#6B7280]">
            Ready to discuss your custom AI system? Share your contact details and we'll connect you with our team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#1A1A1A]">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-[#6B7280]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 border-gray-300 focus:border-[#004AAD] focus:ring-[#004AAD]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-[#1A1A1A]">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-[#6B7280]" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-10 border-gray-300 focus:border-[#004AAD] focus:ring-[#004AAD]"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#004AAD] hover:bg-[#0B1E3F] text-white py-3 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Scheduling..." : "Schedule My Call"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-xs text-[#6B7280]">
              We'll redirect you to our calendar to choose your preferred time slot.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
