<template>
  <section class="py-20 bg-gray-100">
    <div class="w-full px-6">
      <!-- Title Section -->
      <div class="w-full max-w-7xl mx-auto mb-12">
        <div class="space-y-4">
          <div class="text-gray-600 text-sm mb-2">/ SOLUTION /</div>
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900">
              <span class="block">Giải pháp sáng tạo từ</span>
              <span class="block">công nghệ</span>
            </h1>
            <p class="text-lg text-gray-600">Xây dựng ứng dụng thương mại điện tử hiện đại với công nghệ tiên tiến</p>
          </div>
        </div>
      </div>

      <!-- Container -->
      <div ref="workflowContainer" 
           @wheel="handleWheel" 
           @mouseenter="isHovered = true"
           @mouseleave="isHovered = false"
           class="w-full mx-auto relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all duration-500 ease-out" 
           :style="{ 
             height: `${800 - (scrollProgress * 400)}px`
           }">
        
        <!-- Section 1 -->
        <div class="absolute top-0 left-0 right-0 h-1/2 bg-black text-white flex items-center justify-center">
          <div class="grid lg:grid-cols-2 gap-8 items-center px-12 w-full max-w-7xl mx-auto">
            <!-- Left Content -->
            <div class="space-y-6">
              <div>
                <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  <span class="block">HI-TECH</span>
                  <span class="block text-blue-400">INNOVATION</span>
                </h2>
                <p class="text-lg text-gray-300 mb-6">Công nghệ tiên tiến cho tương lai số</p>
              </div>
              
              <!-- Tech Features -->
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span class="text-sm">Mobile-First Development</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span class="text-sm">AI-Powered Solutions</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span class="text-sm">Cloud Infrastructure</span>
                </div>
              </div>
            </div>
            
            <!-- Right Content -->
            <div class="relative">
              <div class="grid grid-cols-4 gap-3">
                <div class="relative">
                  <div class="w-full h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl opacity-90"></div>
                  <div class="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
                </div>
                <div class="relative mt-4">
                  <div class="w-full h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl opacity-90"></div>
                  <div class="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
                </div>
                <div class="relative -mt-2">
                  <div class="w-full h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl opacity-90"></div>
                  <div class="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
                </div>
                <div class="relative mt-6">
                  <div class="w-full h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl opacity-90"></div>
                  <div class="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2 -->
        <div ref="overlaySection" class="absolute left-0 right-0 bg-gray-900 text-white flex items-center justify-center transition-all duration-500 ease-out"
             :style="{ 
               bottom: '0px',
               transform: `translateY(${overlayPosition}%)`,
               height: '100%'
             }">
          <div class="grid lg:grid-cols-2 gap-8 items-center px-12 w-full max-w-7xl mx-auto">
            <!-- Left Content -->
            <div class="relative">
              <div class="w-full h-48 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl"></div>
              <div class="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-red-600 rounded-t-full opacity-90"></div>
            </div>
            
            <!-- Right Content -->
            <div class="space-y-4">
              <div>
                <h2 class="text-4xl md:text-5xl font-bold mb-4">
                  Dream with us.
                </h2>
                <div class="flex items-center space-x-3 mb-6">
                  <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 7.8L6.442 15.276c-1.456.619-2.992.252-3.931-.939L0 11.34l4.511-1.906c1.456-.619 2.992-.252 3.931.939L24 7.8z"/>
                  </svg>
                  <span class="text-xl font-semibold">Just do it.</span>
                </div>
              </div>
              
              <!-- Features List -->
              <div class="space-y-3">
                <div v-for="(feature, index) in features.slice(0, 2)" :key="index" 
                     class="flex items-center space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-xl">
                  <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {{ index + 1 }}
                  </div>
                  <div>
                    <h4 class="font-semibold text-sm">{{ feature.title }}</h4>
                    <p class="text-gray-400 text-sm">{{ feature.description }}</p>
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

<script>
export default {
  name: 'WorkflowSection',
  data() {
    return {
      overlayPosition: 50, 
      isHovered: false, 
      scrollProgress: 0, 
      features: [
        {
          title: "Mobile E-Commerce",
          description: "Xây dựng ứng dụng thương mại điện tử hiện đại"
        },
        {
          title: "User Experience", 
          description: "Thiết kế trải nghiệm người dùng tối ưu"
        },
        {
          title: "Performance",
          description: "Tối ưu hóa hiệu suất và tốc độ ứng dụng"
        },
        {
          title: "Innovation",
          description: "Áp dụng công nghệ tiên tiến nhất"
        }
      ]
    }
  },
  mounted() {

  },
  beforeUnmount() {

  },
  methods: {
    handleWheel(event) {

      if (!this.isHovered) return
      

      const delta = event.deltaY > 0 ? 1 : -1
      const scrollStep = 0.08 
      

      if (this.scrollProgress <= 0 && delta < 0) {
        return
      }
      
      if (this.scrollProgress >= 1 && delta > 0) {
        return 
      }
    
      event.preventDefault()
      
      const newProgress = this.scrollProgress + (delta * scrollStep)
      this.scrollProgress = Math.max(0, Math.min(1, newProgress))
      
      this.overlayPosition = 50 - (this.scrollProgress * 50)
    }
  }
}
</script>

<style scoped>
.workflow-container {
  position: relative;
}

.workflow-container.sticky {
  position: sticky;
  top: 0;
  z-index: 10;
}

div[ref="workflowContainer"]:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transition: width 0.3s ease;
}
</style>