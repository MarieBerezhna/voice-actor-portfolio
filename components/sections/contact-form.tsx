"use client"

import { motion } from "framer-motion"
import { EnhancedButton } from "@/components/ui/enhanced-button"

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6 text-purple-300">Send a Message</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
            placeholder="Your email"
          />
        </div>

        <div>
          <label htmlFor="project" className="block text-sm font-medium text-gray-400 mb-1">
            Project Type
          </label>
          <select
            id="project"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
          >
            <option value="">Select project type</option>
            <option value="game">Video Game</option>
            <option value="animation">Animation</option>
            <option value="audiobook">Audiobook</option>
            <option value="commercial">Commercial</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
            placeholder="Tell me about your project"
          ></textarea>
        </div>

        <EnhancedButton className="w-full">Send Message</EnhancedButton>
      </form>
    </motion.div>
  )
}
