import { createRouter, createWebHistory } from "vue-router";
import routes from "@router/routes.js";
var aa = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@views/home.vue"),
    meta: {
      title: "首页",
      roles: ['admin'],
    },
  },
  {
    path: "/monitor",
    name: "Monitor",
    component: () => import("@/views/Monitor/Ing"),
    meta: {
      title: "设备状态监测",
      roles: ['admin'],
    },
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("@/views/Users"),
    meta: {
      title: "用户管理",
      roles: [],
    },
  },
];
var arr = aa.filter((item) => {
  return item.meta.roles.includes('admin')
})
routes.push(...arr);
console.log('routesroutesstart', routes)
var about =[{
  path: "/about",
  meta: {
    roles: ["admin"],
  },
  component: import("@/views/about.vue"),
}]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
// router.options.routes= router.options.routes.concat(about)
router.addRoute({
  path: "/about",
  meta: {
    roles: ["admin"],
  },
  component: import("@/views/about.vue"),
})

console.log('routesroutes', routes)
export default router;
