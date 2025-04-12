import SectionTitle from "@/components/ui/section-title"
import ProjectCard from "@/components/ui/project-card"
import { projects } from "@/data/projects"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Projects"
          description="Explore some of the notable projects I've had the privilege to be a part of."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
