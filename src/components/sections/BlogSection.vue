<template>
  <section id="blog" class="w-full bg-white py-16 md:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16"
      >
        <div class="text-center md:text-left mb-6 md:mb-0">
          <p class="text-gray-600 text-sm mb-2">/ BLOG /</p>
          <h2
            class="text-6xl font-bold md:text-5xl text-[#1F2937] leading-tight"
          >
            Khám phá kiến thức công nghệ
          </h2>
        </div>
        <button
          @click="goToNews"
          class="mt-[70px] px-8 py-3 border-1 bg-white border-[#386bb7] text-black font-semibold rounded-2xl shadow-md hover:bg-[#0c5af5] hover:text-white transition duration-300 cursor-pointer"
        >
          Xem tất cả
        </button>
      </div>

      <!-- Blog Posts Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        <!-- Blog Post Item 1 -->
        <div
          @click="goToPost('post-1')"
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/about-us-1-640x478.jpg"
            alt="Blog Image 1"
            class="w-full h-auto object-cover"
          />
          <div class="p-6">
            <p
              class="text-gray-500 text-xs mb-2 hover:text-[#0c5af5] cursor-pointer font-medium"
            >
              18/03/2024
            </p>
            <h3
              class="text-xl font-semibold text-[#1F2937] mb-3 leading-snug"
            >
              Tiềm năng và Triển vọng: Làm thế nào Công nghệ đang Thay đổi Thế
              giới
            </h3>
            <div class="flex flex-wrap text-xs text-gray-600">
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >/ AI /</span
              >
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >Business /</span
              >
            </div>
          </div>
        </div>

        <!-- Blog Post Item 2 -->
        <div
          @click="goToPost('post-2')"
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/dich-vu-dam-may-640x478.jpg"
            alt="Blog Image 2"
            class="w-full h-auto object-cover"
          />
          <div class="p-6">
            <p
              class="text-gray-500 text-xs mb-2 hover:text-[#0c5af5] cursor-pointer font-medium"
            >
              18/03/2024
            </p>
            <h3
              class="text-xl font-semibold text-[#1F2937] mb-3 leading-snug"
            >
              Điểm Nhấn Công nghệ: Sự Đổi Mới và Sáng Tạo trong Doanh nghiệp
            </h3>
            <div class="flex flex-wrap text-xs text-gray-600">
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >/ AI /</span
              >
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >Neural Networks /</span
              >
            </div>
          </div>
        </div>

        <!-- Blog Post Item 3 -->
        <div
          @click="goToPost('post-3')"
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/giai-phap-1-640x478.jpg"
            alt="Blog Image 3"
            class="w-full h-auto object-cover"
          />
          <div class="p-6">
            <p
              class="text-gray-500 text-xs mb-2 hover:text-[#0c5af5] cursor-pointer font-medium"
            >
              18/03/2024
            </p>
            <h3
              class="text-xl font-semibold text-[#1F2937] mb-3 leading-snug"
            >
              Xu hướng Công nghệ 2024: Định hướng cho Sự Phát triển
            </h3>
            <div class="flex flex-wrap text-xs text-gray-600">
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >/ Business /</span
              >
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >Technology /</span
              >
            </div>
          </div>
        </div>

        <!-- Blog Post Item 4 -->
        <div
          @click="goToPost('post-4')"
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/giai-phap-4-640x478.jpg"
            alt="Blog Image 4"
            class="w-full h-auto object-cover"
          />
          <div class="p-6">
            <p
              class="text-gray-500 text-xs mb-2 hover:text-[#0c5af5] cursor-pointer font-medium"
            >
              18/03/2024
            </p>
            <h3
              class="text-xl font-semibold text-[#1F2937] mb-3 leading-snug"
            >
              Phát triển Ứng dụng Di động: Bí quyết để Tạo Ra Trải nghiệm
              Người dùng Tốt nhất
            </h3>
            <div class="flex flex-wrap text-xs text-gray-600">
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >/ AI /</span
              >
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >Business /</span
              >
            </div>
          </div>
        </div>

        <!-- Blog Post Item 5 -->
        <div
          @click="goToPost('post-5')"
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/01/robot-1-640x478.jpg"
            alt="Blog Image 5"
            class="w-full h-auto object-cover"
          />
          <div class="p-6">
            <p
              class="text-gray-500 text-xs mb-2 hover:text-[#0c5af5] cursor-pointer font-medium"
            >
              18/03/2024
            </p>
            <h3
              class="text-xl font-semibold text-[#1F2937] mb-3 leading-snug"
            >
              Blockchain và Tiềm năng Cách mạng Hệ thống Giao dịch
            </h3>
            <div class="flex flex-wrap text-xs text-gray-600">
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >/ AI /</span
              >
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >Neural Networks /</span
              >
            </div>
          </div>
        </div>

        <!-- Blog Post Item 6 -->
        <div
          @click="goToPost('post-6')"
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <img
            src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/01/shubham-dhage-9cpMGc6LckI-unsplash-2-640x478.jpg"
            alt="Blog Image 6"
            class="w-full h-auto object-cover"
          />
          <div class="p-6">
            <p
              class="text-gray-500 text-xs mb-2 hover:text-[#0c5af5] cursor-pointer font-medium"
            >
              18/03/2024
            </p>
            <h3
              class="text-xl font-semibold text-[#1F2937] mb-3 leading-snug"
            >
              Trí tuệ nhân tạo (AI): Phát triển và Ứng dụng trong Công nghệ
            </h3>
            <div class="flex flex-wrap text-xs text-gray-600">
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >/ Business /</span
              >
              <span class="px-2 py-1 rounded hover:text-black cursor-pointer"
                >Technology /</span
              >
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogSection',
  methods: {
    goToNews() {
      this.$router.push('/tin-tuc').then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    },
    goToPost(postId) {
      this.$router.push(`/${postId}`).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }
  }
}
</script>

<style scoped>
/* Custom styles if needed */
</style>
