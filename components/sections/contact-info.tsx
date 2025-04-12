"use client"

import { motion } from "framer-motion"
import { Mail, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6 text-purple-300">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Mail className="h-5 w-5 text-purple-400" />
          <span className="text-gray-300">contact@morganblackwood.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <Twitter className="h-5 w-5 text-purple-400" />
          <span className="text-gray-300">@MorganVoices</span>
        </div>
        <div className="flex items-center space-x-4">
          <Instagram className="h-5 w-5 text-purple-400" />
          <span className="text-gray-300">@morgan_blackwood_va</span>
        </div>
        <div className="flex items-center space-x-4">
          <Linkedin className="h-5 w-5 text-purple-400" />
          <span className="text-gray-300">morganblackwoodva</span>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-4 text-purple-300">Representation</h4>
        <p className="text-gray-300">
          Mystic Voices Agency
          <br />
          agent@mysticvoices.com
          <br />
          (555) 123-4567
        </p>
      </div>
    </motion.div>
  )
}
