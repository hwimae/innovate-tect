<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <section class="hero-bg text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4">Về Chúng Tôi</h1>
        <p class="text-xl">Tìm hiểu thêm về công ty và đội ngũ của chúng tôi</p>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8">Câu chuyện của chúng tôi</h2>
          <div class="prose prose-lg">
            <p class="text-gray-600 mb-6">
              Chúng tôi là một công ty công nghệ hàng đầu chuyên về phát triển phần mềm, 
              dịch vụ công nghệ thông tin và giải pháp số hóa cho doanh nghiệp.
            </p>
            <p class="text-gray-600 mb-6">
              Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi đã giúp hàng trăm 
              doanh nghiệp chuyển đổi số và nâng cao hiệu quả hoạt động.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Đội ngũ của chúng tôi</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in teamMembers" :key="member.id" class="text-center">
            <div class="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.position }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      teamMembers: [
        { id: 1, name: 'Nguyễn Văn A', position: 'CEO & Founder' },
        { id: 2, name: 'Trần Thị B', position: 'CTO' },
        { id: 3, name: 'Lê Văn C', position: 'Lead Developer' }
      ]
    }
  }
}
</script>