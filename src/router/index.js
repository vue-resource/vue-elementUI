import Vue from 'vue';
import Router from 'vue-router';

/* 以下为页面组件 */
import Login from '../components/page/Login';

Vue.use(Router);

export default new Router({
	routes:[
		{
			path: '/',
			redirect:'/login'
		},
		{
			path:'/login',
			//component: resolve => require(['../components/page/Login.vue'],resolve)
			name:'login',
			component: Login
		}
	]
})