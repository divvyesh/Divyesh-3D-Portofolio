'use client'
import { useRef, useEffect, useState } from 'react'

const gaps = [
  {
    num: '01',
    lens: 'COHORT',
    title: 'Your middle cohort is churning — and your dashboard is hiding it',
    body: "Your top 20% mask the bleed. The middle cohort — highest growth potential, highest sensitivity to friction — drops off in silence while aggregate metrics stay green. That's the segment that moves the number.",
    proof: 'Starbucks · 3.2M loyalty records — 14% retention lift invisible in aggregate',
    slug: 'starbucks',
    color: 'var(--accent)',
  },
  {
    num: '02',
    lens: 'NON-LINEAR',
    title: 'Price sensitivity is non-linear — you\'re missing the cliff',
    body: "Average elasticity gives you a false ceiling. Demand breaks at a threshold, not a slope. By the time blended ROAS shows it, you've spent past the efficient return window.",
    proof: 'British Airways · 12 fare classes — regression-discontinuity elasticity model',
    slug: 'british-airways',
    color: 'var(--accent-2)',
  },
  {
    num: '03',
    lens: 'CAUSAL',
    title: 'Your attribution is backward-looking — every spend decision runs on stale signal',
    body: "Most models tell you what correlated with a conversion. Without holdout groups and causal validation, you're measuring organic trend and calling it impact. MMM without a causal scaffold is the same error at a bigger budget.",
    proof: 'British Airways · retargeting saturation — ROAS turned negative before detection',
    slug: 'british-airways',
    color: 'var(--accent)',
  },
  {
    num: '04',
    lens: 'BEHAVIORAL',
    title: "Choice architecture is costing conversions you can't trace",
    body: "Cognitive overload at decision points isn't a UX issue — it's behavioral economics. Too many options or high-friction flows trigger System 1 shutdown: people abandon because the decision is hard, not because they don't want the product.",
    proof: 'Starbucks · DiD causal experiment — cognitive load at decision points suppresses conversion',
    slug: 'starbucks',
    color: 'var(--accent-2)',
  },
  {
    num: '05',
    lens: 'STATED ≠ REAL',
    title: 'NPS is a slide number — behavioral funnels are the actual signal',
    body: "Stated preference and revealed behavior diverge under real conditions. A customer who scores you a 9 and churns two weeks later is common. Survey metrics without behavioral anchoring give you confidence in data that doesn't predict anything.",
    proof: 'Newdia Co. · built the first behavioral NPS + CAC funnel the business ever had',
    slug: 'newdia',
    color: 'var(--accent)',
  },
]

function GapRow({ gap, index }: { gap: (typeof gaps)[0]; index: number }) {
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
      className="py-8 border-b flex flex-col md:flex-row gap-6 md:gap-12 transition-all duration-500"
      style={{
        borderColor: 'var(--line)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="flex-shrink-0 flex md:flex-col gap-3 md:gap-1 md:w-28">
        <div className="font-mono font-medium text-[40px] leading-none tabular-nums" style={{ color: gap.color, opacity: 0.4 }}>
          {gap.num}
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] self-end md:self-start" style={{ color: 'var(--text-low)' }}>
          {gap.lens}
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-body font-semibold text-[18px] mb-3 leading-snug" style={{ color: 'var(--text-hi)' }}>
          {gap.title}
        </h3>
        <p className="font-body text-[15px] leading-[1.7] mb-4" style={{ color: 'var(--text-mid)' }}>
          {gap.body}
        </p>
        <a
          href={`/work/${gap.slug}`}
          className="font-mono text-[12px] hover:underline"
          style={{ color: 'var(--text-low)' }}
        >
          {gap.proof} →
        </a>
      </div>
    </div>
  )
}

export default function GapsSection() {
  return (
    <section className="py-32" id="gaps" style={{ background: 'var(--bg-1)' }} aria-labelledby="gaps-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-4">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>
            The Gaps I Look For
          </div>
          <h2
            id="gaps-heading"
            className="font-display mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-hi)', fontWeight: 400 }}
          >
            Five reads hiding in plain sight — in data you already have.
          </h2>
          <p className="font-body text-[16px] max-w-[52ch]" style={{ color: 'var(--text-mid)' }}>
            Each one found in real data — and each was invisible in the aggregate metrics the team was already watching.
          </p>
        </div>

        <div className="mt-12">
          {gaps.map((gap, i) => <GapRow key={gap.num} gap={gap} index={i} />)}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/work"
            className="font-body font-medium text-[15px] inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--accent)' }}
          >
            See all 13 analyses in full →
          </a>
        </div>
      </div>
    </section>
  )
}
