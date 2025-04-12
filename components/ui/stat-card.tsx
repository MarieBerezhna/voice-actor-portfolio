"use client"

import { motion } from "framer-motion"

interface StatCardProps {
  value: string
  label: string
  description: string
  delay: number
}

export default function StatCard({ value, label, description, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-gray-800 p-8 rounded-lg border border-purple-900 text-center"
    >
      <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-purple-300">{label}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
