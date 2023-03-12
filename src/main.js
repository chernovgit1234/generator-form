import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/app.scss'
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import Verte from 'verte';
import 'verte/dist/verte.css';
Vue.config.productionTip = false
Vue.component(Verte.name, Verte);
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Prism)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
