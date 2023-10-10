import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/home-page.vue"),
  },
  {
    path: "/product-center/:name",
    component: () => import("../views/product-center.vue"),
  },
  {
    path: "/product-center/:name/:id",
    component: () => import("../views/product-detail.vue"),
  },
  {
    path: "/contact-us",
    component: () => import("../views/contact-us.vue"),
  },
  {
    path: "/nukon-admin",
    children: [
      {
        path: "equipment-management",
        component: () => import("../views/nukon-admin/equiment-management.vue"),
      },
      {
        path: "message-management",
        component: () => import("../views/nukon-admin/message-management.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
});

router.afterEach((to, from) => {
  let bodySrcollTop = document.body.scrollTop;
  if (bodySrcollTop !== 0) {
    document.body.scrollTop = 0;
    return;
  }
  let docSrcollTop = document.documentElement.scrollTop;
  if (docSrcollTop !== 0) {
    document.documentElement.scrollTop = 0;
  }
});

export default router;
