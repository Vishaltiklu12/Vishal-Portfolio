import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section-fade relative mx-auto max-w-6xl px-4 py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-90px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-100/78">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          {eyebrow}
        </div>
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-white md:text-2xl">{title}</h2>
        {subtitle ? <p className="mt-2.5 max-w-3xl text-sm leading-6 text-white/62">{subtitle}</p> : null}
        <div className="mt-5">{children}</div>
      </motion.div>
    </section>
  )
}
