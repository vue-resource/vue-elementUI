<template>
	<div class="page-area">
		<div class="bread-crumb">
			<el-breadcrumb separator=">>">
				<el-breadcrumb-item><span class="el-icon-menu"></span> 其它</el-breadcrumb-item>
				<el-breadcrumb-item>树形组件</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="page-body">
            <h2>用清晰的层级结构展示信息，可展开或折叠~~</h2><hr>
            <div class="buttons">
			  <el-button @click="getCheckedNodes">通过 node 获取</el-button>
			  <el-button @click="getCheckedKeys">通过 key 获取</el-button>
			  <el-button @click="setCheckedNodes">通过 node 设置</el-button>
			  <el-button @click="setCheckedKeys">通过 key 设置</el-button>
			  <el-button @click="resetChecked">清空</el-button>
			</div>
			<hr>
            <div class="data-show">
            	<h3>常规操作</h3>
            	<el-input style="margin-bottom:20px;" placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
            	<el-tree :data="treeList" ref="tree" :props="defaultProps" :show-checkbox="config.showCheckbox" :node-key="config.nodeKey" :indent="config.indent"
            	:highlight-current="config.highlight" :accordion="config.accordion" :filter-node-method="filterNode" :expand-on-click-node="config.clickExpand"
            	:default-checked-keys="config.checkedKeys" :default-expanded-keys="config.expandedKeys" :default-expand-all="config.expandAll" 
            	:empty-text="config.emptyTxt" :render-content="renderContent"
            	@node-click="handleClick" @check-change="handleCheckChange"></el-tree>
            </div>

            <div class="data-show">
            	 <h3>动态加载</h3>
            	<el-tree :props="prop" show-checkbox :load="loadNode" lazy>
            	</el-tree>
            </div>
            更多详细资料，参考<a href="http://element.eleme.io/#/zh-CN/component/tree">ElementUI</a>
        </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				id:0,
				treeList:[],
				defaultProps:{
					children:"children",
					label:"label",
					value:"value",
					disabled:"noUse"
				},
				config:{
					emptyTxt:"没有更多啦~~",
					indent:20,//相邻级节点间的水平缩进，单位为像素
					showCheckbox:true,//是否显示复选框
					nodeKey:"value",//依据哪个节点来判断选中和展开,其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。
					clickExpand:false,//点击后是否展开下级
					checkedKeys:['211'],//默认选中的项的字段值
					expandedKeys:['21'],//判断哪些项是展开的
					expandAll:false,//是否默认展开所有
					highlight:true,//选中后是否高亮显示当前行
					accordion:true//是否开启手风琴
				},
				filterText:"",
				prop:{
					label: 'name',
			        children: 'zones',
			        isLeaf: 'leaf'
				}
			}
		},
		watch:{
			filterText (val) {
				this.$refs.tree.filter(val)
			}
		},
		mounted () {
			let self = this;
            if(process.env.NODE_ENV === 'development'){
                self.url = 'static/data/tree.json';
            };
            self.$axios.get(self.url).then( (res) => {
               	self.treeList = res.data.slice(0);
            });
		},
		methods:{
			handleClick (data) {
				if(data.children && data.children.length > 0){
					return;
				}
				this.$message("我选中了："+data.label+",代号为:"+data.value)
			},
			handleCheckChange(data, checked, indeterminate) {
	        	console.log(data, checked, indeterminate);
	        },
			getCheckedNodes () {
				console.log(this.$refs.tree.getCheckedNodes());
			},
			getCheckedKeys () {
				console.log(this.$refs.tree.getCheckedKeys());
			},
			setCheckedNodes () {
				this.$refs.tree.setCheckedNodes([{
					 "label": "一级 3",
					 "value":"3"
				}]);
			},
			setCheckedKeys () {
				this.$refs.tree.setCheckedKeys(['22'])
			},
			resetChecked () {
				this.$refs.tree.setCheckedKeys([]);
			},
			filterNode (value,data) {//只有在需要模糊过滤的时才配置
				if(!value) return true;
				return data.label.indexOf(value) > -1;
			},
			loadNode (node,resolve) {//加载子树数据的方法，仅当 lazy 属性为true 时生效
				if(node.level == 0){
					return resolve([{name:"男装女装",zones:[]},{name:"手机数码",zones:[]}]);
				}else if(node.level > 4){//最多添加5级
					return resolve([]);
				}else{
					setTimeout(()=>{
						const datas = [
							{"name":"子分类1",zones:[]},
							{"name":"子分类2",zones:[],leaf:true}
						];
						return resolve(datas);
					},500)
				}
			},
			append (data) {
				this.id++;
				let newList = {"label":"newList"+this.id,value:"000"+this.id,children:[]};
				if(!data.children){
					this.$set(data,'children',[]);
				}
				data.children.push(newList);
			},
			remove(node, data) {
		        const parent = node.parent;
		        const children = parent.data.children || parent.data;
		        const index = children.findIndex(d => d.value === data.value);
		        children.splice(index, 1);
		    },
			renderContent (h, { node, data, store }) {
				return (
		          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
		            <span>
		              <span>{node.label}</span>
		            </span>
		            <span>
		              <el-button style="font-size: 12px;" type='primary' size='small' on-click={ () => this.append(data) }>添加</el-button>
		              <el-button style="font-size: 12px;" type='danger' size='small' on-click={ () => this.remove(node, data) }>删除</el-button>
		            </span>
		          </span>);
			}
		}
	}
</script>
<style>
	.buttons{
		padding:20px 0;
	}
	.el-tree-node__content {
	    display: flex;
	    align-items:center;
	}
</style>