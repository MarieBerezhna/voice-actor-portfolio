"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { scrollToSection } from "@/utils/scroll-utils"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        className="bg-transparent border-purple-700 text-purple-300 hover:bg-purple-900/30"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg z-50 mt-2 border-t border-purple-900/50"
          >
            <nav className="flex flex-col p-4">
              <button
                onClick={() => handleNavClick("about")}
                className="py-3 px-4 text-left text-gray-300 hover:text-purple-300 hover:bg-gray-800/50 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("voice-samples")}
                className="py-3 px-4 text-left text-gray-300 hover:text-purple-300 hover:bg-gray-800/50 rounded-md transition-colors"
              >
                Voice Samples
              </button>
              <button
                onClick={() => handleNavClick("projects")}
                className="py-3 px-4 text-left text-gray-300 hover:text-purple-300 hover:bg-gray-800/50 rounded-md transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="py-3 px-4 text-left text-gray-300 hover:text-purple-300 hover:bg-gray-800/50 rounded-md transition-colors"
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
