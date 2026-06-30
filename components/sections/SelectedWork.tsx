'use client'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

const FEATURED = [
  {
    slug: 'newdia',
    chip: 'CLIENT WORK. MEASURED + MODELED',
    chipColor: 'var(--accent)',
    title: 'Built a startup\'s entire analytics function from zero, and rerouted 40% of a $1.2M budget.',
    body: 'First ever CAC and behavioral NPS funnel. The promotions budget moved from gut feel to a causal model.',
    metrics: ['39,793 customers', 'Churn AUC 0.86', '2.3x better ROAS channel found'],
    thumbBg: 'linear-gradient(135deg, #0c1a14 0%, #0a2818 50%, #0c1a14 100%)',
    thumbAccent: '#34d399',
  },
  {
    slug: 'starbucks',
    chip: 'CAPSTONE. PROJECTED',
    chipColor: 'var(--text-low)',
    title: 'A 14% retention lift that lived in one cohort the averages hid.',
    body: 'Not a blanket menu change. A targeted intervention at the one segment the aggregates were masking, backed by a causal design.',
    metrics: ['3.2M loyalty records', 'DiD causal design', 'p < 0.01'],
    thumbBg: 'linear-gradient(135deg, #0d1a0a 0%, #1a2d10 50%, #0d1a0a 100%)',
    thumbAccent: '#6bcb77',
  },
  {
    slug: 'rat-lab',
    chip: 'TOOL I BUILT',
    chipColor: 'var(--accent)',
    title: 'Built the research engine, not just the research.',
    body: 'LLM personas run as synthetic respondent cohorts and return p values, effect sizes, and confidence intervals in hours instead of weeks of live panels.',
    metrics: ['React + TypeScript', 'GPT-4 Turbo', 'stats engine'],
    thumbBg: 'linear-gradient(135deg, #0a0d1a 0%, #121a30 50%, #0a0d1a 100%)',
    thumbAccent: '#7c5cff',
  },
]

function WorkCard({ project, index }: { project: typeof FEATURED[0], index: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <Link
      ref={ref as unknown as React.RefObject<HTMLAnchorElement>}
      href={'/work/' + project.slug}
      style={{
        background: 'var(--bg-1)',
        border: '1px solid var(--line)',
        borderRadius: '16px',
        overflow: 'hidden',
        textDecoration: 'none',
        display: 'block',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transition: 'opacity 450ms cubic-bezier(0.22,1,0.36,1) ' + (index * 100) + 'ms, transform 450ms cubic-bezier(0.22,1,0.36,1) ' + (index * 100) + 'ms, border-color 200ms ease-out',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = project.chipColor === 'var(--accent)' ? 'rgba(52,211,153,0.4)' : 'var(--line)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'; }}
    >
      {/* Data viz thumbnail */}
      <div style={{ height: '160px', background: project.thumbBg, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="80%" height="80%" viewBox="0 0 300 120" aria-hidden="true">
          <rect x="20" y="80" width="30" height="40" fill={project.thumbAccent} opacity="0.3" />
          <rect x="60" y="55" width="30" height="65" fill={project.thumbAccent} opacity="0.5" />
          <rect x="100" y="35" width="30" height="85" fill={project.thumbAccent} opacity="0.7" />
          <rect x="140" y="20" width="30" height="100" fill={project.thumbAccent} opacity="0.9" />
          <rect x="180" y="45" width="30" height="75" fill={project.thumbAccent} opacity="0.6" />
          <rect x="220" y="65" width="30" height="55" fill={project.thumbAccent} opacity="0.4" />
          <polyline points="35,80 75,55 115,35 155,20 195,45 235,65" fill="none" stroke={project.thumbAccent} strokeWidth="2" opacity="0.8" />
        </svg>
      </div>

      {/* Body */}
      <div style={{ padding: '24px' }}>
        <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', color: project.chipColor, marginBottom: '12px', textTransform: 'uppercase' }}>
          {project.chip}
        </div>
        <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', fontWeight: 600, color: 'var(--text-hi)', lineHeight: 1.3, marginBottom: '10px' }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.5, marginBottom: '16px' }}>
          {project.body}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {project.metrics.map(m => (
            <span key={m} style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', color: 'var(--text-low)', background: 'var(--bg-2)', borderRadius: '6px', padding: '3px 10px' }}>
              {m}
            </span>
          ))}
        </div>
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 600, color: 'var(--accent)' }}>
          View breakdown &#8594;
        </span>
      </div>
    </Link>
  )
}

export default function SelectedWork() {
  return (
    <section id="work" style={{ padding: '128px 0' }} aria-labelledby="work-heading">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>
              Selected Work
            </span>
          </div>
          <h2 id="work-heading" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, color: 'var(--text-hi)', marginBottom: '16px' }}>
            Analyses that changed a decision.
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '18px', color: 'var(--text-mid)', lineHeight: 1.6, maxWidth: '60ch', margin: '0 auto' }}>
            Three that show the range. The deep data read, the pricing cliff, and the tool I build when the research itself is the bottleneck. Honest labels on each.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="work-grid">
          {FEATURED.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* Footer line */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', marginBottom: '8px' }}>
            Also behind me: Newdia Co., Fenway growth analytics and a 30% promo cannibalization signal.
            Count On Me, founder, 25+ client engagements and 35% average engagement lift. Sumedha IT,
            semiconductor go to market and a stakeholder in the CYIENT acquisition.
          </p>
          <Link href="/work" style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
            See all 13 projects &#8594;
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .work-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .work-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
