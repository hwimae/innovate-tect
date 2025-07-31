<template>
  <section id="home" class="relative min-h-screen bg-gray-50 pt-20">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full">
        <svg class="absolute top-20 left-10 w-96 h-96 text-gray-200" fill="currentColor" viewBox="0 0 100 100">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,20 Q10,0 20,20" stroke="currentColor" stroke-width="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hero-pattern)"/>
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <!-- Left content -->
      <div class="space-y-8">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Thúc đẩy doanh nghiệp lên tầm cao mới
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed">
          Nâng tầm doanh nghiệp của bạn với phần mềm cải tiến của chúng tôi, 
          cung cấp các giải pháp công nghệ tiên tiến được thiết kế để tối ưu hóa hoạt động
        </p>
        <button class="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition inline-flex items-center space-x-2">
          <span>→ Khám phá</span>
        </button>

        <!-- Language flags -->
        <div class="flex items-center space-x-3 pt-4">
          <span class="w-8 h-6 bg-blue-500 rounded flex items-center justify-center">🇺🇸</span>
          <span class="w-8 h-6 bg-blue-500 rounded flex items-center justify-center">🇫🇷</span>
          <span class="w-8 h-6 bg-blue-500 rounded flex items-center justify-center">🇬🇧</span>
          <span class="w-8 h-6 bg-red-500 rounded flex items-center justify-center">🇨🇳</span>
          <span class="w-8 h-6 bg-red-500 rounded flex items-center justify-center">🇪🇸</span>
        </div>
      </div>

      <!-- Right content -->
      <div class="relative">
        <!-- Main feature card -->
        <div class="bg-gray-900 text-white p-8 rounded-2xl relative overflow-hidden">
          <div class="relative z-10">
            <h3 class="text-2xl font-bold mb-2">Cung cấp các giải pháp công nghệ tiên tiến</h3>
            <div class="flex items-center space-x-2 mb-4">
              <div class="flex text-yellow-400">
                ★★★★★
              </div>
              <span class="text-gray-300">20K+ khách hàng</span>
            </div>
            <!-- Animated wave chart -->
            <div class="h-16 flex items-end space-x-1 mt-6">
              <div class="w-2 bg-blue-400 rounded-full animate-pulse" style="height: 20px;"></div>
              <div class="w-2 bg-green-400 rounded-full animate-pulse" style="height: 35px; animation-delay: 0.1s;"></div>
              <div class="w-2 bg-purple-400 rounded-full animate-pulse" style="height: 45px; animation-delay: 0.2s;"></div>
              <div class="w-2 bg-pink-400 rounded-full animate-pulse" style="height: 30px; animation-delay: 0.3s;"></div>
              <div class="w-2 bg-yellow-400 rounded-full animate-pulse" style="height: 50px; animation-delay: 0.4s;"></div>
              <div class="w-2 bg-red-400 rounded-full animate-pulse" style="height: 25px; animation-delay: 0.5s;"></div>
              <div class="w-2 bg-indigo-400 rounded-full animate-pulse" style="height: 40px; animation-delay: 0.6s;"></div>
            </div>
          </div>
        </div>

        <!-- Floating abstract shape -->
        <div class="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>