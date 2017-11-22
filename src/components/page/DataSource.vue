<template>
	<div class="table">
        <div class="crumbs">
            <el-breadcrumb separator=">>">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
                <el-breadcrumb-item>Vue表格组件</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            vue-datasource：一个用于动态创建表格的vue.js服务端组件。
            访问地址：<a href="https://github.com/coderdiaz/vue-datasource" target="_blank">vue-datasource</a>
        </div>
        <datasource
        	language="en"
        	:columns="_columns"
        	:pagination="imformation.page"
        	:actions="_actions"
        	:change="changePage"
        	:searching="onSearch">
        </datasource>
    </div>
</template>

<script type="text/javascript">
	import Datasource from 'vue-datasource';
	export default {
		data () {
			let self = this;
			return {
				url:"./static/data/dataSource.json",
				_columns:[
					{
						name:"ID",
						key:"id"
					},
					{
						name:"姓名",
						key:"name"
					},{
						name:"邮箱",
						key:"email"
					},
					{
						name:"IP",
						key:"ip"
					}
				],
				_actions:[
					{
						text: '点击',
                        class: 'btn-primary',
                        event(e, row) {
                            self.$message('选中的行数： ');
                        }
					}
				],
				information:{
					data:[],
					page:{}
				}
			}
		},
		components:{
			Datasource
		},
		methods:{
			changePage () {

			},
			onSearch () {

			}
		},
		beforeMount(){
			let self = this;
            if(process.env.NODE_ENV === 'development'){
                self.url = 'static/data/dataSource.json';
            };
            self.$axios.get(self.url).then( (res) => {
                self.information = res.data;
            })
        }
	}
</script>

<style scoped>
	@import '~/static/css/dataSource.css';
</style>