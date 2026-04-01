export type AddOn = {
  icon: string
  name: string
  description: string
}

export const addons: AddOn[] = [
  {
    icon: '✦',
    name: 'Pitch Deck Creation',
    description:
      'Written pitch deck development — logline, synopsis, visual direction, and comp titles — ready for industry meetings.',
  },
  {
    icon: '◈',
    name: 'Group Workshops',
    description:
      'Small-group incubator sessions and workshops for creator cohorts developing work within shared creative contexts.',
  },
  {
    icon: '⬡',
    name: 'Sensitivity Reviews',
    description:
      'Confidential cultural sensitivity consultations for studios and publishers developing Muslim-world content.',
  },
  {
    icon: '⊹',
    name: 'Annual Retreats & Virtual Lab',
    description:
      'Immersive in-person or virtual intensive experiences for creators seeking deep community and focused output.',
  },
]