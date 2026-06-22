import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import {
  ArrowRight, ChevronDown,
  Heart, LayoutGrid, List, ShoppingBag, Star,
} from 'lucide-react'

import { BenefitsSection } from '@/components/boutique/BenefitsSection'
import { Footer } from '@/components/boutique/Footer'
import { Header } from '@/components/boutique/Header'
import { OfferBanner } from '@/components/boutique/OfferBanner'
import { TopBar } from '@/components/boutique/TopBar'
import { useScrollReveal } from '@/utils/useScrollReveal'
import {
  bridalBenefits,
  footerColumns,
  navLinks,
  sareeCategoryBySlug,
  type SareeProduct,
} from '@/utils/boutiqueData'

/* ── Star Rating ── */
function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="mt-2 flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-3 w-3 ${i < Math.round(rating) ? 'fill-[#c8a030] text-[#c8a030]' : 'fill-none text-[var(--color-border-strong)]'}`} />
        ))}
      </div>
      <span className="text-[11px] text-[var(--color-muted)]">({reviews})</span>
    </div>
  )
}

/* ── Product Card ── */
function CategoryCard({ product }: { product: SareeProduct }) {
  const [wished, setWished] = useState(false)
  return (
    <article className="product-card-wrap group reveal-scale">
      <div className="product-card-inner relative overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-white shadow-[0_6px_18px_rgba(88,55,59,0.08)]">
        <img alt={product.name} className="product-img h-[300px] w-full object-cover" src={product.image} />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-sm bg-[var(--color-wine)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">{product.tag}</span>
        )}
        <button type="button" aria-label="Wishlist" onClick={() => setWished(w => !w)}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/92 shadow-sm transition-all duration-200 group-hover:scale-110">
          <Heart className={`h-4 w-4 transition-colors ${wished ? 'fill-[var(--color-wine)] text-[var(--color-wine)]' : 'text-[var(--color-muted)]'}`} />
        </button>
        <div className="absolute inset-x-0 bottom-0 translate-y-full overflow-hidden transition-transform duration-300 ease-out group-hover:translate-y-0">
          <button type="button" className="flex w-full items-center justify-center gap-2 bg-[var(--color-wine)]/95 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            <ShoppingBag className="h-3.5 w-3.5" /> Quick Add
          </button>
        </div>
      </div>
      <div className="pt-3">
        <h3 className="text-[13px] font-medium text-[var(--color-text)] transition-colors group-hover:text-[var(--color-wine)]">{product.name}</h3>
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
      <button type="button" onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)] transition hover:border-[rgba(192,154,108,0.5)] hover:text-[var(--color-wine)]">
        {selected ?? label}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-[rgba(192,154,108,0.22)] bg-[#fdf6ee] shadow-[0_12px_32px_rgba(80,35,10,0.14)]">
          {options.map(opt => (
            <button key={opt} type="button" onClick={() => { setSelected(opt); setOpen(false) }}
              className="block w-full px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.12em] text-[#5a3520] hover:bg-[rgba(192,154,108,0.1)] hover:text-[var(--color-wine)]">{opt}</button>
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
      <button type="button" onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)] transition hover:border-[rgba(192,154,108,0.5)] hover:text-[var(--color-wine)]">
        {selected}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-[rgba(192,154,108,0.22)] bg-[#fdf6ee] shadow-[0_12px_32px_rgba(80,35,10,0.14)]">
          {options.map(opt => (
            <button key={opt} type="button" onClick={() => { setSelected(opt); setOpen(false) }}
              className={`block w-full px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.12em] transition hover:bg-[rgba(192,154,108,0.1)] hover:text-[var(--color-wine)] ${selected === opt ? 'font-semibold text-[var(--color-wine)]' : 'text-[#5a3520]'}`}>{opt}</button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Page ── */
export default function SareeCategoryPage() {
  useScrollReveal()
  const { slug } = useParams<{ slug: string }>()
  const [gridView, setGridView] = useState(true)
  const category = sareeCategoryBySlug[slug ?? '']
  if (!category) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen text-[var(--color-text)]" style={{ background: 'var(--color-ivory)' }} id="top">
      <TopBar />
      <Header links={navLinks} />
      <main>

        {/* ════════ HERO — exact copy of HeroSection.tsx ════════ */}
        <section className="relative overflow-hidden border-b border-[var(--color-border)]">
          {/* Background photo */}
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[68%_center] lg:object-right"
            src={category.heroImage}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(251,246,239,0.15)] via-transparent to-transparent lg:from-transparent" />

          <div className="relative mx-auto max-w-[1440px] px-6">
            <div className="grid min-h-[480px] items-center lg:min-h-[540px] lg:grid-cols-[minmax(0,460px)_1fr] xl:min-h-[580px]">

              {/* Left copy */}
              <div className="relative z-10 py-10 lg:py-14 lg:pl-6 xl:pl-10 lg:translate-x-[125px] lg:-translate-y-[55px] translate-y-0">
                <p className="hero-eyebrow mb-5 text-[11px] uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
                  {category.title} Sarees — Vaarini Boutique
                </p>

                <h1 className="hero-title font-display text-[32px] leading-[1.12] text-[var(--color-text)] sm:text-[42px] md:text-[50px] xl:text-[56px]">
                  {category.title}{' '}
                  <span className="font-display text-[42px] italic leading-none text-[var(--color-wine)] sm:text-[56px] md:text-[66px] xl:text-[74px]">
                    Sarees
                  </span>
                  <br />
                  <span className="font-display text-[42px] italic leading-none text-[var(--color-wine)] sm:text-[56px] md:text-[66px] xl:text-[74px]">
                    Collection
                  </span>
                </h1>

                <p className="hero-subtitle mt-5 max-w-[340px] text-[15px] leading-7 text-[var(--color-muted)]">
                  {category.description}
                </p>

                <div className="hero-cta mt-7">
                  <a
                    className="btn-wine-pulse inline-flex items-center gap-2.5 rounded-sm bg-[var(--color-wine)] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-[var(--color-wine-dark)]"
                    href="#category-grid"
                  >
                    Shop {category.title} Sarees
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Right — empty col so image shows through (same as home hero) */}
              <div className="relative hidden lg:block" />
            </div>

            {/* Bottom tagline */}
            <div className="hero-tagline relative z-10 overflow-hidden">
              <div
                className="group relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-5 lg:pl-6 xl:pl-10 lg:translate-x-[80px] lg:justify-start lg:gap-0 transition-colors duration-300 hover:bg-[rgba(192,154,108,0.06)]"
                style={{ cursor: 'default' }}
              >
                <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{
                  background: 'linear-gradient(105deg, transparent 38%, rgba(240,201,122,0.13) 50%, transparent 62%)',
                  backgroundSize: '200% 100%', backgroundPosition: '200% 0', transition: 'background-position 0.55s ease',
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLSpanElement).style.backgroundPosition = '-200% 0')}
                  onMouseLeave={e => ((e.currentTarget as HTMLSpanElement).style.backgroundPosition = '200% 0')}
                />
                <span className="shimmer-gold text-[10px] font-semibold uppercase tracking-[0.28em]">Pure Fabrics</span>
                <span className="relative mx-4 hidden lg:inline-flex items-center justify-center">
                  <span aria-hidden="true" className="absolute inline-block h-2 w-2 rounded-full bg-[var(--color-gold)]/30" style={{ animation: 'pulseRing 2s ease-out infinite' }} />
                  <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                </span>
                <span className="shimmer-gold text-[10px] font-semibold uppercase tracking-[0.28em]">Fine Craftsmanship</span>
                <span className="relative mx-4 hidden lg:inline-flex items-center justify-center">
                  <span aria-hidden="true" className="absolute inline-block h-2 w-2 rounded-full bg-[var(--color-gold)]/30" style={{ animation: 'pulseRing 2s ease-out 0.7s infinite' }} />
                  <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                </span>
                <span className="shimmer-gold text-[10px] font-semibold uppercase tracking-[0.28em]">Timeless Beauty</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Filter + Sort Bar ── */}
        <div className="sticky top-[68px] z-20 border-b border-t border-[var(--color-border)] bg-[rgba(253,251,247,0.97)] backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-6 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">Filter By</span>
              <FilterPill label="Color"    options={['Red', 'Gold', 'Pink', 'Green', 'Purple', 'Blue', 'Ivory']} />
              <FilterPill label="Price"    options={['Under ₹5,000', '₹5,000–₹10,000', '₹10,000–₹20,000', 'Above ₹20,000']} />
              <FilterPill label="Occasion" options={['Wedding', 'Festive', 'Casual', 'Office', 'Party']} />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">Sort By</span>
              <SortPill />
              <div className="ml-2 flex items-center gap-1 border-l border-[var(--color-border)] pl-3">
                <button type="button" aria-label="Grid view" onClick={() => setGridView(true)}
                  className={`rounded p-1.5 transition ${gridView ? 'bg-[var(--color-wine)] text-white' : 'text-[var(--color-muted)] hover:text-[var(--color-wine)]'}`}>
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button type="button" aria-label="List view" onClick={() => setGridView(false)}
                  className={`rounded p-1.5 transition ${!gridView ? 'bg-[var(--color-wine)] text-white' : 'text-[var(--color-muted)] hover:text-[var(--color-wine)]'}`}>
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Product Grid ── */}
        <section className="py-12" id="category-grid">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className={`stagger-children grid gap-6 ${gridView ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
              {category.products.map(product => (
                <CategoryCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <BenefitsSection items={bridalBenefits} />
        <OfferBanner />
      </main>

      <Footer columns={footerColumns} />
    </div>
  )
}
