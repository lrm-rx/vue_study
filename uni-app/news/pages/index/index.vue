<template>
	<view class="home">
		<scroll-view scroll-x class="navscroll">
			<view class="item" :class="index === activeKey?'active':''" v-for="(item, index) in navArray"
				@click="clickNav(index, item.id)" :key="item.id">{{item.classname}}
			</view>
		</scroll-view>
		<view class="content">
			<view class="row" v-for="item in newsArrayList">
				<newsbox :item="item" @click.native="goDetail(item)"></newsbox>
			</view>
		</view>

		<view class="nodata" v-if="!newsArrayList.length">
			<image src="../../static/images/nodata.png" mode="aspectFill"></image>
		</view>
		<view class="loading" v-if="newsArrayList.length">
			<view v-if="loading==1">数据加载中...</view>
			<view v-if="loading==2">没有更多了~~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeKey: 0,
				navArray: [],
				newsArrayList: [],
				currentPage: 1,
				loading: 0 //0默认  1加载中  2没有更多了
			}
		},
		onLoad() {
			this.getNavData();
			this.getNewsList();
		},
		// 上拉触底
		onReachBottom() {
			if (this.loading == 2) {
				return;
			}
			this.currentPage++;
			this.loading = 1;
			this.getNewsList();
		},
		methods: {
			// 导航切换
			clickNav(index, id) {
				this.activeKey = index;
				this.currentPage = 1;
				this.loading = 0;
				this.newsArrayList = [];
				this.getNewsList(id);
			},
			// 跳转到详情页
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				})
			},
			// 获取导航数据
			getNavData() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: res => {
						this.navArray = res.data;
					}
				})
			},
			// 获取新闻列表数据
			getNewsList(id = 50) {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/newslist.php",
					data: {
						cid: id,
						page: this.currentPage
					},
					success: res => {
						if (res.data.length === 0) {
							this.loading = 2;
						}
						this.newsArrayList = [...this.newsArrayList, ...res.data];
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navscroll {
		height: 100rpx;
		background-color: #F7F8FA;
		white-space: nowrap;
		position: fixed;
		top: var(--window-top);
		left: 0;
		z-index: 10;

		/deep/ ::-webkit-scrollbar {
			width: 4px !important;
			height: 1px !important;
			overflow: auto !important;
			background: transparent !important;
			-webkit-appearance: auto !important;
			display: block;
		}

		.item {
			display: inline-block;
			line-height: 100rpx;
			padding: 0 30rpx;
			color: #333;
			font-size: 40rpx;

			&.active {
				color: #31C27C;
			}
		}
	}

	.content {
		padding: 30rpx;
		padding-top: 100rpx;

		.row {
			border-bottom: 1px dotted #efefef;
			padding: 15rpx 0;
		}
	}

	.nodata {
		display: flex;
		justify-content: center;
		align-items: center;

		image {
			width: 360rpx;
		}
	}

	.loading {
		text-align: center;
		font-size: 26rpx;
		color: #888;
		line-height: 2em;
	}
</style>
