<template>
	<view>
		<!-- 自定义组件 -->
		<myitem :activeKey.sync="activeIndex" :sourceData="navArr" />
		<navigator url="/pages/index/index">
			<button plain>返回首页</button>
		</navigator>
		<navigator url="/pages/list/list">
			<button plain>返回新闻列表页面</button>
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
						title: '简介'
					},
					{
						id: 2,
						title: '招聘'
					}
				]
			};
		}
	}
</script>

<style lang="scss">

</style>
