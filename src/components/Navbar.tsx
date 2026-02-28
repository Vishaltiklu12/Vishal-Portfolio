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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full ${scrolled ? 'bg-black/35 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.55)]" />
          <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">Vishal K B</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition">
              {l.label}
            </a>
          ))}
          <a
            className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/8 hover:text-white transition"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/55 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm text-white/75 hover:text-white">
                {l.label}
              </a>
            ))}
            <a
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2 text-sm text-white/85 ring-1 ring-white/10"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
