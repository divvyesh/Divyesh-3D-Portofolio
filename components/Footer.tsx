import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="mt-32 py-16 border-t"
      style={{ borderColor: 'var(--line)', background: 'var(--bg-1)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-display text-[20px] font-semibold mb-1" style={{ color: 'var(--text-hi)' }}>
              Divyesh Sai Annavarapu
            </div>
            <div className="font-mono text-[12px] uppercase tracking-widest mb-3" style={{ color: 'var(--text-low)' }}>
              MS Business Analytics · BU Questrom &apos;26
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="font-mono text-[11px] px-3 py-1 rounded-full" style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.2)', color: 'var(--accent-2)' }}>
                🏆 Bala Chitra Ratna Award
              </span>
              <span className="font-mono text-[11px] px-3 py-1 rounded-full" style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.2)', color: 'var(--accent-2)' }}>
                🏅 Kala Ratna Award
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-6 flex-wrap">
              <Link href="/work" className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>Work</Link>
              <Link href="/about" className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>About</Link>
              <a href="/Divyesh_Annavarapu_Resume.pdf" target="_blank" rel="noopener" className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>Résumé ↗</a>
              <a href="https://www.linkedin.com/in/divyesh-sai-annavarapu/" target="_blank" rel="noopener" className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>LinkedIn ↗</a>
              <a href="https://github.com/divvyesh/BU-MSBA-2026" target="_blank" rel="noopener" className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>GitHub ↗</a>
              <a href="/#book" className="font-body text-[14px] transition-colors" style={{ color: 'var(--text-mid)' }}>Book Free Session</a>
            </div>
            <div className="font-mono text-[11px]" style={{ color: 'var(--text-low)' }}>
              divyesh.annavarapu@gmail.com · Boston, MA → Tampa, FL · US authorized to work 4+ years (no sponsorship needed)
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t font-mono text-[11px]" style={{ borderColor: 'var(--line)', color: 'var(--text-low)' }}>
          © 2026 Divyesh Sai Annavarapu
        </div>
      </div>
    </footer>
  )
}
