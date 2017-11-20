<template>
	<div class="wrap">
		<v-head>
			<span slot="username">{{ username }}</span>
		</v-head>
		<side-bar></side-bar>
		<div class="page">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/javascript">
	import vHead from './Head';
	import SideBar from './SideBar';

	export default {
		data () {
			return {
				name:"未登录"
			}
		},
		computed:{
			username (){
				const _username = localStorage.getItem("user-name");
				return _username || this.name;
			}
		},
		components:{
			vHead,SideBar
		}
	}
</script>

