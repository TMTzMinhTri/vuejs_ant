<template>
  <div>
    <span class="title center">{{$t("sidebar.product.sidebar.supplier")}}</span>

    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="Name">
        <a-input v-model="form.name"/>
      </a-form-item>
      <a-form-item :label="$t('input.contact')">
        <a-input-number v-model="form.phone" onchange="{onChange}"></a-input-number>
      </a-form-item>
      <a-form-item :label="$t('input.address')">
        <a-input v-model="form.address" />
      </a-form-item>
      <div class="ant-row ant-form-item" style="width:100%">
        <a-col :span="8">
          <a-select default-value="nhap thanh pho" style="width: 100%" @change="handleChange">
            <a-select-option
              v-for="i in 25"
              :key="(i + 9).toString(36) + i"
            >{{ (i + 9).toString(36) + i }}</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="8">
          <a-select default-value="nhap thanh pho" style="width: 100%" @change="handleChange">
            <a-select-option
              v-for="i in 25"
              :key="(i + 9).toString(36) + i"
            >{{ (i + 9).toString(36) + i }}</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="8">
          <a-select default-value="nhap thanh pho" style="width: 100%" @change="handleChange">
            <a-select-option
              v-for="i in 25"
              :key="(i + 9).toString(36) + i"
            >{{ (i + 9).toString(36) + i }}
            </a-select-option>
          </a-select>
        </a-col>
      </div>

    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },

    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.ant-input-number {
  width: 100%;
}
.center {
  text-align: center;
}
</style>
