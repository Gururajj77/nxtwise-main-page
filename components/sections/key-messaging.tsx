import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookCallModal } from "@/components/ui/book-call-modal"
import { CheckCircle, XCircle, ArrowRight, Zap, Clock, Shield, Brain, TrendingUp, Users, BarChart3, Sparkles } from "lucide-react"

export function KeyMessagingSection() {
  const painPoints = [
    { label: "Manual Processes", icon: Clock, severity: 85 },
    { label: "Wasted Features", icon: XCircle, severity: 92 },
    { label: "Poor Workflow Fit", icon: BarChart3, severity: 78 },
    { label: "Limited Scalability", icon: TrendingUp, severity: 88 },
  ]

  const capabilities = [
    { label: "AI-Powered Analytics", active: true },
    { label: "Custom Workflows", active: true },
    { label: "Real-Time Insights", active: true },
    { label: "Auto-Scaling", active: true },
    { label: "Process Automation", active: true },
    { label: "Smart Integration", active: true },
  ]

  const metrics = [
    { value: "87%", label: "Faster Operations", color: "from-blue-500 to-indigo-500" },
    { value: "3.2x", label: "ROI Improvement", color: "from-green-500 to-emerald-500" },
    { value: "60%", label: "Cost Reduction", color: "from-purple-500 to-pink-500" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 px-5 py-2.5 rounded-full text-sm font-medium animate-fade-up border border-red-200/30">
              <Zap className="w-4 h-4" />
              <span>Stop Fighting Your Software</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight max-w-4xl mx-auto animate-fade-up animation-delay-100">
              Stay Ahead with AI That Actually{" "}
              <span className="bg-gradient-to-r from-[#004AAD] to-[#0B1E3F] bg-clip-text text-transparent">
                Understands Your Business
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
              Make smarter decisions with AI-powered analytics. We help you track key metrics, automate
              workflows, and gain real-time insights to scale your business effortlessly.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column - Current Pain Points */}
            <div className="lg:col-span-1 space-y-6 animate-fade-up animation-delay-300">
              <Card className="p-6 bg-white shadow-lg border-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">Current Pain Points</h3>
                </div>
                
                <div className="space-y-4">
                  {painPoints.map((point, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <point.icon className="w-4 h-4 text-[#6B7280]" />
                          <span className="text-sm font-medium text-[#1A1A1A]">{point.label}</span>
                        </div>
                        <span className="text-xs text-red-600 font-semibold">{point.severity}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${point.severity}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <span className="font-semibold">Total efficiency loss:</span> 43% of productive time
                  </p>
                </div>
              </Card>
            </div>

            {/* Center Column - Transformation Metrics */}
            <div className="lg:col-span-1 space-y-6 animate-fade-up animation-delay-400">
              <Card className="p-6 bg-gradient-to-br from-white to-blue-50/30 shadow-lg border-0">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="text-7xl font-bold bg-gradient-to-r from-[#004AAD] to-indigo-600 bg-clip-text text-transparent">
                      95%
                    </div>
                    <Sparkles className="absolute top-0 right-1/4 w-6 h-6 text-yellow-500 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Process Automation</h3>
                    <p className="text-sm text-[#6B7280]">
                      Boost efficiency with AI-driven processes that save time and enhance productivity
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 gap-4">
                {metrics.map((metric, index) => (
                  <Card key={index} className="p-4 bg-white shadow-md border-0 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                          {metric.value}
                        </div>
                        <p className="text-sm text-[#6B7280]">{metric.label}</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-green-500" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Solution Capabilities */}
            <div className="lg:col-span-1 space-y-6 animate-fade-up animation-delay-500">
              <Card className="p-6 bg-white shadow-lg border-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">NXTWise Features</h3>
                </div>
                
                <p className="text-sm text-[#6B7280] mb-6">
                  Explore powerful capabilities: AI Insights, Automation, Data Security, and more.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {capabilities.map((cap, index) => (
                    <div
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        cap.active 
                          ? 'bg-gradient-to-r from-[#004AAD]/10 to-indigo-500/10 text-[#004AAD] border border-[#004AAD]/20' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {cap.label}
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Brain className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-green-800">Machine Learning Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-blue-800">Enterprise-Grade Security</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-purple-800">Team Collaboration Tools</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-[#004AAD]/5 to-indigo-500/5 shadow-xl border border-[#004AAD]/10 animate-fade-up animation-delay-600">
            <div className="text-center space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
                Ready to Transform Your Business Operations?
              </h3>
              
              <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                Join hundreds of businesses that have already automated their workflows and scaled their operations with custom AI solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <BookCallModal>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#004AAD] to-[#0B1E3F] hover:from-[#0B1E3F] hover:to-[#004AAD] text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                  >
                    Get Your Custom Solution
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </BookCallModal>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  View Case Studies
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>14-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
