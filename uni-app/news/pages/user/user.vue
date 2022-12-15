<template>
	<view class="user">
		<view class="top">
			<image src="../../static/images/history.png"></image>
			<view class="text">历史记录</view>
		</view>
		<view class="content">
			<view class="row" v-for="item in listArray" :key="item.id">
				<newsbox :item="item" @click.native="goDetail(item)"></newsbox>
			</view>
		</view>
		<view class="nohistory" v-if="!listArr.length">
			<image src="../../static/images/nohis.png" mode="widthFix"></image>
			<view class="text">暂无浏览记录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArray: []
			};
		},
		onShow() {
			this.getStoreData()
		},
		methods: {
			// 跳转到详情页
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				})
			},
			// 获取缓存浏览记录
			getStoreData() {
				const listArray = uni.getStorageSync("historyInfo") || [];
				this.listArray = listArray;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user {
		.top {
			padding: 50rpx 0;
			background-color: #F8F8F8;
			color: #666;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 150rpx;
				height: 150rpx;
			}

			.text {
				font-size: 38rpx;
			}
		}

		.content {
			padding: 30rpx;

			.row {
				border-bottom: 1px dotted #efefef;
				padding: 15rpx 0;
			}
		}

		.nohistory {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 450rpx;
			}

			.text {
				font-size: 26rpx;
				color: #888;
			}
		}
	}
</style>
