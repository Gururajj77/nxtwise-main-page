"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookCallModal } from "@/components/ui/book-call-modal"
import { TrendingUp, Users, Zap, ArrowRight, Sparkles, Brain, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/60 pt-20 px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-indigo-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-lg animate-bounce-slow"></div>

        {/* Floating Icons */}
        <div className="absolute top-32 left-1/3 animate-float animation-delay-1000">
          <Brain className="w-8 h-8 text-[#004AAD]/30" />
        </div>
        <div className="absolute top-60 right-1/3 animate-bounce-slow animation-delay-500">
          <Cpu className="w-6 h-6 text-purple-500/40" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-pulse-slow animation-delay-800">
          <Sparkles className="w-10 h-10 text-indigo-400/50" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-[#004AAD]/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#004AAD]/10 text-[#004AAD] px-4 py-2 rounded-full text-sm font-medium animate-slide-in-left">
                <Sparkles className="w-4 h-4" />
                AI-Powered Custom Solutions
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight animate-slide-in-left animation-delay-200">
                Custom AI Systems{" "}
                <span className="bg-gradient-to-r from-[#004AAD] to-[#0B1E3F] bg-clip-text text-transparent animate-pulse-slow">
                  Built Right
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl font-medium text-[#6B7280] animate-slide-in-left animation-delay-400">
                AI-Powered Systems That Scale With You, For You
              </h2>

              <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed animate-slide-in-left animation-delay-600">
                We build you custom software that works exactly how your business works - with AI where it adds real
                value, not just because it's trendy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animation-delay-800">
              <BookCallModal>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#004AAD] to-[#0B1E3F] hover:from-[#0B1E3F] hover:to-[#004AAD] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-lg"
                >
                  Build Something for Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </BookCallModal>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-[#6B7280] animate-fade-in animation-delay-1000">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Custom Built</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-200"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-400"></div>
                <span>Scalable</span>
              </div>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="relative">
              {/* Main Dashboard Card */}
              <Card className="p-6 bg-white/90 backdrop-blur-md shadow-2xl border-0 transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-3xl animate-float relative overflow-hidden">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/5 to-purple-500/5 rounded-lg"></div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[#1A1A1A] flex items-center gap-2">
                      <Brain className="w-5 h-5 text-[#004AAD]" />
                      AI Business Dashboard
                    </h3>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-[#004AAD] rounded-full animate-pulse animation-delay-200"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-[#004AAD] animate-bounce-slow" />
                        <span className="text-sm font-medium">Revenue</span>
                      </div>
                      <div className="text-xl font-bold text-[#004AAD] animate-count-up">$24.5K</div>
                      <div className="text-xs text-green-600 font-medium">↗ +12.5%</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 border border-purple-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium">Users</span>
                      </div>
                      <div className="text-xl font-bold text-purple-600 animate-count-up">1,247</div>
                      <div className="text-xs text-green-600 font-medium">↗ +8.2%</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#004AAD]/10 to-indigo-500/10 p-4 rounded-xl border-l-4 border-[#004AAD] animate-slide-in-right animation-delay-800 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-[#004AAD] animate-pulse" />
                      <span className="text-sm font-medium">AI Insights</span>
                    </div>
                    <p className="text-xs text-[#6B7280] mb-1">Customer engagement up 23% this week</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-[#004AAD] to-indigo-500 h-1.5 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-bounce-slow blur-sm"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-indigo-400/30 to-cyan-400/30 rounded-full animate-pulse-slow blur-sm"></div>
              <div className="absolute top-1/2 -left-10 w-12 h-12 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full animate-float animation-delay-1000 blur-sm"></div>

              {/* Geometric Shapes */}
              <div className="absolute top-16 right-16 w-8 h-8 border-2 border-[#004AAD]/30 rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-16 left-16 w-6 h-6 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-full animate-bounce-slow animation-delay-600"></div>
              <div className="absolute top-32 right-32 w-4 h-4 bg-gradient-to-r from-yellow-400/50 to-orange-400/50 transform rotate-45 animate-pulse-slow animation-delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
