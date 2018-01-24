<template>
	<div class="pwd-wrap">
		<el-form :label-position="position" :model="form" status-icon :rules="rules" ref="form" label-width="200px">
		  <el-form-item label="请输入新密码：" prop="pass">
		    <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="确认新密码：" prop="checkPass">
		    <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="年龄：" prop="age">
		    <el-input v-model.number="form.age"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('form')">提交</el-button>
		    <el-button @click="resetForm('form')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				form:{
					age:"",
					pass:"",
					checkPass:""
				},
				rules:{
					age:[],
					pass:[],
					checkPass:[]
				},
				position:"top"
			}
		},
		methods:{
			validatePass (rule,value,cb) {

			},
			checkPass (rule,value,cb) {

			},
			checkAge (rule,value,cb) {
				
			},
			submitForm (name) {

			},
			resetForm (name) {

			}
		}
	}
</script>
<style scoped>
	
</style>