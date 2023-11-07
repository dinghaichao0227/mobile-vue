import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/bootStrap',
    name: 'bootStrap',
    component: () => import('../views/BootStrapView.vue'),
  },
  {
    path: '/',
    name: 'three',
    component: () => import('../views/three.vue'),
  },
];

export default routes;
