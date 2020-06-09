<template>
  <div class="content">
    <h1>{{$t("Category")}}</h1>
    <div class="my-4">
      <h3>{{$t("listCategory")}}</h3>
      <div>
        <template v-for="(category, index) in categories">
          <Tooltip v-if="category.length > 20" :key="category" :title="category">
            <Tag
              :key="category"
              :closable="index !== 0"
              @close="() => handleClose(category)"
            >{{ `${category.slice(0, 20)}...` }}</Tag>
          </Tooltip>
          <Tag
            v-else
            :key="category"
            :closable="index !== 0"
            @close="() => handleClose(category)"
          >{{ category }}</Tag>
        </template>
        <Input
          v-if="inputVisible"
          ref="input"
          type="text"
          :style="{ width: '100px' }"
          :value="inputValue"
          @change="handleInputChange"
          @blur="handleInputConfirm"
          @keyup.enter="handleInputConfirm"
        />
        <Button v-else type="primary" @click="showInput">{{$t("addCategory")}}</Button>
      </div>
    </div>
    <template v-if="categories.length >0">
      <button type="submit" class="btn btn-primary text-center">{{$t('input.save')}}</button>
      <button type="reset" class="btn btn-danger text-center">{{$t('input.reset')}}</button>
    </template>
  </div>
</template>
<script>
import { Tooltip, Tag, Input, Button } from "ant-design-vue";
export default {
  components: { Tooltip, Tag, Input, Button },
  data() {
    return {
      categories: [],
      inputVisible: false,
      inputValue: ""
    };
  },
  methods: {
    handleClose(removedTag) {
      const categories = this.categories.filter(
        category => category !== removedTag
      );
      this.categories = categories;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let categories = this.categories;
      if (inputValue && categories.indexOf(inputValue) === -1) {
        categories = [...categories, inputValue];
      }
      Object.assign(this, {
        categories,
        inputVisible: false,
        inputValue: ""
      });
    }
  }
};
</script>
<style>
</style>

<i18n>
{
  "en": {
    "Category": "Category",
    "listCategory": "List category",
    "addCategory": "Add category"
  },
  "vi": {
    "Category": "Category",
    "listCategory": "List category"
  }
}
</i18n> 
