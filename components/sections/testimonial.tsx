import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-8">Why We Started nxtwise</h2>

          <div className="relative">
            <Quote className="w-16 h-16 text-[#004AAD]/20 mx-auto mb-6" />

            <blockquote className="text-xl lg:text-2xl text-[#1A1A1A] font-medium italic leading-relaxed mb-8">
              "We were tired of seeing businesses struggle with software that promised to be smart but couldn't adapt to
              how they actually worked. Every company is unique, but most software treats them all the same. We started
              nxtwise to build systems that actually understand and grow with your business."
            </blockquote>

            <cite className="text-lg text-[#6B7280] font-semibold not-italic">- Alex Chen, Co-founder of nxtwise</cite>
          </div>

          <div className="pt-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-[#004AAD] mb-6">
              Wondering If We Can Build Something Like This for You?
            </h3>

            <Button
              size="lg"
              className="bg-[#004AAD] hover:bg-[#0B1E3F] text-white px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
