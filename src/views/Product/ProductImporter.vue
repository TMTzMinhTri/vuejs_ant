<template>
  <div>
    <h1>{{$t("importer.title")}}</h1>

    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item :label="$t('input.name')">
        <a-input v-model="form.name" />
      </a-form-item>
      <a-form-item :label="$t('input.contact')">
        <a-input-number v-model="form.phone" onchange="{onChange}"></a-input-number>
      </a-form-item>
      <a-form-item :label="$t('input.address')">
        <a-input v-model="form.address" />
      </a-form-item>
      <a-row class="ant-col-offset-5 ant-col-12">
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
            >{{ (i + 9).toString(36) + i }}</a-select-option>
          </a-select>
        </a-col>
      </a-row>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
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
</style>
