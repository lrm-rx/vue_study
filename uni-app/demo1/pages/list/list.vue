<template>
	<view>
		<!-- 自定义组件 -->
		<myitem :activeKey.sync="activeIndex" :sourceData="navArr" />
		<h2>新闻列表页面</h2>
		<navigator url="/pages/index/index">
			<button plain>返回首页</button>
		</navigator>
		<navigator url="/pages/about/about">
			<button plain>关于我们</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				navArr: [{
						id: 1,
						title: '体育'
					},
					{
						id: 2,
						title: '游戏'
					},
					{
						id: 3,
						title: '公共'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>

</style>
