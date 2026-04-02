import TierCard from '@/components/ui/TierCard'
import { tiers } from '@/data/tiers'

export default function Services() {
  return (
    <section className="sv" id="services">
      <svg
        style={{ position: 'absolute', right: '-80px', bottom: '-40px', height: '80%', zIndex: 0, opacity: 0.05 }}
        viewBox="0 0 400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M40 900 L40 320 Q40 60 200 60 Q360 60 360 320 L360 900Z" fill="white" />
      </svg>

      <div className="sv-inner">
        <div className="sv-hd">
          <div className="reveal">
            <div className="sl">
              <div className="sl-line" />
              <span>Consulting Framework</span>
            </div>
            <h2 className="sh2 lt">
              Three Tiers of <em>Creative</em> Counsel
            </h2>
            <div className="gr" />
          </div>
          <p className="reveal d2">
            Each tier serves a different stage of the creator's journey — from
            early concept evaluation through deep multi-month incubation. Wherever
            you are, there is a path forward that respects both your creative vision
            and your commercial ambitions.
          </p>
        </div>

        <div className="tg">
          {tiers.map((tier, i) => (
            <TierCard key={tier.badge} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  )
}