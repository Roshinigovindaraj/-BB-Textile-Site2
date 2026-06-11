import { Facebook, Instagram, MapPin, Truck } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-[var(--color-wine)] text-[10px] uppercase tracking-[0.18em] text-white">
      <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between gap-4 px-6">
        <div className="flex min-w-0 items-center gap-2 text-[var(--color-gold-soft)]">
          <Truck className="h-3 w-3 shrink-0" />
          <span className="truncate">Free Shipping On Prepaid Orders Above ₹2,999</span>
        </div>

        <div className="hidden items-center gap-5 text-white/90 md:flex">
          <a className="inline-flex items-center gap-1.5 transition hover:text-[var(--color-gold-soft)]" href="#footer">
            <MapPin className="h-3 w-3" />
            <span>Store Locator</span>
          </a>
          <a className="transition hover:text-[var(--color-gold-soft)]" href="#footer">
            Track Order
          </a>
        </div>

        <div className="flex items-center gap-3 text-white/85">
          {[Instagram, Facebook].map((Icon, index) => (
            <a
              key={index}
              aria-label={index === 0 ? 'Instagram' : 'Facebook'}
              className="transition hover:text-[var(--color-gold-soft)]"
              href="#footer"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
          <a aria-label="Pinterest" className="text-[11px] font-semibold transition hover:text-[var(--color-gold-soft)]" href="#footer">
            P
          </a>
        </div>
      </div>
    </div>
  )
}
