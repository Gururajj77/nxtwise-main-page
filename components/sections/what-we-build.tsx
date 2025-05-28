"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookCallModal } from "@/components/ui/book-call-modal"
import { 
  BarChart3, Mail, GraduationCap, ArrowRight, Code, Database, 
  Smartphone, Zap, CheckCircle, Sparkles, TrendingUp, Users, 
  Globe, Shield, Rocket, Clock, LineChart, Target
} from "lucide-react"
import { useState } from "react"

export function WhatWeBuildSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 'dashboards',
      icon: BarChart3,
      title: "Management Dashboards",
      tagline: "See Everything, Control Everything",
      description: "Transform your data into actionable insights with custom dashboards that give you complete visibility into your business operations.",
      features: [
        { name: "Real-time analytics", description: "Live data updates every second" },
        { name: "Custom KPI tracking", description: "Track metrics that matter to you" },
        { name: "Automated reporting", description: "Schedule reports to your inbox" },
        { name: "Mobile responsive", description: "Access anywhere, anytime" }
      ],
      benefits: [
        { metric: "50%", label: "Faster Decisions" },
        { metric: "3x", label: "Data Accuracy" },
        { metric: "80%", label: "Time Saved" }
      ],
      colorClass: "text-blue-500",
      gradient: "from-blue-500 to-indigo-500",
      lightGradient: "from-blue-50 to-indigo-50",
      preview: {
        type: "dashboard",
        metrics: [
          { label: "Revenue", value: "$284K", change: "+12.5%", trend: "up" },
          { label: "Users", value: "8,549", change: "+23.1%", trend: "up" },
          { label: "Conversion", value: "3.2%", change: "+0.8%", trend: "up" },
          { label: "Avg. Order", value: "$156", change: "-2.4%", trend: "down" }
        ]
      }
    },
    {
      id: 'marketing',
      icon: Mail,
      title: "Marketing Automation",
      tagline: "Engage, Convert, Grow",
      description: "Streamline your marketing efforts with intelligent automation that nurtures leads and converts prospects into loyal customers.",
      features: [
        { name: "Smart segmentation", description: "AI-powered audience targeting" },
        { name: "Behavioral triggers", description: "React to customer actions instantly" },
        { name: "A/B testing", description: "Optimize every campaign automatically" },
        { name: "ROI tracking", description: "Know exactly what's working" }
      ],
      benefits: [
        { metric: "320%", label: "ROI Increase" },
        { metric: "5x", label: "Lead Quality" },
        { metric: "45%", label: "Cost Reduction" }
      ],
      colorClass: "text-purple-500",
      gradient: "from-purple-500 to-pink-500",
      lightGradient: "from-purple-50 to-pink-50",
      preview: {
        type: "marketing",
        campaigns: [
          { name: "Welcome Series", status: "active", performance: 92 },
          { name: "Product Launch", status: "scheduled", performance: 0 },
          { name: "Re-engagement", status: "active", performance: 78 },
          { name: "Holiday Promo", status: "draft", performance: 0 }
        ]
      }
    },
    {
      id: 'learning',
      icon: GraduationCap,
      title: "Custom Learning Platforms",
      tagline: "Education That Adapts",
      description: "Build comprehensive learning experiences that engage students and track progress with intelligent course management systems.",
      features: [
        { name: "Progress tracking", description: "Monitor every learner's journey" },
        { name: "Certification system", description: "Issue and verify certificates" },
        { name: "Interactive content", description: "Engage with multimedia lessons" },
        { name: "Student analytics", description: "Understand learning patterns" }
      ],
      benefits: [
        { metric: "85%", label: "Completion Rate" },
        { metric: "4.8", label: "Satisfaction Score" },
        { metric: "60%", label: "Learning Speed" }
      ],
      colorClass: "text-green-500",
      gradient: "from-green-500 to-emerald-500",
      lightGradient: "from-green-50 to-emerald-50",
      preview: {
        type: "learning",
        courses: [
          { title: "AI Fundamentals", progress: 75, students: 1234 },
          { title: "Data Science 101", progress: 45, students: 892 },
          { title: "Machine Learning", progress: 90, students: 567 },
          { title: "Deep Learning", progress: 30, students: 345 }
        ]
      }
    }
  ]

  const currentService = services[activeService]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-gradient-to-r from-green-100/30 to-emerald-100/30 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#004AAD]/10 to-indigo-500/10 text-[#004AAD] px-5 py-2.5 rounded-full text-sm font-medium animate-fade-up border border-[#004AAD]/20">
            <Sparkles className="w-4 h-4" />
            <span>Custom Solutions for Every Business</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight max-w-4xl mx-auto animate-fade-up animation-delay-100">
            We Build{" "}
            <span className="bg-gradient-to-r from-[#004AAD] to-[#0B1E3F] bg-clip-text text-transparent">
              Intelligent Systems
            </span>{" "}
            That Work
          </h2>
          
          <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            From powerful dashboards to automated marketing and adaptive learning platforms, 
            we create AI-powered solutions tailored to your exact needs.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up animation-delay-300">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`group relative px-6 py-4 rounded-xl transition-all duration-300 ${
                activeService === index
                  ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-[#6B7280] hover:text-[#1A1A1A] shadow-md hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-3">
                <service.icon className={`w-5 h-5 ${
                  activeService === index ? 'text-white' : service.colorClass
                }`} />
                <span className="font-semibold">{service.title}</span>
              </div>
              {activeService === index && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
              )}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden animate-fade-up animation-delay-400">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Left Side - Service Details */}
                <div className={`p-8 lg:p-12 bg-gradient-to-br ${currentService.lightGradient}`}>
                  <div className="space-y-8 h-full flex flex-col">
                    {/* Service Header */}
                    <div>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${currentService.gradient} text-white`}>
                        <currentService.icon className="w-4 h-4" />
                        <span>{currentService.tagline}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">{currentService.title}</h3>
                      <p className="text-lg text-[#6B7280] leading-relaxed">{currentService.description}</p>
                    </div>

                    {/* Features Grid */}
                    <div className="flex-grow">
                      <h4 className="font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Core Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentService.features.map((feature, index) => (
                          <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white transition-colors">
                            <h5 className="font-semibold text-[#1A1A1A] mb-1">{feature.name}</h5>
                            <p className="text-sm text-[#6B7280]">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      {currentService.benefits.map((benefit, index) => (
                        <div key={index} className="text-center">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${currentService.gradient} bg-clip-text text-transparent`}>
                            {benefit.metric}
                          </div>
                          <p className="text-sm text-[#6B7280]">{benefit.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Interactive Preview */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="w-full">
                    {/* Dashboard Preview */}
                    {currentService.preview.type === 'dashboard' && (
                      <div className="bg-white rounded-xl shadow-xl p-6 animate-fade-up">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-semibold text-[#1A1A1A]">Live Dashboard</h4>
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {currentService?.preview?.metrics?.map((metric, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <p className="text-sm text-[#6B7280] mb-1">{metric.label}</p>
                              <p className="text-2xl font-bold text-[#1A1A1A]">{metric.value}</p>
                              <div className="flex items-center gap-1 mt-1">
                                {metric.trend === 'up' ? (
                                  <TrendingUp className="w-4 h-4 text-green-500" />
                                ) : (
                                  <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
                                )}
                                <span className={`text-sm font-medium ${
                                  metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                                }`}>
                                  {metric.change}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Marketing Preview */}
                    {currentService.preview.type === 'marketing' && (
                      <div className="bg-white rounded-xl shadow-xl p-6 animate-fade-up">
                        <h4 className="font-semibold text-[#1A1A1A] mb-6">Campaign Performance</h4>
                        <div className="space-y-4">
                          {currentService?.preview?.campaigns?.map((campaign, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium text-[#1A1A1A]">{campaign.name}</h5>
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                  campaign.status === 'active' 
                                    ? 'bg-green-100 text-green-700'
                                    : campaign.status === 'scheduled'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-gray-100 text-gray-700'
                                }`}>
                                  {campaign.status}
                                </span>
                              </div>
                              {campaign.performance > 0 && (
                                <div>
                                  <div className="flex justify-between text-sm text-[#6B7280] mb-1">
                                    <span>Performance</span>
                                    <span>{campaign.performance}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                                      style={{ width: `${campaign.performance}%` }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Learning Preview */}
                    {currentService.preview.type === 'learning' && (
                      <div className="bg-white rounded-xl shadow-xl p-6 animate-fade-up">
                        <h4 className="font-semibold text-[#1A1A1A] mb-6">Active Courses</h4>
                        <div className="space-y-4">
                          {currentService?.preview?.courses?.map((course, index) => (
                            <div key={index} className="hover:shadow-md transition-shadow rounded-lg p-4 border border-gray-200">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="font-medium text-[#1A1A1A]">{course.title}</h5>
                                <span className="text-sm text-[#6B7280] flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  {course.students}
                                </span>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm text-[#6B7280] mb-1">
                                  <span>Progress</span>
                                  <span>{course.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${course.progress}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center animate-fade-up animation-delay-500">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-[#004AAD]/5 to-indigo-500/5">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#004AAD] to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                    Ready to Build Something Amazing?
                  </h3>
                </div>

                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Join hundreds of businesses that have transformed their operations with our custom AI solutions.
                  Let's discuss how we can build the perfect system for your unique needs.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <BookCallModal>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#004AAD] to-[#0B1E3F] hover:from-[#0B1E3F] hover:to-[#004AAD] text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </BookCallModal>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    <Globe className="mr-2 w-5 h-5" />
                    See Live Demos
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Shield className="w-5 h-5 text-[#004AAD]" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Clock className="w-5 h-5 text-[#004AAD]" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Target className="w-5 h-5 text-[#004AAD]" />
                    <span>100% Custom Built</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
