import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const total = document.body.scrollHeight - window.innerHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      setProgress(Math.min(100, Math.max(0, pct)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full ${scrolled ? 'border-b border-white/10 bg-black/42 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-orange-300 via-white/85 to-slate-300" style={{ width: `${progress}%` }} />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <a href="#" className="group inline-flex min-w-0 items-center gap-2 pr-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-xs font-semibold text-white shadow-glow">
            VK
          </span>
          <div className="min-w-0">
            <div className="truncate text-[12px] font-semibold tracking-wide text-white/92">Vishal K B</div>
            <div className="truncate text-[8px] uppercase tracking-[0.2em] text-white/42">Full-Stack Engineer</div>
          </div>
        </a>

        <nav className="hidden items-center gap-4 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[12px] text-white/70 transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a
            className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[12px] text-white/85 transition hover:-translate-y-0.5 hover:bg-white/8"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </nav>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/70 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm text-white/78 hover:text-white">
                {l.label}
              </a>
            ))}
            <a
              className="mt-1 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
