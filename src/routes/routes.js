import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import DashboardLayout from "@/layout/DashboardLayout";
import ProductLayout from "@/layout/ProductLayout/ProductLayout.vue";


// Product pages
import ProductCategory from "@/views/Product/ProductCategory.vue";
import ProductInfo from '@/views/Product/ProductInfo.vue'
import ProductIngredient from '@/views/Product/ProductIngredient.vue'
import ProductPrice from '@/views/Product/ProductPrice.vue'
import ProductManufacture from '@/views/Product/ProductManufacture.vue'
import ProductSupplier from '@/views/Product/ProductSupplier.vue'
import ProductDescription from '@/views/Product/ProductDescription.vue'
import ProductPackage from '@/views/Product/ProductPackage.vue'
import ProductImporter from '@/views/Product/ProductImporter.vue'

// GeneralViews
import NotFound from "@/views/NotFound/index.vue";


// Admin pages
import Overview from '../pages/Overview.vue'
// import Inbound from '../pages/Inbound.vue'
// import Tasks from '../pages/Tasks.vue'

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
      {
        path: 'new-product',
        name: 'NewProduct',
        component: ProductLayout,
        redirect: '/product/product-category'
      },
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
      {
        path: 'product-info',
        name: 'ProductInfo',
        component: ProductInfo
      },
      {
        path: 'product-ingredient',
        name: 'ProductIngredient',
        component: ProductIngredient
      },
      {
        path: 'product-price',
        name: 'ProductPrice',
        component: ProductPrice
      },
      {
        path: 'product-manufacture',
        name: 'ProductManufacture',
        component: ProductManufacture
      },
      {
        path: 'product-supplier',
        name: 'ProductSupplier',
        component: ProductSupplier
      },
      {
        path: 'product-description',
        name: 'ProductDescription',
        component: ProductDescription
      },
      {
        path: 'product-package',
        name: 'ProductPackage',
        component: ProductPackage
      },
      {
        path: 'product-importer',
        name: 'ProductImporter',
        component: ProductImporter
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
