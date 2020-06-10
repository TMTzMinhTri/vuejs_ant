<template>
  <div>
    <span class="title center">{{$t("sidebar.product.sidebar.category")}}</span>
    <a-form :form="form">
      <a-select mode="tags" style="width: 100%" placeholder="Tags Mode" @change="handleChange">
        <a-select-option
          v-for="i in 25"
          :key="(i + 9).toString(36) + i"
        >{{ (i + 9).toString(36) + i }}</a-select-option>
      </a-select>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {

      }
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  }
};
</script>
