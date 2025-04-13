"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { scrollToSection } from "@/utils/scroll-utils"
import MobileMenu from "@/components/ui/mobile-menu"
import LanguageSwitcher from "@/components/ui/language-switcher"
import { useLanguage } from "@/contexts/language-context"

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const { translations } = useLanguage()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-gray-950/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-purple-300"
        >
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span>VOX OBSCURA</span>
          </Link>
        </motion.div>

        <div className="flex items-center gap-4">
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <Link
              href="#about"
              className="text-gray-300 hover:text-purple-300 transition-colors"
              onClick={(e) => handleNavClick(e, "about")}
            >
              {translations.nav.about}
            </Link>
            <Link
              href="#voice-samples"
              className="text-gray-300 hover:text-purple-300 transition-colors"
              onClick={(e) => handleNavClick(e, "voice-samples")}
            >
              {translations.nav.voiceSamples}
            </Link>
            <Link
              href="#fun-facts"
              className="text-gray-300 hover:text-purple-300 transition-colors"
              onClick={(e) => handleNavClick(e, "fun-facts")}
            >
              {translations.nav.funFacts}
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-purple-300 transition-colors"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              {translations.nav.contact}
            </Link>
          </motion.nav>

          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}