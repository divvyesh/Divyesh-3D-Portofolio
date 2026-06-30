const testimonials = [
  {
    quote: "Divyesh doesn't just deliver analysis — he delivers the conversation the data was trying to have. Every recommendation came with the 'why it matters now' that made it immediately actionable.",
    name: "Prof. Nina Mazar",
    role: "Professor of Marketing · BU Questrom School of Business",
    img: null,
  },
  {
    quote: "I've worked with analysts who can pull numbers and analysts who can tell stories. Divyesh does both — but more importantly, he knows which story the data is actually trying to tell, not just the one you asked for.",
    name: "Industry Mentor",
    role: "Growth Analytics Lead",
    img: null,
  },
  {
    quote: "His Starbucks cohort analysis found a retention signal we had been averaging out of existence for months. The mid-frequency churn was there. We just needed someone who knew to look at the segment, not the average.",
    name: "Analytics Peer Review",
    role: "BU MSBA Program · 2024",
    img: null,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-1)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
          What people say
        </div>
        <h2 className="font-display font-semibold leading-tight mb-14" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-hi)' }}>
          The read behind the work.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role }) => (
            <div
              key={name}
              className="p-6 rounded-2xl flex flex-col gap-4"
              style={{ background: 'var(--bg-2)', border: '1px solid var(--line)' }}
            >
              <div className="font-display text-[32px] leading-none" style={{ color: 'var(--accent)', opacity: 0.3 }}>&ldquo;</div>
              <p className="font-body text-[14px] leading-relaxed flex-1" style={{ color: 'var(--text-mid)' }}>
                {quote}
              </p>
              <div className="pt-4 border-t" style={{ borderColor: 'var(--line)' }}>
                <div className="font-body font-medium text-[14px]" style={{ color: 'var(--text-hi)' }}>{name}</div>
                <div className="font-mono text-[11px] mt-1" style={{ color: 'var(--text-low)' }}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
