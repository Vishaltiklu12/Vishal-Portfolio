import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeOrb() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 5.2)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    // wire sphere
    const sphereGeo = new THREE.IcosahedronGeometry(1.25, 2)
    const wire = new THREE.WireframeGeometry(sphereGeo)
    const line = new THREE.LineSegments(
      wire,
      new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.55 })
    )
    group.add(line)

    // glow points
    const pts = new THREE.BufferGeometry()
    const count = 280
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(1.28 + Math.random() * 0.06)
      pos[i * 3 + 0] = v.x
      pos[i * 3 + 1] = v.y
      pos[i * 3 + 2] = v.z
    }
    pts.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const points = new THREE.Points(
      pts,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.02, transparent: true, opacity: 0.8 })
    )
    group.add(points)

    // subtle rim light
    const light1 = new THREE.PointLight(0x60a5fa, 1.2, 50)
    light1.position.set(3, 2, 4)
    scene.add(light1)
    const light2 = new THREE.PointLight(0x22d3ee, 1.0, 50)
    light2.position.set(-3, -2, 4)
    scene.add(light2)

    let w = 0
    let h = 0

    const resize = () => {
      const rect = mount.getBoundingClientRect()
      w = rect.width
      h = rect.height
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(mount)
    resize()

    let dragging = false
    let lastX = 0
    let lastY = 0

    const onDown = (e) => {
      dragging = true
      lastX = e.clientX
      lastY = e.clientY
      ;e.target.setPointerCapture?.(e.pointerId)
    }
    const onUp = () => {
      dragging = false
    }
    const onMove = (e) => {
      if (!dragging) return
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      lastX = e.clientX
      lastY = e.clientY
      group.rotation.y += dx * 0.008
      group.rotation.x += dy * 0.008
    }

    renderer.domElement.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointermove', onMove)

    let raf = 0
    const tick = () => {
      if (!prefersReduce && !dragging) {
        group.rotation.y += 0.003
        group.rotation.x += 0.0015
      }
      line.material.opacity = 0.45 + Math.sin(Date.now() * 0.002) * 0.08
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      renderer.domElement.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointermove', onMove)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
      sphereGeo.dispose()
      wire.dispose()
      pts.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" />
}
