"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  description: string
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-300">{title}</h2>
      <div className="w-20 h-1 bg-purple-700 mx-auto mb-8"></div>
      <p className="text-lg text-gray-300">{description}</p>
    </motion.div>
  )
}
