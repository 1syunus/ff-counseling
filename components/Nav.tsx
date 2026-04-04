'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleLinkClick() {
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav ref={navRef} id="mnav">
      <div className="nav-brand">
        <svg className="ff-logo" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,8 24,24 10,40 16,40 30,24 16,8" fill="#c9973b" />
          <polygon points="22,8 36,24 22,40 28,40 42,24 28,8" fill="#40e8e8" opacity=".7" />
        </svg>
        <div className="nbtext">
          <span className="sup">Fictional Frontiers</span>
          <span className="main">Creative Counseling</span>
        </div>
      </div>
      
      {/* Desktop links */}  
      <ul className="nav-links">
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#about">Sohaib Awan</Link></li>
        <li><Link href="#voices">Voices</Link></li>
      </ul>

      <Link href="#contact" className="nav-cta nav-cta--desktop" onClick={handleLinkClick}>
        Begin Inquiry
      </Link>

      {/* Hamburger button */}
      <button
        className={`nav-burger${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}>
        <ul className="nav-drawer-links">
          <li><Link href="#services" onClick={handleLinkClick}>Services</Link></li>
          <li><Link href="#about"    onClick={handleLinkClick}>Sohaib Awan</Link></li>
          <li><Link href="#voices"   onClick={handleLinkClick}>Voices</Link></li>
        </ul>
        <Link href="#contact" className="nav-cta nav-cta--mobile"
          onClick={handleLinkClick}>
          Begin Inquiry
        </Link>
      </div>
    </nav>
  )
}