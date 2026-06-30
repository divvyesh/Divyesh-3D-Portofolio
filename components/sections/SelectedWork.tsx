'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const featured = [
  {
    slug: 'rat-lab',
    tag: 'TOOL I BUILT',
    tagColor: 'var(--accent)',
    title: 'Built the research engine — not just the research',
    decision: 'Closes the gap between insight speed and statistical validity without waiting weeks for live panels.',
    metrics: ['React · TypeScript', 'GPT-4 Turbo', 'p-values + CIs in hours'],
  },
  {
    slug: 'newdia',
    tag: 'CLIENT WORK · MEASURED+MODELED',
    tagColor: 'var(--accent-2)',
    title: "Built a startup's entire analytics function from zero — rerouted 40% of a $1.2M budget",
    decision: 'First-ever CAC and behavioral NPS funnel. Promotions budget moved from gut-feel to causal model.',
    metrics: ['39,793 customers', 'Churn AUC 0.86', '2.3× ROAS channel found'],
  },
  {
    slug: 'starbucks',
    tag: 'CAPSTONE · PROJECTED',
    tagColor: 'var(--text-low)',
    title: 'A 14% retention lift that lived entirely in one cohort the averages hid',
    decision: 'Not a blanket menu change — a targeted intervention at the one segment the aggregates were masking.',
    metrics: ['3.2M loyalty records', 'DiD causal design', 'p < 0.01'],
  },
]

function WorkCard({ project, index }: { project: (typeof featured)[0]; index: number }) {
  const [visible, setVisible] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (divRef.current) obs.observe(divRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={divRef}
      className="transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block p-6 rounded-[14px] transition-all duration-300 group"
        style={{
          background: 'var(--bg-1)',
          border: '1px solid var(--line)',
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(110, 231, 183, 0.3)'
          ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-2)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'
          ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-1)'
        }}
      >
        <div
          className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4 px-2 py-1 rounded-full inline-block"
          style={{ background: `${project.tagColor}18`, color: project.tagColor, border: `1px solid ${project.tagColor}40` }}
        >
          {project.tag}
        </div>
        <h3
          className="font-body font-semibold text-[17px] leading-snug mb-3"
          style={{ color: 'var(--text-hi)' }}
        >
          {project.title}
        </h3>
        <p className="font-body text-[14px] leading-[1.6] mb-4" style={{ color: 'var(--text-mid)' }}>
          {project.decision}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.map(m => (
            <span
              key={m}
              className="font-mono text-[11px] px-2 py-1 rounded"
              style={{ background: 'var(--bg-0)', border: '1px solid var(--line)', color: 'var(--text-low)' }}
            >
              {m}
            </span>
          ))}
        </div>
        <div
          className="font-body text-[13px] font-medium transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          View breakdown →
        </div>
      </Link>
    </div>
  )
}

export default function SelectedWork() {
  return (
    <section className="py-32" id="work" aria-labelledby="work-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>
            Selected Work
          </div>
          <h2
            id="work-heading"
            className="font-display mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-hi)', fontWeight: 400 }}
          >
            Analyses that changed a decision.
          </h2>
          <p className="font-body text-[16px] max-w-[52ch]" style={{ color: 'var(--text-mid)' }}>
            Three that show the range — the deep-data read, the pricing cliff, and the tooling I build when the research itself is the bottleneck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((p, i) => <WorkCard key={p.slug} project={p} index={i} />)}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="font-body font-medium text-[15px] px-6 py-3 rounded-[10px] border transition-all duration-150 inline-block"
            style={{ borderColor: 'var(--line)', color: 'var(--text-mid)' }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--text-mid)'
            }}
          >
            See all 13 projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
