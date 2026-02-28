import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectGrid from './components/ProjectGrid'
import ProjectModal from './components/ProjectModal'
import Footer from './components/Footer'
import SocialDock from './components/SocialDock'
import Experience from './components/Experience'   
import { PROJECTS } from './data/projects'
import type { Project } from './data/types'

export default function App() {
  const [active, setActive] = useState<Project | null>(null)

  const grouped = useMemo(() => {
    const by: Record<string, Project[]> = {}
    for (const p of PROJECTS) {
      const key = p.domain
      if (!by[key]) by[key] = []
      by[key].push(p)
    }
    return by
  }, [])

  return (
    <div className="min-h-screen text-white/90">
      <Navbar />

      <main>
        <Hero onPrimary={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} />

        <Section id="about" eyebrow="About" title="Engineering across dimensions" subtitle="A focused story, even with a broad skillset.">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glass rounded-2xl p-5">
              <div className="text-sm text-white/60">Now</div>
              <div className="mt-1 text-lg font-semibold">Full‑stack shipping mindset</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                I build production-grade web systems with clean API boundaries, measurable performance improvements, and
                solid developer ergonomics.
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-sm text-white/60">Also</div>
              <div className="mt-1 text-lg font-semibold">Interactive systems</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Unity/VR and animation work taught me timing, interaction design, and how small UX details change perceived
                performance.
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-sm text-white/60">Always</div>
              <div className="mt-1 text-lg font-semibold">Systems + security thinking</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Incident response planning and cloud architecture work sharpened my ability to reason about failure modes,
                blast radius, and operational readiness.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="glass rounded-2xl p-5">
              <div className="text-sm font-semibold text-white/80">Experience snapshot</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Mphasis — Associate Software Engineer (HP Printers & Servers): backend services, APIs, testing, ops.</li>
                <li>• Eduflex — Software Engineer II: UI/UX revamp + web modules, SQL/PLSQL enhancements, perf tuning.</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-sm font-semibold text-white/80">Capabilities</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'React',
                  'Go',
                  'Node.js',
                  'REST APIs',
                  'SQL',
                  'Docker',
                  'AWS',
                  'Unity',
                  'Blender',
                  'Incident Response',
                  'Wireshark/Snort',
                ].map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/75 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Where I’ve shipped" subtitle="Production work, collaboration, and outcomes.">
          <Experience />
        </Section>

        <Section id="projects" eyebrow="Work" title="Selected projects" subtitle="Click a card for the technical breakdown.">
          <div className="space-y-10">
            {Object.entries(grouped).map(([domain, items]) => (
              <div key={domain}>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white/90">{domain}</h3>
                  <div className="h-px flex-1 bg-white/10 ml-4" />
                </div>
                <ProjectGrid projects={items} onOpen={setActive} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something real" subtitle="Email is fastest. GitHub shows the receipts.">
          <div className="grid gap-4 md:grid-cols-3">
            <a className="glass neon rounded-2xl p-5 hover:bg-white/6 transition" href="mailto:vishalkasapurambodagala@gmail.com">
              <div className="text-sm text-white/60">Email</div>
              <div className="mt-1 font-semibold">vishalkasapurambodagala@gmail.com</div>
            </a>
            <a className="glass neon rounded-2xl p-5 hover:bg-white/6 transition" href="https://github.com/Vishaltiklu12" target="_blank" rel="noreferrer">
              <div className="text-sm text-white/60">GitHub</div>
              <div className="mt-1 font-semibold">github.com/Vishaltiklu12</div>
            </a>
            <a className="glass neon rounded-2xl p-5 hover:bg-white/6 transition" href="https://www.linkedin.com/in/vishal-k-b-60a7631b2/" target="_blank" rel="noreferrer">
              <div className="text-sm text-white/60">LinkedIn</div>
              <div className="mt-1 font-semibold">linkedin.com/in/vishalkasapurambodagala</div>
            </a>
          </div>
        </Section>
      </main>

      <Footer />

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
  )
}
