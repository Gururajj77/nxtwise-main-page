"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BookCallModal } from "@/components/ui/book-call-modal"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#004AAD] animate-fade-in">nxtwise</div>

        <BookCallModal>
          <Button className="bg-[#004AAD] hover:bg-[#0B1E3F] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Book a Call
          </Button>
        </BookCallModal>
      </div>
    </nav>
  )
}
