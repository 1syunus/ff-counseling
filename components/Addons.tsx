import AddOnItem from '@/components/ui/AddOnItem'
import { addons } from '@/data/addons'

export default function AddOns() {
  return (
    <section className="ao">
      <div className="ao-inner">
        <div className="reveal">
          <div className="sl">
            <div className="sl-line" />
            <span>Optional Add-Ons</span>
          </div>
          <h2 className="sh2 lt" style={{ fontSize: '1.75rem' }}>
            Available <em>Across All Tiers</em>
          </h2>
        </div>

        <div className="ao-grid">
          {addons.map((addon, i) => (
            <AddOnItem key={addon.name} addon={addon} />
          ))}
        </div>
      </div>
    </section>
  )
}