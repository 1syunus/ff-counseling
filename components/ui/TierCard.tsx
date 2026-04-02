import Link from 'next/link'
import type { Tier } from '@/data/tiers'

export default function TierCard({ tier }: { tier: Tier }) {
  return (
    <div className={`tc reveal${tier.featured ? ' ft' : ''}`}>
      {tier.featured && <span className="ft-tag">Most Popular</span>}

      <svg
        className="tc-arch"
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 40 L5 22 Q5 4 40 4 Q75 4 75 22 L75 40"
          stroke="#c9973b"
          strokeWidth={tier.featured ? '1.2' : '1'}
          fill="none"
        />
      </svg>

      <span className="tc-badge">{tier.badge}</span>
      <h3 className="tc-title" dangerouslySetInnerHTML={{ __html: tier.title }} />
      <div className="tc-sub">{tier.subtitle}</div>

      <div className="tc-for">Ideal For</div>
      <p className="tc-aud">{tier.audience}</p>

      <ul className="tc-dl">
        {tier.deliverables.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="tc-price">
        <span className="tc-amt">{tier.price}</span>
        <span className="tc-cad">{tier.cadence}</span>
        <Link href="#contact" className="tc-cta">
          {tier.cta} →
        </Link>
      </div>
    </div>
  )
}