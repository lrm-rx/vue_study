<template>
	<view class="out">
		<!-- 自定义组件 -->
		<myitem :activeKey.sync="activeIndex" :sourceData="navArr" @change="changeTitle" />
		<navigator url="/pages/list/list">
			<button plain>新闻列表</button>
		</navigator>
		<navigator url="/pages/list/list" open-type='reLaunch'>
			<button plain>新闻列表</button>
		</navigator>
		<navigator url="/pages/about/about" open-type="redirect">
			<button plain>关于我们</button>
		</navigator>

		<navigator url="/pages/list/list">
			<image src="/static/images/pic1.jpg" mode=""></image>
		</navigator>

		<button type="primary">确认提交</button>
		<button size="mini" type="warn">确认提交</button>
		<button size="mini" type="warn" plain loading>确认提交</button>

		<input type="text">
		<video src="../../static/images/media.mp4"></video>
		<image src="/static/images/pic4.jpg" mode="" class="myimg"></image>
		<image
			src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1ae87107-2943-4ba6-be2b-390ca27c6260.png"
			mode=""></image>
		<image src="/static/images/pic7.jpg" mode="widthFix" class="mypic"></image>
		<!-- <view class="box"></view>
		<view class="row"></view>
		<icon type="success" size="26"/>
		<icon type="waiting" size="26"/>
		<view>
			<text>nodejs</text>
			<text>vue</text>
			<text>react</text>
		</view> -->
		<scroll-view scroll-x class="scroll">
			<view class="group">
				<view class="item">111</view>
				<view class="item">222</view>
				<view class="item">333</view>
				<view class="item">444</view>
				<view class="item">555</view>
				<view class="item">666</view>
			</view>
		</scroll-view>
		<swiper class="swiper" circular autoplay interval="2000" duration="200" indicator-dots
			indicator-color="rgba(255,255,255,0.5)" indicator-active-color="rgba(255,255,255,1)">
			<swiper-item class="item">
				<image src="/static/images/pic1.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item class="item">
				<image src="/static/images/pic2.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item class="item">
				<image src="/static/images/pic3.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

		<view style="height: 500rpx;"></view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				navArr: [{
						id: 1,
						title: 'node'
					},
					{
						id: 2,
						title: 'vue'
					},
					{
						id: 3,
						title: 'react'
					}
				]
			}
		},
		methods: {
			changeTitle(value) {
				console.log('value:', value);
			}
		}
	}
</script>

<style lang="scss">
	.myimg {
		width: 360rpx;
	}

	.out {
		.box {
			width: 200px;
			height: 200px;
			background: pink;
		}

		.row {
			width: 750rpx;
			height: 200rpx;
			background: green;
		}
	}

	.scroll {
		border: 1px solid red;
		box-sizing: border-box;
		height: 220rpx;

		.group {
			white-space: nowrap;

			.item {
				width: 220rpx;
				height: 220rpx;
				background: royalblue;
				display: inline-block;
				margin-right: 10rpx;
			}
		}
	}

	.swiper {
		height: 400rpx;
		margin-top: 100rpx;

		.item {
			padding: 2rpx;
			box-sizing: border-box;

			image {
				width: 100%;
				height: 350rpx;
			}
		}
	}
</style>
