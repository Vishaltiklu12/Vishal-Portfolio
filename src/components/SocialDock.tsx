import { motion, useReducedMotion } from 'framer-motion'

type SocialAccent = 'linkedin Test' | 'github' | 'gmail'

type SocialItem = {
  name: string
  href: string
  accent: SocialAccent
}

function Icon({ accent }: { accent: SocialAccent }) {
  const cls = 'h-5 w-5'
  if (accent === 'linkedin')
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5ZM.5 23.5h4V7.5h-4v16ZM8.5 7.5h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5v9.5h-4V15c0-2-.1-4.5-2.8-4.5-2.8 0-3.2 2.1-3.2 4.4v8.6h-4v-16Z" />
      </svg>
    )
  if (accent === 'github')
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.7.5.6 5.7.6 12.1c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.4 5.7 18.3.5 12 .5Z" />
      </svg>
    )
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
    </svg>
  )
}

const SOCIALS: SocialItem[] = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vishalkasapurambodagala', accent: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com/Vishaltiklu12', accent: 'github' },
  { name: 'Email', href: 'mailto:vishalkasapurambodagala@gmail.com', accent: 'gmail' },
]

export default function SocialDock() {
  const reduce = useReducedMotion()

  const lift = reduce
    ? {}
    : {
        y: -7,
        rotate: -1,
        transition: { type: 'spring', stiffness: 520, damping: 18 },
      }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur">
        {SOCIALS.map((s) => (
          <motion.a
            key={s.name}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={s.name}
            className="group relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            whileHover={lift}
            whileFocus={lift}
          >
            <span className="absolute -top-9 hidden whitespace-nowrap rounded-lg border border-white/10 bg-black/70 px-2 py-1 text-xs text-white/80 backdrop-blur group-hover:block group-focus:block">
              {s.name}
            </span>

            <span
              className={[
                'pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-200',
                'group-hover:opacity-100 group-focus:opacity-100',
                s.accent === 'linkedin' ? 'bg-blue-500/30' : '',
                s.accent === 'github' ? 'bg-white/20' : '',
                s.accent === 'gmail' ? 'bg-rose-500/25' : '',
              ].join(' ')}
            />

            <span className="relative">
              <Icon accent={s.accent} />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
