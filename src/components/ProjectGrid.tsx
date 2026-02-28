import type { Project } from '../data/types'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({
  projects,
  onOpen,
}: {
  projects: Project[]
  onOpen: (p: Project) => void
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onOpen={onOpen} />
      ))}
    </div>
  )
}
