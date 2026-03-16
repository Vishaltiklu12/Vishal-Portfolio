import { motion } from 'framer-motion'
import { X, Github, Globe, FileDown } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm md:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="glass neon w-full max-w-3xl rounded-3xl p-5 md:p-7"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs text-white/60">
              {project.domain} • {project.tagline}
            </div>
            <h3 className="mt-1 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-white/70">{project.summary}</p>
          </div>
          <button
            className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/7"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
            <div className="text-xs font-semibold text-white/80">Problem</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{project.problem}</p>
          </div>
          <div className="rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
            <div className="text-xs font-semibold text-white/80">Architecture</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{project.architecture}</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
          <div className="text-xs font-semibold text-white/80">What I built</div>
          <ul className="mt-2 space-y-2 text-sm text-white/70">
            {project.contributions.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </div>

        {project.assets?.length ? (
          <div className="mt-4 rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
            <div className="text-xs font-semibold text-white/80">Files</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.assets.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/7"
                >
                  <FileDown size={16} /> {a.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}

        {project.highlights?.length ? (
          <div className="mt-4 rounded-2xl bg-white/4 p-4 ring-1 ring-white/10">
            <div className="text-xs font-semibold text-white/80">Highlights</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span key={h} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/75 ring-1 ring-white/10">
                  {h}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {project.links?.github ? (
            <a
              className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/7"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
          ) : null}
          {project.links?.live ? (
            <a
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 ring-1 ring-cyan-300/25 hover:bg-cyan-300/15"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              <Globe size={16} /> Live
            </a>
          ) : null}
          <div className="ml-auto text-xs text-white/50">{project.year}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}
