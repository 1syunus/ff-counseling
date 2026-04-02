import type { Testimonial } from '@/data/testimonials'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="tcard reveal">
      <span className="tm-mark">"</span>
      <p className="tm-text">{testimonial.quote}</p>
      <div className="tm-name">{testimonial.name}</div>
      <div className="tm-title">{testimonial.title}</div>
    </div>
  )
}