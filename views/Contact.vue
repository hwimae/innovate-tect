<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <section class="hero-bg text-white py-20 pt-32">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4">Liên Hệ</h1>
        <p class="text-xl">Hãy để chúng tôi giúp bạn thực hiện ý tưởng</p>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <h2 class="text-3xl font-bold mb-8">Thông tin liên hệ</h2>
            <div class="space-y-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-map-marker-alt text-blue-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold">Địa chỉ</h3>
                  <p class="text-gray-600">11 Ngõ 216 Trung Kính</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-phone text-blue-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold">Điện thoại</h3>
                  <p class="text-gray-600">01289361</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-envelope text-blue-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <p class="text-gray-600">info@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold mb-8">Gửi tin nhắn</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-sm font-medium mb-2">Họ tên</label>
                <input v-model="form.name" type="text" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input v-model="form.email" type="email" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Tin nhắn</label>
                <textarea v-model="form.message" rows="6" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
              </div>
              <button type="submit" 
                      class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form)
      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.')
      this.form = { name: '', email: '', message: '' }
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>