import ProjectCard from './ProjectCard'

export default function ProjectGrid({ projects, onOpen }) {
  const topRow = projects.slice(0, 3)
  const bottomLeft = projects.slice(3, 5)
  const bottomRight = projects.slice(5, 8)

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {topRow.map((p) => (
        <ProjectCard key={p.id} project={p} onOpen={onOpen} />
      ))}

      {bottomLeft.map((p) => (
        <ProjectCard key={p.id} project={p} onOpen={onOpen} />
      ))}

      {bottomRight.map((p) => (
        <ProjectCard key={p.id} project={p} onOpen={onOpen} />
      ))}
    </div>
  )
}
