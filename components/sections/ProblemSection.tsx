'use client'
import { useRef, useEffect, useState } from 'react'

const CARDS = [
  {
    num: '95%',
    color: 'var(--pink)',
    claim: 'of new products fail to meet market expectations',
    detail: 'Harvard Business School research across 30,000+ annual product launches. The leading cause is products built around internal assumptions, not validated customer need.',
    source: 'Inc. / Harvard Business School',
  },
  {
    num: '80%',
    color: 'var(--warm)',
    claim: 'of companies believe they are customer centric',
    detail: 'Only 8% of their customers agree. The gap between internal conviction and customer reality is the most expensive blind spot in business today.',
    source: 'Bain & Company',
  },
  {
    num: '42%',
    color: 'var(--accent)',
    claim: 'of marketers do not segment their customers at all',
    detail: 'Of those who do, most rely on demographics alone, age, gender, income, and ignore the behavior, motivation, and psychographic drivers that actually predict what someone buys.',
    source: 'NotifyVisitors 2025 Segmentation Report',
  },
  {
    num: '$3.7T',
    color: 'var(--violet)',
    claim: 'in global revenue at risk from poor customer experience',
    detail: 'Bad CX is not a soft metric, it is a balance sheet problem. Customers leave, do not return, and tell others. The cost compounds quietly until it does not.',
    source: 'Emplifi 2024 CX Statistics',
  },
  {
    num: '80%',
    color: 'var(--pink)',
    claim: 'of enterprise AI projects fail to deliver business value',
    detail: 'The number one reason is not bad technology. It is that companies picked tools before defining the problem or identifying who they were solving it for.',
    source: 'RAND Corporation / Gartner 2025',
  },
  {
    num: '306%',
    color: 'var(--accent)',
    claim: 'higher lifetime value from emotionally connected customers',
    detail: 'Emotionally connected customers stay 5.1 years on average, spend 67% more per order, and recommend at 3x the rate of satisfied but not connected buyers.',
    source: 'Motista / Resonate CX',
  },
]

function StatCard({ card, delay }: { card: typeof CARDS[0], delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--bg-1)',
        border: '1px solid var(--line)',
        borderTop: `2px solid ${card.color}`,
        borderRadius: '16px',
        padding: '32px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transition: `opacity 450ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 450ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 500, color: card.color, marginBottom: '12px', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
        {card.num}
      </div>
      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 600, color: 'var(--text-hi)', marginBottom: '8px', lineHeight: 1.3 }}>
        {card.claim}
      </div>
      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.55, marginBottom: '16px' }}>
        {card.detail}
      </div>
      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontStyle: 'italic', color: 'var(--text-low)' }}>
        Source: {card.source}
      </div>
    </div>
  )
}

export default function ProblemSection() {
  return (
    <section id="problem" style={{ padding: '128px 0' }} aria-labelledby="problem-heading">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>
              The Data Problem No One Prices In
            </span>
          </div>

          <h2
            id="problem-heading"
            style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, marginBottom: '24px' }}
          >
            <span style={{ color: 'var(--text-hi)' }}>Most businesses are flying blind.</span>
            <br />
            <span style={{ background: 'linear-gradient(90deg, var(--warm) 0%, var(--pink) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              They are building for a customer they have never actually understood.
            </span>
          </h2>

          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '19px', color: 'var(--text-mid)', lineHeight: 1.6, maxWidth: '60ch', margin: '0 auto' }}>
            Companies pour billions into product, AI, and growth, then wonder why customers do not stay.
            The answer is not the product. It is the step they skipped: understanding who the customer is,
            what they feel, and why they behave the way they do.
          </p>
        </div>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="problem-grid">
          {CARDS.map((card, i) => (
            <StatCard key={card.num + card.claim} card={card} delay={i * 70} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <a
            href="#book"
            style={{
              height: '52px',
              padding: '0 28px',
              borderRadius: '12px',
              background: 'var(--grad)',
              color: '#fff',
              fontFamily: 'var(--font-inter)',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'filter 150ms ease-out, transform 150ms ease-out',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = ''; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            Book a free 15 min call <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
