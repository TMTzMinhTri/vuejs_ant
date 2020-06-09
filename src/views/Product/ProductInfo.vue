<template>
  <div>
    <a-row>
      <a-form-model ref="infoForm" :model="infoForm" v-bind="layout">
        <a-col :span="18" :push="6">
          <h2 class="pb-3">{{ $t('product.name') }}</h2>
          <a-form-model-item :label="$t('product.name')">
            <a-input v-model="infoForm.name" />
          </a-form-model-item>
          <a-form-model-item :label="$t('product.brand_name')">
            <a-input v-model="infoForm.brand_name" />
          </a-form-model-item>
          <a-form-model-item :label="$t('product.sku_code')">
            <a-input v-model="infoForm.sku_code" />
          </a-form-model-item>
          <a-form-model-item :label="$t('product.local_name')">
            <a-input v-model="infoForm.local_name" />
          </a-form-model-item>
        </a-col>

        <a-col :span="6" :pull="18">
          <h2 class="pb-3">{{ $t('product.name') }}</h2>
          <a-form-model-item :label="$t('product.name')">
            <a-input v-model="infoForm.name" />
          </a-form-model-item>
          <a-form-model-item :label="$t('product.brand_name')">
            <a-input v-model="infoForm.brand_name" />
          </a-form-model-item>
          <a-form-model-item :label="$t('product.sku_code')">
            <a-input v-model="infoForm.sku_code" />
          </a-form-model-item>
          <a-form-model-item :label="$t('product.local_name')">
            <a-input v-model="infoForm.local_name" />
          </a-form-model-item>
        </a-col>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="submitForm('infoForm')">Submit</a-button>
          <a-button style="margin-left: 10px" @click="resetForm('infoForm')">Reset</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoForm: {
        name: "",
        brand_name: "",
        sku_code: "",
        local_name: ""
      },
      layout: {
        labelCol: { span: 6, offset: 2},
        wrapperCol: { span: 12 }
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
