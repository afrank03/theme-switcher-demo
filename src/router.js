import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import UserProfile from './views/UserProfile.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Home,
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile,
    },
  ],
});
