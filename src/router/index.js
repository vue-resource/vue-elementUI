import Vue from 'vue';
import Router from 'vue-router';

/* 以下为页面组件 */
import Login from '../views/page/Login';	//登录页
import Page from '../components/page/Page';	//主页面模板
import Readme from '../views/page/Readme';	//了解系统
import ResetPwd from '../views/page/ResetPwd';//重置密码
import PersonalCenter from '../views/page/PersonalCenter';	//个人中心

//业务组件
	//表格组件
	import Empty from '../views/page/empty.vue';
	import ElTable from '../views/table/ElTable'; //eleUI表格组件
	import DataSource from "../views/table/DataSource";	//组定义表格组件

	//图表组件
	import Schart from "../views/charts/Schart.vue";

	//表单组件
	import Baseform from "../views/form/baseform.vue";
	import ExtendForm from "../views/form/extendform.vue";
	import RegisterDone from "../views/form/registerDone.vue";

	//其它组件
	import Drag from '../views/else/drag.vue';


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
			redirect:'/page/readme',
			children:[
				{
					path:'readme',
					component:Readme
				},
				{
					path:'resetPwd',
					component:ResetPwd
				},
				{
					path:'personalCenter',
					component:PersonalCenter
				},
				{
					path:'table',//表格组件
					component:Empty,
					children:[
						{
							path:'elTable',
							component:ElTable
						},
						{
							path:'dataSource',
							component:DataSource
						}
					]
				},
				{
					path:'else',//表格组件
					component:Empty,
					children:[
						{
							path:'drag',
							component:Drag
						}
					]
				},
				{
					path:'chart',//图标组件
					component:Empty,
					children:[
						{
							path:'sChart',
							component:Schart
						}
					]
				},
				{
					path:'form',//表单组件
					component:Empty,
					children:[
						{
							path:'baseform',
							component:Baseform
						},
						{
							path:'extendForm',
							component:ExtendForm
						},
						{
							path:'registerDone',
							component:RegisterDone
						}
					]
				}
			]
		}
	]
})