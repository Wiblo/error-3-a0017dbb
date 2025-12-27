import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FaqSection } from "@/components/sections/faq/FaqSection"
import { businessInfo } from "@/lib/data/business-info"

export default function Home() {
  return (
    <>
      <HeroWithImage
        subtitle="Santa Claus & His Elves"
        title="Spreading Christmas Magic & Joy Since 1823"
        backgroundImage="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=1600&q=80"
        backgroundImageAlt="Santa Claus delivering presents on Christmas Eve"
        ctaText="Join the Nice List"
        ctaUrl={businessInfo.bookingUrl}
      />
      <FeaturedServices />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
      <FaqSection />
    </>
  )
}
