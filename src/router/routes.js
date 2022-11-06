import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/',
    name: 'bootStrap',
    component: () => import('../views/BootStrapView.vue'),
  },
];

export default routes;
