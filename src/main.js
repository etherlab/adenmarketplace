/** CORE **/$

import Vue from 'vue'
import store from './store/store'
import router from './route/index'
import { sync } from 'vuex-router-sync'
import App from './app.vue'

/** JS **/
import './vendor';

import 'metismenu';
import 'animate.css';
import 'awesome-bootstrap-checkbox'
import 'slimscroll'
import 'icheck'
import 'peity'
import 'sparkline'

/** STYLE ***/
import bootstrapCSS   from '~/../bootstrap/dist/css/bootstrap.min.css';
import adenCSS        from '../src/assets/style/style.css';
import faCSS          from '~/../font-awesome/css/font-awesome.min.css';
import metisCSS       from '~/../metismenu/dist/metisMenu.min.css';






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
