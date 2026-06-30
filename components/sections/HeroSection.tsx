'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      const rect = glowRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      glowRef.current.style.setProperty('--mx', `${x}%`)
      glowRef.current.style.setProperty('--my', `${y}%`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={glowRef}
      className="relative min-h-screen flex flex-col justify-center pt-16 px-6"
      style={{
        background: 'radial-gradient(ellipse 60% 50% at var(--mx, 30%) var(--my, 40%), rgba(110,231,183,0.04) 0%, transparent 60%)',
      }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ background: 'var(--accent)' }} />
          <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Open to full-time · BU MSBA &apos;26 · OPT authorized
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-semibold leading-[1.05] tracking-[-0.03em] mb-6" style={{ fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--text-hi)' }}>
          I find the signal your<br />
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>dashboard averages away.</span>
        </h1>

        {/* Sub-headline */}
        <p className="font-body leading-relaxed mb-10 max-w-2xl" style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text-mid)' }}>
          The cohort nobody flagged. The price cliff hiding in your fare class data.
          The retention signal masked by your blended NPS.
          I pull those threads — and turn them into decisions you can act on.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#book"
            className="font-body font-medium px-6 py-3 rounded-[12px] transition-all duration-200"
            style={{ background: 'var(--accent)', color: '#050507', fontSize: '15px' }}
          >
            Book a free 15 min read →
          </a>
          <a
            href="/work"
            className="font-body px-6 py-3 rounded-[12px] border transition-all duration-200"
            style={{ borderColor: 'var(--line)', color: 'var(--text-mid)', fontSize: '15px' }}
          >
            See 13 projects
          </a>
        </div>

        {/* Proof strip */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { num: '3.2M', label: 'Starbucks loyalty records analyzed' },
            { num: '13', label: 'live analyses across real datasets' },
            { num: '14%', label: 'retention lift surfaced from masked cohort' },
            { num: 'BU', label: "MSBA '26 · Questrom School of Business" },
          ].map(({ num, label }) => (
            <div key={num} className="flex items-baseline gap-2">
              <span className="font-display font-semibold text-[22px]" style={{ color: 'var(--accent)' }}>{num}</span>
              <span className="font-body text-[13px]" style={{ color: 'var(--text-low)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-low)' }}>scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--text-low), transparent)' }} />
      </div>
    </section>
  )
}
