import Link from 'next/link'
import Image from 'next/image'

const tierPills = [
  { num: 'Tier I',   name: 'Foundation',  price: '$350 – $600' },
  { num: 'Tier II',  name: 'Guidance',    price: '$1,200 – $1,800 / mo' },
  { num: 'Tier III', name: 'Incubation',  price: '$2,500 – $4,000 / mo' },
]

export default function Hero() {
  return (
    <section className="hero">
      {/* Layer 1 — illustration, grayscaled and blurred via CSS */}
      <div className="hero-image-wrap">
        <Image
          src="/images/hero-bg.png"
          alt="animated depiction of crowded, peaceful scene with birds in the air and Muslim architecture in the backdrop"
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
      </div>

      {/* Layer 2 — teal-to-cyan gradient overlay */}
      <div className="hero-overlay" />

      {/* Layer 3 — existing decorative elements */}
      <div className="hero-pat" />

      <div className="hero-glow" />

      {/* Layer 4 — content */}
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
              <Link key={tier.num} href="#services" className={`tier-pill${tier.num === 'Tier III' ? ' tier-pill--iii' : ''}`}>
                <span className="tp-num">{tier.num}</span>
                <span className="tp-name">{tier.name}</span>
                <span className="tp-price">{tier.price}</span>
              </Link>
            ))}
            <div className="tp-note">+ Optional add-ons available across all tiers</div>
          </div>
        </div>
      </div>

      <div className="hero-accent-bar" />
      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}