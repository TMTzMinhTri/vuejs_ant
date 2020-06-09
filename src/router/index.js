import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import DashboardLayout from "@/layout/DashboardLayout";
import ProductLayout from "@/layout/ProductLayout/ProductLayout.vue";

import ProductCategory from "@/views/Product/ProductCategory.vue";
import Overview from "@/views/Admin/Overview.vue";
import NotFound from "@/views/NotFound/index.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/product/product-category'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      // {
      //   path: 'new-product',
      //   name: 'NewProduct',
      //   component: ProductLayout,
      //   redirect: '/product/product-category'
      // },
      // {
      //   path: 'inbound',
      //   name: 'Inound',
      //   component: Inbound
      // },
      // {
      //   path: 'tasks',
      //   name: 'Tasks',
      //   component: Tasks
      // }
    ]
  },
  {
    path: '/product',
    component: ProductLayout,
    redirect: '/product/product-category',
    children: [
      {
        path: 'product-category',
        name: 'Category',
        component: ProductCategory
      },
      // {
      //   path: 'product-info',
      //   name: 'ProductInfo',
      //   component: ProductInfo
      // },
      // {
      //   path: 'product-ingredient',
      //   name: 'ProductIngredient',
      //   component: ProductIngredient
      // },
      // {
      //   path: 'product-price',
      //   name: 'ProductPrice',
      //   component: ProductPrice
      // },
      // {
      //   path: 'product-manufacture',
      //   name: 'ProductManufacture',
      //   component: ProductManufacture
      // },
      // {
      //   path: 'product-supplier',
      //   name: 'ProductSupplier',
      //   component: ProductSupplier
      // },
      // {
      //   path: 'product-description',
      //   name: 'ProductDescription',
      //   component: ProductDescription
      // },
      // {
      //   path: 'product-package',
      //   name: 'ProductPackage',
      //   component: ProductPackage
      // },
      // {
      //   path: 'product-importer',
      //   name: 'ProductImporter',
      //   component: ProductImporter
      // }
    ]
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
