import { createRouter, createWebHistory } from "vue-router";
const StrapiLocale = () => import("@/views/StrapiLocale.vue");
const SinglePage = () => import("@/views/pages/PageDefault.vue");
const PageHome = () => import("@/views/pages/PageHome.vue");
const PageContact = () => import("@/views/pages/PageContact.vue");

const PageWork = () => import("@/views/pages/PageWork.vue");
const WorkSingle = () => import("@/views/work/WorkSingle.vue");
const WorkList = () => import("@/views/work/WorkList.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/nl",
    },
    {
      path: "/:locale",
      component: StrapiLocale,
      props: true,
      children: [
        /// single pages
        {
          path: "",
          name: "home",
          component: PageHome
        },

        //work
        {
          path: "work",
          name: "work",
          component: PageWork,
          props: (route) => {
            const page = Number.parseInt(
              route.params.page ? route.params.page.toString() : "1",
              10
            );
            if (Number.isNaN(page)) {
              return 0;
            }
            return { page };
          },
          children: [
            {
              path: "",
              name: "workarchive",
              component: WorkList,
            },
            {
              path: "p/:page(\\d+)?",
              component: WorkList,
            },
          ],
        },
        {
          path: "work/:slug",
          name: "worksingle",
          component: WorkSingle,
          props: true,
        },

        // catchall single pages
        {
          path: "contact",
          name: "contact",
          component: PageContact
        },

        // catchall single pages
        {
          path: ":pageName",
          name: "single",
          component: SinglePage,
          props: (route) => ({
            pageName: `page-${route.params.pageName}`,
          }),
        },
      ],
    },
  ],
});

export default router;
