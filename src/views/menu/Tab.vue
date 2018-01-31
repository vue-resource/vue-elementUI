<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 菜单</el-breadcrumb-item>
                <el-breadcrumb-item>tab切换</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>分隔内容上有关联但属于不同类别的数据集合~~</h2><hr>
            	<div class="item">
            		<el-radio-group v-model="config.position">
					    <el-radio-button label="top">top</el-radio-button>
					    <el-radio-button label="right">right</el-radio-button>
					    <el-radio-button label="bottom">bottom</el-radio-button>
					    <el-radio-button label="left">left</el-radio-button>
					</el-radio-group>
					<div style="margin-top: 20px;">
					  <el-button @click="addTab" >  add tab </el-button>
					</div>
            	</div>
            	<div class="item">
            		<el-tabs :type="config.type" v-model="tabIndex" :closable="config.closable" :addable="config.addable" :editable="config.editable" :tab-position="config.position"
            			@tab-click="handleClick" @tab-remove="handleRemove" @tab-add="handleAdd" @edit="handleEdit">
	            		<el-tab-pane v-for="item in tabList" :label="item.name" :key="item.value" :name="item.value" :disabled="item.disabled" :closable="item.closable">
	            			<template slot="title" v-if="item.slot"><i class="el-icon-date"></i>{{item.content}}</template>
	            			{{item.content}}
	            		</el-tab-pane>
	            	</el-tabs>
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				tabList:[
					{name:"用户管理",value:"user",disabled:false,content:"用户管理",slot:true},
					{name:"配置管理",value:"config",disabled:true,content:"配置管理",slot:false},
					{name:"角色管理",value:"role",disabled:false,content:"角色管理",slot:false},
					{name:"定时任务补偿",value:"task",disabled:false,content:"定时任务补偿",slot:false}
				],
				config:{
					type:"border-card",//card/border-card/""
					closable:true,
					addable:true,
					editable:true,
					position:"top"//top/right/bottom/left
				},
				tabIndex:"user",
				newIndex:0
			}
		},
		methods:{
			handleClick (tab, event) {//tab 被选中时触发
				console.log(tab, event);
				this.$message("你选中了"+tab.label);
			},
			addTab () {
				let self = this;
				self.newIndex++;
				self.tabList.push({
					name:"new tab"+self.newIndex,
					value:"test"+self.newIndex,
					disabled:false,
					content:"新添加的内容："+self.newIndex,
					slot:false
				});
				self.tabIndex = "test"+self.newIndex;
			},
			handleRemove (targetName) {
				let self = this;
		        if (self.tabIndex === targetName) {
		          self.tabList.forEach((tab, index) => {
		            if (tab.value === targetName) {
		              let nextTab = self.tabList[index + 1] || self.tabList[index - 1];
		              if (nextTab) {
		                self.tabIndex = nextTab.value;
		              }
		            }
		          });
		        }		        
		        self.tabList = self.tabList.filter(tab => tab.value !== targetName);
			},
			handleAdd (targetName) {
				this.addTab();
			},
			handleEdit (targetName, action) {//点击 tabs 的新增按钮或 tab 被关闭后触发
				if (action === 'add') {
		          this.handleAdd();
		        }
		        if(action === 'remove'){
		        	this.handleRemove(targetName);
		        }
			}
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
</style>