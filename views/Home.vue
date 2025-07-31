<template>
  <div>
    <MainBodySection />
    <AboutSection />
    <ServicesSection />
    <FeaturesSection />
    <SolutionSection />
    <FaqSection />
    <TestimonialsSection />
    <ScrollTop />
  </div>
</template>

<script>
import MainBodySection from "@/components/sections/MainBodySection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import FeaturesSection from "@/components/sections/FeaturesSection.vue";
import SolutionSection from "@/components/sections/SolutionSection.vue";
import FaqSection from "@/components/sections/FaqSection.vue";
import TestimonialsSection from "@/components/sections/TestimonialsSection.vue";
import ScrollTop from "@/components/sections/ScrollTop.vue";

export default {
  name: "Home",
  components: {
    MainBodySection,
    AboutSection,
    ServicesSection,
    FeaturesSection,
    SolutionSection,
    FaqSection,
    TestimonialsSection,
    ScrollTop,
  },
};
</script>
