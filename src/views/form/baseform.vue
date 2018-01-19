<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>请填写你的基本信息，方便平台上做资质审核~~</h2><hr>
            	<el-form :model="form" :rules="rules" ref="form" label-width="150px">
            		<el-form-item class="item" prop="name" label="昵称：">
            			<el-input v-model="form.name" placeholder="请输入昵称" clearable></el-input>
            		</el-form-item>
            		<el-form-item class="item" prop="pwd" label="密码：">
            			<el-input v-model="form.pwd" type="password" placeholder="请输入密码"></el-input>
            		</el-form-item>
            		<el-form-item class="item" prop="paperType" label="证件类型：">
            			<el-select v-model="form.paperType" placeholder="请选择证件类型">
            				<el-option :key="item.value" :value="item.value" :label="item.name" v-for="item in paperType"></el-option>
            			</el-select>
            		</el-form-item>
            		<el-form-item class="item" prop="paperNo" label="证件号码：">
            			<el-input v-model="form.paperNo" placeholder="请输入证件号码" clearable></el-input>
            		</el-form-item>
            		<el-form-item class="item" label="是否入驻：">
            			<el-switch v-model="form.settledStatus" on-text="是" off-text="否"></el-switch>
            		</el-form-item>
            		<el-form-item class="item" prop="storeName" label="店铺名字：" v-show="form.settledStatus">
            			<el-autocomplete class="inline-input" style="width:50%" v-model="form.storeName" placeholder="请输入内容" ref="autocomplete"
					      :fetch-suggestions="querySearch" debounce="500"
					      @select="handleSelect"
					    ></el-autocomplete>	
            		</el-form-item>
            		<el-form-item class="item" label="入驻开始时间：" v-show="form.settledStatus">
            			<el-col :span="4" prop="dateStart">
            				<el-date-picker placeholder="请选择日期" type="date" v-model="form.dateStart" style="width:100%"></el-date-picker>
            			</el-col>
            			<el-col :span="2" class="line">至</el-col>
            			<el-col :span="4" prop="timeStart">
            				<el-time-picker placeholder="请选择时间" type="fixed-time" v-model="form.timeStart" style="width:100%">></el-time-picker>
            			</el-col>
            		</el-form-item>
            		<el-form-item class="item" label="入驻结束时间：" v-show="form.settledStatus">
            			<el-col :span="4" prop="dateEnd">
            				<el-date-picker placeholder="请选择日期" type="date" v-model="form.dateEnd" style="width:100%"></el-date-picker>
            			</el-col>
            			<el-col :span="2" class="line">至</el-col>
            			<el-col :span="4" prop="timeEnd">
            				<el-time-picker placeholder="请选择时间" type="fixed-time" v-model="form.timeEnd" style="width:100%">></el-time-picker>
            			</el-col>
            		</el-form-item>
            		<el-form-item class="item" label="公司网址：" prop="website" v-show="form.settledStatus">
            			<el-input placeholder="请输入网址" v-model="form.website">
            				<template slot="prepend">Http://</template>
            				<el-select v-model="form.websiteEnd" slot="append" placeholder="请选择">
						      <el-option label=".com" value="com"></el-option>
						      <el-option label=".cn" value="cn"></el-option>
						      <el-option label=".net" value="net"></el-option>
						    </el-select>
            			</el-input>
            		</el-form-item>
            		<el-form-item class="item" label="申请保障服务：" prop="promise"  v-show="form.settledStatus">
            			<el-checkbox-group v-model="form.promise">
            				<el-checkbox label="1" name="promise">7天包退换</el-checkbox>
            				<el-checkbox label="2" name="promise">海外直邮</el-checkbox>
            				<el-checkbox label="3" name="promise">破损补寄</el-checkbox>
            				<el-checkbox label="4" name="promise">3天发货</el-checkbox>
            			</el-checkbox-group>
            		</el-form-item>
            		<el-form-item class="item" label="店铺性质：" prop="property" v-show="form.settledStatus">
            			<el-radio-group v-model="form.property" :min="1" :max="3">
            				<el-radio label="1" name="type">手机数码</el-radio>
            				<el-radio label="2" name="type">男装/女装</el-radio>
            				<el-radio label="3" name="type">生鲜</el-radio>
            				<el-radio label="4" name="type">家用装修</el-radio>
            			</el-radio-group>
            		</el-form-item>
            		<el-form-item class="item" label="备注信息：" prop="remark">
            			 <el-input type="textarea" v-model="form.remark" autosize  :rows="4" placeholder="添加备注信息"></el-input>
            		</el-form-item>
            		<el-form-item class="item" label="">
            			<el-button type="primary" @click="onSubmit('form')" :loading="loading">下一步</el-button>
                    	<el-button plain>取消</el-button>
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
					settledStatus:0,
					property:'2',
					promise:['1',"3"]
				},
				rules:{
					name:[
						{required:true,message:"请输入昵称",trigger:'blur'}
					],
					pwd:[],
					paperType:[],
					paperNo:[],
					storeName:[],
					dateStart:[],
					timeStart:[],
					dateEnd:[],
					timeEnd:[],
					website:[],
					promise:[],
					property:[],
					remark:[]
				},
				storeList:[],
				loading:false,
				paperType:[]
			}
		},
		methods:{
			querySearch (query,cb) {
		        let results = query ? this.storeList.filter((item) => {
			        	return item.value.indexOf(query) > -1 ;
			        }) : this.storeList;
		        // 调用 callback 返回建议列表的数据
		        cb(results);
			},
			onSubmit (formname){
				let self = this;
				self.loading = true;
				self.$refs[formname].validate(
					(valid) => {
						if(valid){
							self.$router.push('./page/form/editor');
						}else{
							self.loading = false;
							self.$message("有非法选项！");
						}
					}
				)
			},
			handleSelect (item) {
				this.$message(item.value);
			}
		},
		mounted () {
			const self = this;
            if(process.env.NODE_ENV === 'development'){
                self.url = 'static/data/store.json';
            };
            self.$axios.get(self.url).then( (res) => {
               	self.storeList = res.data.slice(0);
            });
            self.$refs.autocomplete.handleComposition = function (e) {
            	if(e.type == "compositionend"){
            		self.isOnComposition = false;
            	}else{
            		self.isOnComposition = true;
            	}
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