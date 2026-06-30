'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/Divyesh_Annavarapu_Resume.pdf', label: 'Résumé ↗', external: true },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6"
      style={{
        background: 'rgba(5, 5, 7, 0.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[18px] font-semibold tracking-[-0.01em] hover:text-accent transition-colors duration-150"
          style={{ color: 'var(--text-hi)' }}
        >
          Div.
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label, external }) => {
            const isActive = !external && pathname === href
            return external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[14px] transition-colors duration-150"
                style={{ color: 'var(--text-mid)' }}
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className="font-body text-[14px] transition-colors duration-150 relative"
                style={{ color: isActive ? 'var(--accent)' : 'var(--text-mid)' }}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute -bottom-[22px] left-0 right-0 h-[2px] rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
              </Link>
            )
          })}
          <a
            href="/#book"
            className="font-body text-[14px] font-medium px-4 py-2 rounded-[10px] transition-all duration-150"
            style={{
              background: 'var(--accent)',
              color: '#050507',
            }}
          >
            Book 15 min →
          </a>
        </div>

        <a
          href="/#book"
          className="md:hidden font-body text-[14px] font-medium px-4 py-2 rounded-[10px]"
          style={{ background: 'var(--accent)', color: '#050507' }}
        >
          Book 15 min →
        </a>
      </div>
    </nav>
  )
}
