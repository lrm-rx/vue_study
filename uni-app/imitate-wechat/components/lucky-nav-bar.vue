<template>
	<view>
		<!-- 状态栏 -->
		<view :style="'height:'+statusBarHeight+'px'"></view>
		<!-- 导航 -->
		<view class="w-100 flex align-center justify-between" style="height: 90rpx;">
			<!-- 左边 -->
			<view class="flex align-center">
				<!-- 返回按钮 -->
				<!-- #ifndef MP -->
				<lucky-icon-button v-if="showBack" @click="back" :icon="'\ue60d'"></lucky-icon-button>
				<!-- #endif -->
				<!-- 标题 -->
				<slot>
					<text v-if="title" class="font-md ml-3">{{getTitle}}</text>
				</slot>
			</view>
			<!-- 右边 -->
			<view class="flex align-center" v-if="showRight">
				<slot name="right">
					<lucky-icon-button @click="search" :icon="'\ue6e3'"></lucky-icon-button>
					<lucky-icon-button @click="openExtend" :icon="'\ue682'"></lucky-icon-button>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	import luckyIconButton from "./lucky-icon-button.vue"
	export default {
		name: "lucky-nav-bar",
		components: {
			luckyIconButton
		},
		props: {
			showBack: {
				type: Boolean,
				default: false
			},
			title: {
				type: [String, Boolean],
				default: false
			},
		},
		data() {
			return {
				statusBarHeight: 0
			};
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
		},
	}
</script>

<style>

</style>
