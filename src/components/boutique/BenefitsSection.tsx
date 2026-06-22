import { Flower2, HandHeart, Headphones, Sparkles, Truck, type LucideIcon } from 'lucide-react'

import type { Benefit } from '@/utils/boutiqueData'

const iconMap: Record<Benefit['icon'], LucideIcon> = {
  lotus: Flower2,
  sparkles: Sparkles,
  hand: HandHeart,
  truck: Truck,
  headphones: Headphones,
}

type BenefitsSectionProps = {
  items: Benefit[]
}

export function BenefitsSection({ items }: BenefitsSectionProps) {
  return (
    <section className="border-b border-[var(--color-border)] py-10" id="why-vaarini">
      <div className="mx-auto max-w-[1440px] px-6">

        {/* Heading */}
        <div className="reveal mb-10 flex items-center justify-center gap-4 sm:gap-6">
          <div className="hidden sm:block h-px w-10 md:w-24 bg-[var(--color-border-strong)]/70" />
          <h2 className="section-heading reveal font-[var(--font-display)] text-[22px] sm:text-[26px] md:text-[32px] uppercase tracking-[0.08em] text-[var(--color-text)] text-center">
            Why Choose Vaarini?
          </h2>
          <div className="hidden sm:block h-px w-10 md:w-24 bg-[var(--color-border-strong)]/70" />
        </div>

        <div className="stagger-children grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => {
            const Icon = iconMap[item.icon]

            return (
              <article
                key={item.title}
                className="benefit-card-anim reveal-scale group rounded-[22px] border border-[var(--color-border)] bg-white/80 px-5 py-6 shadow-[0_8px_20px_rgba(104,61,69,0.06)]"
              >
                {/* Icon with animated background */}
                <div className="flex items-center gap-3">
                  <div className="benefit-icon-wrap relative flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(192,154,108,0.1)]">
                    <Icon className="h-5 w-5 text-[var(--color-gold-deep)]" />
                  </div>
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text)]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>

                {/* Bottom gold line */}
                <div className="mt-5 h-px w-0 bg-gradient-to-r from-[var(--color-gold-deep)] to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
