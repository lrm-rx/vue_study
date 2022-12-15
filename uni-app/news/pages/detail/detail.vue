<template>
	<view class="detail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<view class="author">编辑: {{detail.author}}</view>
			<view class="time">时间: {{detail.posttime}}</view>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
		<view class="description">
			声明：本站的内容均采集于腾讯新闻，如果侵权请联系管理（513894357@qq.com）进行整改删除，本站进行了内容采集不代表本站及作者观点，若有侵犯请及时联系管理员，谢谢您的支持。
		</view>
	</view>
</template>

<script>
	import {
		parseTime
	} from "@/utils/tool.js"
	export default {
		data() {
			return {
				options: null,
				detail: {}
			};
		},
		onLoad(e) {
			this.options = e;
			this.getDetail();
		},
		methods: {
			getDetail() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/detail.php",
					data: this.options,
					success: res => {
						res.data.posttime = parseTime(res.data.posttime);
						res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width: 100%"')
						this.detail = res.data;
						uni.setNavigationBarTitle({
							title: this.detail.title
						});
						this.seveHistoryInfo();
					}
				})
			},
			seveHistoryInfo() {
				let historyInfo = uni.getStorageSync("historyInfo") || []
				let item = {
					id: this.detail.id,
					classid: this.detail.classid,
					title: this.detail.title,
					picurl: this.detail.picurl,
					looktime: parseTime(Date.now())
				}
				let index = historyInfo.findIndex(i => {
					return i.id === item.id;
				})
				if(index >= 0) {
					historyInfo.splice(index, 1);
				}
				historyInfo.unshift(item);
				historyInfo = historyInfo.slice(0, 10);
				uni.setStorageSync("historyInfo", historyInfo)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		padding: 30rpx;

		.title {
			font-size: 46rpx;
			color: #333;
		}

		.info {
			display: flex;
			justify-content: space-between;
			background-color: #f6f6f6;
			padding: 20rpx;
			margin: 30rpx 0;
			font-size: 22rpx;
			color: #666;
		}

		.content {
			padding-bottom: 50rpx;
			// /deep/ img {
			// 	max-width: 100%;
			// }
		}

		.description {
			background: #FEF0F0;
			font-size: 26rpx;
			padding: 20rpx;
			color: #F89898;
			line-height: 1.8em;
		}
	}
</style>
