<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 布局</el-breadcrumb-item>
                <el-breadcrumb-item>24列layout布局</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>通过基础的 24 分栏，迅速简便地创建布局~~</h2><hr>
            	<div class="data-box">
            		<el-row>
					  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
					</el-row>
					<el-row>
					  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
					</el-row>
					<el-row>
					  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
					  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
					</el-row>
					<el-row>
					  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
					  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
					</el-row>
					<el-row :gutter="gutter">
					  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
					  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
					  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
					</el-row>
					<el-row>
					  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :span="4" :offset="offset"><div class="grid-content bg-purple-light"></div></el-col>
					</el-row>
					<h3>列移动</h3>
					<el-row type="flex" justify="space-between">
					  <el-col :span="4" :push="push"><div class="grid-content bg-purple">我向右移动了4列</div></el-col>
					  <el-col :span="4" :pull="pull"><div class="grid-content bg-purple-light">我向左移动了4列</div></el-col>
					</el-row>
					<h3>关于对齐</h3>
					<el-row :type="type" :justify="justify" :align="align">
					  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
					  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
					</el-row>
					<h3>响应式布局</h3>
					<el-row :gutter="gutter">
					  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
					  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
					  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
					</el-row>
					<h3>此外以下响应式布局的有用知识应知晓：</h3>
						包含的类名及其含义为：<br>
						hidden-xs-only - 当视口在 xs 尺寸时隐藏<br>
						hidden-sm-only - 当视口在 sm 尺寸时隐藏<br>
						hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏<br>
						hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏<br>
						hidden-md-only - 当视口在 md 尺寸时隐藏<br>
						hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏<br>
						hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏<br>
						hidden-lg-only - 当视口在 lg 尺寸时隐藏<br>
						hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏<br>
						hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏<br>
						hidden-xl-only - 当视口在 xl 尺寸时隐藏<br>
	            </div>
	            <el-button type="text" @click="next">container布局</el-button>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				gutter:20,//每一栏之间的间隔，默认间隔为 0
				offset:4,//可以指定分栏偏移的栏数
				type:"flex",//默认为空，设置为flex时，结合justify属性可以设置flex风格的布局
				justify:"space-around",//center,end,space-between.space-around;默认start
				align:"top",//垂直对齐方式 top/middle/bottom
				push:4,//列向右移动几列
				pull:4//列向左移动几列
			}
		},
		methods:{
			next () {
				this.$router.push('./container');
			}
		}
	}
</script>

<style type="text/css" scoped>
	.el-row {
	  margin-bottom: 20px;
	}
	.el-row:last-child {
	    margin-bottom: 0;
	}
	.el-col {
	  border-radius: 4px;
	}
	.bg-purple-dark {
	  background: #99a9bf;
	}
	.bg-purple {
	  background: #d3dce6;
	}
	.bg-purple-light {
	  background: #e5e9f2;
	}
	.grid-content {
	  border-radius: 4px;
	  min-height: 36px;
	  text-align: center;
	  line-height: 36px;
	}
	.row-bg {
	  padding: 10px 0;
	  background-color: #f9fafc;
	}
</style>