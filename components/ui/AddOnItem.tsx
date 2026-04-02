import type { AddOn } from '@/data/addons'

export default function AddOnItem({ addon }: { addon: AddOn }) {
  return (
    <div className="ao-item reveal">
      <span className="ao-icon">{addon.icon}</span>
      <div className="ao-name">{addon.name}</div>
      <div className="ao-desc">{addon.description}</div>
    </div>
  )
}