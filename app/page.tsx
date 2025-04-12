"use client"

import { useState, useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Cursor from "@/components/ui/cursor"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import VoiceSamplesSection from "@/components/sections/voice-samples-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"

export default function VoiceActorPortfolio() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      <Cursor />
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <VoiceSamplesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
