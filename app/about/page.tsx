export default function AboutPage() {
  const timeline = [
    { year: '2022–23', role: 'GTM Analyst', company: 'Sumedha IT', desc: 'Semiconductor training GTM. Stakeholder in CYIENT acquisition.' },
    { year: '2023–24', role: 'Founder', company: 'Count On Me', desc: '25+ client engagements, 35% avg engagement lift.' },
    { year: '2025', role: 'Data & Growth Analyst', company: 'Newdia Co.', desc: 'Built the first analytics function: CAC funnel, churn model (AUC 0.86), 30% promo-cannibalization signal.' },
    { year: '2026', role: 'Consumer Insights Analyst', company: 'Blue Horse Digital', desc: 'Consumer analytics and attribution work.' },
    { year: '2024–26', role: 'MS Business Analytics', company: 'BU Questrom', desc: '13 projects across causal inference, pricing, NLP, BigQuery, ML. Built RAT Lab.' },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Intro */}
        <div className="mb-20">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-6" style={{ color: 'var(--text-low)' }}>
            About
          </div>
          <h1
            className="font-display mb-8"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--text-hi)', fontWeight: 400 }}
          >
            The analyst who used to draw.
          </h1>

          <div className="space-y-5 font-body text-[17px] leading-[1.75] max-w-[68ch]" style={{ color: 'var(--text-mid)' }}>
            <p>
              Before I ever ran a regression, I was recognized by the Government of Andhra Pradesh as an art prodigy — Bala Chitra Ratna and Kala Ratna. What that actually trained was pattern recognition: noticing the structure underneath what everyone else sees as visual noise.
            </p>
            <p>
              That skill transferred completely. When I look at 3.2M Starbucks loyalty records, I&apos;m looking for the same thing I looked for when I drew — the pattern that isn&apos;t immediately obvious, the structure hiding under the surface. The difference is the output: instead of a painting, it&apos;s a 14% retention lift hiding in a cohort that aggregate metrics were smoothing away.
            </p>
            <p>
              I&apos;m finishing my MS in Business Analytics at Boston University Questrom School of Business in 2026. Before that: four years building analytics across a semiconductor GTM desk in Hyderabad, a 25+ client consulting practice, a cannabis startup, and a digital agency — plus a behavioral research tool I built from scratch that runs LLM personas as synthetic consumer panels.
            </p>
            <p>
              I&apos;m actively looking for full-time roles in consumer insights, growth analytics, or data science. Moving to Florida in July 2026. US work-authorized for 4+ years, no sponsorship needed.
            </p>
            <p style={{ color: 'var(--accent-2)' }} className="font-display italic">
              If you can find the pattern nobody else sees — it doesn&apos;t matter whether the canvas is a sketchpad or a dataset.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-8" style={{ color: 'var(--text-low)' }}>
            Career Timeline
          </div>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-8 pb-8 relative"
                style={{ borderLeft: '1px solid var(--line)', paddingLeft: '24px', marginLeft: '8px' }}
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[4.5px]"
                  style={{ background: 'var(--accent)' }}
                />
                <div className="flex-shrink-0 w-20 font-mono text-[12px]" style={{ color: 'var(--text-low)' }}>
                  {item.year}
                </div>
                <div>
                  <div className="font-body font-semibold text-[15px] mb-1" style={{ color: 'var(--text-hi)' }}>
                    {item.role} <span style={{ color: 'var(--text-low)' }}>·</span> {item.company}
                  </div>
                  <div className="font-body text-[14px]" style={{ color: 'var(--text-mid)' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/#book"
            className="font-body font-medium text-[15px] px-6 py-3 rounded-[10px] transition-all duration-150"
            style={{ background: 'var(--accent)', color: '#050507' }}
          >
            Book 15 min →
          </a>
          <a
            href="/work"
            className="font-body text-[15px] px-6 py-3 rounded-[10px] border transition-all duration-150"
            style={{ borderColor: 'var(--line)', color: 'var(--text-mid)' }}
          >
            See the work →
          </a>
        </div>
      </div>
    </div>
  )
}
