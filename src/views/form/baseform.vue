<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>请填写你的基本信息，方便平台上做资质审核~~</h2><hr>
            	<el-form :model="form" label-width="150px">
            		<el-form-item class="item" label="昵称：">
            			<el-input v-model="form.name" placeholder="请输入昵称"></el-input>
            		</el-form-item>
            		<el-form-item class="item" label="密码：">
            			<el-input v-model="form.pwd" type="password" placeholder="请输入密码"></el-input>
            		</el-form-item>
            		<el-form-item class="item" label="证件类型：">
            			<el-select v-model="form.paperType" placeholder="请选择证件类型">
            				<el-option :key="item.value" :value="item.value" :label="item.name" v-for="item in paperType"></el-option>
            			</el-select>
            		</el-form-item>
            		<el-form-item class="item" label="证件号码：">
            			<el-input v-model="form.paperNo" type="password" placeholder="请输入证件号码"></el-input>
            		</el-form-item>
            		<el-form-item class="item" label="是否入驻：">
            			<el-switch v-model="form.settledStatus" on-text="是" off-text="否"></el-switch>
            		</el-form-item>
            		<el-form-item class="item" label="入驻开始时间：" v-show="form.settledStatus">
            			<el-col :span="4">
            				<el-date-picker placeholder="请选择日期" type="date" v-model="form.dateStart" style="width:100%"></el-date-picker>
            			</el-col>
            			<el-col :span="2" class="line">至</el-col>
            			<el-col :span="4">
            				<el-time-picker placeholder="请选择时间" type="fixed-time" v-model="form.timeStart" style="width:100%">></el-time-picker>
            			</el-col>
            		</el-form-item>
            		<el-form-item class="item" label="入驻结束时间：" v-show="form.settledStatus">
            			<el-col :span="4">
            				<el-date-picker placeholder="请选择日期" type="date" v-model="form.dateEnd" style="width:100%"></el-date-picker>
            			</el-col>
            			<el-col :span="2" class="line">至</el-col>
            			<el-col :span="4">
            				<el-time-picker placeholder="请选择时间" type="fixed-time" v-model="form.timeEnd" style="width:100%">></el-time-picker>
            			</el-col>
            		</el-form-item>
            		<el-form-item class="item" label="申请保障服务：" v-show="form.settledStatus">
            			<el-checkbox-group v-model="form.promise">
            				<el-checkbox label="7天包退换" name="promise"></el-checkbox>
            				<el-checkbox label="海外直邮" name="promise"></el-checkbox>
            				<el-checkbox label="破损补寄" name="promise"></el-checkbox>
            				<el-checkbox label="3天发货" name="promise"></el-checkbox>
            			</el-checkbox-group>
            		</el-form-item>
            		<el-form-item class="item" label="店铺性质：" v-show="form.settledStatus">
            			<el-radio-group v-model="form.property">
            				<el-radio label="7天包退换" name="promise"></el-radio>
            				<el-radio label="海外直邮" name="promise"></el-radio>
            				<el-radio label="破损补寄" name="promise"></el-radio>
            				<el-radio label="3天发货" name="promise"></el-radio>
            			</el-radio-group>
            		</el-form-item>
            		<el-form-item class="item" label="备注信息：">
            			 <el-input type="textarea" v-model="form.remark" placeholder="添加备注信息"></el-input>
            		</el-form-item>
            		<el-form-item class="item" label="">
            			<el-button type="primary" @click="onSubmit">下一步</el-button>
                    	<el-button>取消</el-button>
            		</el-form-item>
            	</el-form>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				form:{//表单数据
					settledStatus:0
				},
				paperType:[]
			}
		},
		methods:{
			onSubmit (){

			}
		}
	}
</script>

<style type="text/css" scoped>
	.info-input-area{
		padding:20px;
	}
	h2{
		line-height: 40px;
		color:#333;
		font-size: 16px;
		color:#ff3333;
		font-weight: bolder;
	}
	.item {
		margin-top: 20px;
	}
	.line{
		text-align: center;
	}
</style>