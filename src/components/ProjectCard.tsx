import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Project } from '../data/types'

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      className="glass group w-full rounded-2xl p-5 text-left transition hover:bg-white/6"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs text-white/55">{project.tagline}</div>
          <div className="mt-1 text-lg font-semibold text-white/90">{project.title}</div>
        </div>
        <span className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 group-hover:bg-white/8">
          <ExternalLink size={16} className="text-white/70" />
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-white/65 line-clamp-3">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-cyan-200/70">Open details</span>
        <span className="text-white/50">{project.year}</span>
      </div>
    </motion.button>
  )
}
