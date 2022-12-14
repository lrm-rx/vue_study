<template>
	<view>
		<view @click="chnageTitle">{{title}}</view>
		<button @click="changeNum">{{num}}</button>
		
		<view class="box" :style="'backgroundColor: blue;'"></view>
		<view @click="changeBg" class="box" :style="{backgroundColor: bgcolor}"></view>
		<view :class="['block', {'myactive-color': isActive}]" @click="clickBg"></view>
		
		<view class="nav">
			<view :class="['nav-item', {'active': index === activeIndex}]" v-for="(item, index) in navArr" :key="item.id" @click="activeIndex = index">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '哈哈哈',
				num: 10,
				bgcolor: 'pink',
				isActive: false,
				activeIndex: 0,
				navArr: [
					{id: 1, title: 'node'},
					{id: 2, title: 'vue'},
					{id: 3, title: 'react'},
					{id: 4, title: 'koa'},
				]
			};
		},
		methods: {
			chnageTitle() {
				this.title = '嘻嘻嘻';
			},
			changeNum() {
				this.num++;
			},
			changeBg() {
				const color = `#${String(Math.random()).substring(3, 6)}`;
				console.log('color:', color)
				this.bgcolor = color;
			},
			clickBg() {
				this.isActive = !this.isActive;
			}
		}
	}
</script>

<style lang="scss">
	.box {
		width: 200rpx;
		height: 200rpx;
		background-color: skyblue;
	}
	.block {
		width: 300rpx;
		height: 300rpx;
		background-color: greenyellow;
	}
	.myactive-color {
		width: 400rpx;
		background-color: hotpink;
	}
	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
		.nav-item {
			flex: 1;
			line-height: 90rpx;
			background-color: #ccc;
			text-align: center;
			&.active {
				background-color: pink;
				color: #fff;
			}
		}
	}
</style>
