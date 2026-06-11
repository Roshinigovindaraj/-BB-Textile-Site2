import { Facebook, Instagram, Send, Youtube } from 'lucide-react'

type FooterColumn = {
  title: string
  links: string[]
}

type FooterProps = {
  columns: FooterColumn[]
}

export function Footer({ columns }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-[#fdf8f2]" id="footer">

      {/* ── Lotus watercolor decorations ── */}
      {/* Pink lotus — left */}
      <img
        src="/images/lotus-pink.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -left-8 h-[320px] w-auto opacity-[0.22] select-none"
        style={{ mixBlendMode: 'multiply' }}
      />
      {/* Gold lotus — right */}
      <img
        src="/images/lotus-gold.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -right-6 h-[300px] w-auto opacity-[0.20] select-none"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* ── Top gold divider ── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent" />

      {/* ── Main footer content ── */}
      <div className="relative mx-auto max-w-[1440px] px-6 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-gold)]/40 bg-white/80">
                <span className="font-[var(--font-display)] text-base text-[var(--color-wine)]">VB</span>
              </div>
              <div className="leading-none">
                <p className="font-[var(--font-display)] text-[20px] uppercase tracking-[0.3em] text-[var(--color-wine)]">Vaarini</p>
                <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--color-muted)]">Boutique</p>
              </div>
            </div>
            <p className="text-[13px] leading-7 text-[var(--color-muted)] max-w-[220px]">
              Celebrating tradition, weaving stories of elegance since 2018.
            </p>
            {/* Social */}
            <div className="mt-4 flex items-center gap-2">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook,  label: 'Facebook'  },
                { Icon: Youtube,   label: 'YouTube'   },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="social-icon grid h-8 w-8 place-items-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text)] transition hover:border-[rgba(192,154,108,0.55)] hover:text-[var(--color-wine)]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
              {/* Pinterest — no lucide icon */}
              <a
                href="#top"
                aria-label="Pinterest"
                className="social-icon grid h-8 w-8 place-items-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text)] transition hover:border-[rgba(192,154,108,0.55)] hover:text-[var(--color-wine)] font-bold text-[13px]"
              >
                P
              </a>
            </div>
          </div>

          {/* Link columns — only first 2 from columns prop */}
          {columns.slice(0, 2).map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--color-text)]">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.slice(0, 5).map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-[13px] text-[var(--color-muted)] transition-colors duration-150 hover:text-[var(--color-wine)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="mb-1 text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--color-text)]">
              Stay in the Loop
            </h3>
            <p className="mb-3 text-[13px] leading-6 text-[var(--color-muted)]">
              Offers, new arrivals & styling tips — straight to your inbox.
            </p>
            <form className="flex overflow-hidden rounded-md border border-[var(--color-border-strong)] bg-white shadow-sm">
              <input
                aria-label="Email address"
                className="w-full bg-transparent px-3 py-2.5 text-[13px] outline-none placeholder:text-[var(--color-muted)]/70"
                placeholder="Enter your email"
                type="email"
              />
              <button
                aria-label="Subscribe"
                type="submit"
                className="grid h-10 w-10 shrink-0 place-items-center bg-[var(--color-wine)] text-white transition hover:bg-[var(--color-wine-dark)]"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
            {/* Trust badges */}
            <div className="mt-4 flex items-center gap-3">
              {['Free Returns', 'Secure Pay', 'COD Available'].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[var(--color-border)] bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-6 py-4 text-[11px] text-[var(--color-muted)]">
          <p>© 2026 <span className="text-[var(--color-wine)] font-medium">Vaarini Boutique</span>. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#top" className="hover:text-[var(--color-wine)] transition-colors">Privacy Policy</a>
            <a href="#top" className="hover:text-[var(--color-wine)] transition-colors">Terms & Conditions</a>
            <a href="#top" className="hover:text-[var(--color-wine)] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
