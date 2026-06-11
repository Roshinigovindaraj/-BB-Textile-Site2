import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Heart, Search, ShoppingBag, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { NavLink } from '@/utils/boutiqueData'

function LogoMark() {
  return (
    <svg aria-hidden="true" className="h-8 w-8 text-[var(--color-gold-deep)]" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path
        d="M20 6c0 8-8 12-8 20 0 4 3.6 8 8 8s8-4 8-8c0-8-12-8-8-20Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M20 34c-4 0-8-2-8-6 0-5 4-8 8-12 4 4 8 7 8 12 0 4-4 6-8 6Z"
        fill="currentColor"
        opacity="0.45"
      />
      <circle cx="20" cy="18" r="2.5" fill="var(--color-wine)" />
    </svg>
  )
}

type NavItemProps = {
  link: NavLink
}

function NavItem({ link }: NavItemProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120)
  }

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (!link.hasDropdown || !link.dropdownItems?.length) {
    return (
      <a
        className="inline-flex items-center gap-1 border-b border-transparent pb-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-wine)]"
        href={link.href}
      >
        {link.label}
      </a>
    )
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <a
        className="group inline-flex cursor-pointer items-center gap-1 border-b border-transparent pb-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-wine)]"
        href={link.href}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {link.label}
        <ChevronDown
          className={`h-3 w-3 text-[var(--color-muted)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </a>

      {/* Dropdown panel */}
      <div
        className={`absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2 transition-all duration-200 ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        {/* Arrow tip */}
        <div className="flex justify-center mb-[-2px]">
          <div
            className="h-3 w-3 rotate-45 border-l border-t border-[rgba(192,154,108,0.35)] bg-[#fdf6ee]"
            style={{ marginBottom: -7 }}
          />
        </div>

        {/* Panel */}
        <div
          className="min-w-[210px] overflow-hidden rounded-2xl border border-[rgba(192,154,108,0.32)] bg-[#fdf6ee] shadow-[0_20px_60px_rgba(80,35,10,0.18),0_4px_16px_rgba(120,70,20,0.10)]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 180px 80px at 50% 0%, rgba(220,175,110,0.13), transparent 70%), radial-gradient(ellipse 120px 60px at 100% 100%, rgba(180,120,70,0.09), transparent 70%)',
          }}
        >
          {/* Gold top accent bar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[rgba(192,154,108,0.2)] via-[#c09a6c] to-[rgba(192,154,108,0.2)]" />

          {/* Header label */}
          <div className="px-5 pb-1.5 pt-3.5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#b58a4d]">
              {link.label}
            </p>
            {/* Ornamental divider */}
            <div className="mt-2 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(192,154,108,0.5)] to-transparent" />
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M5 1 L6.2 3.8 L9 4.5 L6.8 6.8 L7.5 9.5 L5 8 L2.5 9.5 L3.2 6.8 L1 4.5 L3.8 3.8 Z" fill="#c09a6c" opacity="0.7" />
              </svg>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(192,154,108,0.5)] to-transparent" />
            </div>
          </div>

          {/* Items */}
          <ul className="px-2 pb-3 pt-1" role="menu">
            {link.dropdownItems.map((item) => (
              <li key={item.label} role="none">
                <Link
                  to={item.href}
                  role="menuitem"
                  className="group relative flex items-center justify-between gap-3 overflow-hidden rounded-lg px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#5a3520] transition-all duration-150 hover:bg-[rgba(192,154,108,0.12)] hover:text-[var(--color-wine)] hover:pl-4"
                >
                  <span className="absolute left-0 top-1/2 h-4 w-[2.5px] -translate-y-1/2 rounded-full bg-[var(--color-wine)] opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                  <span>{item.label}</span>
                  {item.tag && (
                    <span className="rounded-sm bg-gradient-to-r from-[var(--color-wine)] to-[#9b1a34] px-1.5 py-[3px] text-[8px] font-bold uppercase tracking-[0.1em] text-white shadow-sm">
                      {item.tag}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom decorative footer */}
          <div className="border-t border-[rgba(192,154,108,0.2)] px-5 py-2.5">
            <p className="text-center text-[9px] uppercase tracking-[0.22em] text-[#b58a4d] opacity-70">
              Vaarini Boutique
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

type HeaderProps = {
  links: NavLink[]
}

export function Header({ links }: HeaderProps) {
  const actions = [
    { label: 'Search products', icon: Search },
    { label: 'Open account', icon: UserRound },
    { label: 'View wishlist', icon: Heart },
    { label: 'Open cart', icon: ShoppingBag, badge: '0' },
  ]

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[rgba(253,251,247,0.96)] backdrop-blur-sm">
      <div className="mx-auto grid h-[68px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6">
        <a className="flex items-center gap-3" href="#top">
          <LogoMark />
          <div className="leading-none">
            <p className="font-[var(--font-display)] text-[22px] uppercase tracking-[0.28em] text-[var(--color-wine)]">
              Vaarini
            </p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.38em] text-[var(--color-muted)]">Boutique</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavItem key={link.label} link={link} />
          ))}
        </nav>

        <div className="flex items-center justify-end gap-1 text-[var(--color-text)]">
          {actions.map((action) => {
            const Icon = action.icon

            return (
              <button
                key={action.label}
                aria-label={action.label}
                className="relative rounded-full p-2 transition hover:bg-white/80"
                type="button"
              >
                <Icon className="h-[18px] w-[18px] stroke-[1.6]" />
                {action.badge && (
                  <span className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[var(--color-wine)] px-1 text-[9px] font-semibold text-white">
                    {action.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </header>
  )
}
