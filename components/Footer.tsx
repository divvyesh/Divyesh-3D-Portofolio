import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--line)', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px', marginBottom: '48px', alignItems: 'start' }} className="footer-cols">
          {/* Left */}
          <div>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', fontWeight: 600, color: 'var(--text-hi)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Div
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', marginLeft: '1px' }} aria-hidden="true" />
            </div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.6, maxWidth: '30ch' }}>
              Consumer insights and growth analytics. Boston to Tampa.
            </p>
          </div>

          {/* Center: nav */}
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
                <a
                  key={href}
                  href={href}
                  target={ext ? '_blank' : undefined}
                  rel={ext ? 'noopener noreferrer' : undefined}
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-mid)'; }}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right: social */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end', alignItems: 'flex-start' }} className="footer-social">
            <a href="https://www.linkedin.com/in/divyesh-sai-annavarapu/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 150ms' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-mid)'; }}>
              LinkedIn
            </a>
            <a href="https://github.com/divvyesh" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 150ms' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-mid)'; }}>
              GitHub
            </a>
            <a href="mailto:divyesh.annavarapu@gmail.com" style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 150ms' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-mid)'; }}>
              Email
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', color: 'var(--text-low)' }}>
            BU Questrom MSBA &apos;26 &nbsp;&bull;&nbsp; US authorized to work 3+ years &nbsp;&bull;&nbsp; &copy; 2026 Divyesh Annavarapu
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .footer-cols { grid-template-columns: 1fr !important; } .footer-social { justify-content: flex-start !important; } }
      `}</style>
    </footer>
  )
}
