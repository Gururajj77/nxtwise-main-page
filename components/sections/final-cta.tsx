import { Button } from "@/components/ui/button"
import { BookCallModal } from "@/components/ui/book-call-modal"
import { ArrowRight, Sparkles, Rocket, Target } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-16 lg:py-32 bg-gradient-to-br from-[#004AAD] via-[#0B1E3F] to-[#004AAD] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-white/20 rounded-full animate-float"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-white/20 animate-pulse animation-delay-200" />
        <Rocket className="absolute top-40 right-32 w-8 h-8 text-white/20 animate-bounce-slow animation-delay-400" />
        <Target className="absolute bottom-32 left-32 w-6 h-6 text-white/20 animate-float animation-delay-600" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in-up">
          {/* Main Headline */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight animate-slide-in-up">
              Stop Adapting to Software.
            </h2>
            <h3 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent animate-slide-in-up animation-delay-200">
              Make Software Adapt to You.
            </h3>
          </div>

          {/* Supporting Text */}
          <div className="space-y-4 animate-fade-in animation-delay-400">
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to build something that actually works the way your business works?
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Join the businesses that stopped compromising and started thriving with custom AI solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-up animation-delay-600">
            <BookCallModal>
              <Button
                size="lg"
                className="bg-white text-[#004AAD] hover:bg-gray-100 px-10 py-4 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group min-w-[200px]"
              >
                Book a Call
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </BookCallModal>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#004AAD] hover:border-white px-10 py-4 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-110 min-w-[200px]"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
