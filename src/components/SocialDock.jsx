import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const SOCIALS = [
  {
    name: 'Gmail',
    href: 'mailto:vishalkasapurambodagala@gmail.com',
    icon: '/brands/gmail.svg',
    accent: 'from-orange-500/28 to-amber-400/16',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Vishaltiklu12',
    icon: '/brands/github.svg',
    accent: 'from-slate-300/16 to-slate-100/6',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vishal-k-b-60a7631b2/',
    icon: '/brands/linkedin.svg',
    accent: 'from-sky-500/30 to-blue-400/16',
  },
]

export default function SocialDock() {
  const reduce = useReducedMotion()
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const handleVisibility = () => {
      const hero = document.getElementById('hero')
      const contact = document.getElementById('contact')

      if (!hero) {
        setHidden(false)
        return
      }

      const heroRect = hero.getBoundingClientRect()
      const contactRect = contact?.getBoundingClientRect()

      const heroStillActive = heroRect.bottom > window.innerHeight * 0.72
      const contactVisible =
        contactRect &&
        contactRect.top < window.innerHeight * 0.85 &&
        contactRect.bottom > window.innerHeight * 0.15

      setHidden(heroStillActive || Boolean(contactVisible))
    }

    handleVisibility()
    window.addEventListener('scroll', handleVisibility, { passive: true })
    window.addEventListener('resize', handleVisibility)

    return () => {
      window.removeEventListener('scroll', handleVisibility)
      window.removeEventListener('resize', handleVisibility)
    }
  }, [])

  const lift = reduce
    ? {}
    : {
        y: -6,
        transition: { type: 'spring', stiffness: 380, damping: 22 },
      }

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        hidden
          ? 'pointer-events-none translate-y-6 opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/45 p-2 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
        {SOCIALS.map((s) => (
          <motion.a
            key={s.name}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={s.name}
            className="group relative grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/5"
            whileHover={lift}
            whileFocus={lift}
          >
            <span
              className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 transition duration-200 group-hover:opacity-100`}
            />
            <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/35">
              <img src={s.icon} alt="" className="h-5 w-5" />
            </span>
            <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-lg border border-white/10 bg-black/80 px-2 py-1 text-[11px] text-white/82 opacity-0 backdrop-blur-lg transition group-hover:opacity-100">
              {s.name}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
