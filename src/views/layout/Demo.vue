<template>
	<div class="wrap">
		<el-container>
			<el-header>Header</el-header>
			<el-container class="main">
				<el-aside width="200px">Aside</el-aside>
				<el-main>Main</el-main>
			</el-container>
	  		<el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>
<script>
	export default{

	}
</script>
<style>
	.wrap,.el-container{
		width: 100%;
		height: 100%;
	}
	.el-header, .el-footer {
	  background-color: #B3C0D1;
	  color: #333;
	  text-align: center;
	}
	
	.el-aside {
	  background-color: #D3DCE6;
	  color: #333;
	  text-align: center;
	}
	
	.el-main {
	  background-color: #E9EEF3;
	  color: #333;
	  text-align: center;
	}
	.main{
		flex:1;
		-webkit-flex:1;
	}
</style>