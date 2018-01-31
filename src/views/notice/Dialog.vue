<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 通知</el-breadcrumb-item>
                <el-breadcrumb-item>加载提示</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容~~</h2><hr>
            	<h3>模拟系统的3种经典对话框</h3>
            	<div class="item">
            		<el-button plain @click="openAlert">消息提示</el-button>
            		<el-button plain @click="openConfirm">确认消息</el-button>
            		<el-button plain @click="openPromp">提交内容</el-button>
            	</div>
            	<hr>
            	<h3>自定义对话框</h3>
            	<div class="item">
            		<el-button plain @click="baseVisible = true">基本用法</el-button>
            		<el-button plain @click="tableVisible = true">嵌套表格</el-button>
            		<el-button plain @click="formVisible = true">嵌套表单</el-button>
            		<el-button plain @click="outerVisible = true">嵌套dialog</el-button>

            		<el-dialog title="基本对话框"  :visible.sync="baseVisible"   width="30%" :before-close="handleClose" center>
					  <span>这是一段信息</span>
					  <span slot="footer" class="dialog-footer">
					    <el-button @click="baseVisible = false">取 消</el-button>
					    <el-button type="primary" @click="baseVisible = false">确 定</el-button>
					  </span>
					</el-dialog> 

					<el-dialog :visible.sync="tableVisible">
					  <el-table :data="gridData">
					    <el-table-column property="date" label="日期" width="150"></el-table-column>
					    <el-table-column property="name" label="姓名" width="200"></el-table-column>
					    <el-table-column property="address" label="地址"></el-table-column>
					  </el-table>
					  <span slot="title">收货地址列表(<span class="font-warning">无按钮</span>)</span>
					</el-dialog> 

					<el-dialog title="收货地址添加" :visible.sync="formVisible">
					  <el-form :model="form">
					    <el-form-item label="活动名称：" :label-width="formLabelWidth">
					      <el-input v-model="form.name" auto-complete="off"></el-input>
					    </el-form-item>
					    <el-form-item label="活动区域" :label-width="formLabelWidth">
					      <el-select v-model="form.region" placeholder="请选择活动区域">
					        <el-option label="区域一" value="shanghai"></el-option>
					        <el-option label="区域二" value="beijing"></el-option>
					      </el-select>
					    </el-form-item>
					  </el-form>
					  <div slot="footer" class="dialog-footer">
					    <el-button @click="formVisible = false">取 消</el-button>
					    <el-button type="primary" @click="formVisible = false">确 定</el-button>
					  </div>
					</el-dialog>

					<el-dialog title="外层 Dialog" :visible.sync="outerVisible">
					    <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body></el-dialog>
					    <div slot="footer" class="dialog-footer">
					      <el-button @click="outerVisible = false">取 消</el-button>
					      <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
					    </div>
					</el-dialog>
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				show:false,
				baseVisible:false,
				tableVisible:false,
				formVisible:false,
				outerVisible:false,
				innerVisible:false,
				gridData: [{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }],
		        form: {
		          name: '',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        },
		        formLabelWidth:"120px"
			}
		},
		methods:{
			openAlert () {
				let self = this;
				this.$alert("这是提示内容","我是标题",{
					confirmButtonText:"知道了",
					showClose:false,
					roundButton:true,
					callback: action => {
						self.$message({
							message:"您操作了："+action
						});
					}
				});
			},
			openConfirm () {
				let self = this;
				self.$confirm("你确定要卸载必要商城app吗","提示",{
					confirmButtonText:"残忍卸载",
					cancelButtonText:"再用用看",
					type:"warning",
					center:true
				}).then(() => {
					self.$message({
						type:"success",
						message:"已成功卸载"
					});
				}).catch(()=> {
					self.$message({
						message:"发生了一个错误，导致卸载不完成，请重试",
						type:"error"
					});
				});
			},
			openPromp () {
				let self = this;
				self.$prompt("请输入您的邮箱","提示",{
					confirmButtonText:"我输入好了",
					cancelButtonText:"我不想输了",
					inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
					inputErrorMessage:"邮箱格式不正确",
					inputPlaceholder:"请输入邮箱"
					//beforeClose () {
					//	this.$message({
					//		message:"你已经狠心的放弃了",
					//		type:"warning"
					//	});
					//}
				}).then((val) => {
					self.$message({
						type:"success",
						message:"您输入的邮箱是："+val.value
					});
				}).catch(() => {
					self.$message({
						message:"取消输入",
						type:"warning"
					});
				})
			},
			handleClose () {
				let self = this;
				self.$confirm("你确定要关闭此操作吗").then(()=>{
					self.$message({
						message:"好吧，在下输了",
						type:"success"
					});
					self.baseVisible = false;
				}).catch(()=>{

				})
			}
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
		padding-bottom: 20px;
	}
	h3{
		color:#ff3333;
		line-height: 50px;
	}
	.font-warning{
		color:#ff3333;
	}
</style>