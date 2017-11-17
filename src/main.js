import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';

Vue.prototype.$axios = axios;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');