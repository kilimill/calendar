import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/Index';

Vue.use(Router);
let routes = [{
		path: "/",
		component: Index,
		name: 'index',
		meta: {
			title: 'Главная',
			key: 1,
		},
	},

	{
		path: "*",
		component: Index,
		name: 'index',
		meta: {
			title: 'Главная',
			key: 101,
		},
	},
];


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title;
  })
});

export default router
