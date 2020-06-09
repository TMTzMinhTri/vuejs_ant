import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import routes from './routes/routes'
import VueRouter from 'vue-router'


Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(Antd);

const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history'
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
