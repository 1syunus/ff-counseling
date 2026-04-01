import Link from 'next/link'

const tierPills = [
  { num: 'Tier I',   name: 'Foundation',  price: '$350 – $600' },
  { num: 'Tier II',  name: 'Guidance',    price: '$1,200 – $1,800 / mo' },
  { num: 'Tier III', name: 'Incubation',  price: '$2,500 – $4,000 / mo' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-pat" />

      <svg
        className="hero-arch-bg"
        viewBox="0 0 400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M40 900 L40 320 Q40 60 200 60 Q360 60 360 320 L360 900Z" fill="white" />
        <path d="M70 900 L70 335 Q70 110 200 110 Q330 110 330 335 L330 900Z" fill="none" stroke="white" strokeWidth="1.5" />
        <path d="M110 900 L110 360 Q110 180 200 180 Q290 180 290 360 L290 900Z" fill="none" stroke="white" strokeWidth=".8" />
      </svg>

      <div className="hero-glow" />

      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">
            <div className="h-ey-dash" />
            <span>Jabal Entertainment · Fictional Frontiers</span>
          </div>

          <h1>
            Where <em>Counsel</em><br />
            Meets the<br />
            <em>Creative</em> Life.
          </h1>

          <p className="hero-sub">
            Elite consulting for storytellers building careers, protecting ideas,
            and taking their work to industry. From legal representation to pitch
            preparation — we serve the whole of your creative life.
          </p>

          <div className="hero-actions">
            <Link href="#contact" className="btn-p">
              Request Consultation
            </Link>
            <Link href="#services" className="btn-g">
              Explore Tiers
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-tiers">
            {tierPills.map((tier) => (
              <div key={tier.num} className="tier-pill">
                <span className="tp-num">{tier.num}</span>
                <span className="tp-name">{tier.name}</span>
                <span className="tp-price">{tier.price}</span>
              </div>
            ))}
            <div className="tp-note">+ Optional add-ons available across all tiers</div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}