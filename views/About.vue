<template>
  <div class="mb-20">
    <!-- Page Header -->
    <section class="hero-bg text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4">Về Chúng Tôi</h1>
        <p class="text-xl">Tìm hiểu thêm về công ty và đội ngũ của chúng tôi</p>
      </div>
    </section>
  </div>
  <AboutSection />
  <AboutTeam />
  <TestimonialsSection />
  <ScrollTop />
</template>

<script>
import TestimonialsSection from "@/components/sections/TestimonialsSection.vue";
import AboutTeam from "@/components/sections/AboutTeam.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ScrollTop from "@/components/sections/ScrollTop.vue";

export default {
  name: "About",
  components: {
    TestimonialsSection,
    AboutTeam,
    AboutSection,
    ScrollTop,
  },
};
</script>
