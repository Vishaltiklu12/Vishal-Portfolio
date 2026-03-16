import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      id={`project-${project.id}`}
      type="button"
      onClick={() => onOpen(project)}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      className="glass group w-full overflow-hidden rounded-2xl p-0 text-left transition hover:bg-white/6"
    >
      {/* cover */}
      <div className="relative h-28 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.cover})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050711]/90 via-[#050711]/30 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1 text-xs text-white/80 ring-1 ring-white/12 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          {project.domainGroup}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs text-white/55">{project.tagline}</div>
            <div className="mt-1 text-lg font-semibold text-white/90">{project.title}</div>
          </div>
          <span className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 group-hover:bg-white/8">
            <ExternalLink size={16} className="text-white/70" />
          </span>
        </div>

        {project.bullets?.length ? (
          <ul className="mt-3 space-y-1.5 text-sm text-white/70">
            {project.bullets.slice(0, 3).map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300/70" />
                <span className="line-clamp-1">{b}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm leading-relaxed text-white/65 line-clamp-3">{project.summary}</p>
        )}

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
      </div>
    </motion.button>
  )
}
