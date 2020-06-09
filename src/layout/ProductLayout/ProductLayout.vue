<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item :key="key" v-for="(menu, key) in listProductMenu" :style="{textAlign: 'left'}">
          <router-link :to="menu.path">
            <a-icon type="user" />
            <span>{{menu.name}}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>

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

export default {
  data() {
    return {
      collapsed: false,
      listProductMenu
    };
  },

  methods: {
  }
};
</script>


<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
