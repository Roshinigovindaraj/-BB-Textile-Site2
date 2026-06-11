import { Heart, ShoppingBag } from 'lucide-react'

import type { Product } from '@/utils/boutiqueData'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card-wrap group reveal-scale">
      <a className="block" href="#footer">
        <div className="product-card-inner rounded-[18px] border border-[var(--color-border)] bg-white shadow-[0_8px_20px_rgba(88,55,59,0.08)]">
          <img
            alt={product.name}
            className="product-img h-[290px] w-full rounded-[18px] object-cover"
            src={product.image}
          />

          {/* Wishlist */}
          <div
            aria-hidden="true"
            className="absolute right-3 top-3 rounded-full bg-white/92 p-2 text-[var(--color-text)] shadow-sm transition-all duration-200 group-hover:bg-white group-hover:scale-110"
          >
            <Heart className="h-4 w-4" />
          </div>

          {/* Quick add — slides up on hover */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full rounded-b-[18px] overflow-hidden transition-transform duration-300 ease-out group-hover:translate-y-0">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 bg-[var(--color-wine)]/95 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Quick Add
            </button>
          </div>
        </div>

        <div className="pt-4 text-center">
          <h3 className="font-medium text-[var(--color-text)] transition-colors duration-200 group-hover:text-[var(--color-wine)]">
            {product.name}
          </h3>
          <p className="mt-1 font-semibold text-[var(--color-wine)]">{product.price}</p>
        </div>
      </a>
    </article>
  )
}
