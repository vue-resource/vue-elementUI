<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 布局</el-breadcrumb-item>
                <el-breadcrumb-item>container布局</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>用于布局的容器组件，方便快速搭建页面的基本结构~~</h2><hr>
            	<div>
            		'el-container'：外层容器。当子元素中包含 'el-header' 或 'el-footer' 时，全部子元素会垂直上下排列，否则会水平左右排列。<br>
					'el-header'：顶栏容器。<br>
					'el-aside'：侧边栏容器。<br>
					'el-main'：主要区域容器。<br>
					'el-footer'：底栏容器。<br>
					<hr>
					以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，'el-container' 的子元素只能是后四者，后四者的父元素也只能是 'el-container'。
					<br><br>
					<el-button type="primary" @click="next">查看demo示例</el-button>
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				
			}
		},
		methods:{
			next () {
				this.$router.push('/demo');
			}
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
</style>