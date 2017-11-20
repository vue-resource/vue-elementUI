import Vue from 'vue';
import Router from 'vue-router';

/* 以下为页面组件 */
import Login from '../components/page/Login';
import Page from '../components/common/Page';
import Readme from '../components/page/Readme';


Vue.use(Router);

export default new Router({
	routes:[
		{
			path: '/',
			redirect:'/login' //重定向
		},
		{
			path:'/login',
			//component: resolve => require(['../components/page/Login.vue'],resolve)
			name:'login',
			component: Login
		},
		{
			path:'/page',
			component:Page,
			children:[
				{
					path:'/readme',
					component:Readme
				}
			]
		}
	]
})