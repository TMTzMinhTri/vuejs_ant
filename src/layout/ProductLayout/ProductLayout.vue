<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo">
        <a href="/" class="simple-text logo__container">
          <div class="logo-img">
            <img src="@/assets/img/mdm-logo.png" alt />
          </div>M.D.M
        </a>
      </div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <router-link
          :to="menu.path"
          v-for="(menu, key) in listProductMenu"
          :key="key"
          :style="{textAlign: 'left'}"
          class="ant-menu-item"
        >
          <a-icon type="user" />
          <span>{{menu.name}}</span>
        </router-link>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <TopNavbar />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div>
          <router-view class="body_content"></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <SubmitForm/>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import SubmitForm from '@/components/SubmitForm'
import TopNavbar from "./TopNavbar";
import Vue from "vue";
const listProductMenu = [
  { name: "Nhóm thuốc", path: "/product/product-category", icon_type: "user" },
  {
    name: "Thông tin sản phẩm",
    path: "/product/product-info",
    icon_type: "user"
  },
  {
    name: "Thành phần",
    path: "/product/product-ingredient",
    icon_type: "user"
  },
  {
    name: "Giá",
    path: "/product/product-price",
    icon_type: "user"
  },
  {
    name: "Nhà sản xuất",
    path: "/product/product-manufacture",
    icon_type: "user"
  },
  {
    name: "Nhà cung cấp",
    path: "/product/product-supplier",
    icon_type: "user"
  },
  { name: "Mô tả", path: "/product/product-description", icon_type: "user" },
  {
    name: "Quy cách đóng gói",
    path: "/product/product-package",
    icon_type: "user"
  },
  { name: "Importer", path: "/product/product-importer", icon_type: "user" }
];

export default Vue.extend({
  components: {
    TopNavbar,
    SubmitForm
  },
  data() {
    return {
      tag: "router-link",
      collapsed: false,
      listProductMenu
    };
  },

  methods: {}
});
</script>


<style scoped lang="scss">
.logo {
  padding: 10px 15px 9px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 4;
  background: transparent !important;
  height: auto !important;
  .logo-img {
    width: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-left: 0px;
    margin-right: 10px;
    background: white;
    border-radius: 40px;
    img {
      max-width: 21px;
    }
  }
  .simple-text.logo__container {
    text-transform: uppercase;
    padding: 5px 0;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    text-align: center;
    font-weight: 400;
    line-height: 30px;
  }
}
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.body_content {
  background: white;
  width: 50%;
  margin: auto;
  height: 100%;
  padding: 24px;
  border-radius: 10px;
  box-sizing: border-box;
}
</style>
