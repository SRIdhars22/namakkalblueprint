import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { TrustBar } from '@/components/trust-bar'
import { ServicesSection } from '@/components/services-section'
import { DeliveryBanner } from '@/components/delivery-banner'
import { WhyChooseSection } from '@/components/why-choose-section'
import { ReviewsSection } from '@/components/reviews-section'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ChatbotModal } from '@/components/chatbot-modal'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <DeliveryBanner />
      <WhyChooseSection />
      <ReviewsSection />
      <Footer />
      <FloatingWhatsApp />
      <ChatbotModal />
    </main>
  )
}
