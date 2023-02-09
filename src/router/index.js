import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/newPage",
    name: "新增頁面",
    component: () => import("../views/NewPage.vue"),
    children: [
      {
        path: "a",
        component: () => import("../views/ComponentA.vue"),
      },
      {
        path: "b",
        component: () => import("../views/ComponentB.vue"),
      },
      {
        path: "dynamicRouter/:id",
        component: () => import("../views/DynamicRouter.vue"),
      },
      {
        path: "dynamicRouterByProps/:id",
        component: () => import("../views/DynamicRouterByProps.vue"),
        props: (route) => {
          console.log("route:", route);
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: "namedView",
        component: () => import("../views/NamedView.vue"),
        children: [
          {
            path: "c2a",
            components: {
              left: () => import("../views/ComponentC.vue"),
              right: () => import("../views/ComponentA.vue"),
            },
          },
          {
            path: "a2b",
            components: {
              left: () => import("../views/ComponentA.vue"),
              right: () => import("../views/ComponentB.vue"),
            },
          },
        ],
      },
      {
        path: "routerNavigation",
        component: () => import("../views/RouterNavigation.vue"),
      },
    ],
  },
  // 404 頁面
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
  },
  // 重新導向
  {
    path: "/newPage/:pathMatch(.*)*",
    redirect: {
      name: "home",
      // 避免出現找不到參數的警告訊息
      params: {}
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if(to.fullPath.match('newPage')) {
      return {
        top: 0
      }
    }
    return{}
  }
});

export default router
