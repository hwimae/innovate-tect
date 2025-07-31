<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <p class="text-gray-600 text-sm mb-4">/ SOLUTIONS /</p>
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Giải pháp sáng tạo từ công nghệ
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những giải pháp công nghệ tiên tiến được thiết kế để đáp ứng nhu cầu đa dạng của doanh nghiệp hiện đại
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Solution 1: AI Machine Learning -->
          <div 
            @click="goToSolution('ai-machine-learning')"
            class="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="relative z-10 text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Ứng dụng Học máy ngôi Dựa trên AI</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 text-sm mb-4">
                Tận dụng sức mạnh của trí tuệ nhân tạo để tự động hóa quy trình và đưa ra quyết định thông minh.
              </p>
              <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                <span>Tìm hiểu thêm</span>
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Solution 2: AI Consulting -->
          <div 
            @click="goToSolution('ai-consulting')"
            class="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="relative h-64 bg-gradient-to-br from-green-500 to-blue-600 p-8 flex items-center justify-center">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="relative z-10 text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Tư vấn Tài chính Trực tuyến</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 text-sm mb-4">
                Giải pháp tư vấn tài chính thông minh với AI, giúp tối ưu hóa đầu tư và quản lý rủi ro.
              </p>
              <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                <span>Tìm hiểu thêm</span>
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Solution 3: Smart Analytics -->
          <div 
            @click="goToSolution('smart-analytics')"
            class="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="relative h-64 bg-gradient-to-br from-orange-500 to-red-600 p-8 flex items-center justify-center">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="relative z-10 text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Hệ thống Giám sát An ninh Thông minh</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 text-sm mb-4">
                Hệ thống giám sát thông minh với AI, phân tích real-time và cảnh báo tự động.
              </p>
              <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                <span>Tìm hiểu thêm</span>
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Solution 4: E-commerce Platform -->
          <div 
            @click="goToSolution('ecommerce-platform')"
            class="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="relative h-64 bg-gradient-to-br from-purple-500 to-pink-600 p-8 flex items-center justify-center">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="relative z-10 text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Hệ thống Thương mại Điện tử B2B</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 text-sm mb-4">
                Platform thương mại điện tử B2B toàn diện với tích hợp AI và analytics nâng cao.
              </p>
              <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                <span>Tìm hiểu thêm</span>
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Solution 5: Cloud Infrastructure -->
          <div 
            @click="goToSolution('cloud-infrastructure')"
            class="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="relative h-64 bg-gradient-to-br from-teal-500 to-blue-600 p-8 flex items-center justify-center">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="relative z-10 text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Giải pháp Cloud Computing</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 text-sm mb-4">
                Hạ tầng cloud scalable và bảo mật cao, tối ưu hóa chi phí và hiệu suất.
              </p>
              <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                <span>Tìm hiểu thêm</span>
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Solution 6: Mobile Development -->
          <div 
            @click="goToSolution('mobile-development')"
            class="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="relative h-64 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex items-center justify-center">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="relative z-10 text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Phát triển Ứng dụng Di động</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 text-sm mb-4">
                Ứng dụng mobile native và cross-platform với UX/UI hiện đại và hiệu suất cao.
              </p>
              <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                <span>Tìm hiểu thêm</span>
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Sẵn sàng bắt đầu dự án của bạn?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp công nghệ phù hợp nhất cho doanh nghiệp của bạn.
        </p>
        <router-link 
          to="/lien-he" 
          class="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
        >
          Liên hệ ngay
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Solutions',
  methods: {
    goToSolution(solutionId) {
      this.$router.push(`/giai-phap/${solutionId}`).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>
