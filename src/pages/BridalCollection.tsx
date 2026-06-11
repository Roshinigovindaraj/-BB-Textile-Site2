import { useState } from 'react'
import { ArrowRight, ChevronDown, ChevronRight, Heart, LayoutGrid, List, ShoppingBag, Star } from 'lucide-react'

import { BenefitsSection } from '@/components/boutique/BenefitsSection'
import { Footer } from '@/components/boutique/Footer'
import { Header } from '@/components/boutique/Header'
import { OfferBanner } from '@/components/boutique/OfferBanner'
import { TopBar } from '@/components/boutique/TopBar'
import { useScrollReveal } from '@/utils/useScrollReveal'
import {
  bridalBenefits,
  bridalProducts,
  footerColumns,
  navLinks,
} from '@/utils/boutiqueData'

/* ── Star Rating ── */
function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="mt-2 flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const full = i < Math.floor(rating)
          const half = !full && i < rating
          return (
            <Star
              key={i}
              className={`h-3 w-3 ${full || half ? 'text-[#c8a030] fill-[#c8a030]' : 'text-[var(--color-border-strong)] fill-none'}`}
            />
          )
        })}
      </div>
      <span className="text-[11px] text-[var(--color-muted)]">({reviews})</span>
    </div>
  )
}

/* ── Bridal Product Card ── */
function BridalCard({ product }: { product: typeof bridalProducts[0] }) {
  const [wished, setWished] = useState(false)

  return (
    <article className="product-card-wrap group reveal-scale">
      <div className="product-card-inner relative rounded-[16px] border border-[var(--color-border)] bg-white shadow-[0_6px_18px_rgba(88,55,59,0.08)] overflow-hidden">
        <img
          alt={product.name}
          className="product-img h-[300px] w-full object-cover"
          src={product.image}
        />

        {/* New tag */}
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-sm bg-[var(--color-wine)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
            {product.tag}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={() => setWished((w) => !w)}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/92 shadow-sm transition-all duration-200 group-hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 transition-colors duration-200 ${wished ? 'fill-[var(--color-wine)] text-[var(--color-wine)]' : 'text-[var(--color-muted)]'}`}
          />
        </button>

        {/* Quick Add slide-up */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full overflow-hidden transition-transform duration-300 ease-out group-hover:translate-y-0">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 bg-[var(--color-wine)]/95 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="pt-3">
        <h3 className="text-[13px] font-medium text-[var(--color-text)] transition-colors duration-200 group-hover:text-[var(--color-wine)]">
          {product.name}
        </h3>
        <p className="mt-1 text-[14px] font-semibold text-[var(--color-wine)]">{product.price}</p>
        <StarRating rating={product.rating} reviews={product.reviews} />
      </div>
    </article>
  )
}

/* ── Filter Pill ── */
function FilterPill({ label, options }: { label: string; options: string[] }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)] transition hover:border-[rgba(192,154,108,0.5)] hover:text-[var(--color-wine)]"
      >
        {selected ?? label}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-[rgba(192,154,108,0.22)] bg-[#fdf6ee] shadow-[0_12px_32px_rgba(80,35,10,0.14)]">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { setSelected(opt); setOpen(false) }}
              className="block w-full px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.12em] text-[#5a3520] hover:bg-[rgba(192,154,108,0.1)] hover:text-[var(--color-wine)]"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Sort Pill ── */
function SortPill() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('Featured')
  const options = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest First', 'Best Rated']

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)] transition hover:border-[rgba(192,154,108,0.5)] hover:text-[var(--color-wine)]"
      >
        {selected}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-[rgba(192,154,108,0.22)] bg-[#fdf6ee] shadow-[0_12px_32px_rgba(80,35,10,0.14)]">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { setSelected(opt); setOpen(false) }}
              className={`block w-full px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.12em] transition hover:bg-[rgba(192,154,108,0.1)] hover:text-[var(--color-wine)] ${selected === opt ? 'text-[var(--color-wine)] font-semibold' : 'text-[#5a3520]'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Main Page ── */
export default function BridalCollection() {
  useScrollReveal()
  const [gridView, setGridView] = useState(true)

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-text)]" id="top">
      <TopBar />
      <Header links={navLinks} />

      <main>
        {/* ── Hero Banner ── */}
        <section className="relative overflow-hidden bg-[#faf5ef]">
          {/* Floral left watermark */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-[340px] opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 200px 280px at 20% 40%, rgba(232,168,184,0.5), transparent 70%),
                radial-gradient(ellipse 140px 180px at 5% 70%, rgba(247,228,234,0.85), transparent 72%),
                radial-gradient(ellipse 100px 120px at 35% 20%, rgba(220,175,188,0.35), transparent 70%)
              `,
            }}
          />

          {/* Lotus SVG watermark */}
          <div className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 opacity-[0.07]">
            <svg width="260" height="320" viewBox="0 0 260 320" fill="none">
              <path d="M130 40 C130 40 80 80 60 140 C40 200 70 260 130 280 C190 260 220 200 200 140 C180 80 130 40 130 40Z" fill="#6e1024" />
              <path d="M130 60 C100 100 70 150 80 200 C90 240 110 265 130 275" stroke="#c8a56d" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M60 100 C80 90 110 100 130 120 C110 130 80 140 60 130Z" fill="#c8a56d" opacity="0.4" />
              <path d="M200 100 C180 90 150 100 130 120 C150 130 180 140 200 130Z" fill="#c8a56d" opacity="0.4" />
              <circle cx="130" cy="280" r="8" fill="#c8a56d" opacity="0.5" />
            </svg>
          </div>

          <div className="mx-auto grid max-w-[1440px] min-h-[340px] grid-cols-[1fr_1fr] items-center px-10 lg:px-16">
            {/* Left copy */}
            <div className="py-14 pr-8 lg:pr-16">
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                <a href="/" className="hover:text-[var(--color-wine)] transition-colors">Home</a>
                <ChevronRight className="h-3 w-3" />
                <span className="hover:text-[var(--color-wine)] transition-colors cursor-pointer">Collections</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-[var(--color-wine)] font-semibold">Bridal Collection</span>
              </nav>

              <h1 className="hero-title font-[var(--font-display)]">
                <span className="block text-[58px] font-bold uppercase leading-none tracking-[0.06em] text-[var(--color-text)] lg:text-[68px]">
                  Bridal
                </span>
                <span
                  className="block text-[62px] italic leading-tight text-[var(--color-wine)] lg:text-[74px]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Collection
                </span>
              </h1>

              {/* Gold ornamental line */}
              <div className="hero-subtitle mt-4 flex items-center gap-3">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--color-gold-deep)]" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1L8.5 5H13L9.5 7.5L11 12L7 9.5L3 12L4.5 7.5L1 5H5.5Z" fill="#b58a4d" opacity="0.8" />
                </svg>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--color-gold-deep)]" />
              </div>

              <p className="hero-subtitle mt-5 max-w-[360px] text-[15px] leading-[1.9] text-[var(--color-muted)]">
                Timeless weaves for your most precious moments. Crafted to make you feel like a queen on your big day.
              </p>

              <div className="hero-cta mt-8">
                <a
                  href="#bridal-grid"
                  className="btn-wine-pulse inline-flex items-center gap-3 rounded-sm bg-[var(--color-wine)] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-[var(--color-wine-dark)]"
                >
                  Shop Bridal Collection
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right — hero image fills right half */}
            <div className="relative h-full min-h-[340px] overflow-hidden">
              {/* Arch frame */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'ellipse(90% 100% at 60% 50%)',
                  background: 'linear-gradient(135deg, #e8d4c0 0%, #d4b090 100%)',
                }}
              />
              <img
                src="/images/hero-b.png"
                alt="Bridal Collection"
                className="relative z-10 h-full w-full object-cover object-top"
                style={{ clipPath: 'ellipse(90% 100% at 60% 50%)' }}
              />
              {/* Warm overlay */}
              <div
                className="pointer-events-none absolute inset-0 z-20"
                style={{
                  clipPath: 'ellipse(90% 100% at 60% 50%)',
                  background: 'linear-gradient(to right, rgba(250,245,239,0.35), transparent 50%)',
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Filter + Sort Bar ── */}
        <div className="sticky top-[68px] z-20 border-b border-t border-[var(--color-border)] bg-[rgba(253,251,247,0.97)] backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-6 py-3">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] mr-1">
                Filter By
              </span>
              <FilterPill label="Fabric" options={['Silk', 'Banarasi', 'Kanjivaram', 'Tussar', 'Linen']} />
              <FilterPill label="Color" options={['Red', 'Gold', 'Pink', 'Green', 'Purple', 'Ivory']} />
              <FilterPill label="Price" options={['Under ₹15,000', '₹15,000–₹18,000', 'Above ₹18,000']} />
              <FilterPill label="Occasion" options={['Wedding', 'Reception', 'Engagement', 'Mehendi']} />
            </div>

            {/* Sort + View */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Sort By
              </span>
              <SortPill />
              <div className="ml-2 flex items-center gap-1 border-l border-[var(--color-border)] pl-3">
                <button
                  type="button"
                  aria-label="Grid view"
                  onClick={() => setGridView(true)}
                  className={`rounded p-1.5 transition ${gridView ? 'bg-[var(--color-wine)] text-white' : 'text-[var(--color-muted)] hover:text-[var(--color-wine)]'}`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="List view"
                  onClick={() => setGridView(false)}
                  className={`rounded p-1.5 transition ${!gridView ? 'bg-[var(--color-wine)] text-white' : 'text-[var(--color-muted)] hover:text-[var(--color-wine)]'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Product Grid ── */}
        <section className="py-12" id="bridal-grid">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className={`stagger-children grid gap-6 ${gridView ? 'sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
              {bridalProducts.map((product) => (
                <BridalCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits Strip ── */}
        <BenefitsSection items={bridalBenefits} />

        {/* ── Offer Banner ── */}
        <OfferBanner />
      </main>

      <Footer columns={footerColumns} />
    </div>
  )
}
