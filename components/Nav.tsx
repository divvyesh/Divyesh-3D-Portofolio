'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/#problem', label: 'Problem' },
  { href: '/#insights', label: 'Insights' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { if (open) document.body.style.overflow = 'hidden'; else document.body.style.overflow = ''; }, [open])

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          height: '68px',
          background: 'rgba(5,5,7,0.72)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ fontFamily: 'var(--font-inter)', fontSize: '20px', fontWeight: 600, color: 'var(--text-hi)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Div<span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', marginLeft: '1px', verticalAlign: 'baseline', position: 'relative', top: '-1px' }} aria-hidden="true" />
          </Link>

          {/* Center links */}
          <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || (href === '/about' && pathname === '/about')
              return (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '15px',
                    color: isActive ? 'var(--accent)' : 'var(--text-mid)',
                    textDecoration: 'none',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                >
                  {label}
                  {isActive && (
                    <span style={{ position: 'absolute', bottom: '-6px', left: 0, right: 0, height: '2px', background: 'var(--accent)', borderRadius: '1px' }} />
                  )}
                </a>
              )
            })}
          </div>

          {/* Right: Book button */}
          <a
            href="#book"
            className="hidden md:inline-flex"
            style={{
              height: '44px',
              padding: '0 24px',
              borderRadius: '12px',
              background: 'var(--grad)',
              color: '#fff',
              fontFamily: 'var(--font-inter)',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = ''; (e.currentTarget as HTMLElement).style.transform = ''; }}
          >
            Book a free 15 min call <span aria-hidden="true">&#8594;</span>
          </a>

          {/* Mobile: hamburger + book */}
          <div className="flex md:hidden" style={{ gap: '12px', alignItems: 'center' }}>
            <a href="#book" style={{ height: '40px', padding: '0 16px', borderRadius: '10px', background: 'var(--grad)', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              Book call
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              style={{ width: '40px', height: '40px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-hi)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px', padding: '8px' }}
            >
              <span style={{ display: 'block', height: '2px', background: 'currentColor', borderRadius: '1px', transition: 'transform 200ms', transform: open ? 'rotate(45deg) translate(5px,5px)' : '' }} />
              <span style={{ display: 'block', height: '2px', background: 'currentColor', borderRadius: '1px', transition: 'opacity 200ms', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', height: '2px', background: 'currentColor', borderRadius: '1px', transition: 'transform 200ms', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu sheet */}
      {open && (
        <div
          className="md:hidden"
          style={{ position: 'fixed', inset: 0, zIndex: 49, background: 'rgba(5,5,7,0.97)', display: 'flex', flexDirection: 'column', paddingTop: '80px', paddingLeft: '32px' }}
          onClick={() => setOpen(false)}
        >
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} style={{ fontFamily: 'var(--font-inter)', fontSize: '28px', fontWeight: 500, color: 'var(--text-hi)', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
              {label}
            </a>
          ))}
          <a href="#book" style={{ marginTop: '32px', fontFamily: 'var(--font-inter)', fontSize: '17px', fontWeight: 600, color: '#fff', background: 'var(--grad)', padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', display: 'inline-block' }}>
            Book a free 15 min call
          </a>
        </div>
      )}
    </>
  )
}
