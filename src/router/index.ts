import Vue from "vue";
import VueRouter, { RouteConfig, Route } from "vue-router";
import moudles from "./moudles";
import Cookies from "js-cookie";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    redirect: "/home"
    // redirect: "/root"  //首次进入需要中转处理的可以使用
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404"
      // auth 需要权限的页面加上，自定义值
      // login 需要登录的页面加上设为true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue")
  },
  ...moudles
];

const router = new VueRouter({
  mode: "hash",
  routes
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next("/404");
    return;
  }

  const toMeta = to.meta;
  if (!toMeta) {
    next();
    return;
  }

  //判断页面是否需要登录
  if (toMeta.login) {
    const token = Cookies.get("token");
    if (!token) {
      next("/login");
      return;
    }
  }

  //判断页面是否需要权限
  if (toMeta.auth) {
    const auth = toMeta.auth;
    if (auth) {
      return;
    }
  }
  // 修改各个页面的title
  if (toMeta.title) {
    document.title = to.meta.title;
  }
  next();
});

// 全局路由后置守卫
router.afterEach((to, from) => {});

export default router;
