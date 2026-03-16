import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  /* ── scroll shadow ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* ── lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── Escape key closes menu ── */
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">SS.</a>

        {/* Desktop links */}
        <ul className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none' }}>
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="nav-link-item">{l}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="btn-theme" onClick={toggle} title="Toggle theme">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            )}
          </button>
          <a href="#contact" className="btn-hire">Hire Me</a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) close() }}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={close}>{l}</a>
        ))}
        <div className="nav-divider" />
        <a href="#contact" className="mobile-hire-btn" onClick={close}>Hire Me →</a>
      </div>
    </>
  )
}
