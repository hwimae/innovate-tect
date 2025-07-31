<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <section class="hero-bg text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4">Dịch Vụ</h1>
        <p class="text-xl">Các giải pháp công nghệ toàn diện cho doanh nghiệp</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" 
               class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <i :class="service.icon" class="text-2xl text-blue-600"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" 
                  class="flex items-center text-sm text-gray-600">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { servicesData } from '../data/services.js'

export default {
  name: 'Services',
  data() {
    return {
      services: servicesData
    }
  }
}
</script>