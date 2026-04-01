'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav ref={navRef} id="mnav">
      <div className="nav-brand">
        <svg className="ff-logo" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,8 24,24 10,40 16,40 30,24 16,8" fill="#c9973b" />
          <polygon points="22,8 36,24 22,40 28,40 42,24 28,8" fill="#c9973b" opacity=".55" />
        </svg>
        <div className="nbtext">
          <span className="sup">Fictional Frontiers</span>
          <span className="main">Creative Counseling</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#about">Sohaib Awan</Link></li>
        <li><Link href="#voices">Voices</Link></li>
      </ul>

      <Link href="#contact" className="nav-cta">
        Begin Inquiry
      </Link>
    </nav>
  )
}