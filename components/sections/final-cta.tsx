import { Button } from "@/components/ui/button"
import { BookCallModal } from "@/components/ui/book-call-modal" // Assuming this component is styled appropriately
import { ArrowRight } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up">
              Stop Adapting to Software.
            </h2>
            <h3 className="text-3xl lg:text-4xl font-semibold text-sky-400 animate-fade-in-up animation-delay-200">
              Make Software Adapt to You.
            </h3>
          </div>

          {/* Supporting Text */}
          <div className="space-y-5 animate-fade-in animation-delay-400">
            <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to build something that actually works the way your business works?
            </p>
            <p className="text-md text-slate-400 max-w-2xl mx-auto">
              Join the businesses that stopped compromising and started thriving with custom AI solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 animate-fade-in-up animation-delay-600">
            <BookCallModal>
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group min-w-[220px]"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </BookCallModal>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-[#004aad] hover:bg-slate-100 hover:text-slate-900 hover:border-slate-100 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 min-w-[220px]" // Brighter border and text for visibility
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
      {/* Bottom wave SVG has been removed */}
    </section>
  )
}