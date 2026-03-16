import { motion } from 'framer-motion'
import { EXPERIENCE } from '../data/experience'

export default function Experience() {
  const [featured, ...rest] = EXPERIENCE
  const mainRoles = rest.slice(0, 3)
  const internships = rest.slice(3)

  return (
    <div className="grid gap-4">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.35 }}
        className="glass rounded-[24px] p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/42">Featured role</div>
            <h3 className="mt-2 text-lg font-semibold text-white">{featured.role}</h3>
            <div className="mt-1 text-sm text-white/68">{featured.company} · {featured.location}</div>
          </div>
          <span className="rounded-full border border-orange-300/18 bg-orange-300/8 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-orange-100/78">
            {featured.start} — {featured.end}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-white/62">{featured.summary}</p>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {featured.highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/22 p-3.5 text-sm leading-6 text-white/72">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {featured.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/74">
              {tech}
            </span>
          ))}
        </div>
      </motion.article>

      <div className="grid gap-4 md:grid-cols-3">
  {mainRoles.map((item, idx) => (
    <motion.article
      key={`${item.company}-${item.role}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.3, delay: idx * 0.05 }}
      className="glass rounded-[22px] p-4"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">{item.role}</h3>
          <div className="mt-1 text-xs text-white/66">{item.company}</div>
        </div>

        <div className="text-right text-[10px] uppercase tracking-[0.18em] text-white/45">
          <div>{item.start}</div>
          <div className="mt-1">{item.end}</div>
        </div>
      </div>

      <p className="mt-3 text-[12px] leading-5 text-white/60">
        {item.summary}
      </p>

      <div className="mt-3 grid gap-2">
        {item.highlights.map((point) => (
          <div
            key={point}
            className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-[12px] text-white/70"
          >
            {point}
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  ))}
</div>






      

      <div>
        <div className="mb-3 text-[10px] uppercase tracking-[0.22em] text-white/42">Internships / early learning</div>
        <div className="grid gap-3 md:grid-cols-2">
          {internships.map((item, idx) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="glass rounded-[20px] p-3.5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.role}</h3>
                  <div className="mt-1 text-xs text-white/66">{item.company}</div>
                </div>
                <div className="text-right text-[10px] uppercase tracking-[0.18em] text-white/45">
                  <div>{item.start}</div>
                  <div className="mt-1">{item.end}</div>
                </div>
              </div>
              <p className="mt-2 text-[12px] leading-5 text-white/58">{item.summary}</p>
              <div className="mt-3 grid gap-2">
                {item.highlights.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-black/18 px-3 py-2 text-[12px] leading-5 text-white/72">
                    {point}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
