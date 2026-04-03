import ContactForm from '@/components/ContactForm'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <svg
        style={{ position: 'absolute', right: '6%', top: 0, height: '100%', opacity: 0.06, zIndex: 0 }}
        viewBox="0 0 300 900" fill="none"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      >
        <path d="M30 900 L30 280 Q30 50 150 50 Q270 50 270 280 L270 900Z" fill="#0b3d38" />
      </svg>

      <div className="cta-inner cta-inner--form">

        {/* Left panel */}
        <div className="cta-intro reveal">
          <div className="sl" style={{ marginBottom: '1.4rem' }}>
            <div className="sl-line" style={{ background: 'var(--gd)' }} />
            <span style={{ color: 'var(--gd)' }}>Begin Your Journey</span>
          </div>

          <h2>
            Your Story Deserves<br />
            <em>Extraordinary</em><br />
            Counsel.
          </h2>
          <div className="gold-rule" />

          <p>
            Creative Counseling accepts a <strong>limited number of clients</strong> each
            year. All inquiries are reviewed personally by Sohaib Awan.
          </p>
          <p>
            If you are serious about your work and your voice in this industry — we are
            serious about you.
          </p>

          <div className="tier-hint">
            <span className="tier-hint-label">Available Tiers</span>
            <div className="tier-pills-preview">
              {[
                { num: 'Tier I',   name: 'Foundation',  price: '$350 – $600' },
                { num: 'Tier II',  name: 'Guidance',    price: '$1,200 – $1,800 / mo' },
                { num: 'Tier III', name: 'Incubation',  price: '$2,500 – $4,000 / mo' },
              ].map((t) => (
                <div key={t.num} className="tip">
                  <span className="tip-num">{t.num}</span>
                  <span className="tip-name">{t.name}</span>
                  <span className="tip-price">{t.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="cf-wrap reveal d1">
          <ContactForm />
        </div>

      </div>
    </section>
  )
}