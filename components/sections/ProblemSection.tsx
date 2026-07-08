'use client'
import { useRef, useEffect, useState } from 'react'
import CountUp from '@/components/CountUp'
import { BoldText } from '@/lib/highlight'

const CARDS = [
  { countVal: 95, countSuffix: '%', color: 'var(--pink)', claim: 'of new products fail to meet market expectations', source: 'Clayton Christensen, HBS', sourceUrl: 'https://www.inc.com/marc-emmer/95-percent-of-new-products-fail-here-are-6-steps-to-make-sure-yours-dont.html' },
  { countVal: 3.7, countPrefix: '$', countSuffix: 'T', countDecimals: 1, color: 'var(--violet)', claim: 'in global revenue at risk from poor CX', source: 'Qualtrics XM Institute, 2024', sourceUrl: 'https://www.qualtrics.com/articles/news/trillion-sales-at-risk-2024/' },
  { countVal: 306, countSuffix: '%', color: 'var(--accent)', claim: 'higher LTV from emotionally connected customers', source: 'Motista', sourceUrl: 'https://www.prnewswire.com/news-releases/new-retail-study-shows-marketers-under-leverage-emotional-connection-300720049.html' },
  { countVal: 5, countSuffix: 'x', color: 'var(--warm)', claim: 'more expensive to acquire a new customer than to retain one', source: 'Invesp', sourceUrl: 'https://www.invespcro.com/blog/customer-acquisition-retention/' },
  { countVal: 96, countSuffix: '%', color: 'var(--danger)', claim: 'of unhappy customers never complain, they just leave', source: 'Esteban Kolsky, cited by Brainfish', sourceUrl: 'https://www.brainfishai.com/blog/the-silent-96-what-your-users-never-tell-support' },
  { countVal: 140, countSuffix: '%', color: 'var(--pink)', claim: 'more spend from customers who rate their experience a perfect 10/10', source: 'SuperOffice', sourceUrl: 'https://www.superoffice.com/blog/customer-experience-statistics/' },
]

const BAR_ROWS = [
  { label: 'One-time buyers', pct: 18, fill: '#5b3a44', countVal: 1, countSuffix: 'x', countDecimals: 0, valueColor: 'var(--danger)' },
  { label: 'Repeat customers', pct: 42, fill: '#8a7320', countVal: 2.4, countSuffix: 'x', countDecimals: 1, valueColor: 'var(--warm)' },
  { label: 'Loyal advocates', pct: 72, fill: '#3f6b57', countVal: 4.1, countSuffix: 'x', countDecimals: 1, valueColor: 'var(--accent)' },
  { label: 'Emotionally connected', pct: 100, fill: 'linear-gradient(90deg, #7c5cff 0%, #34d399 100%)', countVal: 5.7, countSuffix: 'x', countDecimals: 1, valueColor: 'var(--violet)' },
]

const QUOTES = [
  { text: 'CX leaders achieve 17% compound annual revenue growth, versus just 3% for laggards.', source: 'Forrester', sourceUrl: 'https://www.forrester.com/press-newsroom/customer-experience-leaders-crush-laggards-on-revenue-growth/', border: 'var(--pink)' },
  { text: 'A 5% increase in customer retention can increase profits by 25% to 95%.', source: 'Bain & Company / Harvard Business Review', sourceUrl: 'https://hbr.org/2014/10/the-value-of-keeping-the-right-customers', border: 'var(--accent)' },
  { text: '86% of buyers will pay more for a better experience, yet most companies compete on price.', source: 'Walker / SuperOffice CX Report', sourceUrl: 'https://www.superoffice.com/blog/customer-experience-statistics/', border: 'var(--warm)' },
]

function StatCard({ card, delay }: { card: typeof CARDS[0]; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="stat-card" style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', borderLeft: `3px solid ${card.color}`, boxShadow: 'var(--glass-shadow)', borderRadius: '14px', padding: '22px 22px', display: 'flex', alignItems: 'center', gap: '18px', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: `opacity 400ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 400ms cubic-bezier(0.22,1,0.36,1) ${delay}ms` }}>
      <div className="stat-num" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 'clamp(34px, 4vw, 44px)', fontWeight: 500, color: card.color, lineHeight: 1, fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>
        <CountUp value={card.countVal} prefix={card.countPrefix || ''} suffix={card.countSuffix || ''} decimals={card.countDecimals || 0} />
      </div>
      <div>
        <div className="stat-claim" style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 500, color: 'var(--glass-mid)', lineHeight: 1.35, marginBottom: '4px' }}><BoldText text={card.claim} /></div>
        <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontSize: '10.5px', fontStyle: 'italic', color: 'var(--glass-low)', textDecoration: 'none' }}>
          {card.source} ↗
        </a>
      </div>
    </div>
  )
}

