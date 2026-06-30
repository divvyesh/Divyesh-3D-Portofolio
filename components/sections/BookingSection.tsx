'use client'
import { useState } from 'react'

export default function BookingSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'sent'|'error'>('idle')

  const valid = name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) return
    setStatus('loading')
    try {
      await fetch('https://formsubmit.co/ajax/divyesh.annavarapu@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'Slot Booking from ' + name + (company ? ' @ ' + company : ''),
          _template: 'table',
          _captcha: 'false',
          Name: name,
          Email: email,
          Company: company || '(not provided)',
          Role: role || '(not provided)',
        }),
      })
      const url = 'https://calendly.com/divyesh-annavarapu/30min?name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email)
      window.open(url, '_blank')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  async function handleCallback() {
    if (!valid) return
    setStatus('loading')
    try {
      await fetch('https://formsubmit.co/ajax/divyesh.annavarapu@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'Callback request from ' + name + (company ? ' @ ' + company : ''),
          _template: 'table',
          _captcha: 'false',
          Type: 'Callback request',
          Name: name,
          Email: email,
          Company: company || '(not provided)',
          Role: role || '(not provided)',
        }),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const labelStyle = { fontFamily: 'var(--font-inter)', fontSize: '13px', color: '#6b7280', display: 'block', marginBottom: '6px', fontWeight: 500 }
  const inputStyle = { width: '100%', height: '48px', borderRadius: '10px', border: '1px solid #d9dde7', padding: '0 16px', fontSize: '16px', fontFamily: 'var(--font-inter)', color: 'var(--ink)', background: '#fff', outline: 'none' }

  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      style={{ background: 'var(--bg-light)', padding: '128px 0' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '64px', alignItems: 'start' }} className="book-grid">
          {/* LEFT: Pitch */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Book a Session
              </span>
            </div>

            <h2
              id="book-heading"
              style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, color: 'var(--ink)', marginBottom: '24px' }}
            >
              15 minutes. Free. No pitch.
            </h2>

            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '19px', color: '#374151', lineHeight: 1.6, marginBottom: '20px' }}>
              Not a sales call. I will look at your consumer model, your cohort structure, or your attribution setup, and tell you what I see. If there is something worth fixing, we will talk about how. If there is not, you will know in 15 minutes.
            </p>

            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', color: '#374151', lineHeight: 1.6, marginBottom: '28px' }}>
              Why I do this. I got here by being the person in the room who actually read the data, from a go to market desk to 3.2M Starbucks records at BU. I take these calls because the fastest way to show I am useful is to be useful first. Happy to do this pro bono for small teams who would benefit, and open to full time roles where this is the job.
            </p>

            <div style={{ marginBottom: '28px' }}>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: 600, color: 'var(--accent)' }}>What is after the call:</span>
              <span style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: '#374151', marginLeft: '8px' }}>
                If we find something real, most of these turn into a focused, paid sprint. If we do not, you walk away with a sharper read and zero obligation.
              </span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Bring a specific question, or just a messy problem.',
                'No NDAs needed. I will sign yours if you have one.',
                'Good for founders, PMs, growth leads, data teams, and CMOs.',
                'Open to full time roles in consumer insights, growth analytics, and data science.',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-inter)', fontSize: '16px', color: '#374151', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true">&#x25CF;</span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#6b7280' }}>
              BU Questrom MSBA &apos;26 &nbsp;&bull;&nbsp; British Airways, Starbucks, Newdia Fenway &nbsp;&bull;&nbsp; US authorized to work 3+ years
            </p>
          </div>

          {/* RIGHT: Form */}
          <div>
            <div style={{ background: '#fff', border: '1px solid #e4e7ef', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 24px rgba(12,13,18,0.06)' }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>&#x2713;</div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Got it.</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: '#6b7280' }}>I will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                    Book a free 15 min call
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: '#6b7280', marginBottom: '24px' }}>
                    Add your name and email, then pick a live slot or request a callback.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                    <div>
                      <label htmlFor="book-name" style={labelStyle}>First name <span style={{ color: '#ef4444' }}>*</span></label>
                      <input id="book-name" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Alex" style={inputStyle} />
                    </div>
                    <div>
                      <label htmlFor="book-email" style={labelStyle}>Work email <span style={{ color: '#ef4444' }}>*</span></label>
                      <input id="book-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="alex@company.com" style={inputStyle} />
                    </div>
                    <div>
                      <label htmlFor="book-company" style={labelStyle}>Company <span style={{ color: '#9ca3af', fontWeight: 400 }}>(optional)</span></label>
                      <input id="book-company" type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Acme Inc." style={inputStyle} />
                    </div>
                    <div>
                      <label htmlFor="book-role" style={labelStyle}>Role or title <span style={{ color: '#9ca3af', fontWeight: 400 }}>(optional)</span></label>
                      <input id="book-role" type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="Head of Growth" style={inputStyle} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!valid || status === 'loading'}
                    style={{
                      width: '100%',
                      height: '52px',
                      borderRadius: '12px',
                      background: valid ? 'var(--grad)' : '#e5e7eb',
                      color: valid ? '#fff' : '#9ca3af',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '16px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: valid ? 'pointer' : 'not-allowed',
                      transition: 'filter 150ms, transform 150ms',
                      marginBottom: '12px',
                    }}
                    onMouseEnter={e => { if (valid) { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; } }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = ''; (e.currentTarget as HTMLElement).style.transform = ''; }}
                  >
                    {status === 'loading' ? 'Opening...' : 'See available times'}
                  </button>

                  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <button
                      type="button"
                      onClick={handleCallback}
                      disabled={!valid || status === 'loading'}
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: valid ? 'var(--accent)' : '#9ca3af', background: 'none', border: 'none', cursor: valid ? 'pointer' : 'default', textDecoration: 'underline' }}
                    >
                      Prefer a callback? Request one.
                    </button>
                  </div>

                  {status === 'error' && (
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#ef4444', textAlign: 'center' }}>
                      Something went wrong. Email divyesh.annavarapu@gmail.com directly.
                    </p>
                  )}

                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: '#9ca3af', textAlign: 'center' }}>
                    Picking a slot opens my live calendar. A callback means I reach out within 24 hours. Both notify divyesh.annavarapu@gmail.com.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .book-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
