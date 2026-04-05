'use client'
import { useState } from 'react'
import ContactForm from '@/components/ContactForm'

const ctaPills = [
    { num: 'Tier I',   name: 'Foundation',  price: '$350 – $600',
        value: 'Tier I — Foundation ($350 – $600, one-time)' },
    { num: 'Tier II',  name: 'Guidance',    price: '$1,200 – $1,800 / mo',
        value: 'Tier II — Guidance ($1,200 – $1,800 / month)' },
    { num: 'Tier III', name: 'Incubation',  price: '$2,500 – $4,000 / mo',
        value: 'Tier III — Incubation ($2,500 – $4,000 / month)' },
]

export default function CTA() {
    const [tier, setTier] = useState('')

    function handlePillClick(value: string) {
        setTier(value)
        setTimeout(() => {
        document.getElementById('tier-select')?.scrollIntoView({
            behavior: 'smooth', block: 'center'
        })
        }, 100)
    }

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
                        {ctaPills.map((t) => (
                            <button
                                key={t.num}
                                className={`tip tip--btn${tier === t.value ? ' tip--active' : ''}${t.num === 'Tier III' ? ' tier-pill--iii' : ''}`}
                                onClick={() => handlePillClick(t.value)}
                                type="button"
                            >
                                <span className="tip-num">{t.num}</span>
                                <span className="tip-name">{t.name}</span>
                                <span className="tip-price">{t.price}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right panel — form */}
            <div className="cf-wrap reveal d1">
                <ContactForm tier={tier} onTierChange={setTier} />
            </div>

            </div>
        </section>
    )
}