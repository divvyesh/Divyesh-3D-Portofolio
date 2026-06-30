export default function ArtLine() {
  return (
    <div className="relative overflow-hidden py-6" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div
        className="flex gap-16 whitespace-nowrap"
        style={{
          animation: 'marquee 30s linear infinite',
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center">
            {[
              'Consumer Cohort Analysis',
              'Price Elasticity Modeling',
              'Retention Signal Detection',
              'Attribution Rebuilding',
              'Causal Inference · DiD',
              'Segment-Level Clustering',
              'Growth Analytics',
              'BU MSBA \'26',
            ].map((item) => (
              <span key={item} className="font-mono text-[12px] uppercase tracking-widest flex items-center gap-4" style={{ color: 'var(--text-low)' }}>
                {item}
                <span style={{ color: 'var(--accent)', opacity: 0.4 }}>◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  )
}
