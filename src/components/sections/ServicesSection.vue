<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-screen-xl">
      <div
        class="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16"
      >
        <div class="text-center md:text-left mb-6 md:mb-0">
          <p class="text-gray-600 text-sm mb-2">/ services /</p>
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

      <!-- Mobile Pagination Dots (optional, can be added if needed) -->
      <!-- <div class="flex justify-center mt-8 space-x-2 md:hidden">
        <span
          v-for="(slide, index) in originalSlides"
          :key="index"
          @click="goToSlide(index + clonesCount)"
          :class="{ 'bg-blue-600': currentIndex === index + clonesCount, 'bg-gray-300': currentIndex !== index + clonesCount }"
          class="w-3 h-3 rounded-full cursor-pointer transition-colors duration-300"
        ></span>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

const originalSlides = ref([
  {
    image: "https://placehold.co/400x400/F0F2F4/333333?text=AI+ML",
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
    image: "https://placehold.co/400x400/F0F2F4/333333?text=Security",
    title: "An toàn và Bảo mật Thông tin",
    tags: ["Optimization", "Services"],
    cardBgClass: "bg-gradient-to-br from-gray-900 to-gray-700",
    overlayClass: "", // No specific overlay for dark card in image
    titleTextColorClass: "text-white",
    tagTextColorClass: "text-white",
    buttonBgClass: "bg-white",
    buttonIconColorClass: "text-gray-900",
  },
  {
    image: "https://placehold.co/400x400/F0F2F4/333333?text=Cloud+Computing",
    title: "Dịch vụ Đám mây (Cloud Computing)",
    tags: ["Optimization", "Services"],
    cardBgClass: "bg-gradient-to-br from-blue-500 to-purple-600",
    overlayClass: "", // No specific overlay for purple card in image
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

const clonesCount = 3; // Số lượng slide được nhân bản từ mỗi đầu để tạo vòng lặp liền mạch
const currentIndex = ref(clonesCount); // Index hiện tại, trỏ đến slide gốc đầu tiên
const enableTransition = ref(true); // Kiểm soát hiệu ứng CSS transition

// Tạo mảng slide đã được nhân bản
const clonedSlides = computed(() => {
  const clonedStart = originalSlides.value.slice(-clonesCount); // Lấy các slide cuối cùng
  const clonedEnd = originalSlides.value.slice(0, clonesCount); // Lấy các slide đầu tiên
  return [...clonedStart, ...originalSlides.value, ...clonedEnd];
});

// Xác định số lượng slide hiển thị cùng lúc dựa trên chiều rộng màn hình (cho tính responsive)
const currentSlidesPerView = ref(3); // Mặc định cho màn hình lớn

const updateSlidesPerView = () => {
  if (window.innerWidth >= 1024) {
    // breakpoint 'lg'
    currentSlidesPerView.value = 3;
  } else if (window.innerWidth >= 768) {
    // breakpoint 'md'
    currentSlidesPerView.value = 2;
  } else {
    // mặc định cho màn hình nhỏ
    currentSlidesPerView.value = 1;
  }
};

onMounted(() => {
  updateSlidesPerView(); // Đặt giá trị ban đầu
  window.addEventListener("resize", updateSlidesPerView); // Cập nhật khi thay đổi kích thước cửa sổ
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSlidesPerView);
});

const nextSlide = () => {
  currentIndex.value++;

  // Nếu đã di chuyển vào phần slide nhân bản ở cuối
  if (currentIndex.value >= originalSlides.value.length + clonesCount) {
    enableTransition.value = false; // Tắt transition
    // Nhảy về slide gốc tương ứng ở đầu
    currentIndex.value = clonesCount;
    // Bật lại transition sau khi nhảy xong (sử dụng nextTick để đảm bảo DOM đã cập nhật)
    nextTick(() => {
      enableTransition.value = true;
    });
  }
};

const prevSlide = () => {
  currentIndex.value--;

  // Nếu đã di chuyển vào phần slide nhân bản ở đầu
  if (currentIndex.value < clonesCount) {
    enableTransition.value = false; // Tắt transition
    // Nhảy về slide gốc tương ứng ở cuối
    currentIndex.value = originalSlides.value.length + clonesCount - 1;
    // Bật lại transition sau khi nhảy xong
    nextTick(() => {
      enableTransition.value = true;
    });
  }
};

const goToSlide = (targetIndex) => {
  enableTransition.value = true; // Đảm bảo transition được bật cho các cú nhảy trực tiếp
  currentIndex.value = targetIndex;
};
</script>

<style scoped>
/*
  Bạn có thể thêm các CSS tùy chỉnh ở đây nếu Tailwind không đủ linh hoạt.
*/
</style>
