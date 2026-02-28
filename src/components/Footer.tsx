export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Vishal K B</div>
          <div className="text-xs text-white/45">
            Built with React + Tailwind + Framer Motion + Three.js • Deployed on Vercel
          </div>
        </div>
      </div>
    </footer>
  )
}
