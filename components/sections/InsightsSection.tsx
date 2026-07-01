'use client'
import { useRef, useEffect, useState } from 'react'
import CountUp from '@/components/CountUp'

const BAR_ROWS = [
  { label: 'One-time / price-driven buyers', pct: 18, fill: '#5b3a44', inside: 'Low CLV', countVal: 1, countSuffix: 'x', countDecimals: 0, valueColor: 'var(--danger)' },
  { label: 'Repeat / satisfied customers', pct: 42, fill: '#8a7320', inside: '+67% spend/order', countVal: 2.4, countSuffix: 'x', countDecimals: 1, valueColor: 'var(--warm)' },
  { label: 'Loyal brand advocates', pct: 72, fill: '#3f6b57', inside: '5.7x revenue', countVal: 4.1, countSuffix: 'x', countDecimals: 1, valueColor: 'var(--accent)' },
  { label: 'Emotionally connected', pct: 100, fill: 'linear-gradient(90deg, #7c5cff 0%, #34d399 100%)', inside: '306% higher LTV', countVal: 5.7, countSuffix: 'x', countDecimals: 1, valueColor: 'var(--violet)' },
]

const QUOTES = [
  { text: 'Companies that lead in CX outperform laggards by nearly 80% in revenue growth.', source: 'Forrester Customer Experience Index 2024', sourceUrl: 'https://www.forrester.com/report/the-forrester-customer-experience-index/', border: 'var(--pink)' },
  { text: '51% of large enterprises say business goals, not customer feedback, drive product strategy.', source: 'Product Management Statistics, HaveIgnition 2024', sourceUrl: 'https://www.haveignition.com/statistics/product-management-statistics', border: 'var(--warm)' },
  { text: 'Improving retention by just 2% drives profitability equal to cutting costs by 10%.', source: 'Bain & Company / Harvard Business Review', sourceUrl: 'https://hbr.org/2014/10/the-value-of-keeping-the-right-customers', border: 'var(--accent)' },
  { text: 'Customer centric companies are 60% more profitable than those not focused on customers.', source: 'Deloitte & Touche', sourceUrl: 'https://www2.deloitte.com/us/en/pages/consumer-business/articles/navigating-the-new-digital-divide.html', border: 'var(--pink)' },
  { text: '86% of buyers will pay more for a better experience, yet most companies still compete on price.', source: 'Walker Customers 2020 / SuperOffice CX Report', sourceUrl: 'https://www.superoffice.com/blog/customer-experience-statistics/', border: 'var(--warm)' },
  { text: 'Organizations are 2x more likely to succeed when they redesign workflows first, then pick AI tools.', source: 'McKinsey Global AI Survey, Nov 2025', sourceUrl: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai', border: 'var(--accent)' },
]

function BarChart() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect() } }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="bar-box" style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', borderRadius: '16px', padding: '40px' }}>
      <div className="bar-title" style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', fontWeight: 600, color: 'var(--glass-hi)', marginBottom: '8px' }}>
        Are you stuck on one-time buyers and low repeat rate? Here is why it stays that way.
      </div>
      <div className="bar-sub" style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--glass-low)', marginBottom: '28px', lineHeight: 1.5 }}>
        Relative value comparison: price-driven buyers vs returning customers vs loyal advocates vs emotionally connected. Sources: Qualtrics XM, Bain, Motista.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {BAR_ROWS.map((row, i) => (
          <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '200px', flexShrink: 0, fontFamily: 'var(--font-inter)', fontSize: '14px', color: 'var(--glass-mid)', textAlign: 'right' }} className="bar-label">{row.label}</div>
            <div style={{ flex: 1, position: 'relative', height: '34px' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.06)', borderRadius: '8px' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', borderRadius: '8px', background: row.fill, width: animated ? `${row.pct}%` : '0%', transition: `width 800ms cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`, display: 'flex', alignItems: 'center', paddingLeft: '12px', overflow: 'hidden' }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', opacity: animated ? 1 : 0, transition: `opacity 300ms ${i * 100 + 400}ms` }}>{row.inside}</span>
              </div>
            </div>
            <div style={{ width: '52px', flexShrink: 0, fontFamily: 'var(--font-geist-mono)', fontSize: '16px', fontWeight: 600, color: row.valueColor, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
              <CountUp value={row.countVal} suffix={row.countSuffix} decimals={row.countDecimals} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function InsightsSection() {
  return (
    <section id="insights" className="sec" style={{ padding: '128px 0' }} aria-labelledby="insights-heading">
      <div className="sec-in" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <BarChart />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '48px' }} className="quotes-grid">
          {QUOTES.map((q, i) => (
            <div key={i} className="quote-card" style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', borderRadius: '12px', padding: '24px', borderLeft: `3px solid ${q.border}` }}>
              <p className="quote-text" style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 500, color: 'var(--glass-hi)', lineHeight: 1.45, marginBottom: '16px' }}>&ldquo;{q.text}&rdquo;</p>
              <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--glass-low)', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'color 150ms, border-color 150ms' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--accent)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--glass-low)'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent'; }}
              >{q.source} ↗</a>
            </div>
          ))}
        </div>
        <div className="insights-cta" style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', borderRadius: '16px', padding: '64px 48px', textAlign: 'center', marginTop: '48px' }}>
          <h2 id="insights-heading" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, color: 'var(--glass-hi)', marginBottom: '16px' }}>
            Your best customers are hiding in your data.<br />Most teams do not know how to find them.
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '19px', color: 'var(--glass-mid)', lineHeight: 1.6, maxWidth: '64ch', margin: '0 auto 32px' }}>
            I build the frameworks that surface them. Behavioral science, causal analytics, and deep consumer research, used to tell you exactly who to obsess over and why.
          </p>
          <a href="#book"
            style={{ height: '52px', padding: '0 28px', borderRadius: '12px', background: 'var(--grad)', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'filter 150ms ease-out, transform 150ms ease-out' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter='brightness(1.08)'; (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter=''; (e.currentTarget as HTMLElement).style.transform=''; }}
          >
            Book a free 15 min call <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .quotes-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .quotes-grid { grid-template-columns: 1fr !important; } .bar-label { display: none; } }
      `}</style>
    </section>
  )
}
