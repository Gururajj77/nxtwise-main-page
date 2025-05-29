import { Button } from "@/components/ui/button"
import { BookCallModal } from "@/components/ui/book-call-modal"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-gradient-to-br from-primary/90 via-primary to-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 -left-10 w-20 h-20 bg-accent/20 rounded-full filter blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 -right-10 w-24 h-24 bg-sky-400/20 rounded-full filter blur-xl animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white/80">Transform Your Business Today</span>
          </div>
          
          {/* Main Headline */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              Stop Adapting to Software.
              <span className="block mt-2 bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent">
                Make Software Adapt to You.
              </span>
            </h2>
            
            {/* Supporting Text */}
            <div className="space-y-6 max-w-3xl mx-auto animate-fade-in animation-delay-200">
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                Ready to build something that actually works the way your business works?
              </p>
              <p className="text-md text-white/70 max-w-2xl mx-auto">
                Join the businesses that stopped compromising and started thriving with custom AI solutions.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up animation-delay-400">
            <BookCallModal>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] min-w-[240px]"
              >
                <span className="relative z-10 flex items-center">
                  Book a Free Consultation
                  <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </BookCallModal>

            <Link href="/case-studies">
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden border-2 border-white/20 bg-transparent hover:bg-white/5 text-white hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] min-w-[240px]"
              >
                <span className="relative z-10 flex items-center">
                  View Case Studies
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>
        
        </div>
      </div>
    </section>
  )
}