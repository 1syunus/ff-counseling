'use client'

import { useState } from 'react'

type Fields = {
  first_name: string
  last_name:  string
  email:      string
  phone:      string
  tier:       string
  medium:     string
  needs:      string[]
  project:    string
  referral:   string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const empty: Fields = {
  first_name: '',
  last_name:  '',
  email:      '',
  phone:      '',
  tier:       '',
  medium:     '',
  needs:      [],
  project:    '',
  referral:   '',
}

const tierOptions = [
  { value: 'foundation', label: 'Tier I — Foundation ($350 – $600, one-time)' },
  { value: 'guidance',   label: 'Tier II — Guidance ($1,200 – $1,800 / month)' },
  { value: 'incubation', label: 'Tier III — Incubation ($2,500 – $4,000 / month)' },
  { value: 'unsure',     label: 'Not sure yet — I\'d like guidance' },
]

const mediumOptions = [
  { value: 'comics',     label: 'Comics / Graphic novels' },
  { value: 'prose',      label: 'Prose fiction / Novels' },
  { value: 'screenplay', label: 'Screenplay / Television' },
  { value: 'animation',  label: 'Animation' },
  { value: 'gaming',     label: 'Gaming / Interactive narrative' },
  { value: 'transmedia', label: 'Transmedia / Multiple formats' },
  { value: 'other',      label: 'Other' },
]

const needsOptions = [
  { value: 'story_dev',  label: 'Story development',    sub: 'narrative structure, character arcs, world-building' },
  { value: 'industry',   label: 'Industry navigation',  sub: 'introductions, career strategy, publisher relations' },
  { value: 'pitch',      label: 'Pitch preparation',    sub: 'verbal rehearsal, written decks, loglines' },
  { value: 'transmedia', label: 'Transmedia strategy',  sub: 'IP expansion across formats and platforms' },
  { value: 'legal',      label: 'Legal & IP counsel',   sub: 'contracts, rights, copyright structuring' },
  { value: 'wellbeing',  label: 'Creator wellbeing',    sub: 'burnout, imposter syndrome, sustainable practice' },
]

const MAX_CHARS = 800

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [status, setStatus] = useState<Status>('idle')
  const [error,  setError]  = useState<string>('')

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function updateCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target
    setFields((prev) => ({
      ...prev,
      needs: checked
        ? [...prev.needs, value]
        : prev.needs.filter((n) => n !== value),
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(fields),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setError('Could not reach the server. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="cf-success">
        <div className="cf-success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c9973b" strokeWidth="1.8"
               strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Inquiry <em>Received.</em></h3>
        <p>
          Sohaib Awan will review your submission personally and respond
          within 1-2 weeks.
        </p>
        <p className="cf-success-sub">
          In the meantime, explore the Fictional Frontiers archive at{' '}
          <a href="https://fictionalfrontiers.com" target="_blank" rel="noopener noreferrer">
            fictionalfrontiers.com
          </a>
        </p>
      </div>
    )
  }

  return (
    <form className="cf" onSubmit={handleSubmit} noValidate>

      {/* Name row */}
      <div className="cf-row">
        <label className="cf-field">
          <span className="cf-label">First Name</span>
          <input className="cf-input" type="text" name="first_name"
            value={fields.first_name} onChange={updateField}
            placeholder="Layla" required autoComplete="given-name" />
        </label>
        <label className="cf-field">
          <span className="cf-label">Last Name</span>
          <input className="cf-input" type="text" name="last_name"
            value={fields.last_name} onChange={updateField}
            placeholder="Hassan" required autoComplete="family-name" />
        </label>
      </div>

      {/* Contact row */}
      <div className="cf-row">
        <label className="cf-field">
          <span className="cf-label">Email Address</span>
          <input className="cf-input" type="email" name="email"
            value={fields.email} onChange={updateField}
            placeholder="you@studio.com" required autoComplete="email" />
        </label>
        <label className="cf-field">
          <span className="cf-label">Phone <span className="cf-optional">(Optional)</span></span>
          <input className="cf-input" type="tel" name="phone"
            value={fields.phone} onChange={updateField}
            placeholder="+1 (555) 000-0000" autoComplete="tel" />
        </label>
      </div>

      {/* Tier */}
      <label className="cf-field">
        <span className="cf-label">Which tier interests you?</span>
        <div className="cf-select-wrap">
          <select className="cf-input cf-select" name="tier"
            value={fields.tier} onChange={updateField} required>
            <option value="" disabled>Select a tier…</option>
            {tierOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </label>

      {/* Medium */}
      <label className="cf-field">
        <span className="cf-label">Primary creative medium</span>
        <div className="cf-select-wrap">
          <select className="cf-input cf-select" name="medium"
            value={fields.medium} onChange={updateField}>
            <option value="" disabled>Select your medium…</option>
            {mediumOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </label>

      {/* Needs checkboxes */}
      <div className="cf-field">
        <span className="cf-label">Areas where you need support</span>
        <div className="cf-checks">
          {needsOptions.map((o) => (
            <label key={o.value} className="cf-check-item">
              <input type="checkbox" name="needs" value={o.value}
                checked={fields.needs.includes(o.value)}
                onChange={updateCheckbox} />
              <span className="cf-check-label">
                <span className="cf-check-strong">{o.label}</span>
                {' '}— {o.sub}
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className="cf-divider" />

      {/* Project description */}
      <label className="cf-field">
        <span className="cf-label">Tell us about your project or situation</span>
        <textarea className="cf-input cf-textarea" name="project"
          value={fields.project} onChange={updateField}
          maxLength={MAX_CHARS} required rows={6}
          placeholder="Describe your work, where you are in the process, and what you're hoping to accomplish. The more specific you are, the better we can assess fit." />
        <span className="cf-char-count">
          {fields.project.length} / {MAX_CHARS}
        </span>
      </label>

      {/* Referral */}
      <label className="cf-field">
        <span className="cf-label">How did you hear about Creative Counseling?</span>
        <input className="cf-input" type="text" name="referral"
          value={fields.referral} onChange={updateField}
          placeholder="Radio show, colleague, social media, SDCC…" />
      </label>

      <hr className="cf-divider" />

      {/* Privacy note */}
      <div className="cf-privacy">
        <strong>A note on discretion.</strong> All inquiries are kept strictly
        confidential. Your project details, creative work, and personal information
        are never shared outside of our counsel relationship. Sohaib Awan reviews
        all submissions personally.
      </div>

      {status === 'error' && (
        <div className="cf-error">{error}</div>
      )}

      {/* Submit row */}
      <div className="cf-submit-row">
        <button className="cf-submit" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Submit Inquiry'}
          {status !== 'loading' && <span className="cf-arrow">→</span>}
        </button>
        <p className="cf-submit-note">
          You will receive a personal response within 1-2 weeks.
        </p>
      </div>

    </form>
  )
}