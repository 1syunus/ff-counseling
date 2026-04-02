import Link from 'next/link'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <svg
        style={{ position: 'absolute', right: '6%', top: 0, height: '100%', opacity: 0.06, zIndex: 0 }}
        viewBox="0 0 300 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M30 900 L30 280 Q30 50 150 50 Q270 50 270 280 L270 900Z" fill="#0b3d38" />
      </svg>

      <div className="cta-inner">
        <div className="sl" style={{ justifyContent: 'center', marginBottom: '1.2rem' }}>
          <div className="sl-line" style={{ background: 'var(--gd)' }} />
          <span style={{ color: 'var(--gd)' }}>Begin Your Journey</span>
          <div className="sl-line" style={{ background: 'var(--gd)' }} />
        </div>

        <h2 className="reveal">
          Your Story Deserves<br />
          <em>Extraordinary Counsel.</em>
        </h2>

        <p className="reveal">
          Creative Counseling accepts a limited number of clients each year.
          All inquiries are reviewed personally by Sohaib Awan. If you are
          serious about your work and your voice in this industry — we are
          serious about you.
        </p>

        <div className="cta-btns reveal">
          <Link href="/contact" className="btn-t">
            Submit Your Inquiry
          </Link>
          <Link href="#services" className="btn-og">
            Review the Tiers
          </Link>
        </div>
      </div>
    </section>
  )
}