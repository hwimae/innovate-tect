<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold">Đánh giá từ khách hàng</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials.slice(0, 3)"
          :key="testimonial.id"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <div class="flex mb-4">
            <span v-for="n in 5" :key="n" class="text-yellow-400">★</span>
          </div>
          <p class="text-gray-600 mb-4">{{ testimonial.content }}</p>
          <div class="font-semibold">{{ testimonial.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialsSection",
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Nguyễn Thị Hương",
          content:
            "Dịch vụ giao hàng nhanh chóng, nhân viên thân thiện và chu đáo. Mua sắm tại đây luôn là trải nghiệm tuyệt vời",
        },
        {
          id: 2,
          name: "Trần Thị Mai",
          content:
            "Chất lượng sản phẩm rất tốt, dịch vụ chăm sóc khách hàng rất tận tâm. Sẽ quay lại mua sắm ở đây.",
        },
        {
          id: 3,
          name: "Lê Đức Thành",
          content:
            "Thiết kế tuyệt vời và tối ưu hóa cơ sở tuyệt vời để thành lập đại lý mới. Đặc biệt là khi bạn không muốn thực hiện thiết kế chìa khóa trao tay.",
        },
      ],
    };
  },
};
</script>
