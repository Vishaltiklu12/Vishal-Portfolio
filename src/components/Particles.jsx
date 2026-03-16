import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    /** @type {{x:number,y:number,vx:number,vy:number,r:number,a:number}[]} */
    let dots = []
    let raf = 0

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round((w * h) / 18000)
      dots = Array.from({ length: prefersReduce ? Math.min(30, count) : count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 1 + Math.random() * 1.4,
        a: 0.18 + Math.random() * 0.4,
      }))
    }

    const step = () => {
      ctx.clearRect(0, 0, w, h)

      // glow haze
      const g1 = ctx.createRadialGradient(w * 0.2, h * 0.2, 0, w * 0.2, h * 0.2, Math.max(w, h) * 0.65)
      g1.addColorStop(0, 'rgba(34,211,238,0.10)')
      g1.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, w, h)

      for (const p of dots) {
        if (!prefersReduce) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < -10) p.x = w + 10
          if (p.x > w + 10) p.x = -10
          if (p.y < -10) p.y = h + 10
          if (p.y > h + 10) p.y = -10
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.a})`
        ctx.fill()
      }

      // connections
      const maxDist = 120
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i]
          const b = dots[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.14
            ctx.strokeStyle = `rgba(34,211,238,${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(step)
    }

    resize()
    step()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
