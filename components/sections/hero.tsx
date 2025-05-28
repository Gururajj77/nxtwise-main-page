"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookCallModal } from "@/components/ui/book-call-modal"
import { TrendingUp, Users, Zap, ArrowRight, Sparkles, Brain, Cpu, Calendar, BarChart, Target } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/60 pt-32 pb-20 px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-indigo-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-[#004AAD]/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Centered Content */}
        <div className="text-center space-y-8 mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#004AAD]/10 to-indigo-500/10 text-[#004AAD] px-5 py-2.5 rounded-full text-sm font-medium animate-fade-up border border-[#004AAD]/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#004AAD] rounded-full animate-pulse"></div>
            <span>Latest AI integration just arrived</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1A1A1A] leading-tight max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
           Custom AI Systems
            <span className="bg-gradient-to-r from-[#004AAD] to-[#0B1E3F] bg-clip-text text-transparent">
               {" "} Built Right
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We provide the tools and insights you need to enhance performance and achieve results.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <BookCallModal>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#004AAD] to-[#0B1E3F] hover:from-[#0B1E3F] hover:to-[#004AAD] text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group shadow-lg"
              >
                Start for free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </BookCallModal>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#004AAD]/20 to-indigo-500/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
            
            {/* Main Dashboard Card */}
            <Card className="relative p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#004AAD] to-indigo-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A] text-lg">Opscale</h3>
                      <p className="text-sm text-[#6B7280]">Hi, Coco Design 👋</p>
                    </div>
                  </div>
                </div>

                {/* Date and Profile */}
                <div className="flex items-center gap-6">
                  <div className="text-sm text-[#6B7280]">10:18:09 PM</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#6B7280]" />
                    <span className="text-sm text-[#6B7280]">Mar 2025</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#004AAD] to-indigo-500 rounded-full"></div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-8 mb-8 pb-4 border-b border-gray-100">
                <button className="flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#004AAD] transition-colors">
                  <BarChart className="w-4 h-4" />
                  Overview
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#004AAD] transition-colors">
                  <Brain className="w-4 h-4" />
                  Analytics
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#004AAD] transition-colors">
                  <Sparkles className="w-4 h-4" />
                  AI Insights
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#004AAD] transition-colors">
                  <Users className="w-4 h-4" />
                  Customers
                </button>
              </div>

              {/* Main Content Area */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Side - Analytics */}
                <div className="lg:col-span-2 space-y-6">
                  <h4 className="font-semibold text-[#1A1A1A] text-lg">Your Sales & Analytics</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Available Payout */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-xl border border-blue-200/30">
                      <p className="text-sm text-[#6B7280] mb-1">Available payout</p>
                      <div className="text-3xl font-bold text-[#004AAD] mb-1">$90.0K+</div>
                      <p className="text-xs text-[#6B7280]">Payout of 50K will be available soon</p>
                    </div>

                    {/* Today Revenue */}
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-6 rounded-xl border border-indigo-200/30">
                      <p className="text-sm text-[#6B7280] mb-1">Today revenue</p>
                      <div className="text-3xl font-bold text-[#0B1E3F] mb-1">$50.0K+</div>
                      <p className="text-xs text-[#6B7280]">Payout of 50K will be available soon</p>
                    </div>
                  </div>

                  {/* Sales Funnel */}
                  <div className="bg-gray-50/50 p-6 rounded-xl">
                    <h5 className="font-semibold text-[#1A1A1A] mb-4">Sales Funnel</h5>
                    <p className="text-sm text-[#6B7280] mb-4">Total view per month</p>
                    
                    {/* Chart Area */}
                    <div className="flex items-end justify-between h-32 mb-4">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                        <div key={day} className="flex-1 flex flex-col items-center gap-2">
                          <div 
                            className={`w-full mx-1 rounded-t transition-all duration-300 ${
                              index === 3 ? 'bg-gradient-to-t from-[#004AAD] to-indigo-500' : 'bg-gray-300'
                            }`}
                            style={{ height: `${index === 3 ? 100 : 40 + Math.random() * 40}%` }}
                          />
                          <span className="text-xs text-[#6B7280]">{day}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="text-2xl font-bold text-[#004AAD]">$500K</div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Visitors & Upgrade */}
                <div className="space-y-6">
                  {/* Export as CSV */}
                  <button className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-[#1A1A1A] transition-colors">
                    Export as CSV
                  </button>

                  {/* Visitors */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <h5 className="font-semibold text-[#1A1A1A] mb-4">Visitors</h5>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#6B7280]">Individual Target</span>
                        <span className="text-sm font-medium text-[#1A1A1A]">92%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#6B7280]">Corporate Target</span>
                        <span className="text-sm font-medium text-[#1A1A1A]">67%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#6B7280]">Foundation Target</span>
                        <span className="text-sm font-medium text-[#1A1A1A]">54%</span>
                      </div>
                    </div>
                  </div>

                  {/* Upgrade to Pro */}
                  <div className="bg-gradient-to-br from-[#004AAD]/10 to-indigo-500/10 p-6 rounded-xl border border-[#004AAD]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-[#004AAD]" />
                      <h5 className="font-semibold text-[#1A1A1A]">Upgrade To Pro</h5>
                    </div>
                    <p className="text-sm text-[#6B7280] mb-4">
                      Discover the benefits of an upgrade account
                    </p>
                    <Button className="w-full bg-gradient-to-r from-[#004AAD] to-[#0B1E3F] hover:from-[#0B1E3F] hover:to-[#004AAD] text-white rounded-lg">
                      Upgrade $10
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Elements around Dashboard */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
