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
];

export default routes;
