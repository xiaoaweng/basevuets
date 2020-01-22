import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页"
    },
    component: Home
  },
  {
    path: "/root",
    name: "root",
    component: () => import("@/views/Root.vue")
  }
];

export default routes;
