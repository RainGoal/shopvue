import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login";
import admin from "../views/admin";

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/login',
      component:login
    },
    {
      path: '/admin',
      component: admin
    }
  ]
})
