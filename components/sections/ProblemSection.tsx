export default function ProblemSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
              The problem with dashboards
            </div>
            <h2 className="font-display font-semibold leading-tight mb-6" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-hi)' }}>
              Averages are where signals<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>go to disappear.</span>
            </h2>
            <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--text-mid)', fontSize: '16px' }}>
              At Boston Tech Week and NYC Tech Week, one pattern kept repeating across every founder, PM, and growth lead I spoke to. The blended dashboard was fine. The aggregate NPS looked healthy. The ROAS was positive.
            </p>
            <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--text-mid)', fontSize: '16px' }}>
              And underneath: a mid-frequency cohort churning out. A channel bleeding at one segment while looking profitable blended. A price cliff invisible in the fare-class average.
            </p>
            <p className="font-body leading-relaxed font-medium" style={{ color: 'var(--text-hi)', fontSize: '16px' }}>
              That read — the cohort, the price cliff, the attribution that&apos;s actually causal — is the work.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                color: 'var(--accent)',
                num: '14%',
                label: 'retention lift — invisible in aggregate, surfaced at cohort level',
                source: 'BU MSBA Capstone · Starbucks loyalty dataset · 2024',
              },
              {
                color: '#a78bfa',
                num: 'Neg.',
                label: 'ROAS in a channel that looked profitable — until we segmented it',
                source: 'BU MSBA Capstone · British Airways fare data · 2024',
              },
              {
                color: 'var(--gold)',
                num: '-12%',
                label: 'conversion when menu options exceeded cognitive threshold',
                source: 'Starbucks DiD experiment · Prof. Nina Mazar complexity framework',
              },
            ].map(({ color, num, label, source }) => (
              <div
                key={num}
                className="p-5 rounded-2xl"
                style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}
              >
                <div className="font-display font-semibold text-[36px] mb-1" style={{ color }}>{num}</div>
                <div className="font-body text-[14px] mb-2" style={{ color: 'var(--text-mid)' }}>{label}</div>
                <div className="font-mono text-[11px]" style={{ color: 'var(--text-low)' }}>{source}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
