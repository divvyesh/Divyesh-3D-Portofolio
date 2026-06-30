const gaps = [
  {
    icon: '◎',
    title: 'The cohort nobody flagged',
    desc: 'Mid-frequency Starbucks customers churning at 2.3x the rate of the blended average — masked for months until segment-level clustering surfaced it.',
    tag: 'Retention · Cohort Analysis',
  },
  {
    icon: '◈',
    title: 'The price cliff in your fare class',
    desc: 'British Airways leisure mid-tier segment generating negative ROAS while the blended channel number read positive. The cliff was there. The average hid it.',
    tag: 'Pricing · Attribution',
  },
  {
    icon: '◉',
    title: 'The attribution that was lying',
    desc: 'Last-click overstating paid search ROAS by 3.2x. Organic and email were the actual conversion drivers — underinvested for months due to attribution blindness.',
    tag: 'Attribution · Growth Analytics',
  },
  {
    icon: '⬡',
    title: 'The complexity suppressing conversion',
    desc: 'Menu options above a cognitive threshold cut Starbucks conversion by 12% — statistically significant, invisible in aggregate sales data due to volume offsets.',
    tag: 'Experimentation · Causal Inference',
  },
  {
    icon: '◇',
    title: 'The segment buried in your NPS',
    desc: 'Three Headway user archetypes — identical average NPS, entirely different retention drivers. One needs badges, one needs freshness, one needs friction removal.',
    tag: 'Consumer Insights · Segmentation',
  },
]

export default function GapsSection() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-1)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
          Five reads hiding in plain sight
        </div>
        <h2 className="font-display font-semibold leading-tight mb-16" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-hi)' }}>
          In data you already have.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gaps.map(({ icon, title, desc, tag }) => (
            <div
              key={title}
              className="p-6 rounded-2xl group"
              style={{ background: 'var(--bg-2)', border: '1px solid var(--line)' }}
            >
              <div className="text-[28px] mb-4" style={{ color: 'var(--accent)', opacity: 0.7 }}>{icon}</div>
              <h3 className="font-display font-semibold text-[17px] mb-3 leading-snug" style={{ color: 'var(--text-hi)' }}>
                {title}
              </h3>
              <p className="font-body text-[13px] leading-relaxed mb-4" style={{ color: 'var(--text-mid)' }}>
                {desc}
              </p>
              <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: 'rgba(110,231,183,0.08)', color: 'var(--accent)', border: '1px solid rgba(110,231,183,0.15)' }}>
                {tag}
              </span>
            </div>
          ))}
          {/* CTA card */}
          <div
            className="p-6 rounded-2xl flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, rgba(110,231,183,0.08) 0%, rgba(245,200,66,0.04) 100%)', border: '1px solid rgba(110,231,183,0.2)' }}
          >
            <div>
              <div className="font-display font-semibold text-[17px] mb-3 leading-snug" style={{ color: 'var(--text-hi)' }}>
                Is one hiding in yours?
              </div>
              <p className="font-body text-[13px] leading-relaxed mb-6" style={{ color: 'var(--text-mid)' }}>
                15 minutes. I&apos;ll tell you if there&apos;s a signal worth pulling.
              </p>
            </div>
            <a
              href="#book"
              className="font-body text-[14px] font-medium px-5 py-2.5 rounded-[10px] text-center"
              style={{ background: 'var(--accent)', color: '#050507' }}
            >
              Book free session →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
