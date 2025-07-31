<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <FeaturesSection />
    <WorkflowSection />
    <FaqSection />
    <TestimonialsSection />
  </div>
</template>

<script>
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import WorkflowSection from '@/components/sections/WorkflowSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    AboutSection,
    ServicesSection,
    FeaturesSection,
    WorkflowSection,
    FaqSection,
    TestimonialsSection
  }
}
</script>