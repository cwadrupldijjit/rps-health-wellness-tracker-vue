import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import TrackerContainer from '@/components/Tracker/TrackerContainer.vue';
import TrackerItems from '@/components/Tracker/TrackerItems.vue';
import { store } from '../vuex/store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: Register
    // },
    {
      path: '/tracker',
      name: 'Tracker',
      component: TrackerContainer,
      // children: store.state.categories
      //     .map(c => ({
      //         path: c.route,
      //         // name: c.name,
      //         component: TrackerItems,
      //     })),
    },
    {
      path: '/tracker/:list',
      name: 'TrackerDetails',
      component: TrackerItems,
    },
  ],
  mode: 'history',
});
