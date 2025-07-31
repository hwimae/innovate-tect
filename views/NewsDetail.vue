<template>
  <div class="min-h-screen bg-white">
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="mb-6">
            <router-link 
              to="/tin-tuc" 
              class="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Quay lại tin tức
            </router-link>
          </div>
          <div class="text-center">
            <p class="text-gray-500 text-sm mb-4">{{ currentPost.date }}</p>
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {{ currentPost.title }}
            </h1>
            <div class="flex justify-center gap-2 mb-6">
              <span 
                v-for="tag in currentPost.tags" 
                :key="tag"
                class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="mb-8">
            <img 
              :src="currentPost.image" 
              :alt="currentPost.title"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div class="prose prose-lg max-w-none">
            <div v-html="currentPost.content"></div>
          </div>

          <div class="mt-12 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-semibold mb-4">Chia sẻ bài viết</h3>
            <div class="flex space-x-4">
              <button 
                @click="shareOnFacebook"
                class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button>
              <button 
                @click="shareOnTwitter"
                class="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter</span>
              </button>
              <button 
                @click="shareOnLinkedIn"
                class="flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </button>
            </div>
          </div>

          <div class="mt-16">
            <h3 class="text-2xl font-bold mb-8">Để lại bình luận</h3>
            <div class="bg-gray-50 rounded-2xl p-8">
              <p class="text-gray-600 mb-6">
                Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu 
                <span class="text-red-500">*</span>
              </p>
              
              <form @submit.prevent="submitComment" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-700 text-sm font-medium mb-2">
                      Họ tên <span class="text-red-500">*</span>
                    </label>
                    <input
                      v-model="commentForm.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  <div>
                    <label class="block text-gray-700 text-sm font-medium mb-2">
                      Email <span class="text-red-500">*</span>
                    </label>
                    <input
                      v-model="commentForm.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nhập email của bạn"
                    />
                  </div>
                </div>
                
                <div>
                  <label class="block text-gray-700 text-sm font-medium mb-2">
                    Nội dung <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    v-model="commentForm.content"
                    required
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Nhập nội dung bình luận của bạn"
                  ></textarea>
                </div>
                
                <div class="flex items-start">
                  <input
                    v-model="commentForm.saveInfo"
                    type="checkbox"
                    id="saveInfo"
                    class="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label for="saveInfo" class="text-sm text-gray-600">
                    Lưu tên, email và trang web của tôi trong trình duyệt này cho lần bình luận tiếp theo.
                  </label>
                </div>
                
                <button
                  type="submit"
                  class="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
                >
                  Gửi bình luận
                </button>
              </form>
            </div>
          </div>

          <div class="mt-16">
            <h3 class="text-2xl font-bold mb-8">Bài viết liên quan</h3>
            <div class="grid md:grid-cols-2 gap-8">
              <div 
                v-for="relatedPost in filteredRelatedPosts" 
                :key="relatedPost.id"
                @click="goToPost(relatedPost.id)"
                class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <img 
                  :src="relatedPost.image" 
                  :alt="relatedPost.title"
                  class="w-full h-48 object-cover"
                />
                <div class="p-6">
                  <p class="text-gray-500 text-xs mb-2">{{ relatedPost.date }}</p>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition">
                    {{ relatedPost.title }}
                  </h4>
                  <p class="text-gray-600 text-sm">{{ relatedPost.excerpt }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      commentForm: {
        name: '',
        email: '',
        content: '',
        saveInfo: false
      },
      posts: {
        'post-1': {
          title: 'Tiềm năng và Triển vọng: Làm thế nào Công nghệ đang Thay đổi Thế giới',
          date: '18/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/about-us-1-991x472.jpg',
          tags: ['AI', 'Business', 'Technology'],
          content: `
            <p>Trong thế kỷ 21, công nghệ đã trở thành động lực chính thúc đẩy sự phát triển của xã hội loài người. Từ trí tuệ nhân tạo đến công nghệ blockchain, từ Internet vạn vật đến điện toán đám mây, mỗi bước tiến công nghệ đều mang lại những thay đổi sâu sắc trong cách chúng ta sống, làm việc và tương tác.</p>
            
            <h2>Trí tuệ nhân tạo - Cách mạng công nghiệp 4.0</h2>
            <p>Trí tuệ nhân tạo (AI) không còn là khái niệm xa vời trong các bộ phim khoa học viễn tưởng mà đã trở thành hiện thực trong cuộc sống hàng ngày. Từ chatbot hỗ trợ khách hàng đến hệ thống gợi ý sản phẩm, AI đang thay đổi cách doanh nghiệp vận hành và cải thiện trải nghiệm người dùng.</p>
            
            <h2>Blockchain và tương lai của giao dịch số</h2>
            <p>Công nghệ blockchain đang tạo ra một cuộc cách mạng trong lĩnh vực tài chính và quản lý dữ liệu. Với khả năng đảm bảo tính minh bạch, bảo mật và phi tập trung, blockchain hứa hẹn sẽ thay đổi cách chúng ta thực hiện các giao dịch và lưu trữ thông tin.</p>
            
            <h2>Internet vạn vật (IoT) và thành phố thông minh</h2>
            <p>IoT đang kết nối mọi thứ xung quanh chúng ta, từ thiết bị gia dụng đến hệ thống giao thông đô thị. Công nghệ này không chỉ mang lại sự tiện lợi mà còn giúp tối ưu hóa việc sử dụng tài nguyên và cải thiện chất lượng cuộc sống.</p>
            
            <h2>Thách thức và cơ hội</h2>
            <p>Dù công nghệ mang lại nhiều lợi ích, chúng ta cũng phải đối mặt với những thách thức như vấn đề bảo mật dữ liệu, thất nghiệp do tự động hóa, và khoảng cách số. Tuy nhiên, với cách tiếp cận đúng đắn, chúng ta có thể tận dụng công nghệ để xây dựng một tương lai tốt đẹp hơn cho tất cả mọi người.</p>
          `
        },
        'post-2': {
          title: 'Điểm Nhấn Công nghệ: Sự Đổi Mới và Sáng Tạo trong Doanh nghiệp',
          date: '18/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/dich-vu-dam-may-991x472.jpg',
          tags: ['AI', 'Neural Networks', 'Innovation'],
          content: `
            <p>Trong môi trường kinh doanh cạnh tranh gay gắt hiện nay, sự đổi mới và sáng tạo không chỉ là lợi thế cạnh tranh mà đã trở thành yếu tố sống còn của doanh nghiệp. Công nghệ đóng vai trò then chốt trong việc thúc đẩy những thay đổi tích cực này.</p>
            
            <h2>Chuyển đổi số - Imperative của thời đại</h2>
            <p>Chuyển đổi số không còn là lựa chọn mà đã trở thành điều bắt buộc. Những doanh nghiệp không thích ứng kịp thời với làn sóng công nghệ sẽ dần bị thị trường loại bỏ. Từ việc số hóa quy trình nội bộ đến việc tạo ra những sản phẩm dịch vụ mới, chuyển đổi số đang định hình lại toàn bộ cảnh quan kinh doanh.</p>
            
            <h2>Văn hóa đổi mới trong tổ chức</h2>
            <p>Để thành công trong việc ứng dụng công nghệ, doanh nghiệp cần xây dựng một văn hóa đổi mới mạnh mẽ. Điều này bao gồm việc khuyến khích nhân viên thử nghiệm, chấp nhận thất bại và học hỏi từ sai lầm. Lãnh đạo cần đi đầu trong việc thúc đẩy tư duy sáng tạo và đầu tư vào nghiên cứu phát triển.</p>
            
            <h2>Ứng dụng AI trong ra quyết định</h2>
            <p>Trí tuệ nhân tạo đang cách mạng hóa cách doanh nghiệp ra quyết định. Thay vì dựa vào trực giác hoặc kinh nghiệm cá nhân, các nhà lãnh đạo hiện có thể tận dụng sức mạnh của big data và machine learning để đưa ra những quyết định chính xác và kịp thời hơn.</p>
          `
        },
        'post-3': {
          title: 'Xu hướng Công nghệ 2024: Định hướng cho Sự Phát triển',
          date: '15/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/giai-phap-1-575x274.jpg',
          tags: ['Business', 'Technology', 'Trends'],
          content: `
            <p>Năm 2024 đánh dấu một năm đầy biến động và thú vị trong lĩnh vực công nghệ. Với sự phát triển vượt bậc của trí tuệ nhân tạo, Web3, và các công nghệ mới nổi khác, chúng ta đang chứng kiến những thay đổi sâu sắc định hình tương lai của xã hội.</p>
            
            <h2>Generative AI - Kỷ nguyên sáng tạo mới</h2>
            <p>Trí tuệ nhân tạo tạo sinh (Generative AI) đã tạo nên một cuộc cách mạng trong cách chúng ta tạo ra nội dung. Từ ChatGPT đến DALL-E, các công cụ AI này không chỉ hỗ trợ trong công việc mà còn mở ra những khả năng sáng tạo vô hạn trong nghệ thuật, văn học và thiết kế.</p>
            
            <h2>Edge Computing và 5G</h2>
            <p>Sự kết hợp giữa Edge Computing và mạng 5G đang tạo ra những ứng dụng thời gian thực chưa từng có. Từ xe tự lái đến thực tế ảo, các công nghệ này đang làm cho những điều tưởng chừng không thể trở thành hiện thực.</p>
            
            <h2>Sustainability Tech</h2>
            <p>Công nghệ xanh và bền vững đang trở thành ưu tiên hàng đầu. Các giải pháp AI cho quản lý năng lượng, công nghệ pin mới, và các hệ thống thông minh để giảm thiểu tác động môi trường đang được đầu tư mạnh mẽ.</p>
          `
        },
        'post-4': {
          title: 'Phát triển Ứng dụng Di động: Bí quyết để Tạo Ra Trải nghiệm Người dùng Tốt nhất',
          date: '10/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/giai-phap-4-1340x638.jpg',
          tags: ['Mobile', 'UX/UI', 'Development'],
          content: `
            <p>Trong thời đại smartphone là trung tâm của cuộc sống số, việc phát triển ứng dụng di động chất lượng cao không chỉ là lợi thế cạnh tranh mà còn là yếu tố sống còn của doanh nghiệp. Bài viết này sẽ chia sẻ những bí quyết để tạo ra những ứng dụng di động xuất sắc.</p>
            
            <h2>Hiểu rõ người dùng</h2>
            <p>Bước đầu tiên và quan trọng nhất trong việc phát triển ứng dụng là hiểu rõ người dùng của bạn. Nghiên cứu thói quen, nhu cầu và pain points của họ. Tạo user personas chi tiết và journey maps để đảm bảo ứng dụng của bạn thực sự giải quyết được vấn đề thực tế.</p>
            
            <h2>Thiết kế UI/UX tối ưu</h2>
            <p>Giao diện người dùng phải đơn giản, trực quan và dễ sử dụng. Áp dụng nguyên tắc "less is more" - loại bỏ những yếu tố không cần thiết. Đảm bảo navigation rõ ràng và thời gian load nhanh chóng.</p>
            
            <h2>Performance và Optimization</h2>
            <p>Ứng dụng chậm chạp sẽ khiến người dùng từ bỏ ngay lập tức. Tối ưu hóa hình ảnh, sử dụng lazy loading, và implement caching strategies hiệu quả. Đảm bảo ứng dụng hoạt động mượt mà trên mọi thiết bị.</p>
            
            <h2>Testing và Feedback</h2>
            <p>Thực hiện testing kỹ lưỡng trên nhiều thiết bị và hệ điều hành khác nhau. Thu thập feedback từ beta users và liên tục cải thiện based on data và user behavior analytics.</p>
          `
        },
        'post-5': {
          title: 'Blockchain và Tiềm năng Cách mạng Hệ thống Giao dịch',
          date: '08/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/01/robot-1-640x478.jpg',
          tags: ['Blockchain', 'Fintech', 'Cryptocurrency'],
          content: `
            <p>Blockchain không chỉ là công nghệ đằng sau Bitcoin mà còn là nền tảng cho một cuộc cách mạng trong cách chúng ta giao dịch, lưu trữ và xác minh thông tin. Với đặc tính phi tập trung, minh bạch và bảo mật cao, blockchain đang mở ra những khả năng vô hạn.</p>
            
            <h2>Bản chất của Blockchain</h2>
            <p>Blockchain là một distributed ledger technology cho phép lưu trữ dữ liệu theo cách mà việc thay đổi, hack hoặc gian lận hệ thống trở nên cực kỳ khó khăn hoặc không thể. Mỗi khối chứa thông tin được mã hóa và liên kết với khối trước đó, tạo thành một chuỗi an toàn.</p>
            
            <h2>Ứng dụng trong Tài chính</h2>
            <p>Ngoài cryptocurrency, blockchain đang được ứng dụng rộng rãi trong ngành tài chính: smart contracts tự động hóa các thỏa thuận, cross-border payments nhanh chóng và tiết kiệm chi phí, và DeFi (Decentralized Finance) tạo ra hệ sinh thái tài chính mới hoàn toàn.</p>
            
            <h2>Supply Chain và Traceability</h2>
            <p>Blockchain cho phép theo dõi sản phẩm từ nguồn gốc đến người tiêu dùng cuối, đảm bảo tính chính xác và minh bạch. Điều này đặc biệt quan trọng trong ngành thực phẩm, dược phẩm và hàng xa xỉ.</p>
            
            <h2>Thách thức và Tương lai</h2>
            <p>Mặc dù tiềm năng to lớn, blockchain vẫn phải đối mặt với các thách thức về scalability, tiêu thụ năng lượng và regulatory compliance. Tuy nhiên, với sự phát triển của các giải pháp Layer 2 và consensus mechanisms mới, tương lai của blockchain rất sáng sủa.</p>
          `
        },
        'post-6': {
          title: 'Trí tuệ nhân tạo (AI): Phát triển và Ứng dụng trong Công nghệ',
          date: '05/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/01/shubham-dhage-9cpMGc6LckI-unsplash-2-640x478.jpg',
          tags: ['AI', 'Machine Learning', 'Deep Learning'],
          content: `
            <p>Trí tuệ nhân tạo đã từ khái niệm khoa học viễn tưởng trở thành hiện thực, thay đổi cách chúng ta làm việc, sinh hoạt và tương tác với thế giới. Từ personal assistants đến autonomous vehicles, AI đang định hình lại mọi ngành công nghiệp.</p>
            
            <h2>Các dạng AI hiện tại</h2>
            <p>Hiện tại, chúng ta đang ở giai đoạn Narrow AI - AI chuyên biệt cho từng tác vụ cụ thể. Machine Learning và Deep Learning là hai nhánh chính, với Deep Learning sử dụng neural networks để mô phỏng cách hoạt động của não bộ con người.</p>
            
            <h2>Ứng dụng trong Healthcare</h2>
            <p>AI đang cách mạng hóa ngành y tế thông qua chẩn đoán hình ảnh chính xác hơn con người, drug discovery tự động, và personalized medicine. Các hệ thống AI có thể phân tích hàng triệu dữ liệu y tế để đưa ra những insights quan trọng.</p>
            
            <h2>AI trong Business Intelligence</h2>
            <p>Các doanh nghiệp đang sử dụng AI để phân tích customer behavior, optimize pricing strategies, và predict market trends. Predictive analytics giúp companies đưa ra quyết định dựa trên data thay vì intuition.</p>
            
            <h2>Ethical AI và Tương lai</h2>
            <p>Cùng với sự phát triển của AI, các vấn đề về đạo đức, bias, và job displacement cũng nổi lên. Việc phát triển AI có trách nhiệm (Responsible AI) và explainable AI đang trở thành ưu tiên hàng đầu của industry.</p>
          `
        },
      },
      relatedPosts: [
        {
          id: 'post-1',
          title: 'Tiềm năng và Triển vọng: Làm thế nào Công nghệ đang Thay đổi Thế giới',
          date: '18/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/about-us-1-991x472.jpg',
          excerpt: 'Công nghệ đang thay đổi mọi mặt của cuộc sống, từ cách chúng ta làm việc, học tập đến giải trí.'
        },
        {
          id: 'post-2',
          title: 'Điểm Nhấn Công nghệ: Sự Đổi Mới và Sáng Tạo trong Doanh nghiệp',
          date: '18/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/dich-vu-dam-may-991x472.jpg',
          excerpt: 'Sự đổi mới và sáng tạo là chìa khóa để doanh nghiệp phát triển trong kỷ nguyên số.'
        },
        {
          id: 'post-3',
          title: 'Xu hướng Công nghệ 2024: Định hướng cho Sự Phát triển',
          date: '15/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/giai-phap-1-575x274.jpg',
          excerpt: 'Cập nhật những xu hướng công nghệ nổi bật nhất năm 2024 và cách chúng định hình tương lai.'
        },
        {
          id: 'post-4',
          title: 'Phát triển Ứng dụng Di động: Bí quyết để Tạo Ra Trải nghiệm Người dùng Tốt nhất',
          date: '10/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/giai-phap-4-1340x638.jpg',
          excerpt: 'Những bí quyết để tạo ra ứng dụng di động chất lượng cao và trải nghiệm người dùng tuyệt vời.'
        },
        {
          id: 'post-5',
          title: 'Blockchain và Tiềm năng Cách mạng Hệ thống Giao dịch',
          date: '08/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/01/robot-1-640x478.jpg',
          excerpt: 'Công nghệ Blockchain đang tạo ra những thay đổi căn bản trong cách chúng ta thực hiện giao dịch.'
        },
        {
          id: 'post-6',
          title: 'Trí tuệ nhân tạo (AI): Phát triển và Ứng dụng trong Công nghệ',
          date: '05/03/2024',
          image: 'https://innovate-tech.monamedia.net/wp-content/uploads/2024/01/shubham-dhage-9cpMGc6LckI-unsplash-2-640x478.jpg',
          excerpt: 'AI đang định hình lại mọi ngành công nghiệp từ personal assistants đến autonomous vehicles.'
        }
      ]
    }
  },
  computed: {
    currentPost() {
      let postId = this.$route.params.id
      if (postId && !postId.startsWith('post-') && !isNaN(postId)) {
        postId = `post-${postId}`
      }
      return this.posts[postId] || {
        title: 'Bài viết không tìm thấy',
        date: '',
        image: '',
        tags: [],
        content: '<p>Xin lỗi, bài viết này hiện không có sẵn.</p>'
      }
    },
    filteredRelatedPosts() {
      const currentPostId = this.$route.params.id?.startsWith('post-') 
        ? this.$route.params.id 
        : `post-${this.$route.params.id}`
      
      return this.relatedPosts
        .filter(post => post.id !== currentPostId)
        .slice(0, 2)
    }
  },
  methods: {
    goToPost(postId) {
      this.$router.push(`/tin-tuc/${postId}`).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    },
    submitComment() {
      if (this.commentForm.name && this.commentForm.email && this.commentForm.content) {
        console.log('Submitting comment:', this.commentForm)
        alert('Cảm ơn bạn đã để lại bình luận! Bình luận sẽ được duyệt trước khi hiển thị.')
        
        this.commentForm = {
          name: '',
          email: '',
          content: '',
          saveInfo: false
        }
      }
    },
    shareOnFacebook() {
      const url = window.location.href
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    },
    shareOnTwitter() {
      const url = window.location.href
      const text = this.currentPost.title
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
    },
    shareOnLinkedIn() {
      const url = window.location.href
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
    }
  },
  created() {
    let postId = this.$route.params.id
    if (postId && !postId.startsWith('post-') && !isNaN(postId)) {
      postId = `post-${postId}`
    }
    if (!this.posts[postId]) {
      this.$router.push('/tin-tuc')
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

.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  color: #4b5563;
  line-height: 1.625;
  margin-bottom: 1rem;
}
</style>
