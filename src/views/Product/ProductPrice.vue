<template>
  <a-form :form="form">
    <span class="title center">Price</span>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Price"
    >
      <a-input-number
      :default-value="0"
      :formatter="value => `VND ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\$\s?|(,*)/g, '')"
      @change="onChange"
    />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="VAT"
    >
      <a-radio-group name="radioGroup" :default-value="1">
        <a-radio :value="1">0%</a-radio>
        <a-radio :value="2">5%</a-radio>
        <a-radio :value="3">10%</a-radio>
      </a-radio-group>
    </a-form-item>
  </a-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
export default {
  data() {
    return {
      formItemLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
    };
  },
  methods: {
    onChange(value) {
      console.log('changed', value);
    },
  },
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
