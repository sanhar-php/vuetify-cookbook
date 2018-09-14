import Vue from "vue";
import Router from "vue-router";
import home from "@/views/Home";
// import DataTable from '@/components/DataTable'
import DataTable from "@/components/DataTableExternalPagination";
// 跨域 demo
import BaiduQuery from "@/components//Samples/BaiduQuery";
// 用户管理
import Profile from "@/components/User/Profile.vue";
import Users from "@/components/Users.vue";
//登录、注册
import Signin from "@/components/User/Signin.vue";
import Signup from "@/components/User/Signup.vue";
import AuthGuard from "@/auth-guard.js";
// 产品管理
import Products from "@/components/Products.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    {
      path: "/table",
      name: "DataTable",
      component: DataTable
    },
    {
      path: "/baidu",
      name: "BaiduQuery",
      component: BaiduQuery
    },
    {
      path: "/products",
      name: "Products",
      component: Products
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: "/users",
      name: "Users",
      component: Users,
      beforeEnter: AuthGuard
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    }
  ]
});
