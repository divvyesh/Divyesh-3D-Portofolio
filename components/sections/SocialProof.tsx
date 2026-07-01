'use client'
import { useState } from 'react'
import Image from 'next/image'

const SCREENSHOTS = ['t1','t2','t3','t4','t5','t6','t7','t8']

export default function SocialProof() {
  const [lightbox, setLightbox] = useState<string|null>(null)

  return (
    <section className="sec" style={{ padding: '128px 0' }} aria-labelledby="proof-heading">
      <div className="sec-in" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>What People Say</span>
          </div>
          <h2 id="proof-heading" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, color: 'var(--text-hi)', marginBottom: '16px' }}>Easy to work with. Hard to forget.</h2>
        </div>

        {/* LinkedIn CTA */}
        <div style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)', borderRadius: '16px', padding: '40px', marginBottom: '64px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '17px', color: 'var(--glass-mid)', marginBottom: '20px' }}>
            See what colleagues, clients, and professors say about working with me.
          </p>
          <a
            href="https://www.linkedin.com/in/divyesh-sai-annavarapu/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #0077b5 0%, #005a8a 100%)', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 600, padding: '14px 32px', borderRadius: '12px', textDecoration: 'none', transition: 'filter 150ms, transform 150ms', boxShadow: '0 4px 20px rgba(0,119,181,0.35)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter='brightness(1.1)'; (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter=''; (e.currentTarget as HTMLElement).style.transform=''; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Click here to see my LinkedIn recommendations &#8594;
          </a>
        </div>

        {/* Evaluations */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', color: 'var(--text-low)', textTransform: 'uppercase', marginBottom: '8px' }}>Unedited. Straight from MSBA Project Teams.</div>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: 'var(--text-mid)' }}>No cleanup, no cherry picking. Actual peer and instructor evaluations from BU MSBA project teams.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {SCREENSHOTS.map(t => (
            <button key={t} onClick={() => setLightbox(t)}
              style={{ padding: 0, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden', cursor: 'zoom-in', background: 'none', display: 'block', width: '100%', transition: 'border-color 200ms, transform 200ms' }}
              aria-label={'View evaluation screenshot ' + t}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--accent)'; (e.currentTarget as HTMLElement).style.transform='scale(1.01)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.transform=''; }}
            >
              <Image src={'/images/testimonials/' + t + '.png'} alt={'Peer and instructor evaluation from BU MSBA, screenshot ' + t} width={400} height={300} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label="Evaluation screenshot enlarged"
          style={{ position: 'fixed', inset: 0, background: 'rgba(5,5,7,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', cursor: 'zoom-out' }}
        >
          <Image src={'/images/testimonials/' + lightbox + '.png'} alt="BU MSBA evaluation screenshot" width={900} height={700} style={{ maxWidth: '90vw', maxHeight: '90vh', width: 'auto', height: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }} />
        </div>
      )}
    </section>
  )
}
