<template>
	<view class="hot-container">
		<!-- logo -->
		<image class="logo" src="@/static/images/logo.png" mode="aspectFit" />
		<!-- search -->
		<view class="search-box">
			<my-search></my-search>
		</view>
		<!-- tabs -->
		<view class="tab-sticky">
			<my-tabs :tabData="tabData" :defaultIndex="currentIndex" :config="{ textColor: '#333333' }"
				@tabClick="tabClick"></my-tabs>
		</view>
		<!-- list视图 -->
		<view>
			<!-- 加载动画 -->
			<uni-load-more status="loading" v-if="isLoading" />
			<block v-else>
				<hot-list-item v-for="(item, index) in listData[currentIndex]" :key="index" :data="item"
					:ranking="index + 1"></hot-list-item>
			</block>
		</view>
	</view>
</template>

<script>
import { getHotTabs, getHotListFromTabType } from "api/hot"
export default {
	data() {
		return {
			// tabs 数据源
			tabData: [],
			// 当前的切换 index
			currentIndex: 0,
			// list列表数据加载的loading
			isLoading: true,
			// 以 index 为 key, 以对应的list为 value
			listData: {}
		};
	},
	created() {
		this.loadHotTbas();
	},
	methods: {
		async loadHotTbas() {
			const { data: res } = await getHotTabs();
			this.tabData = res.list;
			this.loadHotListFromTab()
		},

		// 获取list数据
		async loadHotListFromTab() {
			// 1. 没有获取到数据
			if (!this.listData[this.currentIndex]) {
				this.isLoading = true;
				const id = this.tabData[this.currentIndex].id;
				const { data: res } = await getHotListFromTabType(id);
				this.listData[this.currentIndex] = res.list;
				this.isLoading = false;
			}
		},
		/**
		 * tab item 的点击事件
		 */
		tabClick(index) {
			this.currentIndex = index;
			// 获取列表数据
			this.loadHotListFromTab();
		},
	}
}
</script>

<style lang="scss" scoped>
/* $uni-bg-color */
.hot-container {
	background-color: $uni-bg-color;

	.logo {
		width: 100%;
		height: 80px;
	}

	.search-box {
		padding: 0 16px;
		margin-bottom: 8px;
	}

	.tab-sticky {
		padding: 0 16px;
		position: -webkit-sticky;
		position: sticky;
		z-index: 99;
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
	}
}
</style>
