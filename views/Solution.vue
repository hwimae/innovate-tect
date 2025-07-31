<template>
  <section class="hero-bg text-white py-20 mb-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-4">
        Giải pháp công nghệ sáng tạo và an toàn
      </h1>
    </div>
  </section>
  <div>
    <AboutSection />
    <SolutionTechnology />
    <ScrollTop />
  </div>
</template>

<script>
import AboutSection from "@/components/sections/AboutSection.vue";
import SolutionTechnology from "@/components/sections/SolutionTechnology.vue";
import ScrollTop from "@/components/sections/ScrollTop.vue";

export default {
  name: "Solution",
  components: {
    AboutSection,
    SolutionTechnology,
    ScrollTop,
  },
};
</script>
