"use client"
import SectionTitle from "@/components/ui/section-title"
import ContactInfo from "./contact-info"
import ContactForm from "./contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get In Touch"
          description="Interested in working together? Reach out to discuss your project and how I can bring your characters to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
