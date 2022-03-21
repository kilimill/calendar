import Vue from 'vue';
import App from './App.vue';
import router from './router';
const moment = require('moment')
require('moment/locale/ru')

Vue.use(require('vue-moment'), {
    moment
})
Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('.main')
