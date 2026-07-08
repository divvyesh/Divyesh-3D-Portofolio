'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { BoldText } from '@/lib/highlight'

const GAPS = [
  { num: '01', lens: 'COHORT', title: 'Your middle cohort is churning, and your dashboard is hiding it.', tag: 'Starbucks · 3.2M records · 14% retention lift', slug: 'starbucks', color: 'var(--accent)' },
  { num: '02', lens: 'NON LINEAR', title: 'Price sensitivity is not a slope, it is a cliff.', tag: 'British Airways · 12 fare classes · RD elasticity model', slug: 'british-airways', color: 'var(--warm)' },
  { num: '03', lens: 'DISTRIBUTION', title: 'One customer at a time is not a growth model. A partner channel is.', tag: 'Count On Me · school-district partnerships · 10x reach per dollar', slug: 'count-on-me', color: 'var(--pink)' },
  { num: '04', lens: 'SEQUENCING', title: 'In a regulated market, the commercial pitch is not the first move.', tag: 'Sumedha IT · 6 global markets · regulatory-first GTM', slug: 'sumedha', color: 'var(--violet)' },
  { num: '05', lens: 'STATED ≠ REAL', title: 'NPS is a slide number. Behavior is the real signal.', tag: 'Newdia Co. · first behavioral NPS + CAC funnel', slug: 'newdia', color: 'var(--warm)' },
]

const SKILL_CLUSTERS = [
  {
    label: 'Causal & Measurement',
    color: '#7c5cff',
    items: ['Causal inference: DiD, regression discontinuity, synthetic control', 'Behavioral economics & psychographic segmentation'],
  },
  {
    label: 'Segmentation & Retention',
    color: '#34d399',
    items: ['ML segmentation: K-means, DBSCAN, PCA', 'Churn modeling & retention architecture'],
  },
  {
    label: 'Growth & AI Ops',
    color: '#f5a35c',
    items: ['Pricing, GTM, and growth analytics', 'AI-augmented analytics & LLM visibility (GEO/AEO)'],
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
    <div ref={ref} className="gap-row" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px 0', borderBottom: index < GAPS.length - 1 ? '1px solid var(--glass-border)' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(10px)', transition: 'opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 400ms cubic-bezier(0.22,1,0.36,1)' }}>
      <div className="gap-num-big" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '18px', fontWeight: 600, color: gap.color, flexShrink: 0, width: '30px', lineHeight: 1.4 }}>{gap.num}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '10.5px', fontWeight: 500, color: gap.color, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '4px' }}>{gap.lens}</div>
        <h3 className="gap-title" style={{ fontFamily: 'var(--font-inter)', fontSize: '14.5px', fontWeight: 600, color: 'var(--glass-hi)', lineHeight: 1.3, marginBottom: '4px' }}><BoldText text={gap.title} /></h3>
        <Link href={'/work/' + gap.slug}
          style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '11px', color: 'var(--glass-low)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', transition: 'color 150ms' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--glass-low)'; }}
        >
          <BoldText text={gap.tag} color="var(--glass-low)" /> <span>&#8594;</span>
        </Link>
      </div>
    </div>
  )
}

function SkillCluster({ cluster, delay }: { cluster: typeof SKILL_CLUSTERS[0]; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="skill-card" style={{ padding: '18px 20px', borderRadius: '12px', background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(8px)', transition: `opacity 350ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 350ms cubic-bezier(0.22,1,0.36,1) ${delay}ms` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: cluster.color, flexShrink: 0 }} aria-hidden="true" />
        <span className="skill-card-title" style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--glass-hi)' }}>{cluster.label}</span>
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {cluster.items.map(item => (
          <li key={item} style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--glass-mid)', lineHeight: 1.4, paddingLeft: '14px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: cluster.color }}>&#183;</span>
            <BoldText text={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function GapsSection() {
  return (
    <section className="sec" style={{ padding: '88px 0' }} aria-labelledby="gaps-heading">
      <div className="sec-in" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>How I Find What Others Miss</span>
          </div>
          <h2 id="gaps-heading" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.1, letterSpacing: '-0.01em', fontWeight: 500, marginBottom: '10px', color: 'var(--text-hi)' }}>
            Reads hiding in plain sight, and the lens that finds them.
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.5, maxWidth: '54ch', margin: '0 auto' }}>
            Five real client gaps on the left, each from a different engagement. The toolkit that surfaces them on the right.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="split-grid">
          {/* LEFT: the gaps */}
          <div>
            {GAPS.map((gap, i) => <GapRow key={gap.num} gap={gap} index={i} />)}
          </div>

          {/* RIGHT: the toolkit */}
          <div id="skills">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SKILL_CLUSTERS.map((cluster, i) => <SkillCluster key={cluster.label} cluster={cluster} delay={i * 60} />)}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .split-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </section>
  )
}
