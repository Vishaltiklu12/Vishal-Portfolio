import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
} from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import Footer from './components/Footer'
import Experience from './components/Experience'
import LifecycleBall from './components/LifecycleBall'
import SocialDock from './components/SocialDock'
import { PROJECTS } from './data/projects'

const aboutBlocks = [
  {
    title: 'Frontend',
    body: 'React interfaces, rendering discipline, accessibility, and UX decisions shaped around product clarity and reliable behavior under change.',
    icon: Code2,
  },
  {
    title: 'Backend',
    body: 'API contracts, validation, service boundaries, and data flow designed so frontend and backend decisions stay aligned in production.',
    icon: Layers3,
  },
  {
    title: 'Infrastructure',
    body: 'CI/CD, cloud services, observability, and delivery loops tuned to make releases safer, faster, and easier to recover when something shifts.',
    icon: CloudCog,
  },
  {
    title: 'Security',
    body: 'Authentication, incident-response thinking, privacy controls, and diagnostics applied where real product workflows carry operational risk.',
    icon: ShieldCheck,
  },
  {
    title: 'LLM / AI',
    body: 'Used where it shortens repetitive analysis, improves internal engineering support, and accelerates delivery without removing human review.',
    icon: BrainCircuit,
  },
]

const stackGroups = [
  {
    title: 'Languages + Frontend',
    icon: Code2,
    items: ['Java', 'Python', 'Go', 'JavaScript', 'TypeScript', 'C++', 'React', 'Redux', 'Angular', 'HTML5', 'CSS3', 'Tailwind', 'UX/UI'],
  },
  {
    title: 'Backend + APIs',
    icon: Layers3,
    items: ['Node.js', 'Express', 'Java services', 'Python APIs', 'REST APIs', 'OAuth2', 'JWT', 'Microservices'],
  },
  {
    title: 'Cloud + Delivery',
    icon: CloudCog,
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Unix tools', 'System Design'],
  },
  {
    title: 'Data + Platforms',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'SQL', 'PL/SQL', 'DynamoDB', 'SAP', 'ServiceNow ITSM', 'Jira'],
  },
  {
    title: 'Security + Monitoring',
    icon: ShieldCheck,
    items: ['Wireshark', 'Snort', 'Autopsy', 'Incident Response', 'Logging', 'Diagnostics', 'Data Integrity', 'HIPAA', 'CCPA'],
  },
  {
    title: 'AI + Immersive',
    icon: BrainCircuit,
    items: ['TensorFlow','OpenAI APIs', 'PyTorch', 'Claude AI', 'LLM integrations', 'Workflow automation', 'Figma', 'Design Systems', 'Unity', 'VR', 'Accessibility'],
  },
]

const projectOrder = [
  'pet-store',
  'security-incident-mgmt',
  'cloud-mobile-security',
  'privacy-controls',
  'rec-room-vr',
  'vector-presentation',
  'hf-ml',
  'sports-leagues',
]

