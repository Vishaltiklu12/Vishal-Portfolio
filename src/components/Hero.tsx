import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Particles from './Particles'
import ThreeOrb from './ThreeOrb'

export default function Hero({ onPrimary }: { onPrimary: () => void }) {
  return (
    <section className="relative min-h-[92vh] pt-20">
      <Particles />
      <div className="scanlines absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Engineering • Interactive Systems • Security
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Vishal <span className="text-white/70">K B</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Full Stack Engineer | Interactive Systems | Security Architect
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            I ship scalable web systems, immersive digital experiences, and secure architectures — with a bias for clean
            interfaces and measurable performance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={onPrimary}
              className="neon rounded-2xl bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-300/25 hover:bg-cyan-300/15 transition"
            >
              View Projects
            </button>
            <a
              className="rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 ring-1 ring-white/10 hover:bg-white/7 transition"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
            <a
              className="rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 ring-1 ring-white/10 hover:bg-white/7 transition"
              href="https://github.com/Vishaltiklu12"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-white/70">
            <a className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/7 transition" href="mailto:vishalkasapurambodagala@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
            <a className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/7 transition" href="https://github.com/Vishaltiklu12" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/7 transition" href="https://linkedin.com/in/vishalkasapurambodagala" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="glass neon relative overflow-hidden rounded-3xl p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-400/5 to-transparent" />
            <div className="relative aspect-[4/3] w-full">
              <ThreeOrb />
            </div>
            <div className="relative mt-3 flex items-center justify-between text-xs text-white/60">
              <span>Interactive orb (Three.js)</span>
              <span className="text-cyan-200/80">drag • hover</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70 ring-1 ring-white/10 hover:bg-white/7 transition"
        >
          <ArrowDown size={14} />
          Scroll
        </a>
      </div>
    </section>
  )
}
