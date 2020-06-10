<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-3">
          <h1>{{ $t('sidebar.product.sidebar.description') }}</h1>
        </div>

        <div class="col-12">
          <div class="mb-3" v-for="detail in details" :key="detail.section">
            <h2>{{ $t(`product.${detail.section}`) }}</h2>
            <quill-editor
              ref="myQuillEditor"
              v-model="detail.content"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
      details: [{
        section: 'description',
        content: 'Làm giảm đau nhanh chóng và hiệu quả các cơn đau như đau đầu, đau nửa đầu, đau họng, đau bụng kinh, đau sau nhổ răng hoặc các thủ thuật nha khoa, đau răng, đau nhức cơ, gân, đau do chấn thương, đau do viêm khớp, viêm xoang, đau nhức do cảm lạnh, cảm cúm. Hạ sốt nhanh.DƯỢC LỰC HỌC:Kết hợp giữa Paracetamol và Cafein có tác dụng giảm nhanh các cơn đau, hạ sốt với hiệu quả rất cao. Paracetamol có tác động trung ương - ngoại biên, có hoạt tính giảm đau, hạ nhiệt là do ức chế hoạt động của men cyclooxygenase trong quá trình tổng hợp Prostaglandin - là chất gây sốt, viêm, đau trong cơ thể. Paracetamol hạ nhiệt mạnh còn do tác động lên vùng dưới đồi, do giãn mạch và tăng lưu lượng máu ngoại biên. Cafein có tác dụng kích thích nhẹ hệ thần kinh trung ương, hỗ trợ giảm đau và giúp cho hoạt động của cơ được dễ dàng.DƯỢC ĐỘNG HỌC:Paracetamol hấp thu nhanh chóng và hầu như hoàn toàn qua đường tiêu hóa. Thời gian bán thải là 1,25 - 3 giờ. Thuốc chuyển hóa ở gan và thải trừ qua thận. Paracetamol được dùng rộng rãi trong điều trị các chứng đau và sốt từ nhẹ đến vừa.* Giảm đau:Paracetamol được dùng giảm đau tạm thời trong điều trị chứng đau nhẹ và vừa:đau đầu,đau răng,đau bụng kinh... Thuốc có hiệu quả nhất là giảm đau cường độ thấp có nguồn gốc không phải nội tạng.Paracetamol không có tác dụng trị thấp khớp.Paracetamol là thuốc thay thế salicylat (được ưa thích ở người bệnh chống chỉ định hoặc không dung nạp salicylat) để giảm đau nhẹ hoặc hạ sốt.* Hạ sốt:Paracetamol thường được dùng để giảm thân nhiệt ở người bệnh sốt, khi sốt có thể có hại hoặc khi hạ sốt nói chung không đặc hiệu, không ảnh hưởng đến tiến trình của bệnh cơ bản và có thể che lấp tình trạng bệnh của người bệnh. Kích thích thần kinh trung ương khi mệt mỏi, suy nhược.Suy hô hấp, tuần hoàn.Chỉ định khác: hen phế quản, suy tim trái cấp. Ống tiêm 1 ml dung dịch 0,7%.Uống 0,1 – 0,2 g/lần, 2 lần /24h. Tiêm dưới da 0,25 g/lần, 1 – 2 lần/24h.'
      },
      {
        section: 'drug_interactions',
        content: 'Thận trọng ở người bệnh có thiếu máu từ trước, vì chứng xanh tím có thể không biểu lộ rõ, mặc dù có những nồng độ cao nguy hiểm của Methemoglobin trong máu.Uống nhiều rượu có thể gây tăng độc tính với gan của Paracetamol, nên tránh hoặc hạn chế uống rượu.Phụ nữ có thai và đang cho con bú.'
      },
      {
        section: 'storage',
        content: 'Paracetamol là thuốc giảm đau hạ sốt không steroid.'
      }]
    }
  },

  methods: {
  }
}
</script>

<style scoped>
  .body_content {
    width: 100%
  }
</style>
