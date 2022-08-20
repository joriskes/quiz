import { createRouter, createWebHistory } from "vue-router";

const PageHome = () => import("@/views/PageHome.vue");
const PageQuiz = () => import("@/views/PageQuiz.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: PageHome
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: PageQuiz,
    },
  ],
});

export default router;
