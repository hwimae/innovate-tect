<template>
  <div>
    <MainBodySection />
    <AboutSection />
    <ServicesSection />
    <FeaturesSection />
    <SolutionSection />
    <AboutTeamSection />
    <BlogSection />
    <FaqSection />
    <TestimonialsSection />
  </div>
</template>

<script>
import MainBodySection from '@/components/sections/MainBodySection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import SolutionSection from '@/components/sections/SolutionSection.vue'
import AboutTeamSection from '@/components/sections/AboutTeamSection.vue'
import BlogSection from '@/components/sections/BlogSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'

export default {
  name: 'Home',
  components: {
    MainBodySection,
    AboutSection,
    ServicesSection,
    FeaturesSection,
    SolutionSection,
    AboutTeamSection,
    BlogSection,
    FaqSection,
    TestimonialsSection
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>