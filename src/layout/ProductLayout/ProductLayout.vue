<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item :key="key" v-for="(menu, key) in listProductMenu" :style="{textAlign: 'left'}">
          <router-link :to="menu.path">
            <a-icon type="user" />
            <span>{{menu.name}}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
const listProductMenu = [
  { name: "Nhóm thuốc", path: "/product/product-category", icon_type: "user" },
  {
    name: "Thông tin sản phẩm",
    path: "/product/product-category",
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
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
