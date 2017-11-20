<template>
	<div class="side-bar">
		<el-menu :default-active="onRoutes" class="el-menu-vertical-demo">
			<div v-for="(item,key) in items" :key="key">
				<div v-if="item.children">
					<el-submenu :index="item.index">
                        <div slot="title"><span :class="item.icon"></span>{{ item.title }}</div>
                        <el-menu-item v-for="(subItem,i) in item.children" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
				</div>
				<div v-else>
					<el-menu-item :index="item.index">
						<span :class="item.icon"></span>{{ item.title }}
					</el-menu-item>
				</div>
			</div>
		</el-menu>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				items:[
					{
                        icon: 'el-icon-menu',
                        index: 'table',
                        title: '表格',
                        children: [
                            {
                                index: 'basetable',
                                title: '基础表格'
                            },
                            {
                                index: 'vuetable',
                                title: 'Vue表格组件'
                            }
                        ]
                    }
				]
			}
		},
		computed:{
			onRoutes () {
				return this.$route.path.replace('/','');
			}
		}
	}
</script>

<style scoped>
	.side-bar {
		position:absolute;
		left:0;
		top:70px;
		bottom:0;
		width:250px;
	}
	.side-bar ul{
		height:100%;
	}
</style>