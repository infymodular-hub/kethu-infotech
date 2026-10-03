import { AuroraBackground } from '@/components/aurora-background'
import { ComparisonSection } from '@/components/comparison-section'
import { ContactSection } from '@/components/contact-section'
import { CoursesSection } from '@/components/courses-section'
import { CursorGlow } from '@/components/cursor-glow'
import { FloatingActions } from '@/components/floating-actions'
import { GallerySection } from '@/components/gallery-section'
import { Hero } from '@/components/hero'
import { IndustriesSection } from '@/components/industries-section'
import { LogoMarquee } from '@/components/logo-marquee'
import { ProcessSection } from '@/components/process-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StatsSection } from '@/components/stats-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { WhyUsSection } from '@/components/why-us-section'
import { HashScroll } from '@/components/hash-scroll'


export default function HomePage() {
  return (
    <>
      <AuroraBackground />
      <CursorGlow />
      <SiteHeader />
      <HashScroll />
      <main>
        <Hero />
      
        <StatsSection />
        <LogoMarquee />
        <CoursesSection />
        
        <WhyUsSection />
        <ProcessSection />
        <IndustriesSection />
        <TestimonialsSection />
        <GallerySection />
        <ComparisonSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  )
}