function BarChart() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect() } }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="bar-box" style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', borderRadius: '14px', padding: '22px 20px' }}>
      <div className="bar-title" style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 600, color: 'var(--glass-hi)', marginBottom: '6px', lineHeight: 1.3 }}>
        One-time buyers vs emotionally connected customers, by relative value
      </div>
      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '11px', fontStyle: 'italic', color: 'var(--glass-low)', marginBottom: '16px', lineHeight: 1.4 }}>
        Illustrative synthesis, not one single study  -  informed by{' '}
        <a href="https://www.prnewswire.com/news-releases/new-retail-study-shows-marketers-under-leverage-emotional-connection-300720049.html" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Motista</a>
        {' '}retail LTV research and{' '}
        <a href="https://www.qualtrics.com/articles/customer-experience/capture-financial-value-customer-emotions/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Qualtrics</a>
        {' '}emotion-loyalty research.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {BAR_ROWS.map((row, i) => (
          <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '108px', flexShrink: 0, fontFamily: 'var(--font-inter)', fontSize: '11.5px', color: 'var(--glass-mid)', textAlign: 'right' }} className="bar-label">{row.label}</div>
            <div style={{ flex: 1, position: 'relative', height: '22px' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.06)', borderRadius: '6px' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', borderRadius: '6px', background: row.fill, width: animated ? `${row.pct}%` : '0%', transition: `width 700ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms` }} />
            </div>
            <div style={{ width: '42px', flexShrink: 0, fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 600, color: row.valueColor, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
              <CountUp value={row.countVal} suffix={row.countSuffix} decimals={row.countDecimals} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProblemSection() {
  return (
    <section id="problem" className="sec" style={{ padding: '88px 0' }} aria-labelledby="problem-heading">
      <div className="sec-in" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>The Data Problem No One Prices In</span>
          </div>
          <h2 id="problem-heading" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.01em', fontWeight: 500, marginBottom: '10px', color: 'var(--text-hi)' }}>
            Most businesses are flying blind.
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.5, maxWidth: '54ch', margin: '0 auto' }}>
            They build for a customer they have never actually understood. Here is the data, and what it costs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="split-grid">
          {/* LEFT: the problem, in numbers */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }} className="stat-grid-c">
              {CARDS.map((card, i) => <StatCard key={card.claim} card={card} delay={i * 50} />)}
            </div>
          </div>

          {/* RIGHT: what it's costing you */}
          <div id="insights">
            <BarChart />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
              {QUOTES.map((q, i) => (
                <div key={i} className="quote-card" style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', borderRadius: '10px', padding: '14px 16px', borderLeft: `3px solid ${q.border}` }}>
                  <p className="quote-text" style={{ fontFamily: 'var(--font-inter)', fontSize: '12.5px', fontWeight: 500, color: 'var(--glass-hi)', lineHeight: 1.4, marginBottom: '4px' }}>&ldquo;<BoldText text={q.text} />&rdquo;</p>
                  <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontSize: '10.5px', color: 'var(--glass-low)', textDecoration: 'none' }}>{q.source} ↗</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(20px, 2.4vw, 26px)', color: 'var(--text-hi)', fontWeight: 500, marginBottom: '10px' }}>
            That is the gap. I get paid to close it.
          </h3>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.5, maxWidth: '52ch', margin: '0 auto 20px' }}>
            Behavioral science, causal analytics, and consumer research, turned into the one decision worth making next.
          </p>
          <a href="#book"
            style={{ height: '46px', padding: '0 24px', borderRadius: '10px', background: 'var(--grad)', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'filter 150ms ease-out, transform 150ms ease-out' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter='brightness(1.08)'; (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter=''; (e.currentTarget as HTMLElement).style.transform=''; }}
          >
            Book a free 15 min call <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .split-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </section>
  )
}
