import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import type { Category } from '@/utils/boutiqueData'

// Maps category name → route slug
const slugMap: Record<string, string> = {
  'Silk Sarees':     '/sarees/silk',
  'Designer Sarees': '/sarees/designer',
  'Banarasi Sarees': '/sarees/banarasi',
  'Kancheepuram':    '/sarees/kancheepuram',
  'Tussar Sarees':   '/sarees/tussar',
  'Linen Sarees':    '/sarees/linen',
}

type CategoryStripProps = {
  items: Category[]
}

export function CategoryStrip({ items }: CategoryStripProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollByAmount = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="border-b border-[var(--color-border)] bg-white/55 py-12" id="categories">
      <div className="mx-auto max-w-[1440px] px-6">

        {/* Heading */}
        <div className="reveal mb-10 flex items-center justify-center gap-4 sm:gap-6">
          <div className="hidden sm:block h-px w-12 md:w-28 bg-[var(--color-border-strong)]/70" />
          <h2 className="section-heading reveal font-[var(--font-display)] text-[22px] sm:text-[28px] md:text-[34px] uppercase tracking-[0.08em] text-[var(--color-text)] text-center">
            Discover by Category
          </h2>
          <div className="hidden sm:block h-px w-12 md:w-28 bg-[var(--color-border-strong)]/70" />
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Scroll categories left"
            className="hidden sm:grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-white transition hover:border-[rgba(192,154,108,0.6)] hover:shadow-md"
            onClick={() => scrollByAmount(-320)}
            type="button"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div
            className="no-scrollbar stagger-children grid auto-cols-[170px] grid-flow-col gap-6 overflow-x-auto scroll-smooth px-1 py-4"
            ref={scrollerRef}
          >
            {items.map((item) => (
              <Link
                key={item.name}
                to={slugMap[item.name] ?? '/'}
                className="category-item group text-center"
              >
                <div className="relative mx-auto w-36">
                  <div className="category-ring" />
                  <div className="category-pulse" />
                  <div className="category-circle-wrap mx-auto h-36 w-36 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-blush)] p-1 shadow-sm">
                    <img
                      alt={item.name}
                      className="category-img h-full w-full rounded-full object-cover"
                      src={item.image}
                    />
                  </div>
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text)] transition-colors duration-200 group-hover:text-[var(--color-wine)]">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>

          <button
            aria-label="Scroll categories right"
            className="hidden sm:grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-white transition hover:border-[rgba(192,154,108,0.6)] hover:shadow-md"
            onClick={() => scrollByAmount(320)}
            type="button"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
