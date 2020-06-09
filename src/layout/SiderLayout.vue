<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item :key="key" v-for="(menu, key) in listMenu">
          <router-link :to="menu.path">
            <a-icon type="user" />
            <span>{{menu.name}}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>
<script>
export default {

}
</script>
