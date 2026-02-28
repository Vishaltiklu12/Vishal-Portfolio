import { motion } from 'framer-motion'
import { EXPERIENCE } from '../data/experience'

export default function Experience() {
  return (
    <div className="grid gap-4">
      {EXPERIENCE.map((item, idx) => (
        <motion.article
          key={`${item.company}-${item.role}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, delay: idx * 0.05 }}
          className="glass rounded-2xl p-5 sm:p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white/90">
                {item.role}{' '}
                <span className="text-white/60">— {item.company}</span>
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/60">
                {item.location ? `${item.location} • ` : ''}
                {item.start} – {item.end}
              </p>
            </div>

            {item.tech?.length ? (
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/75 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm sm:text-base text-white/75">
            {item.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  )
}
