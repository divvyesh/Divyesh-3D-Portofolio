export default function TestimonialsSection() {
  const screenshots = ['t1','t2','t3','t4','t6','t7','t8']

  return (
    <section
      className="py-32"
      style={{ background: 'var(--bg-1)' }}
      id="proof"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>
            Unedited · Straight from MSBA Project Teams
          </div>
          <h2
            id="proof-heading"
            className="font-display mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-hi)', fontWeight: 400 }}
          >
            The raw version.
          </h2>
          <p className="font-body text-[16px] max-w-[52ch]" style={{ color: 'var(--text-mid)' }}>
            No cleanup, no cherry-picking — actual peer and instructor evaluations from BU MSBA graduate project teams.
          </p>
        </div>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
          {screenshots.map(t => (
            <img
              key={t}
              src={`/images/testimonials/${t}.png`}
              alt={`Peer evaluation screenshot ${t}`}
              className="w-full rounded-[12px] block"
              style={{ border: '1px solid var(--line)' }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
