import { ArrowRight, Gem, Layers, Sparkles } from 'lucide-react'

const features = [
  { icon: Gem,      label: 'Premium Quality', sub: 'Silk' },
  { icon: Layers,   label: 'Traditional',     sub: 'Weaves' },
  { icon: Sparkles, label: 'Timeless',        sub: 'Elegance' },
]

export function OfferBanner() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="reveal-scale relative overflow-hidden rounded-[20px]" style={{ minHeight: 220 }}>

          {/* Full-bleed background image */}
          <img
            src="/images/offer-img.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Dark wine overlay — left heavy, fades right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(60,8,20,0.96) 0%, rgba(60,8,20,0.88) 38%, rgba(60,8,20,0.55) 62%, rgba(60,8,20,0.10) 100%)',
            }}
          />

          {/* Gold corner border frames */}
          {/* Top-left */}
          <div className="pointer-events-none absolute left-5 top-5 h-12 w-12 border-l border-t border-[rgba(200,165,109,0.55)]" />
          {/* Top-right */}
          <div className="pointer-events-none absolute right-5 top-5 h-12 w-12 border-r border-t border-[rgba(200,165,109,0.55)]" />
          {/* Bottom-left */}
          <div className="pointer-events-none absolute bottom-5 left-5 h-12 w-12 border-b border-l border-[rgba(200,165,109,0.55)]" />
          {/* Bottom-right */}
          <div className="pointer-events-none absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[rgba(200,165,109,0.55)]" />

          {/* Content */}
          <div className="relative z-10 grid min-h-[220px] grid-cols-1 items-center gap-8 px-8 py-10 sm:px-16 lg:grid-cols-[420px_1fr]">

            {/* Left — headline block */}
            <div>
              {/* Eyebrow with flanking lines */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-[var(--color-gold)]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-gold)]">
                  New Arrivals
                </p>
                <div className="h-px w-6 bg-[var(--color-gold)]" />
              </div>

              <h2
                className="offer-amount font-[var(--font-display)] uppercase leading-none"
                style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}
              >
                Up to 40% Off
              </h2>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
                On Silk Sarees
              </p>

              {/* Gold divider */}
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-[var(--color-gold)] to-transparent" />
            </div>

            {/* Right — tagline + CTA + icons */}
            <div className="flex flex-col gap-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-white/85">
                Luxury.&nbsp;&nbsp;Heritage.&nbsp;&nbsp;You.
              </p>

              {/* CTA button — outlined style matching image */}
              <a
                href="/sarees/silk"
                className="btn-wine-pulse inline-flex w-fit items-center gap-3 border border-[rgba(200,165,109,0.7)] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-white/10"
              >
                Shop Now
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              {/* Feature icons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                {features.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(200,165,109,0.45)] bg-white/5">
                      <Icon className="h-4 w-4 text-[var(--color-gold)]" strokeWidth={1.4} />
                    </div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/75 leading-tight">
                      {label}<br />{sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
