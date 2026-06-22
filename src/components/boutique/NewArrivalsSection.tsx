import { ArrowRight } from 'lucide-react'

import { ProductCard } from '@/components/boutique/ProductCard'
import type { Product } from '@/utils/boutiqueData'

type NewArrivalsSectionProps = {
  products: Product[]
}

export function NewArrivalsSection({ products }: NewArrivalsSectionProps) {
  return (
    <section className="border-b border-[var(--color-border)] py-14" id="new-arrivals">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[260px_minmax(0,1fr)]">

        {/* Sidebar */}
        <div className="reveal-left lg:pt-8">
          <h2 className="font-[var(--font-display)] text-[46px] uppercase tracking-[0.08em] text-[var(--color-text)]">
            New Arrivals
          </h2>
          <p className="mt-6 max-w-md lg:max-w-[190px] text-[15px] leading-8 text-[var(--color-muted)]">
            Fresh drapes. New stories. Be the first to explore our latest handpicked sarees.
          </p>
          <a
            className="btn-wine-pulse mt-8 inline-flex items-center gap-3 rounded-md border border-[var(--color-border-strong)] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text)] transition hover:bg-[rgba(192,154,108,0.08)]"
            href="#collections"
          >
            View All Collections
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Products grid */}
        <div className="stagger-children grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" id="collections">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
