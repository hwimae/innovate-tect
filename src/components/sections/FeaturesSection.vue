<template>
  <section id="features" class="py-20 bg-white relative overflow-hidden">
    <!-- Decorative background lines -->
    <div class="absolute top-0 right-0 w-1/3 h-full">
      <svg class="w-full h-full opacity-5" viewBox="0 0 400 600" fill="none">
        <path d="M50 0C50 0 150 100 250 100C350 100 450 200 450 300C450 400 350 500 250 500C150 500 50 600 50 600" 
              stroke="currentColor" stroke-width="2" fill="none"/>
        <path d="M100 0C100 0 200 100 300 100C400 100 500 200 500 300C500 400 400 500 300 500C200 500 100 600 100 600" 
              stroke="currentColor" stroke-width="1" fill="none"/>
      </svg>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <div class="text-gray-600 text-sm mb-2">/ FEATURES /</div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
          Công nghệ đột phá và những<br>
          lợi ích đáng kinh ngạc
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Row 1 -->
        <!-- Feature 1: Performance -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-50 transition-all duration-300 group-hover:scale-105">
            <img src="/1.png" alt="Performance" class="w-10 h-10 object-contain" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Tăng hiệu quả và năng suất</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Tự động hóa các quy trình công việc, giúp tăng hiệu quả và năng suất lao động
          </p>
        </div>

        <!-- Feature 2: Analytics -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-green-50 transition-all duration-300 group-hover:scale-105">
            <img src="/2.png" alt="Analytics" class="w-10 h-10 object-contain" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Dự đoán và phân tích Tốt</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Phân tích dữ liệu phức tạp và đưa ra dự đoán chính xác, giúp quyết định chiến lược một cách thông minh.
          </p>
        </div>

        <!-- Feature 3: Experience -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-50 transition-all duration-300 group-hover:scale-105">
            <img src="/4.png" alt="Experience" class="w-10 h-10 object-contain" />
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-4">Cải thiện trải nghiệm</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Áp dụng AI trong dịch vụ khách hàng giúp cá nhân hóa trải nghiệm, cung cấp hỗ trợ tức thì và tăng cường tương tác.
          </p>
        </div>

        <!-- Feature 4: Optimization -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-50 transition-all duration-300 group-hover:scale-105">
            <img src="/5.png" alt="Optimization" class="w-10 h-10 object-contain" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Tối ưu hóa tiệp thị</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Tối ưu hóa chiến lược quảng cáo và tiệp thị dựa trên phân tích dữ liệu và hành vi người dùng.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Row 2 -->
        <!-- Feature 5: Security -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-red-50 transition-all duration-300 group-hover:scale-105">
            <img src="/6.png" alt="Security" class="w-10 h-10 object-contain" />
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-4">Đảm bảo an ninh chất chế</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Có thể phát hiện gian lận tài chính, gian lận thẻ tín dụng và cải thiện an ninh thông tin.
          </p>
        </div>

        <!-- Feature 6: Risk Management -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-50 transition-all duration-300 group-hover:scale-105">
            <img src="/7.png" alt="Risk Management" class="w-10 h-10 object-contain" />
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-4">Dự báo và quản lý rủi ro</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Hỗ trợ trong việc dự báo rủi ro, quản lý danh mục đầu tư và tối ưu hóa chiến lược tài chính.
          </p>
        </div>

        <!-- Feature 7: Innovation -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-50 transition-all duration-300 group-hover:scale-105">
            <img src="/8.png" alt="Innovation" class="w-10 h-10 object-contain" />
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-4">Tạo ra nội dung sáng tạo</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Tạo ra nội dung sáng tạo như âm nhạc, hình ảnh, văn bản dựa trên mô hình học máy.
          </p>
        </div>

        <!-- Feature 8: Research -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-teal-50 transition-all duration-300 group-hover:scale-105">
            <img src="/1.png" alt="Research" class="w-10 h-10 object-contain" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Nghiên cứu và phát triển</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            Tìm kiếm thông tin, phân tích dữ liệu và đưa ra dự đoán trong nhiều lĩnh vực nghiên cứu và phát triển.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>