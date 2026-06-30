'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const GAPS = [
  {
    num: '01', lens: 'COHORT',
    title: 'Your middle cohort is churning, and your dashboard is hiding it.',
    body: 'Your top 20% mask the bleed. The middle cohort, highest growth potential and highest sensitivity to friction, drops off in silence while aggregate metrics stay green. That is the segment that moves the number.',
    tag: 'Starbucks. 3.2M loyalty records. 14% retention lift invisible in aggregate.', slug: 'starbucks', color: 'var(--accent)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 3" opacity="0.18"/>
        <path d="M32 32 L32 8 A24 24 0 0 1 56 32 Z" fill="currentColor" opacity="0.18"/>
        <path d="M32 32 L56 32 A24 24 0 0 1 20 54 Z" fill="currentColor" opacity="0.28"/>
        <path d="M32 32 L20 54 A24 24 0 0 1 8 32 Z" fill="currentColor" opacity="0.12"/>
        <path d="M32 32 L8 32 A24 24 0 0 1 32 8 Z" fill="currentColor" opacity="0.08"/>
        <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.5"/>
        <circle cx="44" cy="20" r="3" fill="currentColor" opacity="0.8"/>
        <circle cx="20" cy="44" r="2.5" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    num: '02', lens: 'NON LINEAR',
    title: 'Price sensitivity is not a slope, it is a cliff.',
    body: 'Average elasticity gives you a false ceiling. Demand breaks at a threshold. By the time blended ROAS shows it, you have spent past the efficient return window. Segment level curves catch it weeks earlier.',
    tag: 'British Airways. 12 fare classes. Regression discontinuity elasticity model.', slug: 'british-airways', color: 'var(--warm)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polyline points="8,52 22,30 30,36 38,20 46,22 56,8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.22"/>
        <polyline points="8,52 22,46 30,44 38,40 44,18 56,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 2" opacity="0.18"/>
        <line x1="44" y1="8" x2="44" y2="56" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.2"/>
        <circle cx="44" cy="18" r="4" fill="currentColor" opacity="0.6"/>
        <path d="M44 28 L44 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        <text x="46" y="36" fontFamily="monospace" fontSize="8" fill="currentColor" opacity="0.5">cliff</text>
        <line x1="8" y1="56" x2="56" y2="56" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <line x1="8" y1="8" x2="8" y2="56" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
      </svg>
    ),
  },
  {
    num: '03', lens: 'CAUSAL',
    title: 'Your attribution looks backward, so every spend decision runs on stale signal.',
    body: 'Most models tell you what correlated with a conversion. Without holdout groups and causal validation, you are measuring organic trend and calling it impact. MMM without a causal scaffold is the same error at a bigger budget.',
    tag: 'British Airways. Retargeting saturation. ROAS turned negative before detection.', slug: 'british-airways', color: 'var(--pink)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="16" cy="32" r="7" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        <circle cx="48" cy="16" r="7" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        <circle cx="48" cy="48" r="7" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        <line x1="23" y1="29" x2="41" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        <line x1="23" y1="35" x2="41" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        <circle cx="16" cy="32" r="3" fill="currentColor" opacity="0.5"/>
        <circle cx="48" cy="16" r="3" fill="currentColor" opacity="0.7"/>
        <circle cx="48" cy="48" r="3" fill="currentColor" opacity="0.4"/>
        <path d="M38 18 L41 19 L40 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <path d="M38 44 L41 45 L40 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
      </svg>
    ),
  },
  {
    num: '04', lens: 'BEHAVIORAL',
    title: 'Choice overload is costing you conversions you cannot trace.',
    body: 'Too many options or high friction flows trigger System 1 shutdown. People abandon because the decision is hard, not because they do not want the product. That is behavioral economics, not a UX bug.',
    tag: 'Starbucks. Difference in differences experiment on decision complexity.', slug: 'starbucks', color: 'var(--accent)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="32" cy="28" rx="18" ry="14" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
        <path d="M20 28 Q18 18 26 14 Q32 10 38 14 Q46 18 44 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <path d="M26 28 Q28 22 32 22 Q36 22 38 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.45"/>
        <circle cx="32" cy="28" r="3.5" fill="currentColor" opacity="0.55"/>
        <path d="M32 36 L32 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/>
        <path d="M28 44 L36 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
        <circle cx="20" cy="46" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <circle cx="44" cy="46" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
        <line x1="32" y1="44" x2="20" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
        <line x1="32" y1="44" x2="44" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
      </svg>
    ),
  },
  {
    num: '05', lens: 'STATED IS NOT REAL',
    title: 'NPS is a slide number. Behavior is the real signal.',
    body: 'Stated preference and revealed behavior split under real conditions. A customer who scores you a 9 and churns two weeks later is common. Survey metrics without behavioral anchoring give you confidence in data that does not predict anything.',
    tag: 'Newdia Co. Built the first behavioral NPS and CAC funnel the business ever had.', slug: 'newdia', color: 'var(--warm)',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="12" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.18"/>
        <circle cx="24" cy="28" r="7" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
        <line x1="35" y1="22" x2="52" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2"/>
        <line x1="35" y1="28" x2="52" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.15"/>
        <line x1="35" y1="34" x2="46" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.12"/>
        <path d="M18 48 L24 54 M46 48 L40 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.15"/>
        <line x1="24" y1="54" x2="40" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.15"/>
        <path d="M36 38 L46 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M46 38 L36 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
        <circle cx="24" cy="28" r="3" fill="currentColor" opacity="0.35"/>
      </svg>
    ),
  },
]

