<template>
  <header class="bg-white shadow-sm relative z-10">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-3 logo-link">
        <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-lg">✕</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-bold text-gray-800">THE MONA</span>
          <span class="text-xs text-gray-500 -mt-1">TECHNOLOGY</span>
        </div>
      </router-link>

      <!-- Navigation Menu -->
      <ul class="hidden lg:flex items-center space-x-8">
        <li>
          <router-link to="/" class="nav-link text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
            <span class="nav-text">TRANG CHỦ</span>
          </router-link>
        </li>
        <li>
          <router-link to="/gioi-thieu" class="nav-link text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
            <span class="nav-text">GIỚI THIỆU</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dich-vu" class="nav-link text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
            <span class="nav-text">DỊCH VỤ</span>
          </router-link>
        </li>
        <li>
          <router-link to="/giai-phap" class="nav-link text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
            <span class="nav-text">GIẢI PHÁP</span>
          </router-link>
        </li>
        <li>
          <router-link to="/tin-tuc" class="nav-link text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
            <span class="nav-text">TIN TỨC</span>
          </router-link>
        </li>
        <li>
          <router-link to="/lien-he" class="nav-link text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
            <span class="nav-text">LIÊN HỆ</span>
          </router-link>
        </li>
      </ul>

      <div class="flex items-center space-x-4">
        <button class="hidden md:block">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <router-link to="/lien-he" class="logo-link hidden md:block border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition text-sm font-medium">
          Liên hệ ngay
        </router-link>

        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="lg:hidden text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
    
    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t">
      <div class="container mx-auto px-6 py-4">
        <ul class="space-y-4">
          <li>
            <router-link to="/" class="block py-2 text-gray-800 hover:text-blue-600" @click="toggleMobileMenu">
              TRANG CHỦ
            </router-link>
          </li>
          <li>
            <router-link to="/gioi-thieu" class="block py-2 text-gray-800 hover:text-blue-600" @click="toggleMobileMenu">
              GIỚI THIỆU
            </router-link>
          </li>
          <li>
            <router-link to="/dich-vu" class="block py-2 text-gray-800 hover:text-blue-600" @click="toggleMobileMenu">
              DỊCH VỤ
            </router-link>
          </li>
          <li>
            <router-link to="/giai-phap" class="block py-2 text-gray-800 hover:text-blue-600" @click="toggleMobileMenu">
              GIẢI PHÁP
            </router-link>
          </li>
          <li>
            <router-link to="/tin-tuc" class="block py-2 text-gray-800 hover:text-blue-600" @click="toggleMobileMenu">
              TIN TỨC
            </router-link>
          </li>
          <li>
            <router-link to="/lien-he" class="block py-2 text-gray-800 hover:text-blue-600" @click="toggleMobileMenu">
              LIÊN HỆ
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Floating Header -->
  <div v-if="showFloatingHeader" 
       class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-lg shadow-2xl rounded-full transition-all duration-500 ease-out border border-gray-200/50 w-[95vw] max-w-7xl px-12 py-5"
       :class="{ 'translate-y-0 opacity-100': showFloatingHeader, '-translate-y-10 opacity-0': !showFloatingHeader }">
    <div class="flex items-center justify-between w-full">
      <!-- Logo -->
      <div class="flex items-center space-x-4 cursor-pointer" @click="scrollToTop">
        <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-lg">✕</span>
        </div>
        <div class="flex flex-col">
          <span class="text-lg font-bold text-gray-800">THE MONA</span>
          <span class="text-sm text-gray-500 -mt-1">TECHNOLOGY</span>
        </div>
      </div>
      
      <!-- Quick Navigation  -->
      <nav class="hidden lg:flex items-center space-x-3">
        <router-link to="/" class="nav-link text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300" @click="scrollToTop">
          <span class="nav-text">TRANG CHỦ</span>
        </router-link>
        <router-link to="/gioi-thieu" class="nav-link text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
          <span class="nav-text">GIỚI THIỆU</span>
        </router-link>
        <router-link to="/dich-vu" class="nav-link text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
          <span class="nav-text">DỊCH VỤ</span>
        </router-link>
        <router-link to="/giai-phap" class="nav-link text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
          <span class="nav-text">GIẢI PHÁP</span>
        </router-link>
        <router-link to="/tin-tuc" class="nav-link text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
          <span class="nav-text">TIN TỨC</span>
        </router-link>
        <router-link to="/lien-he" class="nav-link text-gray-700 hover:text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
          <span class="nav-text">LIÊN HỆ</span>
        </router-link>
      </nav>
      
      <div class="flex items-center space-x-4">
        <button class="hidden lg:block text-gray-600 hover:text-gray-800 transition p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        
        <router-link to="/lien-he" class="logo-link border border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition text-sm font-medium">
          Liên hệ ngay
        </router-link>
        
        <button @click="toggleMobileMenu" class="lg:hidden text-gray-700 p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false,
      showFloatingHeader: false,
      scrollThreshold: 200 
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    handleScroll() {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > this.scrollThreshold) {
        this.showFloatingHeader = true
      } else {
        this.showFloatingHeader = false
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: #374151;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  overflow: hidden;
  display: inline-block;
  position: relative;
}

.nav-text {
  display: inline-block;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #2563eb;
  background-color: #f3f4f6;
}

.nav-link:hover .nav-text {
  animation: slotMachine 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.router-link-active:not(.logo-link) {
  color: white !important;
  background-color: #374151 !important;
  font-weight: 600;
}

.logo-link.router-link-active {
  color: inherit !important;
  background-color: transparent !important;
}

@keyframes slotMachine {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-100%);
    opacity: 0;
  }
  51% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>