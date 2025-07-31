<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-700 py-20 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="mb-6">
            <router-link 
              to="/giai-phap" 
              class="inline-flex items-center text-blue-200 hover:text-white transition"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Quay lại giải pháp
            </router-link>
          </div>
          <h1 class="text-5xl lg:text-6xl font-bold mb-6">
            {{ currentSolution.title }}
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            {{ currentSolution.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Overview -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Tổng quan</h2>
            <div class="prose prose-lg max-w-none text-gray-600">
              <p>{{ currentSolution.overview }}</p>
            </div>
          </div>

          <!-- Key Features -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Tính năng chính</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div 
                v-for="(feature, index) in currentSolution.features" 
                :key="index"
                class="flex items-start space-x-4"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Benefits -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Lợi ích</h2>
            <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div class="grid md:grid-cols-3 gap-6">
                <div 
                  v-for="(benefit, index) in currentSolution.benefits" 
                  :key="index"
                  class="text-center"
                >
                  <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl font-bold text-white">{{ benefit.icon }}</span>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
                  <p class="text-gray-600 text-sm">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Technology Stack -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Công nghệ sử dụng</h2>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="tech in currentSolution.technologies" 
                :key="tech"
                class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- CTA -->
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 class="text-2xl font-bold mb-4">Quan tâm đến giải pháp này?</h2>
            <p class="text-blue-100 mb-6">
              Liên hệ với chúng tôi để được tư vấn chi tiết và báo giá dự án.
            </p>
            <router-link 
              to="/lien-he" 
              class="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Liên hệ tư vấn
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SolutionDetail',
  data() {
    return {
      solutions: {
        'ai-machine-learning': {
          title: 'Ứng dụng Học máy ngôi Dựa trên AI',
          description: 'Tận dụng sức mạnh của trí tuệ nhân tạo để tự động hóa quy trình và đưa ra quyết định thông minh.',
          overview: 'Giải pháp AI và Machine Learning của chúng tôi giúp doanh nghiệp tự động hóa các quy trình phức tạp, phân tích dữ liệu lớn và đưa ra những quyết định thông minh dựa trên dữ liệu. Chúng tôi xây dựng các mô hình AI tùy chỉnh phù hợp với nhu cầu cụ thể của từng doanh nghiệp.',
          features: [
            {
              title: 'Phân tích dữ liệu thông minh',
              description: 'Xử lý và phân tích dữ liệu lớn để tìm ra những insight có giá trị'
            },
            {
              title: 'Dự đoán xu hướng',
              description: 'Sử dụng ML để dự đoán xu hướng thị trường và hành vi khách hàng'
            },
            {
              title: 'Tự động hóa quy trình',
              description: 'Tự động hóa các tác vụ lặp đi lặp lại và tối ưu hóa hiệu suất'
            },
            {
              title: 'Chatbot thông minh',
              description: 'Phát triển chatbot AI để cải thiện trải nghiệm khách hàng'
            }
          ],
          benefits: [
            {
              icon: '↗',
              title: 'Tăng hiệu quả',
              description: 'Cải thiện hiệu suất làm việc lên đến 40%'
            },
            {
              icon: '💰',
              title: 'Tiết kiệm chi phí',
              description: 'Giảm chi phí vận hành và nhân sự'
            },
            {
              icon: '🎯',
              title: 'Quyết định chính xác',
              description: 'Đưa ra quyết định dựa trên dữ liệu thực tế'
            }
          ],
          technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'AWS ML', 'Google Cloud AI']
        },
        'ai-consulting': {
          title: 'Tư vấn Tài chính Trực tuyến',
          description: 'Giải pháp tư vấn tài chính thông minh với AI, giúp tối ưu hóa đầu tư và quản lý rủi ro.',
          overview: 'Hệ thống tư vấn tài chính trực tuyến sử dụng AI để phân tích tình hình tài chính cá nhân và doanh nghiệp, đưa ra lời khuyên đầu tư phù hợp và quản lý rủi ro hiệu quả.',
          features: [
            {
              title: 'Phân tích rủi ro tự động',
              description: 'Đánh giá mức độ rủi ro của các khoản đầu tư một cách tự động'
            },
            {
              title: 'Tư vấn đầu tư cá nhân hóa',
              description: 'Đưa ra lời khuyên đầu tư phù hợp với tình hình tài chính cá nhân'
            },
            {
              title: 'Theo dõi thị trường real-time',
              description: 'Cập nhật thông tin thị trường tài chính theo thời gian thực'
            },
            {
              title: 'Báo cáo tài chính thông minh',
              description: 'Tạo báo cáo tài chính chi tiết và dễ hiểu'
            }
          ],
          benefits: [
            {
              icon: '📈',
              title: 'Tăng lợi nhuận',
              description: 'Tối ưu hóa danh mục đầu tư để tăng lợi nhuận'
            },
            {
              icon: '🛡️',
              title: 'Giảm rủi ro',
              description: 'Quản lý và giảm thiểu rủi ro đầu tư'
            },
            {
              icon: '⚡',
              title: 'Quyết định nhanh',
              description: 'Đưa ra quyết định đầu tư nhanh chóng và chính xác'
            }
          ],
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js', 'Python', 'FastAPI', 'Docker']
        },
        'smart-analytics': {
          title: 'Hệ thống Giám sát An ninh Thông minh',
          description: 'Hệ thống giám sát thông minh với AI, phân tích real-time và cảnh báo tự động.',
          overview: 'Giải pháp giám sát an ninh sử dụng công nghệ AI và computer vision để phát hiện các hành vi bất thường, nhận diện khuôn mặt và cảnh báo tự động trong thời gian thực.',
          features: [
            {
              title: 'Nhận diện khuôn mặt',
              description: 'Công nghệ nhận diện khuôn mặt chính xác cao'
            },
            {
              title: 'Phát hiện hành vi bất thường',
              description: 'AI phân tích và phát hiện các hành vi đáng ngờ'
            },
            {
              title: 'Cảnh báo real-time',
              description: 'Gửi cảnh báo ngay lập tức khi phát hiện sự cố'
            },
            {
              title: 'Lưu trữ và phân tích',
              description: 'Lưu trữ video và phân tích dữ liệu lịch sử'
            }
          ],
          benefits: [
            {
              icon: '🔒',
              title: 'Bảo mật cao',
              description: 'Nâng cao mức độ an ninh và bảo mật'
            },
            {
              icon: '⚡',
              title: 'Phản ứng nhanh',
              description: 'Phát hiện và xử lý sự cố trong thời gian thực'
            },
            {
              icon: '💡',
              title: 'Thông minh',
              description: 'Học hỏi và cải thiện khả năng phát hiện'
            }
          ],
          technologies: ['OpenCV', 'TensorFlow', 'YOLO', 'WebRTC', 'Socket.io', 'MongoDB', 'Express.js', 'React']
        },
        'ecommerce-platform': {
          title: 'Hệ thống Thương mại Điện tử B2B',
          description: 'Platform thương mại điện tử B2B toàn diện với tích hợp AI và analytics nâng cao.',
          overview: 'Nền tảng thương mại điện tử B2B được thiết kế đặc biệt cho doanh nghiệp với các tính năng quản lý khách hàng, đơn hàng, kho bãi và phân tích kinh doanh thông minh.',
          features: [
            {
              title: 'Quản lý khách hàng B2B',
              description: 'Hệ thống CRM tích hợp cho khách hàng doanh nghiệp'
            },
            {
              title: 'Pricing động',
              description: 'Hệ thống giá linh hoạt theo từng khách hàng và số lượng'
            },
            {
              title: 'Quản lý kho thông minh',
              description: 'Tự động hóa quản lý kho bãi và dự báo nhu cầu'
            },
            {
              title: 'Analytics và báo cáo',
              description: 'Dashboard phân tích kinh doanh chi tiết'
            }
          ],
          benefits: [
            {
              icon: '📊',
              title: 'Tăng doanh số',
              description: 'Cải thiện quy trình bán hàng B2B'
            },
            {
              icon: '⚙️',
              title: 'Tự động hóa',
              description: 'Tự động hóa quy trình từ đặt hàng đến giao hàng'
            },
            {
              icon: '🎯',
              title: 'Tối ưu hiệu quả',
              description: 'Tối ưu hóa hoạt động kinh doanh'
            }
          ],
          technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Elasticsearch', 'Docker', 'AWS', 'Stripe']
        },
        'cloud-infrastructure': {
          title: 'Giải pháp Cloud Computing',
          description: 'Hạ tầng cloud scalable và bảo mật cao, tối ưu hóa chi phí và hiệu suất.',
          overview: 'Giải pháp cloud computing toàn diện giúp doanh nghiệp migrate và tối ưu hóa hạ tầng IT trên nền tảng đám mây với khả năng mở rộng linh hoạt và bảo mật cao.',
          features: [
            {
              title: 'Migration dữ liệu',
              description: 'Chuyển đổi hệ thống từ on-premise lên cloud an toàn'
            },
            {
              title: 'Auto-scaling',
              description: 'Tự động mở rộng tài nguyên theo nhu cầu sử dụng'
            },
            {
              title: 'Backup tự động',
              description: 'Sao lưu dữ liệu tự động và khôi phục nhanh chóng'
            },
            {
              title: 'Monitoring 24/7',
              description: 'Giám sát hệ thống liên tục và cảnh báo sớm'
            }
          ],
          benefits: [
            {
              icon: '💰',
              title: 'Tiết kiệm chi phí',
              description: 'Giảm chi phí vận hành IT đến 30%'
            },
            {
              icon: '🚀',
              title: 'Hiệu suất cao',
              description: 'Cải thiện tốc độ và độ tin cậy hệ thống'
            },
            {
              icon: '🔧',
              title: 'Linh hoạt',
              description: 'Mở rộng hoặc thu nhỏ tài nguyên dễ dàng'
            }
          ],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Prometheus']
        },
        'mobile-development': {
          title: 'Phát triển Ứng dụng Di động',
          description: 'Ứng dụng mobile native và cross-platform với UX/UI hiện đại và hiệu suất cao.',
          overview: 'Chúng tôi phát triển ứng dụng di động chất lượng cao cho cả iOS và Android với thiết kế UX/UI hiện đại, hiệu suất tối ưu và tích hợp đầy đủ các tính năng enterprise.',
          features: [
            {
              title: 'Cross-platform development',
              description: 'Phát triển app cho cả iOS và Android với codebase chung'
            },
            {
              title: 'UX/UI hiện đại',
              description: 'Thiết kế giao diện đẹp mắt và trải nghiệm người dùng tối ưu'
            },
            {
              title: 'Offline functionality',
              description: 'Hoạt động offline và đồng bộ dữ liệu khi có kết nối'
            },
            {
              title: 'Push notification',
              description: 'Hệ thống thông báo đẩy thông minh và cá nhân hóa'
            }
          ],
          benefits: [
            {
              icon: '📱',
              title: 'Đa nền tảng',
              description: 'Tiếp cận nhiều người dùng trên mọi thiết bị'
            },
            {
              icon: '⚡',
              title: 'Hiệu suất cao',
              description: 'Ứng dụng mượt mà và phản hồi nhanh'
            },
            {
              icon: '🎨',
              title: 'Thiết kế đẹp',
              description: 'Giao diện hiện đại và thân thiện người dùng'
            }
          ],
          technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'SQLite', 'Jest']
        }
      }
    }
  },
  computed: {
    currentSolution() {
      const solutionId = this.$route.params.id
      return this.solutions[solutionId] || {
        title: 'Giải pháp không tìm thấy',
        description: 'Xin lỗi, giải pháp này hiện không có sẵn.',
        overview: '',
        features: [],
        benefits: [],
        technologies: []
      }
    }
  },
  created() {
    const solutionId = this.$route.params.id
    if (!this.solutions[solutionId]) {
      this.$router.push('/giai-phap')
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  beforeRouteUpdate(to, from, next) {
    next()
    this.$nextTick(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }
}
</script>

<style scoped>
.prose {
  max-width: none;
}
</style>
