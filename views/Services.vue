<template>
  <section class="hero-bg text-white py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-4">
        Nâng cao trải nghiệm và thúc đẩy thành công
      </h1>
    </div>
  </section>
  <div>
    <FeaturesSection />
    <ServicesSection />
    <ServiceTechnology />
    <ScrollTop />
  </div>
</template>

<script>
import ServicesSection from "@/components/sections/ServicesSection.vue";
import FeaturesSection from "@/components/sections/FeaturesSection.vue";
import ServiceTechnology from "@/components/sections/ServiceTechnology.vue";
import ScrollTop from "@/components/sections/ScrollTop.vue";

export default {
  name: "Service",
  components: {
    FeaturesSection,
    ServicesSection,
    ServiceTechnology,
    ScrollTop,
  },
};
</script>
