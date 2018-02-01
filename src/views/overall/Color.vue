<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 全局</el-breadcrumb-item>
                <el-breadcrumb-item>颜色</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2> 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受~~</h2><hr>
            	<div class="data-box">
            		主色：<span class="color color-default">蓝色：#409EFF</span><br>
            		<hr style="margin-top:10px;">
            		辅助色：<span class="color color-success">成功色：#67C23A</span><br>
            		辅助色：<span class="color color-warning">警告色：#E6A23C</span><br>
            		辅助色：<span class="color color-danger">危险色：#F56C6C</span><br>
            		辅助色：<span class="color color-info">信息色：#909399</span>
            		<hr style="margin-top:10px;">
            		中性色：<span class="color font-level1">主要文字：#303133</span><br>
            		中性色：<span class="color font-level2">常规文字：#606266</span><br>
            		中性色：<span class="color font-level3">次要文字：#909399</span><br>
            		中性色：<span class="color font-level4">占位文字：#C0C4CC</span>
            		<hr style="margin-top:10px;">
            		中性色：<span class="color bor-level1">一级边框:#DCDFE6</span><br>
            		中性色：<span class="color bor-level2">二级边框:#E4E7ED</span><br>
            		中性色：<span class="color bor-level3">三级边框:#EBEEF5</span><br>
            		中性色：<span class="color bor-level4">四级边框:#F2F6FC</span>
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
			
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
	.color{
		display: inline-block;
		padding:5px 10px;
		border-radius: 5px;
		color:#fff;
		margin-top: 10px;
	}
	.color-default{
		background-color: #409EFF;
	}
	.color-success{
		background-color: #67C23A;
	}
	.color-warning{
		background-color: #E6A23C;
	}
	.color-danger{
		background-color:#F56C6C;
	}
	.color-info{
		background-color: #909399;
	}

	.font-level1{
		background-color: #303133;
	}
	.font-level2{
		background-color: #606266;
	}
	.font-level3{
		background-color: #909399;
	}
	.font-level4{
		background-color: #C0C4CC;
	}

	.bor-level1{
		background-color: #DCDFE6;
	}
	.bor-level2{
		background-color: #E4E7ED;
	}
	.bor-level3{
		background-color: #EBEEF5;
	}
	.bor-level4{
		background-color: #F2F6FC;
	}
</style>