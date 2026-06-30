'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', borderTop: '1px solid var(--glass-border)', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px', marginBottom: '48px', alignItems: 'start' }} className="footer-cols">
          <div>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', fontWeight: 600, color: 'var(--glass-hi)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Div<span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', marginLeft: '1px' }} aria-hidden="true" />
            </div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--glass-mid)', lineHeight: 1.6, maxWidth: '30ch' }}>Consumer insights and growth analytics. Boston to Tampa.</p>
          </div>
          <nav aria-label="Footer navigation">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
              {[
                { href: '/#problem', label: 'Problem' },
                { href: '/#insights', label: 'Insights' },
                { href: '/#skills', label: 'Skills' },
                { href: '/#work', label: 'Work' },
                { href: '/about', label: 'About' },
                { href: '/Divyesh_Annavarapu_Resume.pdf', label: 'Resume', ext: true },
              ].map(({ href, label, ext }) => (
                <a key={href} href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined}
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--glass-mid)', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='var(--accent)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='var(--glass-mid)'; }}
                >{label}</a>
              ))}
            </div>
          </nav>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end', alignItems: 'flex-start' }} className="footer-social">
            {[
              { href: 'https://www.linkedin.com/in/divyesh-sai-annavarapu/', label: 'LinkedIn' },
              { href: 'https://github.com/divvyesh', label: 'GitHub' },
              { href: 'mailto:divyesh.annavarapu@gmail.com', label: 'Email' },
            ].map(({ href, label }) => (
              <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--glass-mid)', textDecoration: 'none', transition: 'color 150ms' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='var(--accent)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='var(--glass-mid)'; }}
              >{label}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--glass-low)' }}>
            BU Questrom MSBA &apos;26 &nbsp;&bull;&nbsp; US authorized to work 3+ years &nbsp;&bull;&nbsp; &copy; 2026 Divyesh Annavarapu
          </p>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .footer-cols { grid-template-columns: 1fr !important; } .footer-social { justify-content: flex-start !important; } }`}</style>
    </footer>
  )
}
