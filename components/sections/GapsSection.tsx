'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const GAPS = [
  {
    num: '01',
    lens: 'COHORT',
    title: 'Your middle cohort is churning, and your dashboard is hiding it.',
    body: 'Your top 20% mask the bleed. The middle cohort, highest growth potential and highest sensitivity to friction, drops off in silence while aggregate metrics stay green. That is the segment that moves the number.',
    tag: 'Starbucks. 3.2M loyalty records. 14% retention lift invisible in aggregate.',
    slug: 'starbucks',
    color: 'var(--accent)',
  },
  {
    num: '02',
    lens: 'NON LINEAR',
    title: 'Price sensitivity is not a slope, it is a cliff.',
    body: 'Average elasticity gives you a false ceiling. Demand breaks at a threshold. By the time blended ROAS shows it, you have spent past the efficient return window. Segment level curves catch it weeks earlier.',
    tag: 'British Airways. 12 fare classes. Regression discontinuity elasticity model.',
    slug: 'british-airways',
    color: 'var(--warm)',
  },
  {
    num: '03',
    lens: 'CAUSAL',
    title: 'Your attribution looks backward, so every spend decision runs on stale signal.',
    body: 'Most models tell you what correlated with a conversion. Without holdout groups and causal validation, you are measuring organic trend and calling it impact. MMM without a causal scaffold is the same error at a bigger budget.',
    tag: 'British Airways. Retargeting saturation. ROAS turned negative before detection.',
    slug: 'british-airways',
    color: 'var(--pink)',
  },
  {
    num: '04',
    lens: 'BEHAVIORAL',
    title: 'Choice overload is costing you conversions you cannot trace.',
    body: 'Too many options or high friction flows trigger System 1 shutdown. People abandon because the decision is hard, not because they do not want the product. That is behavioral economics, not a UX bug.',
    tag: 'Starbucks. Difference in differences experiment on decision complexity.',
    slug: 'starbucks',
    color: 'var(--accent)',
  },
  {
    num: '05',
    lens: 'STATED IS NOT REAL',
    title: 'NPS is a slide number. Behavior is the real signal.',
    body: 'Stated preference and revealed behavior split under real conditions. A customer who scores you a 9 and churns two weeks later is common. Survey metrics without behavioral anchoring give you confidence in data that does not predict anything.',
    tag: 'Newdia Co. Built the first behavioral NPS and CAC funnel the business ever had.',
    slug: 'newdia',
    color: 'var(--warm)',
  },
]

function GapRow({ gap, index }: { gap: typeof GAPS[0], index: number }) {
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
        display: 'flex',
        gap: '32px',
        paddingTop: index === 0 ? 0 : '48px',
        paddingBottom: '48px',
        borderBottom: index < GAPS.length - 1 ? '1px solid var(--line)' : 'none',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(12px)',
        transition: 'opacity 450ms cubic-bezier(0.22,1,0.36,1), transform 450ms cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Number + lens label */}
      <div style={{ width: '120px', flexShrink: 0 }}>
        <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '48px', fontWeight: 500, color: 'var(--text-low)', lineHeight: 1 }}>
          {gap.num}
        </div>
        <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '12px', fontWeight: 500, color: gap.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>
          {gap.lens}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '22px', fontWeight: 600, color: 'var(--text-hi)', lineHeight: 1.3, marginBottom: '8px' }}>
          {gap.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.55, maxWidth: '60ch', marginBottom: '12px' }}>
          {gap.body}
        </p>
        <Link
          href={'/work/' + gap.slug}
          style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '14px', color: 'var(--text-low)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--accent)'; const arrow = el.querySelector('.arrow') as HTMLElement; if (arrow) arrow.style.transform = 'translateX(4px)'; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--text-low)'; const arrow = el.querySelector('.arrow') as HTMLElement; if (arrow) arrow.style.transform = ''; }}
        >
          {gap.tag} <span className="arrow" style={{ transition: 'transform 150ms ease-out' }}>&#8594;</span>
        </Link>
      </div>
    </div>
  )
}

export default function GapsSection() {
  return (
    <section style={{ padding: '128px 0' }} aria-labelledby="gaps-heading">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>
              The Gaps I Look For
            </span>
          </div>
          <h2
            id="gaps-heading"
            style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, color: 'var(--text-hi)', marginBottom: '16px' }}
          >
            Five reads hiding in plain sight, in data you already have.
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', color: 'var(--text-mid)', lineHeight: 1.6, maxWidth: '60ch', margin: '0 auto' }}>
            Each one found in real data. Each was invisible in the aggregate metrics the team was already watching.
          </p>
        </div>

        {/* Gap rows */}
        <div>
          {GAPS.map((gap, i) => (
            <GapRow key={gap.num} gap={gap} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
