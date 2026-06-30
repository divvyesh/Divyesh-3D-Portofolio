'use client'
import { useRef, useEffect, useState } from 'react'

interface StatCardProps {
  num: string
  label: string
  desc: string
  source: string
  sourceUrl?: string
  color: string
  isOwn?: boolean
  ownLabel?: string
  linkSlug?: string
  delay?: number
}

function StatCard({ num, label, desc, source, sourceUrl, color, isOwn, ownLabel, linkSlug, delay = 0 }: StatCardProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="p-6 rounded-[14px] transition-all duration-500"
      style={{
        background: 'var(--bg-1)',
        border: '1px solid var(--line)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {isOwn && (
        <div
          className="font-mono text-[10px] uppercase tracking-[0.12em] mb-3 px-2 py-1 rounded-full inline-block"
          style={{ background: `${color}18`, color, border: `1px solid ${color}40` }}
        >
          {ownLabel || 'OWN DATA'}
        </div>
      )}
      <div
        className="font-mono font-medium mb-2 tabular-nums"
        style={{ fontSize: 'clamp(36px, 5vw, 56px)', color, lineHeight: 1 }}
      >
        {num}
      </div>
      <div className="font-body font-semibold text-[15px] mb-2" style={{ color: 'var(--text-hi)' }}>
        {label}
      </div>
      <p className="font-body text-[13px] leading-[1.6] mb-3" style={{ color: 'var(--text-mid)' }}>
        {desc}
      </p>
      <div className="font-mono text-[11px]" style={{ color: 'var(--text-low)' }}>
        {sourceUrl ? (
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {source}
          </a>
        ) : (
          source
        )}
        {linkSlug && (
          <> · <a href={`/work/${linkSlug}`} className="hover:underline" style={{ color: 'var(--accent)' }}>see breakdown →</a></>
        )}
      </div>
    </div>
  )
}

export default function ProblemSection() {
  return (
    <section className="py-32" id="problem" aria-labelledby="problem-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-4">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>
            The data problem no one prices in
          </div>
          <h2
            id="problem-heading"
            className="font-display mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-hi)', fontWeight: 400 }}
          >
            Most companies are building for a customer{' '}
            <em>they&#39;ve never actually understood.</em>
          </h2>
          <p className="font-body text-[16px] max-w-[52ch]" style={{ color: 'var(--text-mid)' }}>
            Not for lack of data — for lack of the read underneath it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <StatCard
            num="80% → 8%"
            label="say they deliver a superior experience — customers disagree"
            desc="Bain surveyed 362 firms: 80% believed they delivered a superior experience. Only 8% of their customers agreed."
            source="Bain & Company — Closing the Delivery Gap"
            sourceUrl="https://media.bain.com/bainweb/PDFs/cms/hotTopics/closingdeliverygap.pdf"
            color="var(--accent)"
            delay={0}
          />
          <StatCard
            num="~95%"
            label="of new products fail to meet expectations"
            desc="Across ~30,000 launches a year. The common thread isn't the product — it's that it was built on internal assumptions instead of validated customer need."
            source="Harvard Business School via Inc."
            sourceUrl="https://www.inc.com/marc-emmer/95-percent-of-new-products-fail-here-are-6-steps-to-make-sure-yours-dont.html"
            color="var(--danger)"
            delay={100}
          />
          <StatCard
            num="14%"
            label="retention lift hiding in one cohort that aggregates masked"
            desc="In 3.2M Starbucks loyalty records, the mid-frequency cohort was churning at a rate aggregate BI views couldn't see. Segment-level clustering surfaced it. (projected, causal DiD model)"
            source="BU MSBA Capstone · Starbucks loyalty dataset · 2024"
            color="var(--accent)"
            isOwn
            ownLabel="MY WORK · PROJECTED"
            linkSlug="starbucks"
            delay={200}
          />
          <StatCard
            num="Neg."
            label="ROAS in a channel that looked profitable — until we segmented it"
            desc="In a British Airways fare-class elasticity model, a retargeting channel read positive ROAS in blended dashboards and negative at the leisure mid-tier segment level."
            source="BU MSBA Capstone · British Airways · 2024"
            color="var(--danger)"
            isOwn
            ownLabel="MY WORK · MODELED"
            linkSlug="british-airways"
            delay={300}
          />
        </div>
      </div>
    </section>
  )
}
