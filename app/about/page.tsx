import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Divyesh Annavarapu',
  description: 'Consumer insights analyst and MSBA candidate at Boston University Questrom. I find the signal your dashboard averages away.',
}

const stack = [
  { category: 'Analysis', tools: ['Python (pandas, scikit-learn, statsmodels)', 'R (ggplot2, lme4)', 'SQL / BigQuery'] },
  { category: 'Modeling', tools: ['K-Means Clustering', 'XGBoost / Random Forest', 'DiD Causal Inference', 'Factor Analysis', 'Elasticity Modeling'] },
  { category: 'Visualization', tools: ['Tableau', 'Power BI', 'matplotlib / seaborn', 'Looker'] },
  { category: 'Research', tools: ['Survey Design', 'A/B Experimentation', 'Thematic Coding', 'Competitive Analysis'] },
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
            About
          </div>
          <h1 className="font-display font-semibold leading-tight mb-6" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--text-hi)' }}>
            Divyesh Sai Annavarapu
          </h1>
          <div className="font-mono text-[13px] mb-8" style={{ color: 'var(--text-low)' }}>
            MS Business Analytics · BU Questrom &apos;26 · Boston, MA → Tampa, FL
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display font-semibold text-[22px] mb-5" style={{ color: 'var(--text-hi)' }}>
              The work
            </h2>
            <div className="space-y-4 font-body text-[15px] leading-relaxed" style={{ color: 'var(--text-mid)' }}>
              <p>
                I&apos;m a consumer insights and growth analytics analyst finishing an MS in Business Analytics at Boston University&apos;s Questrom School of Business.
              </p>
              <p>
                My work is built around one question: what is the aggregate dashboard averaging out of existence? The blended ROAS that masks a losing segment. The retention metric that hides a mid-frequency churn signal. The NPS score that averages three entirely different user experiences into one meaningless number.
              </p>
              <p>
                I find those signals — using clustering, causal inference, cohort analysis, and segment-level modeling — and turn them into decisions that can actually be acted on.
              </p>
              <p>
                13 analyses across real datasets. Every project started with a signal someone was smoothing away.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display font-semibold text-[22px] mb-5" style={{ color: 'var(--text-hi)' }}>
              The background
            </h2>
            <div className="space-y-4 font-body text-[15px] leading-relaxed" style={{ color: 'var(--text-mid)' }}>
              <p>
                Government-recognized art prodigy back in India — Bala Chitra Ratna and Kala Ratna awards — which is really just pattern-recognition trained on people instead of pixels. Same skill, different domain.
              </p>
              <p>
                Boston Tech Week and NYC Tech Week attendee. Every conversation I had there pointed to the same problem: leaders had dashboards. They didn&apos;t have reads.
              </p>
              <p>
                US authorized to work 4+ years on OPT. No sponsorship needed in the near term. Moving to Tampa, FL in July 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="flex flex-wrap gap-3 mb-16">
          {[
            { emoji: '🏆', label: 'Bala Chitra Ratna Award', sub: 'Government of India · Art Prodigy Recognition' },
            { emoji: '🏅', label: 'Kala Ratna Award', sub: 'State-level Arts Excellence' },
            { emoji: '🎓', label: 'BU MSBA \'26', sub: 'Questrom School of Business · Boston' },
          ].map(({ emoji, label, sub }) => (
            <div key={label} className="p-4 rounded-2xl flex items-center gap-3" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
              <span className="text-[24px]">{emoji}</span>
              <div>
                <div className="font-body font-medium text-[14px]" style={{ color: 'var(--text-hi)' }}>{label}</div>
                <div className="font-mono text-[11px]" style={{ color: 'var(--text-low)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="mb-16">
          <h2 className="font-display font-semibold text-[22px] mb-8" style={{ color: 'var(--text-hi)' }}>
            One stack. Every tool earned in a live project.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stack.map(({ category, tools }) => (
              <div key={category} className="p-5 rounded-2xl" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
                <div className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
                  {category}
                </div>
                <ul className="space-y-2">
                  {tools.map((tool) => (
                    <li key={tool} className="font-body text-[13px] leading-snug" style={{ color: 'var(--text-mid)' }}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="p-8 rounded-2xl" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
          <h2 className="font-display font-semibold text-[22px] mb-4" style={{ color: 'var(--text-hi)' }}>
            Let&apos;s talk
          </h2>
          <p className="font-body text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-mid)' }}>
            Open to full-time roles in consumer insights, growth analytics, and strategy. Available immediately for contract work or free 15-min portfolio sessions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:divyesh.annavarapu@gmail.com" className="font-body text-[14px] font-medium px-5 py-2.5 rounded-[10px]" style={{ background: 'var(--accent)', color: '#050507' }}>
              Email me →
            </a>
            <a href="https://www.linkedin.com/in/divyesh-sai-annavarapu/" target="_blank" rel="noopener" className="font-body text-[14px] px-5 py-2.5 rounded-[10px]" style={{ background: 'var(--bg-2)', color: 'var(--text-mid)', border: '1px solid var(--line)' }}>
              LinkedIn ↗
            </a>
            <a href="/#book" className="font-body text-[14px] px-5 py-2.5 rounded-[10px]" style={{ background: 'var(--bg-2)', color: 'var(--text-mid)', border: '1px solid var(--line)' }}>
              Book 15 min
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
