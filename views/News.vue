<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <p class="text-gray-600 text-sm mb-4">/ NEWS & INSIGHTS /</p>
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Tin tức & Kiến thức
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Cập nhật những tin tức mới nhất về công nghệ và kiến thức chuyên sâu từ các chuyên gia
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="w-full bg-white py-16 md:py-24">
      <div
        class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12"
      >
        <!-- Main Content Area (Blog Posts) -->
        <div class="w-full lg:w-2/3 flex flex-col space-y-12">
          <!-- Display posts based on current page -->
          <div v-for="post in currentPagePosts" :key="post.id" 
            @click="goToPost(post.id)"
            class="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-80 object-cover"
            />
            <div class="p-6">
              <p class="text-gray-500 text-xs mb-2">{{ post.date }}</p>
              <h3 class="text-2xl font-semibold text-[#1F2937] mb-3 leading-snug hover:text-blue-600 transition">
                {{ post.title }}
              </h3>
              <p class="text-gray-600 text-sm mb-4">
                {{ post.excerpt }}
              </p>
              <div class="flex flex-wrap gap-2 text-xs text-gray-600">
                <span v-for="tag in post.tags" :key="tag" 
                  class="bg-gray-100 px-2 py-1 rounded cursor-pointer hover:bg-blue-100">/ {{ tag }} /</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="w-full lg:w-1/3 flex flex-col space-y-8">
          <!-- Search Widget -->
          <div class="bg-white rounded-3xl shadow-md p-6">
            <h3 class="text-xl font-semibold text-[#1F2937] mb-4">Tìm kiếm</h3>
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Nhập từ khóa..."
                class="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                @keyup.enter="performSearch"
              />
              <button
                @click="performSearch"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Categories Widget -->
          <div class="bg-white rounded-3xl shadow-md p-6">
            <h3 class="text-xl font-semibold text-[#1F2937] mb-4">Danh mục</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  @click.prevent="filterByCategory('ai')"
                  class="text-gray-700 hover:text-blue-600 transition duration-200"
                  >AI (12)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="filterByCategory('business')"
                  class="text-gray-700 hover:text-blue-600 transition duration-200"
                  >Business (8)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="filterByCategory('technology')"
                  class="text-gray-700 hover:text-blue-600 transition duration-200"
                  >Technology (15)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="filterByCategory('neural-networks')"
                  class="text-gray-700 hover:text-blue-600 transition duration-200"
                  >Neural Networks (5)</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="filterByCategory('development')"
                  class="text-gray-700 hover:text-blue-600 transition duration-200"
                  >Development (10)</a
                >
              </li>
            </ul>
          </div>

          <!-- Recent Posts Widget -->
          <div class="bg-white rounded-3xl shadow-md p-6">
            <h3 class="text-xl font-semibold text-[#1F2937] mb-4">
              Bài viết gần đây
            </h3>
            <ul class="space-y-4">
              <li>
                <a href="#" @click.prevent="goToPost('recent-1')" class="flex items-start space-x-3 group">
                  <div>
                    <p
                      class="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition duration-200"
                    >
                      Khám phá tiềm năng của Trí tuệ nhân tạo
                    </p>
                    <p class="text-gray-500 text-xs mt-1">15/03/2024</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="goToPost('recent-2')" class="flex items-start space-x-3 group">
                  <div>
                    <p
                      class="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition duration-200"
                    >
                      Xu hướng phát triển phần mềm năm 2024
                    </p>
                    <p class="text-gray-500 text-xs mt-1">10/03/2024</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="goToPost('recent-3')" class="flex items-start space-x-3 group">
                  <div>
                    <p
                      class="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition duration-200"
                    >
                      Tối ưu hóa hiệu suất với Cloud Computing
                    </p>
                    <p class="text-gray-500 text-xs mt-1">05/03/2024</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <!-- Newsletter Widget -->
          <div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-md p-6 text-white">
            <h3 class="text-xl font-semibold mb-4">Đăng ký Newsletter</h3>
            <p class="text-blue-100 text-sm mb-4">
              Nhận những bài viết mới nhất về công nghệ và kiến thức chuyên sâu
            </p>
            <div class="space-y-3">
              <input
                v-model="email"
                type="email"
                placeholder="Email của bạn"
                class="w-full px-4 py-3 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                @click="subscribeNewsletter"
                class="w-full bg-white text-blue-600 px-4 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition duration-300"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Pagination -->
      <div class="flex justify-center mt-12 space-x-3">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'w-10 h-10 border rounded-full border-[#386bb7] transition duration-300 cursor-pointer',
            currentPage === page
              ? 'bg-[#0c5af5] border-[#0c5af5] text-white'
              : 'hover:bg-[#0c5af5] hover:border-[#0c5af5] hover:text-white'
          ]"
        >
          {{ page }}
        </button>
        <button
          v-if="currentPage < totalPages"
          @click="goToPage(currentPage + 1)"
          class="px-4 h-10 border rounded-full border-[#386bb7] hover:bg-[#0c5af5] hover:border-[#0c5af5] hover:text-white transition duration-300 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      searchQuery: '',
      email: '',
      currentPage: 1,
      totalPages: 2,
      postsPerPage: 3,
      selectedCategory: null,
      allPosts: [
        {
          id: 'post-1',
          title: 'Tiềm năng và Triển vọng: Làm thế nào Công nghệ đang Thay đổi Thế giới',
          date: '18/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/about-us-1-991x472.jpg',
          excerpt: 'Công nghệ đang thay đổi mọi mặt của cuộc sống, từ cách chúng ta làm việc, học tập đến giải trí. Bài viết này khám phá những tiềm năng và triển vọng của công nghệ trong tương lai.',
          tags: ['AI', 'Business']
        },
        {
          id: 'post-2',
          title: 'Điểm Nhấn Công nghệ: Sự Đổi Mới và Sáng Tạo trong Doanh nghiệp',
          date: '18/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/dich-vu-dam-may-991x472.jpg',
          excerpt: 'Sự đổi mới và sáng tạo là chìa khóa để doanh nghiệp phát triển trong kỷ nguyên số. Tìm hiểu cách công nghệ thúc đẩy sự thay đổi này.',
          tags: ['AI', 'Neural Networks']
        },
        {
          id: 'post-3',
          title: 'Xu hướng Công nghệ 2024: Định hướng cho Sự Phát triển',
          date: '18/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/giai-phap-1-575x274.jpg',
          excerpt: 'Cập nhật những xu hướng công nghệ nổi bật nhất năm 2024 và cách chúng định hình tương lai của ngành công nghiệp.',
          tags: ['Business', 'Technology']
        },
        {
          id: 'post-4',
          title: 'Phát triển Ứng dụng Di động: Bí quyết để Tạo Ra Trải nghiệm Người dùng Tốt nhất',
          date: '18/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/giai-phap-4-1340x638.jpg',
          excerpt: 'Ứng dụng di động là một phần không thể thiếu trong cuộc sống hiện đại. Tìm hiểu các bí quyết để tạo ra ứng dụng di động thành công.',
          tags: ['AI', 'Business']
        },
        {
          id: 'post-5',
          title: 'Blockchain và Tiềm năng Cách mạng Hệ thống Giao dịch',
          date: '15/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/01/robot-1-640x478.jpg',
          excerpt: 'Công nghệ Blockchain đang tạo ra những thay đổi căn bản trong cách chúng ta thực hiện giao dịch và quản lý dữ liệu.',
          tags: ['Blockchain', 'Technology']
        },
        {
          id: 'post-6',
          title: 'Trí tuệ nhân tạo (AI): Phát triển và Ứng dụng trong Công nghệ',
          date: '05/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/01/shubham-dhage-9cpMGc6LckI-unsplash-2-640x478.jpg',
          excerpt: 'Trí tuệ nhân tạo đã từ khái niệm khoa học viễn tưởng trở thành hiện thực, thay đổi cách chúng ta làm việc, sinh hoạt và tương tác với thế giới.',
          tags: ['AI', 'Machine Learning', 'Deep Learning']
        }
      ]
    }
  },
  computed: {
    currentPagePosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage
      const endIndex = startIndex + this.postsPerPage
      return this.allPosts.slice(startIndex, endIndex)
    }
  },
  methods: {
    goToPost(postId) {
      this.$router.push(`/tin-tuc/${postId}`).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    },
    performSearch() {
      if (this.searchQuery.trim()) {
        console.log('Searching for:', this.searchQuery)
      }
    },
    filterByCategory(category) {
      this.selectedCategory = category
      console.log('Filtering by category:', category)
    },
    subscribeNewsletter() {
      if (this.email) {
        console.log('Subscribing email:', this.email)
        alert('Đăng ký thành công!')
        this.email = ''
      }
    },
    goToPage(page) {
      this.currentPage = page
      console.log('Going to page:', page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Custom animations */
.hover\:shadow-xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
