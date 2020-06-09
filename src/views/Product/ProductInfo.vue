<template>
  <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
    <a-form-model-item label="Age" prop="age">
      <a-input v-model ="ruleForm.age" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('ruleForm')">
        Submit
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
        Reset
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      layout: {
        labelCol: { span: 2 },
        wrapperCol: { span: 6 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
