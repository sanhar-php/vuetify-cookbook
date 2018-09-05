import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
// import DataTable from '@/components/DataTable'
import DataTable from "@/components/DataTableExternalPagination";
// 跨域 demo
import BaiduQuery from "@/components//Samples/BaiduQuery";
// 用户管理
import Profile from "@/components/User/Profile.vue";
import Signin from "@/components/User/Signin.vue";
import Signup from "@/components/User/Signup.vue";
import AuthGuard from "@/auth-guard.js";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
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
      path: "/profile",
      name: "Profile",
      component: Profile,
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
