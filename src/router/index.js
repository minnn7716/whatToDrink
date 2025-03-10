import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FrontLayout',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/front/HomeView.vue'),
        },
        {
          path: '/search',
          name: 'Search',
          component: () => import('../views/front/SearchView.vue'),
        },
        {
          path: '/shop',
          name: 'Shop',
          component: () => import('../views/front/ShopsList.vue'),
        },
        {
          path: '/shop/:id',
          component: () => import('../views/front/ShopView.vue'),
          props: (route) => {
            return {
              id: route.params.id
            }
          },
        },
        {
          path: '/drink/:id',
          component: () => import('../views/front/DrinkView.vue'),
          props: (route) => {
            return {
              id: route.params.id
            }
          },
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/front/AboutView.vue'),
        },
        {
          path: '/favorite',
          name: 'Favorite',
          component: () => import('../views/front/FavoriteView.vue'),
        },
        {
          path: '/wheel',
          name: 'SpinWheel',
          component: () => import('../views/front/SpinWheel.vue'),
        },
      ],
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router
