'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const STAT_TILES: { top: string; sub?: string; bottom: string }[] = [
  { top: 'BU MSBA', bottom: 'CLASS OF 2026' },
  { top: '5 Yrs', sub: 'NEW YORK', bottom: 'EXPERIENCE' },
  { top: '3+ Yrs', bottom: 'WORK AUTH' },
]

export default function HeroSection() {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section
      aria-label="Hero"
      style={{ minHeight: '88vh', paddingTop: '128px', paddingBottom: '96px', display: 'flex', alignItems: 'center' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '64px', alignItems: 'center' }} className="hero-grid">
          {/* LEFT COLUMN */}
          <div>
            <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)', marginBottom: '24px' }}>
              Consumer Insights and Growth Analytics. BU Questrom MSBA &apos;26
            </p>
            <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(44px, 6.5vw, 72px)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--text-hi)', fontWeight: 500, marginBottom: '24px' }}>
              The customer truth your data is not showing you.
            </h1>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-mid)', maxWidth: '52ch', marginBottom: '20px' }}>
              I help teams find the cohort, the churn signal, and the price cliff that dashboards average away. Then I turn it into a decision you can act on.
            </p>
            <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '15px', color: 'var(--text-low)', marginBottom: '32px' }}>
              5 years experience. 10+ projects shipped. British Airways, Starbucks, Newdia.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '14px' }}>
              <a href="#book"
                style={{ height: '52px', padding: '0 28px', borderRadius: '12px', background: 'var(--grad)', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'filter 150ms ease-out, transform 150ms ease-out' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter='brightness(1.08)'; (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter=''; (e.currentTarget as HTMLElement).style.transform=''; }}
              >
                Book a free 15 min call <span aria-hidden="true">&#8594;</span>
              </a>
              <a href="#work"
                style={{ height: '52px', padding: '0 24px', borderRadius: '12px', background: 'transparent', border: '1px solid rgba(15,17,23,0.18)', color: 'var(--text-hi)', fontFamily: 'var(--font-inter)', fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'border-color 150ms ease-out' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--accent)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(15,17,23,0.18)'; }}
              >
                See the work
              </a>
            </div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: 'var(--text-low)' }}>
              No pitch. If there is nothing worth fixing, you will know in 15 minutes.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }} className="hero-photo-col">
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px', aspectRatio: '1' }}>
              <div
                style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'conic-gradient(from 0deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff, #a855f7, #ec4899, #ff6b6b)', animation: reduced ? 'none' : 'ringRotate 40s linear infinite' }}
                aria-hidden="true"
              />
              <div style={{ position: 'absolute', inset: '6px', borderRadius: '50%', background: 'var(--bg-0)' }} aria-hidden="true" />
              <div style={{ position: 'absolute', inset: '16px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image src="/images/profile.jpg" alt="Divyesh Annavarapu" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} priority />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', width: '100%', maxWidth: '380px' }}>
              {STAT_TILES.map(tile => (
                <div key={tile.top} style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', borderRadius: '14px', padding: '20px 12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: '20px', color: 'var(--accent)', fontWeight: 500, lineHeight: 1.1 }}>
                    {tile.top}
                  </div>
                  {tile.sub && (
                    <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '9px', color: 'rgba(52,211,153,0.7)', letterSpacing: '0.1em', marginTop: '3px', textTransform: 'uppercase' }}>
                      {tile.sub}
                    </div>
                  )}
                  <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10px', color: 'var(--glass-low)', letterSpacing: '0.08em', marginTop: '6px', textTransform: 'uppercase' }}>
                    {tile.bottom}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ringRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; } .hero-photo-col { order: -1; } }
        @media (max-width: 640px) { .hero-grid { padding: 0 24px !important; } }
      `}</style>
    </section>
  )
}
