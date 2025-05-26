import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookCallModal } from "@/components/ui/book-call-modal"
import { CheckCircle, XCircle, ArrowRight } from "lucide-react"

export function KeyMessagingSection() {
  const problems = [
    "Software that doesn't understand your workflow",
    "Paying for features you'll never use",
    "Constant workarounds and manual processes",
    "Systems that fight against how you work",
  ]

  const solutions = [
    "AI that learns your business processes",
    "Custom features built for your needs",
    "Automated workflows that save hours",
    "Software that adapts to your way of working",
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50/50 to-indigo-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Main Problem Statement */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Sick of paying for 'smart' software that's actually pretty{" "}
              <span className="text-red-600 relative">
                dumb
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600/30 rounded"></span>
              </span>{" "}
              about how your business operates?
            </h2>
            <div className="w-32 h-1 bg-[#004AAD] mx-auto"></div>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problems */}
            <Card className="p-8 bg-red-50 border-red-200 animate-slide-in-left">
              <div className="text-center mb-6">
                <XCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-800">The Problem</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 animate-fade-in animation-delay-200">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-red-800">{problem}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Solutions */}
            <Card className="p-8 bg-green-50 border-green-200 animate-slide-in-right">
              <div className="text-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800">Our Solution</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 animate-fade-in animation-delay-400">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-8 lg:p-12 bg-white shadow-xl border-0 text-center animate-fade-in-up animation-delay-600">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#004AAD] mb-6">
              Sound Like Your Problem? We Can Fix It.
            </h3>

            <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
              Stop fighting with software that doesn't understand your business. Let's build something that actually
              works the way you do.
            </p>

            <BookCallModal>
              <Button
                size="lg"
                className="bg-[#004AAD] hover:bg-[#0B1E3F] text-white px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Let's Talk About Your Solution
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </BookCallModal>
          </Card>
        </div>
      </div>
    </section>
  )
}
