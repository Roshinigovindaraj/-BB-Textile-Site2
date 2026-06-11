import { Star } from 'lucide-react'

import type { Testimonial } from '@/utils/boutiqueData'

type TestimonialsSectionProps = {
  items: Testimonial[]
}

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <section className="border-b border-[var(--color-border)] py-10 bg-[#fdfaf6]">
      <div className="mx-auto max-w-[1440px] px-6">

        {/* Heading */}
        <div className="reveal mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--color-gold-deep)]/60" />
            <h2 className="section-heading reveal font-[var(--font-display)] text-[32px] uppercase tracking-[0.08em] text-[var(--color-text)]">
              Loved By Our Customers
            </h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--color-gold-deep)]/60" />
          </div>
          {/* Gold ornament */}
          <svg width="60" height="10" viewBox="0 0 60 10" fill="none" aria-hidden="true">
            <line x1="0" y1="5" x2="22" y2="5" stroke="#c8a56d" strokeWidth="0.8" />
            <circle cx="30" cy="5" r="3" fill="#c8a56d" opacity="0.7" />
            <circle cx="24" cy="5" r="1.5" fill="#c8a56d" opacity="0.45" />
            <circle cx="36" cy="5" r="1.5" fill="#c8a56d" opacity="0.45" />
            <line x1="38" y1="5" x2="60" y2="5" stroke="#c8a56d" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Cards */}
        <div className="stagger-children grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.author}
              className="testimonial-card-anim reveal group relative flex flex-col rounded-[14px] border border-[var(--color-border)] bg-white px-5 py-5 shadow-[0_4px_16px_rgba(114,74,78,0.07)] transition-all duration-300"
            >
              {/* Hover ring */}
              <div className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 ring-1 ring-[rgba(192,154,108,0.38)] transition-opacity duration-300 group-hover:opacity-100" />

              {/* Large gold quote mark */}
              <div
                className="mb-2 font-[var(--font-display)] text-[52px] leading-none text-[var(--color-gold-deep)] select-none"
                style={{ lineHeight: 0.8, marginTop: -2 }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Quote text */}
              <p className="flex-1 text-[13px] leading-[1.75] text-[var(--color-muted)]">
                {item.quote}
              </p>

              {/* Divider */}
              <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[rgba(192,154,108,0.28)] to-transparent" />

              {/* Author row */}
              <div className="flex items-center gap-2.5">
                {/* Avatar */}
                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-[rgba(192,154,108,0.35)]">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name + city + stars */}
                <div>
                  <p className="text-[12px] font-semibold text-[var(--color-text)]">{item.author}</p>
                  <p className="text-[10px] text-[var(--color-muted)]">{item.city}</p>
                  <div className="mt-0.5 flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 fill-[#c8a030] text-[#c8a030]" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
