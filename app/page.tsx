import HeroSection from '@/components/sections/HeroSection'
import ArtLine from '@/components/sections/ArtLine'
import ProblemSection from '@/components/sections/ProblemSection'
import GapsSection from '@/components/sections/GapsSection'
import SelectedWork from '@/components/sections/SelectedWork'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BookingSection from '@/components/sections/BookingSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ArtLine />
      <ProblemSection />
      <GapsSection />
      <SelectedWork />
      <TestimonialsSection />
      <BookingSection />
    </>
  )
}
