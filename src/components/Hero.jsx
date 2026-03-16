import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import Particles from './Particles'
import ThreeOrb from './ThreeOrb'

const proofPoints = [
  { label: 'Reporting latency', value: '25%', note: 'lowered through cleaner API orchestration and caching.' },
  { label: 'Deployments', value: '40%', note: 'faster delivery through Kubernetes and GitHub Actions.' },
  { label: 'Portal speed', value: '21%', note: 'improved through validation, state discipline, and backend coordination.' },
]

const buildPattern = [
  'React product surfaces',
  'API contracts + validation',
  'Backend services + data boundaries',
  'LLM-assisted workflow support',
]

function BrandLink({ href, label, icon, external = true }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={label}
      className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2 text-[10px] text-white/82 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/7"
    >
      <span className="grid h-6.5 w-6.5 place-items-center rounded-xl border border-white/10 bg-black/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </a>
  )
}

export default function Hero({ onPrimary }) {
  return (
    <section id="hero" className="relative min-h-[69vh] overflow-hidden pt-18 section-fade md:min-h-[72vh] md:pt-20">
      <Particles />
      <div className="scanlines absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_36%),radial-gradient(circle_at_70%_20%,rgba(96,165,250,0.08),transparent_32%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-5 px-4 py-5 md:grid-cols-[1fr_0.96fr] md:py-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/18 bg-orange-300/8 px-3 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-orange-100/85 shadow-glow">
            <Sparkles size={11} className="text-orange-200" />
            Full-Stack Engineer
          </div>

          <div className="mt-3 flex items-start gap-3">
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, -2, 0, 2, 0] }}
              transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative shrink-0"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
                className="absolute -inset-2 rounded-[28px] border border-orange-300/16"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
                className="absolute -inset-4 rounded-[34px] border border-slate-200/12"
              />
              <div className="absolute inset-0 rounded-[24px] bg-orange-300/12 blur-xl" />
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <img
                  src="/assets/profile.png"
                  alt="Vishal K B"
                  className="relative h-16 w-16 rounded-[22px] border border-white/12 object-cover shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:h-20 sm:w-20"
                  loading="eager"
                />
              </motion.div>
            </motion.div>

            <div className="min-w-0">
              <p className="text-base font-semibold tracking-tight text-white/92 sm:text-lg">Vishal Kasapurambodagala</p>
              <h1 className="hero-gradient mt-1 max-w-2xl text-[1.25rem] font-semibold leading-[1.15] tracking-tight sm:text-[1.45rem] md:text-[1.6rem]">
                Full-stack engineer shipping product interfaces, backend services, AI-assisted workflows, and delivery systems for real usage.
              </h1>
            </div>
          </div>

          <p className="metric-emphasis mt-3 max-w-2xl text-sm leading-6 text-white/67 md:text-[15px]">
            I work across <strong>React product surfaces</strong>, <strong>backend services</strong>, <strong>security-aware delivery</strong>, and <strong>LLM-enabled tooling</strong> with one goal every time: make the product faster, more reliable, and easier to operate.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 + idx * 0.07 }}
                className="glass rounded-2xl p-3"
              >
                <div className="text-[9px] uppercase tracking-[0.22em] text-white/45">{item.label}</div>
                <div className="mt-1 text-lg font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-[12px] leading-5 text-white/60">{item.note}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              onClick={onPrimary}
              className="neon inline-flex items-center gap-2 rounded-2xl bg-orange-300/12 px-4 py-2.5 text-sm font-semibold text-orange-100 ring-1 ring-orange-300/28 transition hover:-translate-y-0.5 hover:bg-orange-300/16"
            >
              View Projects
            </button>
            <a
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/84 transition hover:-translate-y-0.5 hover:bg-white/7"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <BrandLink
              href="mailto:vishalkasapurambodagala@gmail.com"
              label="Gmail"
              external={false}
              icon={<img src="/brands/gmail.svg" alt="" className="h-4 w-4" />}
            />
            <BrandLink
              href="https://github.com/Vishaltiklu12"
              label="GitHub"
              icon={<img src="/brands/github.svg" alt="" className="h-4 w-4" />}
            />
            <BrandLink
              href="https://www.linkedin.com/in/vishal-k-b-60a7631b2/"
              label="LinkedIn"
              icon={<img src="/brands/linkedin.svg" alt="" className="h-4 w-4" />}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.08, ease: 'easeOut' }}
          className="relative"
        >
          <div className="glass neon relative overflow-hidden rounded-[24px] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100/6 via-orange-400/8 to-transparent" />
            <div className="relative grid gap-3 md:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/45">
                  <span>System layers</span>
                  <span className="text-orange-200/75">Interactive</span>
                </div>
                <div className="relative mt-3 aspect-[1/1] w-full overflow-hidden rounded-[20px] border border-white/10 bg-black/25">
                  <ThreeOrb />
                </div>
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/82">
                  <div className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-orange-300/12 text-[11px] font-semibold text-orange-100 ring-1 ring-orange-300/25">
                      
                    </span>
                    <span className="font-semibold">Play with the Globe</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">Build pattern</div>
                  <div className="mt-3 space-y-2.5">
                    {buildPattern.map((item, idx) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/76">
                        <div className="flex items-center gap-3">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-orange-300/12 text-[11px] font-semibold text-orange-100 ring-1 ring-orange-300/25">
                            0{idx + 1}
                          </span>
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-3 rounded-3xl border border-white/10 bg-black/20 p-3">
              <div className="grid gap-3 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">AI / LLM</div>
                  <div className="mt-2 text-sm font-semibold text-white">LLM support where debugging, issue triage, and workflow analysis were slowing delivery.</div>
                </div>
                <p className="text-[12px] leading-5 text-white/62">
                  Applied AI support to repetitive engineering handoff work, analysis loops, and documentation review with human judgment kept in the loop for production-facing decisions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
  className="absolute inset-x-0 bottom-0 flex justify-center"
  animate={{ y: [0, 6, 0] }}
  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
>
  <a
    href="#about"
    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/28 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur-xl transition hover:bg-black/40"
  >
    <ArrowDown size={12} className="animate-pulse" />
    Scroll for engineering depth
  </a>
</motion.div>
    </section>
  )
}
