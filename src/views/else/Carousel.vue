<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 其它</el-breadcrumb-item>
                <el-breadcrumb-item>走马灯效果</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>在有限空间内，循环播放同一类型的图片、文字等内容，是不是很熟悉~~</h2><hr>
            	<div class="data-box">
            		<h3>基本跑马灯效果</h3>
            		<el-carousel ref="carousel" height="300px" :trigger="eventType" :indicator-position="indicator" :arrow="arrow" :initial-index="index" :autoplay="autoplay"
            			:interval="interval" :type="type" @change="handleChange">
            			<el-carousel-item v-for="item in 5" :key="item" :label="'第'+item+'张'" :name="item"></el-carousel-item>
            		</el-carousel>
            		<div class="tip-btn">
            			<el-button type="primary" @click="handleFn('next')">自定义跳转</el-button>
            		</div>
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				eventType:"hover",//换成click试试看
				indicator:"",//换成outside,none试试看
				arrow:"",//换成always,never试试看
				index:0,
				autoplay:true,
				interval:3000,
				type:"card",//换成card试试看
			}
		},
		methods:{
			handleChange (idx) {
				this.$message("我当前到第"+(idx*1+1)+"张了");
			},
			handleFn (tip) {
				if(isNaN(tip)){
					if(tip == "prev"){
						this.$refs['carousel'].prev();
					}else if(tip == "next"){
						this.$refs['carousel'].next();
					}
				}else{
					this.$refs['carousel'].setActiveItem(tip);
				}
			}
		}
	}
</script>

<style type="text/css">
	.item{
		margin-top: 20px;
	}
	.data-box{
		padding:20px 0;
		margin:0 auto;
	}
	.el-carousel__item:nth-child(2n) {
	     background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
	   background-color: #d3dce6;
	}
	h3{
		color:#ff3333;
		line-height: 40px;
		text-align: center;
	}
	.tip-btn{
		margin-top: 20px;
		text-align: center;
	}
</style>