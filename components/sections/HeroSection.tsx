'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight
    let animId: number

    const CLUSTERS = [
      { cx: W * 0.72, cy: H * 0.28, color: 'rgba(110, 231, 183,', count: 180 },
      { cx: W * 0.85, cy: H * 0.62, color: 'rgba(245, 200, 66,', count: 140 },
      { cx: W * 0.62, cy: H * 0.70, color: 'rgba(110, 231, 183,', count: 120 },
    ]

    interface Point {
      x: number; y: number
      tx: number; ty: number
      sx: number; sy: number
      vx: number; vy: number
      r: number; a: number
      color: string; clustered: boolean
    }

    const points: Point[] = []
    let settled = 0

    CLUSTERS.forEach(cl => {
      for (let i = 0; i < cl.count; i++) {
        const angle = Math.random() * Math.PI * 2
        const dist = Math.random() * 70 + 10
        const tx = cl.cx + Math.cos(angle) * dist
        const ty = cl.cy + Math.sin(angle) * dist
        points.push({
          x: Math.random() * W,
          y: Math.random() * H,
          tx, ty,
          sx: Math.random() * W,
          sy: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.5,
          a: Math.random(),
          color: cl.color,
          clustered: false,
        })
      }
    })

    for (let i = 0; i < 60; i++) {
      points.push({
        x: Math.random() * W, y: Math.random() * H,
        tx: Math.random() * W * 0.5 + W * 0.55,
        ty: Math.random() * H,
        sx: Math.random() * W, sy: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
        r: 0.8, a: 0.3,
        color: 'rgba(108, 112, 124,', clustered: false,
      })
    }

    const start = performance.now()
    const SETTLE_DURATION = 2500

    function draw(now: number) {
      ctx!.clearRect(0, 0, W, H)
      settled = Math.min(1, (now - start) / SETTLE_DURATION)
      const t = 1 - Math.pow(1 - settled, 3)

      points.forEach(p => {
        if (t < 1) {
          p.x = p.sx + (p.tx - p.sx) * t + Math.sin(now * 0.001 + p.a * 10) * (1 - t) * 12
          p.y = p.sy + (p.ty - p.sy) * t + Math.cos(now * 0.0013 + p.a * 8) * (1 - t) * 10
        } else {
          p.x = p.tx + Math.sin(now * 0.0008 + p.a * 6) * 4
          p.y = p.ty + Math.cos(now * 0.001 + p.a * 5) * 4
        }

        const alpha = t < 1 ? 0.15 + t * 0.45 : 0.5 + Math.sin(now * 0.002 + p.a) * 0.1
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r * (0.5 + t * 0.5), 0, Math.PI * 2)
        ctx!.fillStyle = p.color + alpha + ')'
        ctx!.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    const handleResize = () => {
      W = canvas!.width = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '64px' }}
      aria-label="Hero"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-[640px] py-20">
          <div
            className="font-mono text-[12px] uppercase tracking-[0.12em] mb-6"
            style={{ color: 'var(--text-low)' }}
          >
            MS Business Analytics · BU Questrom &#39;26 · Consumer Insights &amp; Growth Analytics
          </div>

          <h1
            className="font-display mb-6 leading-[1.02] tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              color: 'var(--text-hi)',
              fontWeight: 400,
            }}
          >
            The consumer truth{' '}
            <span style={{ color: 'var(--accent)' }}>your data isn&apos;t showing you.</span>
          </h1>

          <p
            className="font-body text-[18px] leading-[1.6] mb-8 max-w-[52ch]"
            style={{ color: 'var(--text-mid)' }}
          >
            I find the cohort, the churn signal, and the price cliff that aggregate
            dashboards smooth away — then turn it into a decision you can act on.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#book"
              className="font-body font-medium px-6 py-3 rounded-[10px] text-[15px] transition-all duration-150 inline-flex items-center gap-2"
              style={{ background: 'var(--accent)', color: '#050507' }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = '#86efbe'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'var(--accent)'
                ;(e.currentTarget as HTMLElement).style.transform = ''
              }}
            >
              Book 15 min →
            </a>
            <Link
              href="/work"
              className="font-body text-[15px] transition-colors duration-150 inline-flex items-center gap-1"
              style={{ color: 'var(--text-mid)' }}
            >
              See the work ↓
            </Link>
          </div>

          <p className="font-mono text-[12px]" style={{ color: 'var(--text-low)' }}>
            No pitch. If there&apos;s nothing worth fixing, you&apos;ll know in 15 minutes.
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 opacity-30" style={{ background: 'var(--accent)' }} />
        <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: 'var(--text-low)' }}>scroll</span>
      </div>
    </section>
  )
}
