import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import routes from './routes/routes'
import VueRouter from 'vue-router'
import i18n from './i18n'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme


Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(Antd);
Vue.use(VueQuillEditor)

const router = new VueRouter({
  routes,
  linkActiveClass: 'ant-menu-item-selected',
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
  i18n,
  render: h => h(App)
}).$mount('#app')
