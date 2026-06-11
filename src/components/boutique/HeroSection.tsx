import { ArrowRight, Medal, PackageCheck, ShieldCheck, type LucideIcon } from 'lucide-react'

import type { FeatureBadge } from '@/utils/boutiqueData'

const iconMap: Record<FeatureBadge['icon'], LucideIcon> = {
  shield: ShieldCheck,
  medal: Medal,
  package: PackageCheck,
}

type HeroSectionProps = {
  image: string
  badges: FeatureBadge[]
}

export function HeroSection({ image, badges }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[68%_center] lg:object-right"
        src={image}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(251,246,239,0.15)] via-transparent to-transparent lg:from-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <div className="grid min-h-[480px] items-center lg:min-h-[540px] lg:grid-cols-[minmax(0,460px)_1fr] xl:min-h-[580px]">

          {/* Left copy */}
          <div className="relative z-10 py-10 lg:py-14 lg:pl-6 xl:pl-10 lg:translate-x-[125px] -translate-y-[55px]">
            <p className="hero-eyebrow mb-5 text-[11px] uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Timeless Tradition. Contemporary You.
            </p>

            <h1 className="hero-title font-display text-[42px] leading-[1.12] text-[var(--color-text)] sm:text-[50px] xl:text-[56px]">
              Woven with{' '}
              <span className="font-display text-[56px] italic leading-none text-[var(--color-wine)] sm:text-[66px] xl:text-[74px]">
                Heritage,
              </span>
              <br />
              Made for{' '}
              <span className="font-display text-[56px] italic leading-none text-[var(--color-wine)] sm:text-[66px] xl:text-[74px]">
                You.
              </span>
            </h1>

            <p className="hero-subtitle mt-5 max-w-[340px] text-[15px] leading-7 text-[var(--color-muted)]">
              Exquisite sarees handpicked for every occasion, woven with love, crafted to perfection.
            </p>

            <div className="hero-cta mt-7">
              <a
                className="btn-wine-pulse inline-flex items-center gap-2.5 rounded-sm bg-[var(--color-wine)] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-[var(--color-wine-dark)]"
                href="#collections"
              >
                Explore Collection
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right badge card */}
          <div className="relative hidden lg:block">
            <div className="hero-badge-card absolute right-0 top-1/2 z-20 xl:right-4">
              <div className="flex w-[108px] flex-col overflow-hidden rounded-[26px] border border-[rgba(139,94,60,0.18)] bg-[#fdf8f2] backdrop-blur-sm">
                {badges.map((badge, index) => {
                  const Icon = iconMap[badge.icon]
                  return (
                    <div
                      key={badge.title}
                      className={`hero-badge-item px-3 py-5 text-center transition-colors duration-300 hover:bg-[rgba(192,154,108,0.08)] ${
                        index < badges.length - 1 ? 'border-b border-[rgba(139,94,60,0.14)]' : ''
                      }`}
                    >
                      <Icon
                        className="mx-auto h-6 w-6 text-[#7a4f2e] transition-transform duration-400 hover:scale-110"
                        strokeWidth={1.4}
                      />
                      <p className="mt-2.5 text-[8.5px] font-bold uppercase leading-tight tracking-[0.18em] text-[#5a3520]">
                        {badge.title}
                      </p>
                      <p className="mt-0.5 text-[7.5px] font-semibold uppercase tracking-[0.16em] text-[#7a4f2e]">
                        {badge.subtitle}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile badges */}
        <div className="hero-badges-mobile flex flex-wrap justify-center gap-3 pb-4 lg:hidden">
          {badges.map((badge) => {
            const Icon = iconMap[badge.icon]
            return (
              <div
                key={badge.title}
                className="flex items-center gap-2 rounded-full border border-[rgba(139,94,60,0.18)] bg-[#fdf8f2] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#5a3520]"
              >
                <Icon className="h-4 w-4 text-[#7a4f2e]" strokeWidth={1.4} />
                <span>{badge.title} {badge.subtitle}</span>
              </div>
            )
          })}
        </div>

        {/* Bottom tagline */}
        <div className="hero-tagline relative z-10 overflow-hidden">
          {/* Light sweep — same as btn-wine-pulse */}
          <div
            className="group relative flex items-center justify-start gap-0 py-5 lg:pl-6 xl:pl-10 lg:translate-x-[80px] transition-colors duration-300 hover:bg-[rgba(192,154,108,0.06)]"
            style={{ cursor: 'default' }}
          >
            {/* Sweep shine on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(105deg, transparent 38%, rgba(240,201,122,0.13) 50%, transparent 62%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '200% 0',
                transition: 'background-position 0.55s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLSpanElement).style.backgroundPosition = '-200% 0')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLSpanElement).style.backgroundPosition = '200% 0')
              }
            />

            {/* Word 1 */}
            <span className="shimmer-gold text-[10px] font-semibold uppercase tracking-[0.28em]">
              Pure Fabrics
            </span>

            {/* Dot 1 */}
            <span className="relative mx-4 inline-flex items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inline-block h-2 w-2 rounded-full bg-[var(--color-gold)]/30"
                style={{ animation: 'pulseRing 2s ease-out infinite' }}
              />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            </span>

            {/* Word 2 */}
            <span className="shimmer-gold text-[10px] font-semibold uppercase tracking-[0.28em]">
              Fine Craftsmanship
            </span>

            {/* Dot 2 */}
            <span className="relative mx-4 inline-flex items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inline-block h-2 w-2 rounded-full bg-[var(--color-gold)]/30"
                style={{ animation: 'pulseRing 2s ease-out 0.7s infinite' }}
              />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            </span>

            {/* Word 3 */}
            <span className="shimmer-gold text-[10px] font-semibold uppercase tracking-[0.28em]">
              Timeless Beauty
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
