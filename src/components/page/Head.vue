<template>
	<div class="header">
		<div class="logo">后台管理系统</div>
		<div class="welcome">欢迎<span class="username">&nbsp;<slot name="username"></slot>&nbsp;</span>来到后台管理系统</div>
		<div class="user-info">
			<el-dropdown trigger="click" @command="handleCommand">
				<div class="head-icon">
					<img :src="thumbImg"/>
					<span class="username"><slot name="_username"></slot></span>
				</div>
				<el-dropdown-menu>
					<el-dropdown-item command="know">了解该系统</el-dropdown-item>
					<el-dropdown-item command="resetPwd">修改密码</el-dropdown-item>
					<el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
					<el-dropdown-item command="exit" divided>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="menu">
			<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" @open="handleOpen" @close="handleClose"
			  background-color="#242f42" text-color="#fff" active-text-color="#ffd04b" router>
			  <el-menu-item index="/page/layout">
			  	布局相关
			  </el-menu-item>
			  <el-submenu index="2" :show-timeout="300" :hide-timeout="150">
			    <template slot="title">全局参考</template>
			    <el-menu-item index="/page/overall/font" >字体</el-menu-item>
			    <el-menu-item index="/page/overall/color" >颜色</el-menu-item>
			    <el-menu-item index="/page/overall/icon">图标</el-menu-item>
			    <el-menu-item index="/page/overall/button">按钮</el-menu-item>
			  </el-submenu>
			  <el-menu-item  v-popover:popoverT>
			  	<el-popover ref="popoverT"  placement="bottom-end" title="提示"  width="100" trigger="hover"
				  content="这里将展示最新的系统通知消息。">
				</el-popover>
			  	<el-badge :value="12">系统消息</el-badge>
			  </el-menu-item>
			</el-menu>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				activeIndex:"/page/layout",
				thumbImg:require('static/img/head-icon.jpg')
			}
		},
		methods:{
			handleCommand (command) {
				if(command == "know"){
					this.$router.push('/page/readme');
				}else if(command == "resetPwd"){
					this.$router.push('/page/resetPwd');
				}else if(command == "exit"){
					localStorage.removeItem("user-name");
					this.$router.push('/');
				}else if(command == "personalCenter"){
					this.$router.push('/page/personalCenter');
				}
			},
			handleSelect (key, keyPath) {

			},
			handleOpen (key, keyPath) {

			},
			handleClose (key, keyPath) {

			}
		}
	}
</script>

<style>
	.header {
        position: relative;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color:#fff;
        background-color:#242f42;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .header .welcome {
    	position:absolute;
    	left:50%;
    	top:50%;
    	-webit-transform:translate3d(-50%,-50%,0);
    	transform:translate3d(-50%,-50%,0);
    }
    .username{
    	color:#ff3333;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
        cursor:pointer;
    }
    .user-info img{
        width:40px;
        height:40px;
        border-radius: 50%;
        vertical-align:middle;
        margin-right:15px;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .menu {
    	display: inline-block;
    	float: right;
    	padding-top: 5px;
    	margin-right: 30px;
    }
    .el-badge__content.is-fixed{
    	top:10px!important;
    }
</style>