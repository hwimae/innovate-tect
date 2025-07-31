
<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          Nâng cao trải nghiệm và thúc đẩy thành công
        </h2>
        <div class="flex justify-end mb-8">
          <div class="flex space-x-2">
            <button class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- AI & Machine Learning Card -->
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8 h-96">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
            <div class="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div class="flex space-x-2 mb-4">
                  <span class="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-700">Services</span>
                  <span class="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-700">Vision</span>
                </div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-30">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop&crop=center" 
                       alt="AI Technology" class="w-full h-full object-cover rounded-lg">
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Trí tuệ Nhân tạo (AI) và Machine Learning</h3>
                <button class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Security Card -->
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 p-8 h-96 text-white">
            <div class="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div class="flex space-x-2 mb-4">
                  <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Optimization</span>
                  <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Services</span>
                </div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-30">
                  <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop&crop=center" 
                       alt="Security" class="w-full h-full object-cover rounded-lg">
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-4">An toàn và Bảo mật Thông tin</h3>
                <button class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Cloud Computing Card -->
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 h-96 text-white">
            <div class="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div class="flex space-x-2 mb-4">
                  <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Optimization</span>
                  <span class="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Services</span>
                </div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-30">
                  <img src="https://images.unsplash.com/photo-1559470618-bf6e8b5ea2d7?w=400&h=400&fit=crop&crop=center" 
                       alt="Cloud Computing" class="w-full h-full object-cover rounded-lg">
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-4">Dịch vụ Đám mây (Cloud Computing)</h3>
                <button class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection'
}
</script>