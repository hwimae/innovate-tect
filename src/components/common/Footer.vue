<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo và thông tin liên hệ -->
        <div class="space-y-6">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <img
              src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/2-e1733720408698.png"
              alt="The Mona Technology Logo"
              class="mb-6 h-10 object-contain"
            />
          </div>

          <!-- Liên hệ ngay -->
          <div>
            <h4 class="text-white font-semibold mb-4">Liên hệ ngay</h4>
            <div class="space-y-2">
              <p class="text-gray-300">012384567</p>
              <p class="text-gray-300">012345685</p>
            </div>
          </div>

          <!-- Email -->
          <div>
            <h4 class="text-white font-semibold mb-4">Email</h4>
            <p class="text-gray-300">hwimae@gmail.com</p>
          </div>
        </div>

        <!-- Địa chỉ -->
        <div class="space-y-6">
          <div>
            <h4 class="text-white font-semibold mb-4">Địa chỉ</h4>
            <p class="text-gray-300">11 Ngõ 216 Trung Kính</p>
          </div>

          <!-- Mạng xã hội -->
          <div>
            <h4 class="text-white font-semibold mb-4">Mạng xã hội</h4>
            <div class="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.168 2.967c2.99 0 3.346.012 4.524.065 1.091.05 1.685.228 2.079.379.522.203.895.446 1.287.838.392.392.635.765.838 1.287.151.394.329.988.379 2.079.053 1.178.065 1.534.065 4.524s-.012 3.346-.065 4.524c-.05 1.091-.228 1.685-.379 2.079-.203.522-.446.895-.838 1.287-.392.392-.765.635-1.287.838-.394.151-.988.329-2.079.379-1.178.053-1.534.065-4.524.065s-3.346-.012-4.524-.065c-1.091-.05-1.685-.228-2.079-.379a3.462 3.462 0 0 1-1.287-.838 3.462 3.462 0 0 1-.838-1.287c-.151-.394-.329-.988-.379-2.079-.053-1.178-.065-1.534-.065-4.524s.012-3.346.065-4.524c.05-1.091.228-1.685.379-2.079.203-.522.446-.895.838-1.287.392-.392.765-.635 1.287-.838.394-.151.988-.329 2.079-.379 1.178-.053 1.534-.065 4.524-.065zm0-2.168c-3.042 0-3.423.013-4.617.067-1.191.054-2.005.24-2.715.513-.735.286-1.359.669-1.981 1.291-.622.622-1.005 1.246-1.291 1.981-.273.71-.459 1.524-.513 2.715-.054 1.194-.067 1.575-.067 4.617s.013 3.423.067 4.617c.054 1.191.24 2.005.513 2.715.286.735.669 1.359 1.291 1.981.622.622 1.246 1.005 1.981 1.291.71.273 1.524.459 2.715.513 1.194.054 1.575.067 4.617.067s3.423-.013 4.617-.067c1.191-.054 2.005-.24 2.715-.513.735-.286 1.359-.669 1.981-1.291.622-.622 1.005-1.246 1.291-1.981.273-.71.459-1.524.513-2.715.054-1.194.067-1.575.067-4.617s-.013-3.423-.067-4.617c-.054-1.191-.24-2.005-.513-2.715a5.631 5.631 0 0 0-1.291-1.981c-.622-.622-1.246-1.005-1.981-1.291-.71-.273-1.524-.459-2.715-.513-1.194-.054-1.575-.067-4.617-.067z"
                  />
                  <path
                    d="M12.168 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.155a3.993 3.993 0 1 1 0-7.986 3.993 3.993 0 0 1 0 7.986z"
                  />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Danh mục -->
        <div>
          <h4 class="text-white font-semibold mb-4">Danh mục</h4>
          <ul class="space-y-3">
            <li>
              <router-link
                to="/"
                class="text-gray-300 hover:text-white transition group"
              >
                Trang chủ
                <span
                  class="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                  >/ Home /</span
                >
              </router-link>
            </li>
            <li>
              <router-link
                to="/gioi-thieu"
                class="text-gray-300 hover:text-white transition group"
              >
                Giới thiệu
                <span
                  class="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                  >/ About /</span
                >
              </router-link>
            </li>
            <li>
              <router-link
                to="/dich-vu"
                class="text-gray-300 hover:text-white transition group"
              >
                Dịch vụ
                <span
                  class="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                  >/ Giải pháp /</span
                >
              </router-link>
            </li>
            <li>
              <router-link
                to="/tin-tuc"
                class="text-gray-300 hover:text-white transition group"
              >
                Tin tức
                <span
                  class="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                  >/ News /</span
                >
              </router-link>
            </li>
            <li>
              <router-link
                to="/lien-he"
                class="text-gray-300 hover:text-white transition group"
              >
                Liên hệ
                <span
                  class="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                  >/ Contact /</span
                >
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Liên kết -->
        <div>
          <h4 class="text-white font-semibold mb-4">Liên kết</h4>
          <ul class="space-y-3">
            <li>
              <router-link
                to="/ho-tro-khach-hang"
                class="text-gray-300 hover:text-white transition"
              >
                Hỗ trợ khách hàng
              </router-link>
            </li>
            <li>
              <router-link
                to="/chinh-sach-bao-mat"
                class="text-gray-300 hover:text-white transition"
              >
                Chính sách bảo mật
              </router-link>
            </li>
            <li>
              <router-link
                to="/dieu-khoan-su-dung"
                class="text-gray-300 hover:text-white transition"
              >
                Điều khoản sử dụng
              </router-link>
            </li>
            <li>
              <router-link
                to="/chinh-sach-thong-tin"
                class="text-gray-300 hover:text-white transition"
              >
                Chính sách thông tin
              </router-link>
            </li>
            <li>
              <router-link
                to="/dieu-khoan-va-dieu-kien"
                class="text-gray-300 hover:text-white transition"
              >
                Điều khoản và điều kiện
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-gray-700 text-center">
        <p class="text-gray-400">
          &copy; 2025 THE MONA TECHNOLOGY. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
