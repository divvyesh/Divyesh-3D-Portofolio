'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const GAPS = [
  { num: '01', lens: 'COHORT', title: 'Your middle cohort is churning, and your dashboard is hiding it.', tag: 'Starbucks · 3.2M records · 14% retention lift', slug: 'starbucks', color: 'var(--accent)' },
  { num: '02', lens: 'NON LINEAR', title: 'Price sensitivity is not a slope, it is a cliff.', tag: 'British Airways · 12 fare classes · RD elasticity model', slug: 'british-airways', color: 'var(--warm)' },
  { num: '03', lens: 'CAUSAL', title: 'Your attribution looks backward, so spend runs on stale signal.', tag: 'British Airways · retargeting saturation caught early', slug: 'british-airways', color: 'var(--pink)' },
  { num: '04', lens: 'BEHAVIORAL', title: 'Choice overload is costing you conversions you cannot trace.', tag: 'Starbucks · DiD experiment on decision complexity', slug: 'starbucks', color: 'var(--accent)' },
  { num: '05', lens: 'STATED ≠ REAL', title: 'NPS is a slide number. Behavior is the real signal.', tag: 'Newdia Co. · first behavioral NPS + CAC funnel', slug: 'newdia', color: 'var(--warm)' },
]

const SKILLS = [
  { icon: '\u{1F50D}', title: 'Consumer Behavior Science', color: '#34d399' },
  { icon: '\u{1F333}', title: 'Causal Measurement', color: '#7c5cff' },
  { icon: '\u{1F4B0}', title: 'Pricing & Revenue Strategy', color: '#f5a35c' },
  { icon: '\u{1F3AF}', title: 'Growth & GTM Analytics', color: '#34d399' },
  { icon: '\u{1F4CA}', title: 'ML Segmentation', color: '#9b7cff' },
  { icon: '\u{1F5FA}', title: 'Journey & Heatmap Intel', color: '#f5a35c' },
  { icon: '\u{1F4CA}', title: 'Data Storytelling', color: '#34d399' },
  { icon: '\u{1F9E0}', title: 'Psychographic Intelligence', color: '#ef6f8e' },
  { icon: '\u{1F6E1}', title: 'First & Zero Party Data', color: '#9b7cff' },
  { icon: '\u{1F4C9}', title: 'Retention & Churn Architecture', color: '#34d399' },
  { icon: '\u{1F4CB}', title: 'Survey & Research Design', color: '#f5a35c' },
  { icon: '\u{1F916}', title: 'AI Augmented Analytics', color: '#9b7cff' },
  { icon: '\u{1F310}', title: 'Search & LLM Visibility (GEO/AEO)', color: '#34d399' },
  { icon: '\u{1F9E9}', title: 'Knowledge Graph & Entity SEO', color: '#7c5cff' },
  { icon: '\u{1F4CE}', title: 'AI Citation Architecture', color: '#f5a35c' },
  { icon: '\u{1F504}', title: 'Multi-Index Brand Presence', color: '#ef6f8e' },
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
        <h3 className="gap-title" style={{ fontFamily: 'var(--font-inter)', fontSize: '14.5px', fontWeight: 600, color: 'var(--glass-hi)', lineHeight: 1.3, marginBottom: '4px' }}>{gap.title}</h3>
        <Link href={'/work/' + gap.slug}
          style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '11px', color: 'var(--glass-low)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', transition: 'color 150ms' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--glass-low)'; }}
        >
          {gap.tag} <span>&#8594;</span>
        </Link>
      </div>
    </div>
  )
}

function SkillChip({ skill, delay }: { skill: typeof SKILLS[0]; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="skill-card" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 13px', borderRadius: '10px', background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(8px)', transition: `opacity 350ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 350ms cubic-bezier(0.22,1,0.36,1) ${delay}ms` }}>
      <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: skill.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>{skill.icon}</div>
      <span className="skill-card-title" style={{ fontFamily: 'var(--font-inter)', fontSize: '12.5px', fontWeight: 600, color: 'var(--glass-hi)', lineHeight: 1.25 }}>{skill.title}</span>
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
            Five real client gaps on the left. The toolkit that surfaces them on the right.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="split-grid">
          {/* LEFT: the gaps */}
          <div>
            {GAPS.map((gap, i) => <GapRow key={gap.num} gap={gap} index={i} />)}
          </div>

          {/* RIGHT: the toolkit */}
          <div id="skills">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }} className="skills-grid-c">
              {SKILLS.map((skill, i) => <SkillChip key={skill.title} skill={skill} delay={i * 25} />)}
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
