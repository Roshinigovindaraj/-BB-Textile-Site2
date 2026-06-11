import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to all elements matching the selectors
 * and adds `reveal-visible` when they enter the viewport.
 */
export function useScrollReveal(selectors = '.reveal, .reveal-left, .reveal-scale, .section-heading') {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selectors)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selectors])
}
