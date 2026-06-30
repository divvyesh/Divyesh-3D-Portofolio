'use client'
import { useRef, useEffect, useState, ReactNode, CSSProperties } from 'react'

export default function Reveal({ children, delay=0, y=20, style }: {
  children: ReactNode; delay?: number; y?: number; style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect() }
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : `translateY(${y}px)`,
      transition: `opacity 650ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 650ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      willChange: 'opacity, transform',
      ...style,
    }}>{children}</div>
  )
}
