import TestimonialCard from '@/components/ui/TestimonialCard'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="ts" id="voices">
      <svg
        style={{ position: 'absolute', left: '-60px', top: 0, height: '100%', opacity: 0.05, zIndex: 0 }}
        viewBox="0 0 300 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M30 900 L30 280 Q30 50 150 50 Q270 50 270 280 L270 900Z" fill="white" />
      </svg>

      <div className="ts-inner">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="sl" style={{ justifyContent: 'center' }}>
            <div className="sl-line" />
            <span>What the Industry Says</span>
            <div className="sl-line" />
          </div>
          <h2 className="sh2 lt" style={{ maxWidth: '480px', margin: '0 auto' }}>
            Voices from the <em>Frontier</em>
          </h2>
        </div>

        <div className="ts-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}