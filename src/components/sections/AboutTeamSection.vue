<template>
  <div class="w-full bg-white py-16 md:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section: Our Team -->
      <div class="text-center mb-12 md:mb-16">
        <p class="text-gray-600 text-sm mb-2">/ OUR TEAM /</p>
      </div>

      <div class="flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl">
          <!-- Team Member 1 -->
          <div
            class="flex flex-col items-center text-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/team-5-e1733734250124.jpg"
              alt="Trần Văn Minh"
              class="w-full h-80 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-[#1F2937] mb-1">
                Mai Tiến Huy
              </h3>
              <p class="text-gray-600 text-sm">/ hihi /</p>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div
            class="flex flex-col items-center text-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/team-4-e1733734341703.jpg"
              alt="Phạm Thị Linh"
              class="w-full h-80 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-[#1F2937] mb-1">
                Nguyễn Thị Hoàng Hạ
              </h3>
              <p class="text-gray-600 text-sm">/ Back-end /</p>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div
            class="flex flex-col items-center text-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://innovate-tech.monamedia.net/wp-content/uploads/2024/12/team-2-e1733734384998.jpg"
              alt="Nguyễn Thị Hà"
              class="w-full h-80 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-[#1F2937] mb-1">
                Vũ Tú Nam
              </h3>
              <p class="text-gray-600 text-sm">/ Front-end /</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutTeamSection'
}
</script>

<style scoped>
/* Custom hover effects */
.hover\:shadow-xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
