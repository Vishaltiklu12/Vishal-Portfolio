import { motion } from 'framer-motion'

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">{eyebrow}</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  )
}
