'use client'
import { useState } from 'react'
import Image from 'next/image'

const SCREENSHOTS = ['t1','t2','t3','t4','t5','t6','t7','t8']

export default function SocialProof() {
  const [lightbox, setLightbox] = useState<string|null>(null)

  return (
    <section style={{ padding: '128px 0' }} aria-labelledby="proof-heading">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} aria-hidden="true" />
            <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>
              What People Say
            </span>
          </div>
          <h2 id="proof-heading" style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.01em', fontWeight: 500, color: 'var(--text-hi)', marginBottom: '16px' }}>
            Easy to work with. Hard to forget.
          </h2>
        </div>

        {/* Tier 1: LinkedIn rec placeholder */}
        <div style={{ background: 'var(--bg-1)', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px', marginBottom: '64px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: 'var(--text-low)', fontStyle: 'italic' }}>
            LinkedIn recommendations coming soon. Connect on{' '}
            <a href="https://www.linkedin.com/in/divyesh-sai-annavarapu/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
              LinkedIn
            </a>{' '}
            to see recommendations.
          </p>
        </div>

        {/* Tier 2: Raw evaluations */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', color: 'var(--text-low)', textTransform: 'uppercase', marginBottom: '8px' }}>
            Unedited. Straight from MSBA Project Teams.
          </div>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: 'var(--text-mid)' }}>
            No cleanup, no cherry picking. Actual peer and instructor evaluations from BU MSBA project teams.
          </p>
        </div>

        {/* Screenshot masonry */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {SCREENSHOTS.map(t => (
            <button
              key={t}
              onClick={() => setLightbox(t)}
              style={{ padding: 0, border: '1px solid #000', borderRadius: '12px', overflow: 'hidden', cursor: 'zoom-in', background: 'none', display: 'block', width: '100%', transition: 'border-color 200ms, transform 200ms' }}
              aria-label={'View evaluation screenshot ' + t}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.01)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#000'; (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              <Image
                src={'/images/testimonials/' + t + '.png'}
                alt={'Peer and instructor evaluation from BU MSBA graduate project team, screenshot ' + t}
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Evaluation screenshot enlarged"
          style={{ position: 'fixed', inset: 0, background: 'rgba(5,5,7,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', cursor: 'zoom-out' }}
        >
          <Image
            src={'/images/testimonials/' + lightbox + '.png'}
            alt={'BU MSBA evaluation screenshot'}
            width={900}
            height={700}
            style={{ maxWidth: '90vw', maxHeight: '90vh', width: 'auto', height: 'auto', borderRadius: '12px', border: '1px solid var(--line)' }}
          />
        </div>
      )}
    </section>
  )
}
