import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import DataTable from '@/components/DataTable'
import DataTable from '@/components/DataTableExternalPagination'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'DataTable',
      component: DataTable
    }
  ]
})
