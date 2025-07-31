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
    <section class="py-10">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <h2 class="text-3xl font-bold mb-8">Thông tin liên hệ</h2>
            <div class="space-y-6">
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <i class="fas fa-map-marker-alt text-blue-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold">Địa chỉ</h3>
                  <p class="text-gray-600">11 Ngõ 216 Trung Kính</p>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <i class="fas fa-phone text-blue-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold">Điện thoại</h3>
                  <p class="text-gray-600">01289361</p>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                >
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
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Tin nhắn</label>
                <textarea
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="w-full bg-white py-8 md:py-12">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2369689886915!2d106.66601447498704!3d10.793260789069344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529323321d51b%3A0x6a0f7b1e42a9b7a4!2s1073%2F23%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%20T%C3%A1m%2C%20Ph%C6%B0%E1%BB%9Dng%207%2C%20T%C3%A2n%20B%C3%ACnh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
  <ScrollTop />
</template>

<script>
import ScrollTop from "@/components/sections/ScrollTop.vue";
export default {
  name: "Contact",
  components: {
    ScrollTop,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log("Form submitted:", this.form);
      alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>
