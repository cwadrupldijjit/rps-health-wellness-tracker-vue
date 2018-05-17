/// <reference path="./references.d.ts" />

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'babel-polyfill';
import { MdButton, MdCard, MdDialog, MdMenu, MdList } from 'vue-material/dist/components';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import './components/user-interface/Header.vue';
import { store, Vuex } from './vuex/store';
import App from './App.vue';
import router from './router';

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdDialog);
Vue.use(MdMenu);
Vue.use(MdList);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App,
    },
    store,
    template: '<App/>'
});
