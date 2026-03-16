export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-medium text-white/86">Vishal K B</div>
            <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/42">Full-Stack Engineer • Product systems • Backend services • AI-enabled tooling</div>
          </div>
          <div className="text-xs text-white/45">
            Built with React, JavaScript, UI/UX thinking, and a systems-first layout focused on engineering clarity.
          </div>
        </div>
      </div>
    </footer>
  )
}
