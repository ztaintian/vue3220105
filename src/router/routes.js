export default [
  {
    path: "/",
    meta: {
      roles: ["admin"],
    },
    component: () => import('@views/home.vue'),
  },
  {
    path: "/",
    meta: {
      roles: ["admin"],
    },
    component: () => import('@views/home.vue'),
  }
];