export default function App() {
  const [active, setActive] = useState(null)
  const [formState, setFormState] = useState({ status: 'idle', message: '' })

  const orderedProjects = useMemo(() => {
    const map = new Map(PROJECTS.map((p) => [p.id, p]))
    return projectOrder.map((id) => map.get(id)).filter(Boolean)
  }, [])

  const visibleProjects = orderedProjects
  const topRightProjects = visibleProjects.slice(0, 3)
  const lowerLeftProjects = visibleProjects.slice(3, 5)
  const lowerRightProjects = visibleProjects.slice(5, 8)

  const onSelectProject = (p) => {
    setActive(p)
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const first = String(formData.get('firstName') || '').trim()
    const last = String(formData.get('lastName') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const contact = String(formData.get('contact') || '').trim()
    const github = String(formData.get('github') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!email && !contact) {
      setFormState({ status: 'error', message: 'Add at least one contact method: email or phone.' })
      return
    }

    setFormState({ status: 'loading', message: 'Sending...' })

    try {
      const response = await fetch('https://formsubmit.co/ajax/7fdb5397cbbcbaede7409d5075aa4d2c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Portfolio inquiry from ${first} ${last}`.trim(),
          _template: 'table',
          _captcha: 'false',
          firstName: first,
          lastName: last,
          email,
          contact,
          github,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setFormState({ status: 'success', message: 'Message sent. I should receive it by email.' })
      form.reset()
    } catch {
      setFormState({ status: 'error', message: 'Submission did not complete. Please retry once or use the email / GitHub links.' })
    }
  }

  return (
    <div className="min-h-screen text-white/90">
      <Navbar />
      <SocialDock />

      <main>
        <Hero onPrimary={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} />

        <Section
          id="about"
          eyebrow="About"
          title="Full-stack work across frontend systems, backend services, infrastructure, security, and AI-enabled workflows."
          subtitle="Product-facing interfaces, backend reasoning, delivery systems, and AI-assisted tooling are treated as connected parts of one engineering system — not separate disciplines."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {aboutBlocks.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="glass rounded-[22px] p-3.5">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 shadow-glow">
                    <Icon size={16} />
                  </div>
                  <div className="mt-2.5 text-sm font-semibold text-white">{item.title}</div>
                  <p className="mt-2 text-[13px] leading-5 text-white/65">{item.body}</p>
                </div>
              )
            })}
          </div>
        </Section>

        <Section
          id="stack"
          eyebrow="Core stack"
          title="Core stack organized by how the work actually gets done."
          subtitle="Skills from production systems, project builds, security work, analytics, and immersive builds — grouped to read fast and use the full space without wasted blocks."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {stackGroups.map((group) => {
              const Icon = group.icon
              return (
                <div key={group.title} className="glass rounded-[22px] p-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 shadow-glow">
                      <Icon size={16} />
                    </div>
                    <div className="text-sm font-semibold text-white">{group.title}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/74">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Experience organized for fast recruiter reading."
          subtitle="The strongest role gets focus. The rest stays visible, compact, and metric-led without turning the page into one long resume dump."
        >
          <Experience />
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Projects organized around the systems map and project cards."
          subtitle="Lifecycle / Systems map. Interactive navigation by project domain. Hover pauses the orbit, the project card appears with the hovered node, and click opens the full project breakdown."
        >
          <div className="mt-6 grid gap-4 lg:grid-cols-5 lg:items-start">
            <div className="glass rounded-[24px] p-4 lg:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/42">Lifecycle / Systems map</div>
              <div className="mt-2 text-base font-semibold text-white">Interactive navigation by project domain</div>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/58">
                Hover pauses the orbit. The project card appears with the hovered node, and click opens the full project breakdown.
              </p>
              <div className="mt-3">
                <LifecycleBall projects={visibleProjects} onSelect={onSelectProject} />
              </div>
            </div>

            {topRightProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setActive} />
            ))}

            {lowerLeftProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setActive} />
            ))}

            {lowerRightProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setActive} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Get in touch."
          subtitle="Open to full-stack and software engineering roles where product execution, backend reasoning, and AI-aware tooling all matter."
        >
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="glass rounded-[22px] p-4" onSubmit={handleContactSubmit}>
              <div className="text-sm font-semibold text-white">Get in touch</div>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Send a direct message from the site. At least one contact method — email or phone — is required.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input name="firstName" placeholder="First name" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none" />
                <input name="lastName" placeholder="Last name" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none" />
                <input name="contact" placeholder="Phone / contact" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none" />
                <input name="email" type="email" placeholder="Email" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none" />
                <input name="github" placeholder="GitHub profile" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none sm:col-span-2" />
              </div>
              <textarea name="message" required placeholder="Tell me about the role, product, or problem." className="mt-3 min-h-[110px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none" />
              <div className="mt-3 text-xs text-white/45">Form notifications are sent to my email. If your browser blocks the request, use the email card on the right.</div>
              {formState.message ? (
                <div className={`mt-3 rounded-2xl border px-3 py-2 text-sm ${formState.status === 'success' ? 'border-emerald-300/20 bg-emerald-400/8 text-emerald-100' : formState.status === 'error' ? 'border-rose-300/20 bg-rose-400/8 text-rose-100' : 'border-white/10 bg-white/5 text-white/70'}`}>
                  {formState.message}
                </div>
              ) : null}
              <button type="submit" disabled={formState.status === 'loading'} className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-sky-300/18 bg-sky-300/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-300/14 disabled:opacity-60">
                {formState.status === 'loading' ? 'Sending...' : 'Send message'}
              </button>
            </form>

            <div className="grid gap-3">
              <a className="glass neon rounded-[22px] p-4 transition hover:-translate-y-1 hover:bg-white/6" href="mailto:vishalkasapurambodagala@gmail.com">
                <div className="text-sm text-white/60">Email</div>
                <div className="mt-1 font-semibold">vishalkasapurambodagala@gmail.com</div>
              </a>
              <a className="glass neon rounded-[22px] p-4 transition hover:-translate-y-1 hover:bg-white/6" href="/resume.pdf" target="_blank" rel="noreferrer">
                <div className="text-sm text-white/60">Resume</div>
                <div className="mt-1 font-semibold">Download CV</div>
              </a>
              <a className="glass neon rounded-[22px] p-4 transition hover:-translate-y-1 hover:bg-white/6" href="https://www.linkedin.com/in/vishal-k-b-60a7631b2/" target="_blank" rel="noreferrer">
                <div className="text-sm text-white/60">LinkedIn</div>
                <div className="mt-1 font-semibold">/in/vishal-k-b-60a7631b2</div>
              </a>
              <a className="glass neon rounded-[22px] p-4 transition hover:-translate-y-1 hover:bg-white/6" href="https://github.com/Vishaltiklu12" target="_blank" rel="noreferrer">
                <div className="text-sm text-white/60">GitHub</div>
                <div className="mt-1 font-semibold">github.com/Vishaltiklu12</div>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
      <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </div>
  )
}
