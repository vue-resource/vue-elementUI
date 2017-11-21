import Vue from 'vue';
import Router from 'vue-router';

/* 以下为页面组件 */
import Login from '../components/page/Login';
import Page from '../components/common/Page';
import Readme from '../components/page/Readme';
import ResetPwd from '../components/page/ResetPwd';
import PersonalCenter from '../components/page/PersonalCenter';
import ElTable from '../components/page/ElTable';


Vue.use(Router);

export default new Router({
	routes:[
		{
			path: '/',
			redirect:'/login' //重定向
		},
		{
			path:'/login',//登陆
			//component: resolve => require(['../components/page/Login.vue'],resolve)
			component: Login
		},
		{
			path:'/page',//页面主体
			component:Page,
			children:[
				{
					path:'/readme',//关于系统
					component:Readme
				},
				{
					path:'/resetPwd',//修改密码
					component:ResetPwd
				},
				{
					path:'/PersonalCenter',//个人中心
					component:PersonalCenter
				},
				{
					path:'/elTable',//el风格table
					component:ElTable
				}
			]
		}
	]
})