import SectionTitle from "@/components/ui/section-title"
import StatCard from "@/components/ui/stat-card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          description="I am a professional voice actor specializing in dark fantasy, horror, and dramatic narratives. With over 8 years of experience, I bring characters to life with depth, emotion, and authenticity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            value="8+"
            label="Years Experience"
            description="Professional voice acting across various mediums"
            delay={0.2}
          />
          <StatCard
            value="50+"
            label="Projects"
            description="Including games, audiobooks, and animated series"
            delay={0.4}
          />
          <StatCard
            value="100+"
            label="Characters"
            description="Unique voices and personalities brought to life"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}
