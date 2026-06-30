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
    e.preventDefault(); if (!valid) return; setStatus('loading')
    try {
      await fetch('https://formsubmit.co/ajax/divyesh.annavarapu@gmail.com', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ _subject: 'Slot Booking from ' + name + (company ? ' @ ' + company : ''), _template: 'table', _captcha: 'false', Name: name, Email: email, Company: company || '(not provided)', Role: role || '(not provided)' }) })
      const url = 'https://calendly.com/divyesh-annavarapu/30min?name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email)
      window.open(url, '_blank'); setStatus('sent')
    } catch { setStatus('error') }
  }

  async function handleCallback() {
    if (!valid) return; setStatus('loading')
    try {
      await fetch('https://formsubmit.co/ajax/divyesh.annavarapu@gmail.com', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ _subject: 'Callback request from ' + name + (company ? ' @ ' + company : ''), _template: 'table', _captcha: 'false', Type: 'Callback request', Name: name, Email: email, Company: company || '(not provided)', Role: role || '(not provided)' }) })
      setStatus('sent')
    } catch { setStatus('error') }
  }

  const labelStyle: React.CSSProperties = { fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--glass-mid)', display: 'block', marginBottom: '6px', fontWeight: 500 }
  const inputStyle: React.CSSProperties = { width: '100%', height: '48px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', padding: '0 16px', fontSize: '16px', fontFamily: 'var(--font-inter)', color: 'var(--glass-hi)', background: 'rgba(255,255,255,0.07)', outline: 'none' }

  return (
    <section id="book" aria-labelledby="book-heading" style={{ padding: '128px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '64px', alignItems: 'start' }} className="book-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>Book a Session</span>
            </div>
            <h2 id="book-heading" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, color: 'var(--text-hi)', marginBottom: '24px' }}>15 minutes. Free. No pitch.</h2>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '19px', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '20px' }}>Not a sales call. I will look at your consumer model, your cohort structure, or your attribution setup, and tell you what I see. If there is something worth fixing, we will talk about how. If there is not, you will know in 15 minutes.</p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '28px' }}>I got here by being the person in the room who actually read the data, from a go to market desk to 3.2M Starbucks records at BU. I take these calls because the fastest way to show I am useful is to be useful first.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Bring a specific question, or just a messy problem.', 'No NDAs needed. I will sign yours if you have one.', 'Good for founders, PMs, growth leads, data teams, and CMOs.', 'Open to full time roles in consumer insights, growth analytics, and data science.'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'var(--font-inter)', fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true">&#x25CF;</span>{item}
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: 'var(--text-low)' }}>BU Questrom MSBA &apos;26 &nbsp;&bull;&nbsp; British Airways, Starbucks, Newdia Fenway &nbsp;&bull;&nbsp; US authorized to work 3+ years</p>
          </div>

          <div>
            <div style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', borderRadius: '16px', padding: '32px' }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>&#x2713;</div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', fontWeight: 600, color: 'var(--glass-hi)', marginBottom: '8px' }}>Got it.</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: 'var(--glass-mid)' }}>I will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', fontWeight: 600, color: 'var(--glass-hi)', marginBottom: '8px' }}>Book a free 15 min call</div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--glass-mid)', marginBottom: '24px' }}>Add your name and email, then pick a live slot or request a callback.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                    <div><label htmlFor="book-name" style={labelStyle}>First name <span style={{ color: '#ef4444' }}>*</span></label><input id="book-name" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Alex" style={inputStyle} /></div>
                    <div><label htmlFor="book-email" style={labelStyle}>Work email <span style={{ color: '#ef4444' }}>*</span></label><input id="book-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="alex@company.com" style={inputStyle} /></div>
                    <div><label htmlFor="book-company" style={labelStyle}>Company <span style={{ color: 'var(--glass-low)', fontWeight: 400 }}>(optional)</span></label><input id="book-company" type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Acme Inc." style={inputStyle} /></div>
                    <div><label htmlFor="book-role" style={labelStyle}>Role or title <span style={{ color: 'var(--glass-low)', fontWeight: 400 }}>(optional)</span></label><input id="book-role" type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="Head of Growth" style={inputStyle} /></div>
                  </div>
                  <button type="submit" disabled={!valid || status === 'loading'}
                    style={{ width: '100%', height: '52px', borderRadius: '12px', background: valid ? 'var(--grad)' : 'rgba(255,255,255,0.1)', color: valid ? '#fff' : 'var(--glass-low)', fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 600, border: 'none', cursor: valid ? 'pointer' : 'not-allowed', transition: 'filter 150ms, transform 150ms', marginBottom: '12px' }}
                    onMouseEnter={e => { if (valid) { (e.currentTarget as HTMLElement).style.filter='brightness(1.08)'; (e.currentTarget as HTMLElement).style.transform='translateY(-1px)'; } }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter=''; (e.currentTarget as HTMLElement).style.transform=''; }}
                  >{status === 'loading' ? 'Opening...' : 'See available times'}</button>
                  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <button type="button" onClick={handleCallback} disabled={!valid || status === 'loading'} style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: valid ? 'var(--accent)' : 'var(--glass-low)', background: 'none', border: 'none', cursor: valid ? 'pointer' : 'default', textDecoration: 'underline' }}>Prefer a callback? Request one.</button>
                  </div>
                  {status === 'error' && <p style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#ef4444', textAlign: 'center' }}>Something went wrong. Email divyesh.annavarapu@gmail.com directly.</p>}
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--glass-low)', textAlign: 'center' }}>Picking a slot opens my live calendar. A callback means I reach out within 24 hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .book-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
