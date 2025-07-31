
<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-screen-xl">
      <div
        class="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16"
      >
        <div class="text-center md:text-left mb-6 md:mb-0">
          <p class="text-gray-600 text-sm mb-2">/ SERVICES /</p>
          <h2
            class="text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight"
          >
            Nâng cao trải nghiệm và thúc đẩy thành công
          </h2>
        </div>
        <!-- Pagination/Navigation for Desktop -->
        <div class="flex space-x-2">
          <button
            @click="prevSlide"
            class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition duration-200"
          >
            <svg
              class="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition duration-200"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Slider Container -->
      <div class="relative overflow-hidden rounded-xl">
        <div
          class="flex"
          :class="{
            'transition-transform duration-500 ease-in-out': enableTransition,
          }"
          :style="{
            transform: `translateX(-${
              currentIndex * (100 / currentSlidesPerView)
            }%)`,
          }"
        >
          <!-- Slide Items -->
          <div
            v-for="(slide, index) in clonedSlides"
            :key="index"
            class="flex-none w-full md:w-1/2 lg:w-1/3 p-4"
            :style="{ flex: `0 0 ${100 / currentSlidesPerView}%` }"
          >
            <div
              class="group cursor-pointer relative overflow-hidden rounded-2xl p-8 h-96"
              :class="slide.cardBgClass"
            >
              <div class="absolute inset-0" :class="slide.overlayClass"></div>
              <div class="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div class="flex space-x-2 mb-4">
                    <span
                      v-for="(tag, tagIndex) in slide.tags"
                      :key="tagIndex"
                      class="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-700"
                      :class="slide.tagTextColorClass"
                      >{{ tag }}</span
                    >
                  </div>
                  <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-30"
                  >
                    <img
                      :src="slide.image"
                      :alt="slide.title"
                      class="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    class="text-2xl font-bold mb-4"
                    :class="slide.titleTextColorClass"
                  >
                    {{ slide.title }}
                  </h3>
                  <div class="flex justify-end">
                    <button
                      class="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                      :class="slide.buttonBgClass"
                    >
                      <svg
                        class="w-6 h-6"
                        :class="slide.buttonIconColorClass"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

const originalSlides = ref([
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop&crop=center",
    title: "Trí tuệ Nhân tạo (AI) và Machine Learning",
    tags: ["Services", "Vision"],
    cardBgClass: "bg-gradient-to-br from-blue-50 to-indigo-100",
    overlayClass: "bg-gradient-to-br from-blue-400/20 to-purple-600/20",
    titleTextColorClass: "text-gray-900",
    tagTextColorClass: "text-gray-700",
    buttonBgClass: "bg-gray-900",
    buttonIconColorClass: "text-white",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop&crop=center",
    title: "An toàn và Bảo mật Thông tin",
    tags: ["Optimization", "Services"],
    cardBgClass: "bg-gradient-to-br from-gray-900 to-gray-700",
    overlayClass: "", 
    titleTextColorClass: "text-white",
    tagTextColorClass: "text-white",
    buttonBgClass: "bg-white",
    buttonIconColorClass: "text-gray-900",
  },
  {
    image: "https://images.unsplash.com/photo-1559470618-bf6e8b5ea2d7?w=400&h=400&fit=crop&crop=center",
    title: "Dịch vụ Đám mây (Cloud Computing)",
    tags: ["Optimization", "Services"],
    cardBgClass: "bg-gradient-to-br from-blue-500 to-purple-600",
    overlayClass: "", 
    titleTextColorClass: "text-white",
    tagTextColorClass: "text-white",
    buttonBgClass: "bg-white",
    buttonIconColorClass: "text-gray-900",
  },
  {
    image: "https://placehold.co/400x400/F0F2F4/333333?text=Web+Dev",
    title: "Phát triển Ứng dụng Web",
    tags: ["Development", "Services"],
    cardBgClass: "bg-gradient-to-br from-green-50 to-blue-100",
    overlayClass: "bg-gradient-to-br from-green-400/20 to-blue-600/20",
    titleTextColorClass: "text-gray-900",
    tagTextColorClass: "text-gray-700",
    buttonBgClass: "bg-gray-900",
    buttonIconColorClass: "text-white",
  },
  {
    image: "https://placehold.co/400x400/F0F2F4/333333?text=Mobile+App",
    title: "Phát triển Ứng dụng Di động",
    tags: ["Mobile", "Services"],
    cardBgClass: "bg-gradient-to-br from-yellow-50 to-orange-100",
    overlayClass: "bg-gradient-to-br from-yellow-400/20 to-orange-600/20",
    titleTextColorClass: "text-gray-900",
    tagTextColorClass: "text-gray-700",
    buttonBgClass: "bg-gray-900",
    buttonIconColorClass: "text-white",
  },
]);

const clonesCount = 3; 
const currentIndex = ref(clonesCount); 
const enableTransition = ref(true); 

const clonedSlides = computed(() => {
  const clonedStart = originalSlides.value.slice(-clonesCount); 
  const clonedEnd = originalSlides.value.slice(0, clonesCount); 
  return [...clonedStart, ...originalSlides.value, ...clonedEnd];
});

const currentSlidesPerView = ref(3); 

const updateSlidesPerView = () => {
  if (window.innerWidth >= 1024) {
    currentSlidesPerView.value = 3;
  } else if (window.innerWidth >= 768) {
    currentSlidesPerView.value = 2;
  } else {
    currentSlidesPerView.value = 1;
  }
};

onMounted(() => {
  updateSlidesPerView(); 
  window.addEventListener("resize", updateSlidesPerView); 
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlidesPerView);
});

const nextSlide = () => {
  currentIndex.value++;

  if (currentIndex.value >= originalSlides.value.length + clonesCount) {
    enableTransition.value = false; 
    currentIndex.value = clonesCount;
    nextTick(() => {
      enableTransition.value = true;
    });
  }
};

const prevSlide = () => {
  currentIndex.value--;

  if (currentIndex.value < clonesCount) {
    enableTransition.value = false; 
    currentIndex.value = originalSlides.value.length + clonesCount - 1;
    nextTick(() => {
      enableTransition.value = true;
    });
  }
};

const goToSlide = (targetIndex) => {
  enableTransition.value = true; 
  currentIndex.value = targetIndex;
};
</script>

<style scoped>
</style>