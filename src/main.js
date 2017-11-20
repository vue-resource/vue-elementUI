import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
import axios from 'axios';// Axios 是一个基于 promise 的 HTTP 库

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');