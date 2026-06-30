export default function ArtLine() {
  return (
    <section
      className="py-24 text-center"
      style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      aria-label="About the artist-analyst"
    >
      <div className="max-w-4xl mx-auto px-6">
        <p
          className="font-display leading-relaxed"
          style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', color: 'var(--text-mid)', fontStyle: 'italic', fontWeight: 400 }}
        >
          Before I read data, I drew.{' '}
          <span style={{ color: 'var(--accent-2)', fontStyle: 'normal' }}>
            Government-recognized as an art prodigy at home
          </span>{' '}
          — which was only ever pattern recognition, pointed at people instead of pixels.
        </p>
      </div>
    </section>
  )
}
