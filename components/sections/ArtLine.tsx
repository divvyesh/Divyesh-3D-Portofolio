export default function ArtLine() {
  return (
    <section
      className="py-24 text-center"
      style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      aria-label="Analyst hook"
    >
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <p
          className="font-display leading-relaxed"
          style={{ fontSize: 'clamp(20px, 3vw, 32px)', color: 'var(--text-hi)', fontWeight: 400 }}
        >
          Your retention metric looked{' '}
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>flat</span>.
        </p>
        <p
          className="font-display leading-relaxed"
          style={{ fontSize: 'clamp(16px, 2.2vw, 24px)', color: 'var(--text-mid)', fontWeight: 300 }}
        >
          Hidden inside: a mid-frequency cohort churning at{' '}
          <span style={{ color: 'var(--accent-2)', fontStyle: 'normal', fontWeight: 600 }}>2× the aggregate rate</span>.{' '}
          3.2M records. One cluster. A signal invisible in every top-line view.
        </p>
        <p
          className="font-display leading-relaxed"
          style={{ fontSize: 'clamp(14px, 1.8vw, 20px)', color: 'var(--text-low)', fontStyle: 'italic' }}
        >
          Most dashboards are built to smooth that out.{' '}
          <span style={{ color: 'var(--text-mid)', fontStyle: 'normal' }}>
            I build the models that surface it — then make the call on what to do next.
          </span>
        </p>
      </div>
    </section>
  )
}
