'use client'
import { useState } from 'react'

export default function BookingSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'sent'|'error'>('idle')

  const valid = name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  async function handleSubmit(type: 'slot'|'callback') {
    if (!valid) return
    setStatus('loading')
    try {
      await fetch('https://formsubmit.co/ajax/divyesh.annavarapu@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `${type === 'slot' ? '📅 Slot Booking' : '📲 Callback'} — ${name}${company ? ` @ ${company}` : ''}`,
          _template: 'table',
          _captcha: 'false',
          Type: type === 'slot' ? 'Slot booking' : 'Callback request',
          Name: name, Email: email,
          Company: company || '(not provided)',
          Role: role || '(not provided)',
        }),
      })
      if (type === 'slot') {
        const url = `https://calendly.com/divyesh-annavarapu/30min?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
        window.open(url, '_blank')
      }
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-32" id="book" aria-labelledby="book-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="font-mono text-[12px] uppercase tracking-[0.12em] mb-4" style={{ color: 'var(--text-low)' }}>
              Book a Session
            </div>
            <h2
              id="book-heading"
              className="font-display mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-hi)', fontWeight: 400 }}
            >
              15 minutes. Free. No pitch.
            </h2>
            <p className="font-body text-[16px] leading-[1.7] mb-6" style={{ color: 'var(--text-mid)' }}>
              I&apos;ll look at your consumer model, cohort structure, or attribution setup and tell you what I see. If there&apos;s something worth fixing, we&apos;ll talk about how. If there isn&apos;t, you&apos;ll know in 15 minutes.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Bring a specific question — or just a messy problem',
                "No NDA needed — I'll sign yours if you have one",
                'Good for: founders, PMs, growth leads, data & CX teams',
                'Also open to: full-time roles in consumer insights, growth analytics, data science',
              ].map(item => (
                <li key={item} className="flex gap-3 font-body text-[14px]" style={{ color: 'var(--text-mid)' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="font-mono text-[12px]" style={{ color: 'var(--text-low)' }}>
              divyesh.annavarapu@gmail.com
            </div>
          </div>

          {/* Right: form */}
          <div
            className="p-8 rounded-[14px]"
            style={{ background: 'var(--bg-1)', border: '1px solid var(--line)' }}
          >
            <div className="font-body font-semibold text-[17px] mb-1" style={{ color: 'var(--text-hi)' }}>
              Book a Free 15-Min Session
            </div>
            <p className="font-body text-[13px] mb-6" style={{ color: 'var(--text-low)' }}>
              Add your name and email, then pick a live slot or request a callback.
            </p>

            {status === 'sent' ? (
              <div
                className="text-center py-8 font-body text-[15px]"
                style={{ color: 'var(--accent)' }}
              >
                ✓ Got it — I&apos;ll be in touch within 24 hours.
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.1em] mb-1 block" style={{ color: 'var(--text-low)' }}>
                      First Name <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Alex"
                      className="w-full px-3 py-2 rounded-[8px] font-body text-[14px] outline-none focus:ring-1"
                      style={{
                        background: 'var(--bg-2)',
                        border: '1px solid var(--line)',
                        color: 'var(--text-hi)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.1em] mb-1 block" style={{ color: 'var(--text-low)' }}>
                      Work Email <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-3 py-2 rounded-[8px] font-body text-[14px] outline-none focus:ring-1"
                      style={{
                        background: 'var(--bg-2)',
                        border: '1px solid var(--line)',
                        color: 'var(--text-hi)',
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.1em] mb-1 block" style={{ color: 'var(--text-low)' }}>
                      Company <span style={{ color: 'var(--text-low)' }}>(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      placeholder="Acme Inc."
                      className="w-full px-3 py-2 rounded-[8px] font-body text-[14px] outline-none focus:ring-1"
                      style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', color: 'var(--text-hi)' }}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.1em] mb-1 block" style={{ color: 'var(--text-low)' }}>
                      Role <span style={{ color: 'var(--text-low)' }}>(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={e => setRole(e.target.value)}
                      placeholder="Head of Growth"
                      className="w-full px-3 py-2 rounded-[8px] font-body text-[14px] outline-none focus:ring-1"
                      style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', color: 'var(--text-hi)' }}
                    />
                  </div>
                </div>

                <p className="font-mono text-[11px]" style={{ color: valid ? 'var(--accent)' : 'var(--text-low)' }}>
                  {valid ? '✓ Ready — pick a live slot or request a callback' : 'Fill in name and email to unlock booking'}
                </p>

                <button
                  onClick={() => handleSubmit('slot')}
                  disabled={!valid || status === 'loading'}
                  className="w-full py-3 rounded-[10px] font-body font-medium text-[15px] transition-all duration-150 disabled:opacity-40"
                  style={{ background: valid ? 'var(--accent)' : 'var(--bg-2)', color: valid ? '#050507' : 'var(--text-low)', border: valid ? 'none' : '1px solid var(--line)' }}
                >
                  {status === 'loading' ? 'Opening…' : 'See available times →'}
                </button>
                <button
                  onClick={() => handleSubmit('callback')}
                  disabled={!valid || status === 'loading'}
                  className="w-full py-2 rounded-[10px] font-body text-[14px] transition-all duration-150 disabled:opacity-40"
                  style={{ background: 'transparent', color: 'var(--text-mid)', border: '1px solid var(--line)' }}
                >
                  📲 Prefer a callback? Request one
                </button>

                {status === 'error' && (
                  <p className="font-mono text-[12px]" style={{ color: 'var(--danger)' }}>
                    Something went wrong — email me directly at divyesh.annavarapu@gmail.com
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
