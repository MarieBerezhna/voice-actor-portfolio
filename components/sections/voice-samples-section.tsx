"use client"

import { motion } from "framer-motion"
import SectionTitle from "@/components/ui/section-title"
import AudioPlayer from "@/components/ui/audio-player"
import { audioSamples } from "@/data/audio-samples"

export default function VoiceSamplesSection() {
  return (
    <section id="voice-samples" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Voice Samples"
          description="Listen to selections from my portfolio showcasing the range and depth of my vocal performances."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audioSamples.map((sample, index) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <AudioPlayer
                title={sample.title}
                character={sample.character}
                project={sample.project}
                audioSrc={sample.audioSrc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
