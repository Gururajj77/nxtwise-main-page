import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookCallModal } from "@/components/ui/book-call-modal"
import { BarChart3, Mail, GraduationCap, ArrowRight, Code, Database, Smartphone, Zap } from "lucide-react"

export function WhatWeBuildSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Management Dashboards",
      description:
        "Transform your data into actionable insights with custom dashboards that give you complete visibility into your business operations.",
      features: ["Real-time analytics", "Custom KPI tracking", "Automated reporting", "Mobile responsive"],
      highlight: "Perfect for executives and managers who need instant access to critical business metrics",
      iconBg: "bg-blue-500",
      cardBg: "bg-gradient-to-br from-blue-50 to-blue-100/50",
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      description:
        "Streamline your marketing efforts with intelligent automation that nurtures leads and converts prospects into loyal customers.",
      features: ["Smart segmentation", "Behavioral triggers", "A/B testing", "ROI tracking"],
      highlight: "Ideal for growing businesses looking to scale their marketing without scaling their team",
      iconBg: "bg-purple-500",
      cardBg: "bg-gradient-to-br from-purple-50 to-purple-100/50",
    },
    {
      icon: GraduationCap,
      title: "Custom Learning Platforms",
      description:
        "Build comprehensive learning experiences that engage students and track progress with intelligent course management systems.",
      features: ["Progress tracking", "Certification system", "Interactive content", "Student analytics"],
      highlight: "Essential for organizations delivering training, education, or professional development",
      iconBg: "bg-green-500",
      cardBg: "bg-gradient-to-br from-green-50 to-green-100/50",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#004AAD] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#004AAD] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-[#004AAD] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            What We Build <span className="text-[#004AAD]">For You</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto mb-8 leading-relaxed">
            Custom AI-powered solutions designed to transform how your business operates. Each system is built
            specifically for your unique needs and workflows.
          </p>
          <div className="w-24 h-1 bg-[#004AAD] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden animate-fade-in-up relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0 h-full">
                {/* Card Background */}
                <div className={`${service.cardBg} h-full`}>
                  {/* Icon Header */}
                  <div className="p-6 pb-4">
                    <div
                      className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed text-sm">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="px-6 pb-4">
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-[#1A1A1A] mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-[#6B7280]">
                            <div className="w-1.5 h-1.5 bg-[#004AAD] rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlight */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 mb-4 border-l-4 border-[#004AAD]">
                      <p className="text-xs text-[#004AAD] font-medium">{service.highlight}</p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white transition-all duration-300 group-hover:scale-105 bg-white/80 backdrop-blur-sm"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center animate-fade-in-up animation-delay-800">
          <Card className="relative overflow-hidden border-0 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/10 via-blue-50 to-[#0B1E3F]/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#004AAD] to-[#0B1E3F]"></div>

            <CardContent className="p-8 lg:p-12 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-[#004AAD] rounded-full flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">Ready to Transform Your Business?</h3>
                </div>

                <p className="text-[#6B7280] mb-8 text-lg leading-relaxed">
                  Every breakthrough starts with a conversation. Let's explore how custom AI can revolutionize your
                  operations and unlock new possibilities for growth.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <BookCallModal>
                    <Button
                      size="lg"
                      className="bg-[#004AAD] hover:bg-[#0B1E3F] text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group text-lg"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </BookCallModal>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white transition-all duration-300 px-8 py-4 text-lg"
                  >
                    View Our Process
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#6B7280]">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#004AAD]" />
                      <span>Custom Built Solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-[#004AAD]" />
                      <span>Mobile Responsive</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#004AAD]" />
                      <span>AI-Powered Intelligence</span>
                    </div>
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
