<template>
  <section id="faq" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <div class="text-blue-600 text-sm font-semibold mb-4">FAQ</div>
        <h2 class="text-4xl font-bold">Các câu hỏi và thắc mắc thường gặp</h2>
      </div>
      <div class="max-w-3xl mx-auto space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-md">
          <button @click="toggleFaq(index)" class="w-full text-left p-6 flex justify-between items-center">
            <span class="font-semibold">{{ faq.question }}</span>
            <svg class="w-5 h-5 transform transition-transform" :class="{'rotate-180': faq.open}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-show="faq.open" class="px-6 pb-6">
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  data() {
    return {
      faqs: [
        {
          question: "Công ty chúng tôi chuyên về lĩnh vực gì?",
          answer: "Chúng tôi là một công ty công nghệ hàng đầu chuyên về phát triển phần mềm, dịch vụ công nghệ thông tin và giải pháp số hóa cho doanh nghiệp.",
          open: false
        },
        {
          question: "Các dự án tiêu biểu của công ty?",
          answer: "Chúng tôi đã thực hiện nhiều dự án thành công trong các lĩnh vực như trí tuệ nhân tạo, blockchain, IoT và phát triển ứng dụng di động. Các dự án của chúng tôi đã mang lại giá trị lớn cho khách hàng và người dùng.",
          open: false
        },
        {
          question: "Phương châm hoạt động của công ty?",
          answer: "Phương châm của chúng tôi là sáng tạo, đổi mới và cam kết mang đến giải pháp công nghệ tiên tiến nhất để hỗ trợ khách hàng trong việc nâng cao hiệu quả kinh doanh và cải thiện trải nghiệm người dùng.",
          open: false
        },
        {
          question: "Làm thế nào để hợp tác với công ty?",
          answer: "Để hợp tác với chúng tôi, quý khách hàng có thể liên hệ trực tiếp qua email hoặc số điện thoại được cung cấp trên trang web của chúng tôi. Chúng tôi luôn chào đón sự hợp tác từ các doanh nghiệp, tổ chức và cá nhân có nhu cầu về giải pháp công nghệ.",
          open: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
}
</script>