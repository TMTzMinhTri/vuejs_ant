<template>
  <div>
    <a-form :form="form" @submit="handleSubmit">
      <a-row type="flex" justify="space-around" align="top">
        <a-col :span="4">
          <h2 class="pb-3">{{ $t('product.name') }}</h2>
          <a-form-item :label="$t('product.name')">
            <a-input v-model="form.name" />
          </a-form-item>
          <a-form-item :label="$t('product.brand_name')">
            <a-input v-model="form.brand_name" />
          </a-form-item>
          <a-form-item :label="$t('product.sku_code')">
            <a-input v-model="form.sku_code" />
          </a-form-item>
          <a-form-item :label="$t('product.local_name')">
            <a-input v-model="form.local_name" />
          </a-form-item>
        </a-col>

        <a-col :span="14">
          <h2 class="pb-3">{{ $t('sidebar.product.sidebar.info') }}</h2>
          <a-form-item :label="$t('productInfo.origin')">
             <a-select default-value="nhap thanh pho" style="width: 100%" @change="handleChange">
            <a-select-option
              v-for="i in 25"
              :key="(i + 9).toString(36) + i"
            >{{ (i + 9).toString(36) + i }}</a-select-option>
          </a-select>
          </a-form-item>
          <a-form-item :label="$t('productInfo.standard')">
            <a-select default-value="nhap thanh pho" style="width: 100%" @change="handleChange">
            <a-select-option
              v-for="i in 25"
              :key="(i + 9).toString(36) + i"
            >{{ (i + 9).toString(36) + i }}</a-select-option>
          </a-select>
          </a-form-item>
          <a-form-item :label="$t('productInfo.unit')">
             <a-select default-value="nhap thanh pho" style="width: 100%" @change="handleChange">
            <a-select-option
              v-for="i in 25"
              :key="(i + 9).toString(36) + i"
            >{{ (i + 9).toString(36) + i }}</a-select-option>
          </a-select>
          </a-form-item>

        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        brand_name: "",
        sku_code: "",
        local_name: ""
      },
      layout: {
        labelCol: { span: 6, offset: 2 },
        wrapperCol: { span: 12 }
      }
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
      console.log('changed', value);
    },
  }
};
</script>

<style scoped>
  .body_content {
    width: 100%;
  }
</style>
