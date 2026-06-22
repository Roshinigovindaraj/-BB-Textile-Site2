import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import {
  ChevronRight, Star, Heart, ShoppingCart, Zap,
  RotateCcw, Truck, Shield, Headphones, ChevronDown, ChevronUp,
} from 'lucide-react'

import { Footer } from '@/components/boutique/Footer'
import { Header } from '@/components/boutique/Header'
import { TopBar } from '@/components/boutique/TopBar'
import { footerColumns, navLinks, sareeCategoryBySlug } from '@/utils/boutiqueData'

/* ── helpers ── */
function StarRow({ rating, reviews, size = 'md' }: { rating: number; reviews: number; size?: 'sm' | 'md' }) {
  const h = size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`${h} ${i < Math.round(rating) ? 'fill-[#c8a030] text-[#c8a030]' : 'fill-none text-[#d4b896]'}`} />
        ))}
      </div>
      <span className={`text-[var(--color-wine)] underline cursor-pointer ${size === 'sm' ? 'text-[11px]' : 'text-[13px]'}`}>
        {reviews} ratings
      </span>
    </div>
  )
}

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between py-4 text-left text-[16px] font-bold text-[var(--color-text)]"
      >
        {title}
        {open ? <ChevronUp className="h-4 w-4 text-[var(--color-muted)]" /> : <ChevronDown className="h-4 w-4 text-[var(--color-muted)]" />}
      </button>
      {open && <div className="pb-5">{children}</div>}
    </div>
  )
}

