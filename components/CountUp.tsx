'use client'
import { useRef, useEffect, useState } from 'react'

export default function CountUp({ value, prefix='', suffix='', decimals=0, duration=1800 }: {
  value: number; prefix?: string; suffix?: string; decimals?: number; duration?: number
}) {
  // Server-rendered and first-paint markup always shows the real value, so crawlers,
  // no-JS visitors, and slow connections see the actual number immediately. Only after
  // mount, when the element scrolls into view, do we replay a 0-to-value count animation
  // for the visual delight — a progressive enhancement, not a requirement to see the data.
  const [cur, setCur] = useState(value)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true; obs.disconnect()
        setCur(0)
        const t0 = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now-t0)/duration, 1), ease = 1-Math.pow(1-p,3)
          setCur(ease*value)
          if (p < 1) requestAnimationFrame(tick); else setCur(value)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    obs.observe(el); return () => obs.disconnect()
  }, [value, duration])
  const fmt = decimals > 0 ? cur.toFixed(decimals) : Math.round(cur).toString()
  return <span ref={ref}>{prefix}{fmt}{suffix}</span>
}
