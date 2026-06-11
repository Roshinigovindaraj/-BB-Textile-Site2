import { BenefitsSection } from '@/components/boutique/BenefitsSection'
import { CategoryStrip } from '@/components/boutique/CategoryStrip'
import { Footer } from '@/components/boutique/Footer'
import { Header } from '@/components/boutique/Header'
import { HeroSection } from '@/components/boutique/HeroSection'
import { NewArrivalsSection } from '@/components/boutique/NewArrivalsSection'
import { OfferBanner } from '@/components/boutique/OfferBanner'
import { TestimonialsSection } from '@/components/boutique/TestimonialsSection'
import { TopBar } from '@/components/boutique/TopBar'
import {
  benefits,
  categoryItems,
  footerColumns,
  heroBadges,
  heroImage,
  navLinks,
  newArrivalProducts,
  testimonials,
} from '@/utils/boutiqueData'
import { useScrollReveal } from '@/utils/useScrollReveal'

export default function Home() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-text)]" id="top">
      <TopBar />
      <Header links={navLinks} />
      <main>
        <HeroSection badges={heroBadges} image={heroImage} />
        <CategoryStrip items={categoryItems} />
        <NewArrivalsSection products={newArrivalProducts} />
        <BenefitsSection items={benefits} />
        <OfferBanner />
        <TestimonialsSection items={testimonials} />
      </main>
      <Footer columns={footerColumns} />
    </div>
  )
}