function GapRow({ gap, index }: { gap: typeof GAPS[0]; index: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', borderRadius: '16px', padding: '32px', display: 'flex', gap: '32px', alignItems: 'center', marginBottom: '16px', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'opacity 450ms cubic-bezier(0.22,1,0.36,1), transform 450ms cubic-bezier(0.22,1,0.36,1)' }}>
      <div style={{ width: '100px', flexShrink: 0 }}>
        <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '44px', fontWeight: 500, color: 'var(--glass-low)', lineHeight: 1 }}>{gap.num}</div>
        <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '11px', fontWeight: 500, color: gap.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>{gap.lens}</div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', fontWeight: 600, color: 'var(--glass-hi)', lineHeight: 1.3, marginBottom: '8px' }}>{gap.title}</h3>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--glass-mid)', lineHeight: 1.55, maxWidth: '60ch', marginBottom: '12px' }}>{gap.body}</p>
        <Link href={'/work/' + gap.slug}
          style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', color: 'var(--glass-low)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', transition: 'color 150ms' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--glass-low)'; }}
        >
          {gap.tag} <span>&#8594;</span>
        </Link>
      </div>
      <div style={{ width: '88px', height: '88px', flexShrink: 0, color: gap.color, opacity: 0.7 }} className="gap-icon">
        {gap.icon}
      </div>
    </div>
  )
}

export default function GapsSection() {
  return (
    <section style={{ padding: '128px 0' }} aria-labelledby="gaps-heading">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>The Gaps I Look For</span>
          </div>
          <h2 id="gaps-heading" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, color: 'var(--text-hi)', marginBottom: '16px' }}>
            Five reads hiding in plain sight, in data you already have.
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', color: 'var(--text-mid)', lineHeight: 1.6, maxWidth: '60ch', margin: '0 auto' }}>
            Each one found in real data. Each was invisible in the aggregate metrics the team was already watching.
          </p>
        </div>
        <div>{GAPS.map((gap, i) => <GapRow key={gap.num} gap={gap} index={i} />)}</div>
      </div>
      <style>{`
        @media (max-width: 640px) { .gap-icon { display: none !important; } }
      `}</style>
    </section>
  )
}