/* ── Page ── */
export default function ProductDetailPage() {
  const { categorySlug, productIndex } = useParams<{ categorySlug: string; productIndex: string }>()
  const category = sareeCategoryBySlug[categorySlug ?? '']
  const idx = parseInt(productIndex ?? '0', 10)
  const product = category?.products[idx]

  if (!product) return <Navigate to="/" replace />

  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [wished, setWished] = useState(false)
  const [pincode, setPincode] = useState('')

  const images = product.images?.length ? product.images : [product.image]

  return (
    <div className="min-h-screen bg-white text-[var(--color-text)]" id="top">
      <TopBar />
      <Header links={navLinks} />

      {/* Breadcrumb */}
      <nav className="border-b border-[var(--color-border)] bg-[#fafaf8]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-1.5 px-6 py-2.5 text-[11px] text-[var(--color-muted)]">
          <Link to="/" className="hover:text-[var(--color-wine)] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/banarasi" className="hover:text-[var(--color-wine)] transition-colors">Banarasi Sarees</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[var(--color-text)] font-medium">{product.name}</span>
        </div>
      </nav>

      <div className="mx-auto max-w-[1440px] px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[420px_1fr_280px]">

          {/* ── LEFT: Image Gallery ── */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 self-start lg:sticky lg:top-[80px] w-full lg:w-[420px]">
            {/* Thumbnails */}
            <div className="flex flex-row sm:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
              {Array.from({ length: 5 }).map((_, i) => {
                const img = images[i] ?? images[images.length - 1]
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImg(i < images.length ? i : images.length - 1)}
                    className={`h-[68px] w-[56px] sm:h-[78px] sm:w-[66px] shrink-0 overflow-hidden rounded-[6px] border-2 transition ${
                      activeImg === (i < images.length ? i : images.length - 1)
                        ? 'border-[var(--color-wine)]'
                        : 'border-[var(--color-border)] hover:border-[var(--color-gold)]'
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover object-top" />
                  </button>
                )
              })}
            </div>
            {/* Main image */}
            <div className="relative flex-1 overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-[#faf8f6]">
              <img
                src={images[activeImg]}
                alt={product.name}
                className="h-[320px] sm:h-[440px] w-full object-cover object-top"
              />
              {product.tag && (
                <span className="absolute left-3 top-3 rounded-sm bg-[var(--color-wine)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                  {product.tag}
                </span>
              )}
            </div>
          </div>

          {/* ── MIDDLE: Product Info ── */}
          <div className="space-y-4">
            {product.brand && (
              <p className="text-[13px] text-[var(--color-wine)] hover:underline cursor-pointer">
                Brand: {product.brand}
              </p>
            )}

            <h1 className="font-[var(--font-display)] text-[22px] font-semibold leading-snug text-[var(--color-text)]">
              {product.name} — Handwoven Silk Saree With Blouse Piece
            </h1>

            <StarRow rating={product.rating} reviews={product.reviews} />

            <p className="text-[12px] text-[var(--color-muted)]">
              <span className="font-semibold text-[#c45500]">50+ bought</span> in past month
            </p>

            <div className="border-t border-[var(--color-border)] pt-4">
              {product.discount && (
                <span className="rounded bg-[var(--color-wine)] px-2 py-0.5 text-[13px] font-bold text-white mr-2">
                  {product.discount}
                </span>
              )}
              <span className="text-[28px] font-bold text-[var(--color-text)]">{product.price}</span>
              {product.mrp && (
                <p className="mt-1 text-[13px] text-[var(--color-muted)]">
                  M.R.P.: <span className="line-through">{product.mrp}</span>
                </p>
              )}
              <p className="mt-1 text-[12px] text-[var(--color-muted)]">Inclusive of all taxes</p>
            </div>

            {/* Offers */}
            <div className="rounded-[10px] border border-[var(--color-border)] p-4">
              <p className="mb-3 flex items-center gap-2 text-[14px] font-bold text-[var(--color-text)]">
                <Zap className="h-4 w-4 text-[var(--color-gold-deep)]" /> Offers
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: 'Cashback', desc: 'Upto ₹500 cashback on select cards' },
                  { title: 'Bank Offer', desc: 'Upto ₹1,500 discount on select Credit Cards' },
                  { title: 'Partner Offer', desc: 'Buy more, save more on bulk orders' },
                ].map(o => (
                  <div key={o.title} className="rounded-[8px] border border-[var(--color-border)] p-2.5">
                    <p className="text-[12px] font-semibold text-[var(--color-text)]">{o.title}</p>
                    <p className="mt-1 text-[11px] text-[var(--color-muted)]">{o.desc}</p>
                    <p className="mt-1.5 text-[11px] font-medium text-[var(--color-wine)] cursor-pointer hover:underline">1 offer ›</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service icons */}
            <div className="flex flex-wrap items-center gap-4 border-t border-[var(--color-border)] pt-4">
              {[
                { icon: RotateCcw, label: '10 days Return', sub: '& Exchange' },
                { icon: Truck,     label: 'Free Delivery', sub: '' },
                { icon: Shield,    label: 'Secure Pay', sub: '' },
                { icon: Headphones, label: '24/7 Support', sub: '' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-1 text-center">
                  <Icon className="h-6 w-6 text-[var(--color-gold-deep)]" strokeWidth={1.4} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text)] leading-tight">{label}</p>
                  {sub && <p className="text-[10px] text-[var(--color-muted)]">{sub}</p>}
                </div>
              ))}
            </div>

            {/* Product details accordion */}
            {product.highlights && (
              <Accordion title="Top highlights" defaultOpen>
                <div className="divide-y divide-[var(--color-border)]">
                  {product.highlights.map(h => (
                    <div key={h.label} className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-4 py-2.5 text-[13px]">
                      <span className="font-semibold text-[#2c1c14]">{h.label}</span>
                      <span className="text-[#44312f]">{h.value}</span>
                    </div>
                  ))}
                </div>
              </Accordion>
            )}

            {product.aboutItem && (
              <Accordion title="About this item" defaultOpen>
                <ul className="list-disc pl-5 space-y-1.5">
                  {product.aboutItem.map((a, i) => (
                    <li key={i} className="text-[13px] text-[var(--color-muted)] leading-relaxed">{a}</li>
                  ))}
                </ul>
              </Accordion>
            )}

            {product.additionalInfo && (
              <Accordion title="Additional Information">
                <div className="divide-y divide-[var(--color-border)]">
                  {product.additionalInfo.map(r => (
                    <div key={r.label} className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-4 py-2.5 text-[13px]">
                      <span className="font-bold text-[#2c1c14]">{r.label}</span>
                      <span className="text-[#44312f]">{r.value}</span>
                    </div>
                  ))}
                </div>
              </Accordion>
            )}

            {product.styleInfo && (
              <Accordion title="Style">
                <div className="divide-y divide-[var(--color-border)]">
                  {product.styleInfo.map(r => (
                    <div key={r.label} className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-4 py-2.5 text-[13px]">
                      <span className="text-[#5a4030]">{r.label}</span>
                      <span className="font-medium text-[#2c1c14]">{r.value}</span>
                    </div>
                  ))}
                </div>
              </Accordion>
            )}

            {product.itemDetails && (
              <Accordion title="Item details">
                <div className="divide-y divide-[var(--color-border)]">
                  {product.itemDetails.map(r => (
                    <div key={r.label} className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-4 py-2.5 text-[13px]">
                      <span className="text-[#5a4030]">{r.label}</span>
                      <span className="font-medium text-[#2c1c14]">{r.value}</span>
                    </div>
                  ))}
                </div>
              </Accordion>
            )}

            {product.productDimensions && (
              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="text-[14px] font-bold text-[var(--color-text)] mb-3">Product details</p>
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-2 text-[13px]">
                  <span className="font-semibold text-[#2c1c14]">Product Dimensions</span>
                  <span className="text-[#44312f]">{product.productDimensions}</span>
                  <span className="font-semibold text-[#2c1c14]">Country of Origin</span>
                  <span className="text-[#44312f]">India</span>
                  <span className="font-semibold text-[#2c1c14]">Department</span>
                  <span className="text-[#44312f]">Womens</span>
                  <span className="font-semibold text-[#2c1c14]">Manufacturer</span>
                  <span className="text-[#44312f]">{product.brand}</span>
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Buy Box ── */}
          <div className="space-y-4 self-start lg:sticky lg:top-[80px]">
            <div className="rounded-[14px] border border-[var(--color-border)] p-5 shadow-sm">
              <p className="text-[26px] font-bold text-[var(--color-text)]">{product.price}</p>
              {product.mrp && (
                <p className="text-[12px] text-[var(--color-muted)]">M.R.P.: <span className="line-through">{product.mrp}</span></p>
              )}

              <p className="mt-2 text-[13px]">
                <span className="font-semibold">FREE delivery</span>{' '}
                <span className="text-[var(--color-muted)]">within 5-7 business days.</span>
              </p>

              {/* Pincode */}
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="text"
                  value={pincode}
                  onChange={e => setPincode(e.target.value)}
                  placeholder="Enter pincode"
                  className="w-full rounded border border-[var(--color-border)] px-2.5 py-1.5 text-[12px] outline-none focus:border-[var(--color-gold)]"
                />
                <button type="button" className="text-[12px] text-[var(--color-wine)] font-semibold hover:underline whitespace-nowrap">Check</button>
              </div>

              <p className={`mt-3 text-[16px] font-semibold ${product.inStock ? 'text-green-700' : 'text-red-600'}`}>
                {product.inStock ? 'In stock' : 'Out of stock'}
              </p>

              {/* Qty */}
              <div className="mt-3">
                <label className="text-[12px] text-[var(--color-muted)]">Quantity:</label>
                <select
                  value={qty}
                  onChange={e => setQty(Number(e.target.value))}
                  className="ml-2 rounded border border-[var(--color-border)] px-2 py-1 text-[12px] outline-none"
                >
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-full bg-[var(--color-gold-soft)] py-2.5 text-[13px] font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-gold)] hover:text-white"
              >
                <span className="flex items-center justify-center gap-2">
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </span>
              </button>

              <button
                type="button"
                className="mt-2 w-full rounded-full bg-[var(--color-wine)] py-2.5 text-[13px] font-semibold text-white transition hover:bg-[var(--color-wine-dark)]"
              >
                Buy Now
              </button>

              <button
                type="button"
                onClick={() => setWished(w => !w)}
                className="mt-3 flex w-full items-center justify-center gap-2 text-[12px] text-[var(--color-wine)] hover:underline"
              >
                <Heart className={`h-4 w-4 ${wished ? 'fill-[var(--color-wine)]' : ''}`} />
                {wished ? 'Added to Wish List' : 'Add to Wish List'}
              </button>
            </div>

            {/* Seller info */}
            <div className="rounded-[14px] border border-[var(--color-border)] p-4 text-[12px] space-y-2">
              {[
                { label: 'Ships from', value: 'Vaarini Boutique' },
                { label: 'Sold by',    value: 'Vaarini Boutique' },
                { label: 'Payment',    value: 'Secure transaction' },
                { label: 'Gift options', value: 'Available at checkout' },
              ].map(r => (
                <div key={r.label} className="flex gap-3">
                  <span className="w-24 shrink-0 text-[var(--color-muted)]">{r.label}</span>
                  <span className="font-medium text-[var(--color-text)]">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Similar products ── */}
        <div className="mt-12 border-t border-[var(--color-border)] pt-8">
          <h2 className="mb-6 font-[var(--font-display)] text-[22px] font-semibold text-[var(--color-text)]">
            More from {category.title} Collection
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {category.products.filter((_, i) => i !== idx).slice(0, 4).map((p) => {
              const realIdx = category.products.findIndex(x => x.name === p.name)
              return (
                <Link
                  key={p.name}
                  to={`/product/${categorySlug}/${realIdx}`}
                  className="group block rounded-[14px] border border-[var(--color-border)] bg-white p-3 transition hover:shadow-md"
                >
                  <div className="overflow-hidden rounded-[10px]">
                    <img src={p.image} alt={p.name} className="h-[280px] w-full object-cover object-top transition duration-300 group-hover:scale-105" />
                  </div>
                  <p className="mt-2.5 text-[12px] font-medium text-[var(--color-text)] line-clamp-2 group-hover:text-[var(--color-wine)]">{p.name}</p>
                  {p.discount && <p className="text-[11px] font-bold text-[var(--color-wine)]">{p.discount}</p>}
                  <p className="text-[13px] font-bold text-[var(--color-text)]">{p.price}</p>
                  {p.mrp && <p className="text-[10px] text-[var(--color-muted)] line-through">{p.mrp}</p>}
                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`h-2.5 w-2.5 ${si < Math.round(p.rating) ? 'fill-[#c8a030] text-[#c8a030]' : 'fill-none text-[#d4b896]'}`} />
                    ))}
                    <span className="text-[10px] text-[var(--color-muted)]">({p.reviews})</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <Footer columns={footerColumns} />
    </div>
  )
}
