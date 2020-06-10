<template>
  <a-form :form="form">
    <span class="title center">{{ $t('sidebar.product.sidebar.package') }}</span>
    <a-form-item :label="$t('input.name')">
      <a-input v-model="form.name" />
    </a-form-item>
    <div class="ant-row ant-form-item " style="width:100%">
      <a-col :span="8" class="padding-rigt">
        <a-form-item :label="$t('product.quantity')">
          <a-input-number id="inputNumber" v-model="form.quantity"/>
        </a-form-item>
      </a-col>
      <a-col :span="8" class="padding-rigt">
        <a-form-item :label="$t('product.unit')">
          <a-select default-value="select"  @change="handleChange">
            <a-select-option
              v-for="i in 25"
              :key="(i + 9).toString(36) + i"
            >{{ (i + 9).toString(36) + i }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item :label="$t('ingredient.pharmacodynamics')">
          <a-select default-value="select"  @change="handleChange">
            <a-select-option
              v-for="i in 25"
              :key="(i + 9).toString(36) + i"
            >{{ (i + 9).toString(36) + i }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </div>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        quantity: '',
        unit: '',
        pharmacodynamics: ''
      }
    };
  },
  methods: {
    onChange(value) {
      console.log("changed", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.ant-input-number {
  width: 100%;
}
.padding-rigt {
  padding-right: 0.25em;
}
</style>
