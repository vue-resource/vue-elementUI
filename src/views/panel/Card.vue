<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 面板</el-breadcrumb-item>
                <el-breadcrumb-item>卡片</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>将信息聚合在卡片容器中展示~~</h2><hr>
            	<div>Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的</div>
            	<h3>通用卡片</h3>
            	<el-card class="box-card">
            		<div class="clearfix" slot="header" v-if="showHead">
            			<span>卡片名称</span>
            			<el-button type="text" class="flright">操作按钮</el-button>
            		</div>
            		<div v-for="o in 4" :key="o" class="list">
					    {{'列表内容 ' + o }}
					</div>
            	</el-card>
            	<h3>带图片</h3>
            	<el-card class="box-card" :body-style="config">
            		<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3668524360,1426486330&fm=27&gp=0.jpg" class="image">
				    <div style="padding: 14px;">
				      <span>好吃的汉堡</span>
				      <div class="bottom clearfix">
				        <time class="time">{{ currentDate }}</time>
				        <el-button type="text" class="button">操作按钮</el-button>
				      </div>
				    </div>
            	</el-card>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				showHead:true,
				config:{
					padding:0,
					color:"#ff3333"
				},
				currentDate:(new Date()).toJSON().split("T")[0]
			}
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
	.list{
		font-style: 14px;
		line-height: 30px;
	}
	.font-warning{
		color:#ff3333;
	}
	.box-card{
		width:400px;
	}
	.clearfix:before,
	.clearfix:after {
	    display: table;
	    content: "";
	    clear: both;
	}
	.flright{
		float: right;
	}
	.image {
	    width: 100%;
	    display: block;
	}
	.time {
	    font-size: 13px;
	    color: #999;
	}
	.bottom {
	    margin-top: 13px;
	    line-height: 12px;
	}
	.button {
	    padding: 0;
	    float: right;
	}
</style>