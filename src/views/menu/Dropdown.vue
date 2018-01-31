<template>
	<div class="form-area">
		 <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 菜单</el-breadcrumb-item>
                <el-breadcrumb-item>下拉菜单</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="info-input-area">
            	<h2>将动作或菜单折叠到下拉菜单中，看起来是不是很简洁~~</h2><hr>
            	<div class="item">
            		<el-dropdown :size="config.size" :split-button="config.split" :trigger="config.trigger" :placement="config.placement"
            				:hide-on-click="config.hideOnClick"  :show-timeout="config.showTime" :hide-timeout="config.hideTime"
            				@click="handleClick" @command="handleCommand" @visible-change="handleSwitch">
            			<span>更多分类<i class="el-icon-arrow-down el-icon--right" v-if="!config.split"></i> </span>
            			<el-dropdown-menu slot="dropdown">
            				<el-dropdown-item v-for="item in menu" :disabled="item.disabled" :divided="item.divided" :command="item.category">
            					{{item.name}}
            				</el-dropdown-item>
            			</el-dropdown-menu>
            		</el-dropdown>
            	</div>
            </div>
        </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				menu:[],
				config:{
					size:"",//换成medium，small，mini试试看
					split:true,//下拉触发元素呈现为按钮组
					placement:"bottom",//top/top-start/top-end/bottom/bottom-start/bottom-end
					trigger:"click",//click
					hideOnClick:true,//是否在点击菜单项后隐藏菜单
					showTime:250,//展开下拉菜单的延时
					hideTime:150//收起下拉菜单的延时
				}
			}
		},
		mounted () {
			this.getData();
		},
		methods:{
			getData () {
				let self = this;
				if(process.env.NODE_ENV === 'development'){
	                self.url = 'static/data/dropdown.json';
	            };
	            self.$axios.get(self.url).then( (res) => {
	               	self.menu = res.data.slice(0);
	            });
			},
			handleClick () {
				this.$message("我点击了下拉框的功能区")
			},
			handleCommand (command) {
				this.$message("您点击了命令："+command);
			},
			handleSwitch (flag) {
				
			}
		}
	}
</script>

<style type="text/css" scoped>
	.item{
		margin-top: 20px;
	}
</style>