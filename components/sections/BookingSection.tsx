export default function BookingSection() {
  return (
    <section id="book" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
          Free 15-minute session
        </div>
        <h2 className="font-display font-semibold leading-tight mb-6" style={{ fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--text-hi)' }}>
          Is there a signal hiding<br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>in your data right now?</span>
        </h2>
        <p className="font-body leading-relaxed mb-10 mx-auto max-w-xl" style={{ color: 'var(--text-mid)', fontSize: '16px' }}>
          15 minutes. No pitch. I&apos;ll ask three questions about your data, tell you if I see a thread worth pulling,
          and show you exactly how I&apos;d pull it. You walk away with a read — whether we work together or not.
        </p>

        <div className="inline-block p-8 rounded-3xl mb-10" style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}>
          {/* Calendly embed placeholder */}
          <div className="text-center mb-6">
            <div className="font-body font-medium text-[16px] mb-2" style={{ color: 'var(--text-hi)' }}>
              Book directly via Calendly
            </div>
            <div className="font-mono text-[12px]" style={{ color: 'var(--text-low)' }}>
              Pick a slot · 15 min · Zoom or Google Meet
            </div>
          </div>
          <a
            href="https://calendly.com/divyesh-annavarapu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-medium px-8 py-4 rounded-[14px] block text-center transition-all duration-200"
            style={{ background: 'var(--accent)', color: '#050507', fontSize: '16px' }}
          >
            Schedule free session →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: '⏱', text: '15 min, no pitch' },
            { icon: '🎯', text: 'You get a real read' },
            { icon: '🔒', text: 'Your data stays private' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <span className="text-[18px]">{icon}</span>
              <span className="font-body text-[14px]" style={{ color: 'var(--text-mid)' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
