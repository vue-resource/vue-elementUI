<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 个人中心</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>欢迎来到这里，喜欢的话就打个赏吧~~</h2><hr>
            	<div class="code">
            		<img :src="codeImg" alt="">
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				codeImg:require('static/img/code.png')
			}
		},
		methods:{
			handleClose () {
				this.$message("想直接删除我，没门~");
				this.handleClose = false;
			}
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
	.code{
		padding-top: 30px;
		text-align: center;
	}
	img {
		width:200px;
		height: 200px;
		display: inline-block;
	}
</style>