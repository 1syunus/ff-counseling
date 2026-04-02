import Link from 'next/link'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Voices',   href: '#voices'   },
  { label: 'Main Site', href: 'https://fictionalfrontiers.com', external: true },
]

export default function Footer() {
  return (
    <footer>
      <div className="fb">
        <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <polygon points="10,8 24,24 10,40 16,40 30,24 16,8" fill="#c9973b" />
          <polygon points="22,8 36,24 22,40 28,40 42,24 28,8" fill="#c9973b" opacity=".5" />
        </svg>
        <div className="fb-text">
          <strong>Fictional Frontiers</strong> — Creative Counseling<br />
          A service of Jabal Entertainment, LLC · Philadelphia, PA
        </div>
      </div>

      <ul className="fl">
        {footerLinks.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>

      <div className="fc">© 2026 Fictional Frontiers · All Rights Reserved</div>
    </footer>
  )
}