<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item
          :key="key"
          v-for="(menu, key) in listDashboardMenu"
          :style="{textAlign: 'left'}"
        >
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
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
const listDashboardMenu = [
  { name: "Dashboard", path: "/admin/overview", icon_type: "user" },
  { name: "SP mới", path: "/product/product-category", icon_type: "user" },
  { name: "Inbound", path: "/admin/inbound", icon_type: "user" },
  { name: "Tác vụ", path: "/admin/tasks", icon_type: "user" }
];
export default {
  data() {
    return {
      collapsed: false,
      listDashboardMenu
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
