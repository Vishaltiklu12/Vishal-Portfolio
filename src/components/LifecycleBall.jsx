import { useMemo, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion'

const DOMAIN_STYLE = {
  'Security & Cloud': {
    ring: 'ring-emerald-300/40',
    border: 'border-emerald-300/25',
    bg: 'bg-emerald-400/10',
    pill: 'bg-emerald-400/15',
    text: 'text-emerald-200',
    glow: 'radial-gradient(circle, rgba(52,211,153,0.30), rgba(16,185,129,0.12), transparent 70%)',
    icon: '🛡️',
  },
  'Machine Learning': {
    ring: 'ring-violet-300/40',
    border: 'border-violet-300/25',
    bg: 'bg-violet-400/10',
    pill: 'bg-violet-400/15',
    text: 'text-violet-200',
    glow: 'radial-gradient(circle, rgba(167,139,250,0.30), rgba(139,92,246,0.12), transparent 70%)',
    icon: '🧠',
  },
  'VR & 3D': {
    ring: 'ring-orange-300/40',
    border: 'border-orange-300/25',
    bg: 'bg-orange-400/10',
    pill: 'bg-orange-400/15',
    text: 'text-orange-200',
    glow: 'radial-gradient(circle, rgba(251,146,60,0.28), rgba(249,115,22,0.12), transparent 70%)',
    icon: '🥽',
  },
  'Web & Full Stack': {
    ring: 'ring-cyan-300/40',
    border: 'border-cyan-300/25',
    bg: 'bg-cyan-400/10',
    pill: 'bg-cyan-400/15',
    text: 'text-cyan-200',
    glow: 'radial-gradient(circle, rgba(34,211,238,0.30), rgba(59,130,246,0.12), transparent 70%)',
    icon: '⚡',
  },
  'Data Analysis': {
    ring: 'ring-fuchsia-300/40',
    border: 'border-fuchsia-300/25',
    bg: 'bg-fuchsia-400/10',
    pill: 'bg-fuchsia-400/15',
    text: 'text-fuchsia-200',
    glow: 'radial-gradient(circle, rgba(232,121,249,0.28), rgba(192,38,211,0.12), transparent 70%)',
    icon: '📊',
  },
}

const FALLBACK_STYLE = DOMAIN_STYLE['Web & Full Stack']

export default function LifecycleBall({ projects = [], onSelect }) {
  const [hoveredId, setHoveredId] = useState(null)
  const paused = Boolean(hoveredId)

  const RADIUS = 150
  const ORBIT_SECONDS = 58
  const orbitAngle = useMotionValue(0)
  const degreesPerMs = 360 / (ORBIT_SECONDS * 1000)

  useAnimationFrame((_, delta) => {
    if (paused) return
    orbitAngle.set((orbitAngle.get() + delta * degreesPerMs) % 360)
  })

  const ring1Rotate = useTransform(orbitAngle, (v) => v * (ORBIT_SECONDS / 32))
  const ring2Rotate = useTransform(orbitAngle, (v) => -v * (ORBIT_SECONDS / 44))
  const ring3Rotate = useTransform(orbitAngle, (v) => v * (ORBIT_SECONDS / 62))
  const counterRotate = useTransform(orbitAngle, (v) => -v)

  const nodes = useMemo(() => {
    const n = projects.length || 1
    return projects.map((p, i) => {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2
      const x = Math.cos(angle) * RADIUS
      const y = Math.sin(angle) * RADIUS
      const depth = (y + RADIUS) / (2 * RADIUS)
      const scale = 0.92 + depth * 0.14
      const opacity = 0.6 + depth * 0.4
      const zIndex = Math.round(depth * 100)
      const key = p.domainGroup || p.stream || p.domain || p.category || 'Web & Full Stack'
      const style = DOMAIN_STYLE[key] || FALLBACK_STYLE
      return { ...p, x, y, scale, opacity, zIndex, style }
    })
  }, [projects])

  const hovered = nodes.find((p) => p.id === hoveredId) || null
  const activeStyle = hovered?.style || FALLBACK_STYLE

  const hoverCardPosition = (node) => {
    if (!node) return ''
    if (node.y < -90) return '-translate-x-1/2 -translate-y-full -mt-6'
    if (node.y > 90) return '-translate-x-1/2 mt-6'
    if (node.x < 0) return '-translate-x-full -translate-y-1/2 -ml-6'
    return 'translate-y-[-50%] ml-6'
  }

  return (
    <div className="relative mx-auto flex w-full max-w-4xl items-center justify-center">
      <div className="relative aspect-square w-full max-w-[420px] mx-auto" onMouseLeave={() => setHoveredId(null)}>
        <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

        <motion.div className="absolute inset-2 rounded-full ring-1 ring-cyan-300/20" style={{ rotate: ring1Rotate }} />
        <motion.div className="absolute inset-10 rounded-full ring-1 ring-white/10" style={{ rotate: ring2Rotate }} />
        <motion.div className="absolute inset-[72px] rounded-full ring-1 ring-white/8" style={{ rotate: ring3Rotate }} />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-cyan-300/12" />

        <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
          <div className="glass neon grid h-32 w-32 place-items-center rounded-full border border-white/10 bg-white/5 ring-1 ring-cyan-300/20 backdrop-blur-md">
            <div className="text-center">
              <div className="text-xs tracking-[0.22em] text-white/48">SYSTEMS MAP</div>
              <div className="mt-1 text-base font-semibold text-white/92">Projects</div>
              <div className="mt-1 text-[11px] text-white/55">{paused ? 'paused on focus' : 'hover a node'}</div>
            </div>
          </div>
        </div>

        {hovered && (
          <motion.div
            key={hovered.id}
            initial={{ opacity: 0, scale: 0.97, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-[200]"
            style={{ x: hovered.x, y: hovered.y }}
          >
            <div className={`relative w-[340px] max-w-[84vw] ${hoverCardPosition(hovered)}`}>
              <div className={`rounded-2xl border ${activeStyle.border} bg-black/62 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl`}>
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 grid h-10 w-10 place-items-center rounded-full ${activeStyle.bg} ring-2 ${activeStyle.ring}`}>
                    <span className="text-base">{activeStyle.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] tracking-wide text-white/45">Hovered project</div>
                    <div className="mt-1 text-sm font-semibold leading-snug text-white/95">{hovered.title}</div>
                    {hovered.tagline ? <div className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/60">{hovered.tagline}</div> : null}
                  </div>
                  <div className={`shrink-0 rounded-full border ${activeStyle.border} ${activeStyle.pill} px-2.5 py-1 text-[10px] font-medium ${activeStyle.text}`}>
                    {hovered.domainGroup || hovered.domain || hovered.category || 'Project'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div className="absolute left-1/2 top-1/2" style={{ rotate: orbitAngle }}>
          {nodes.map((p) => (
            <motion.div
              key={p.id}
              className="absolute left-0 top-0"
              style={{ x: p.x, y: p.y, zIndex: p.zIndex, opacity: p.opacity }}
            >
              <motion.button
                type="button"
                onMouseEnter={() => setHoveredId(p.id)}
                onFocus={() => setHoveredId(p.id)}
                onClick={() => onSelect?.(p)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                aria-label={`Open ${p.title}`}
                className="group relative"
                style={{ x: '-50%', y: '-50%', rotate: counterRotate, scale: p.scale }}
              >
                <span className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-2xl transition duration-200 group-hover:opacity-100" style={{ background: p.style.glow }} />
                <div className={`relative grid h-14 w-14 place-items-center rounded-full border border-white/10 ${p.style.bg} backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.18)] transition group-hover:border-white/22`}>
                  <div className={`grid h-10 w-10 place-items-center rounded-full bg-black/35 ring-2 ${p.style.ring}`}>
                    <span className="text-base leading-none">{p.style.icon}</span>
                  </div>
                  {hoveredId === p.id ? (
                    <>
                      <span className={`absolute inset-0 rounded-full ring-2 ${p.style.ring}`} />
                      <span className="absolute -inset-2 rounded-full blur-xl" style={{ background: p.style.glow, opacity: 0.75 }} />
                    </>
                  ) : null}
                </div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
