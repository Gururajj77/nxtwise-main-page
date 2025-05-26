import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/sections/hero"
import { KeyMessagingSection } from "@/components/sections/key-messaging"
import { WhatWeBuildSection } from "@/components/sections/what-we-build"
import { TestimonialSection } from "@/components/sections/testimonial"
import { FinalCTASection } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <KeyMessagingSection />
      <WhatWeBuildSection />
      <TestimonialSection />
      <FinalCTASection />
    </main>
  )
}
