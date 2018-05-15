import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Carousels'
import Card from '@/components/Card'
// import DataTable from '@/components/DataTable'
import DataTable from '@/components/DataTableExternalPagination'
// 跨域 demo
import BaiduQuery from '@/components/Samples/BaiduQuery'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/table',
      name: 'DataTable',
      component: DataTable
    },
    {
      path: '/baidu',
      name: 'BaiduQuery',
      component: BaiduQuery
    }
  ]
})
