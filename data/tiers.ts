export type Tier = {
  badge: string
  title: string
  subtitle: string
  audience: string
  deliverables: string[]
  price: string
  cadence: string
  featured?: boolean
  cta: string
}

export const tiers: Tier[] = [
  {
    badge: 'Tier I — Foundation',
    title: 'Story & Strategy Evaluation',
    subtitle: 'For first-time creators and early-stage concepts',
    audience:
      'Writers with early-stage ideas · Creators seeking directional clarity · Anyone assessing viability before deeper investment',
    deliverables: [
      'Concept originality and clarity review',
      'Cultural grounding & authenticity assessment',
      'Market viability and format suitability',
      'Intake questionnaire + review of one core asset',
      'One 60–90 minute consultation session',
      'Written evaluation summary (2–3 pages)',
    ],
    price: '$350 – $600',
    cadence: 'One-time engagement',
    cta: 'Begin Evaluation',
  },
  {
    badge: 'Tier II — Guidance',
    title: 'Creative & Industry Consultancy',
    subtitle: 'For active developers navigating creative and professional complexity',
    audience:
      'Creators in active development · Artists navigating identity or industry anxiety · Those seeking ethical and strategic clarity',
    deliverables: [
      'All Foundation tier services',
      '2–3 sessions over one month',
      'Story, theme & character development',
      'Industry navigation & career strategy',
      'Ethical considerations in Muslim-world storytelling',
      'Managing imposter syndrome & burnout',
      'Initial pitch framing and refinement',
    ],
    price: '$1,200 – $1,800',
    cadence: 'Per month',
    featured: true,
    cta: 'Start This Month',
  },
  {
    badge: 'Tier III — Incubation',
    title: 'Story, Strategy & Pitch Lab',
    subtitle: 'For creators building long-term IP with serious industry ambitions',
    audience:
      'Long-term IP builders · Artists seeking deep development and accountability · Creators pursuing sustainable careers',
    deliverables: [
      '3–4 sessions per month',
      'Advanced worldbuilding & transmedia strategy',
      'Pitch simulation (verbal and written)',
      'Character arcs and thematic cohesion',
      'Cultural stewardship & ethical integrity',
      'Industry education and advisory insight',
      'Psychological support for creators',
    ],
    price: '$2,500 – $4,000',
    cadence: 'Per month · 3-month minimum recommended',
    cta: 'Apply for Incubation',
  },
]