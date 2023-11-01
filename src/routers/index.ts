import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "",
      component: () => import("@/views/login/Login.vue")
    },
    {
      path: "/login",
      component: () => import("@/views/login/Login.vue")
    },
    {
      path: "/main",
      component: () => import("@/views/main/Main.vue")
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/notFound/NotFound.vue")
    }
  ]
})

export default router
