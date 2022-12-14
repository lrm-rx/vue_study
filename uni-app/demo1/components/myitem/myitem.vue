<template>
	<view class="nav">
		<view :class="['nav-item', {'active': index === activeKey}]" v-for="(item, index) in sourceData" :key="item.id"
			@click="clickTitle(index, item)">{{item.title}}</view>
	</view>
</template>

<script>
	export default {
		name: "myitem",
		props: {
			activeKey: {
				type: Number,
				default: 0
			},
			sourceData: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			clickTitle(index, item) {
				this.$emit('update:activeKey', index);
				this.$emit('change', item);
			}
		}
	}
</script>

<style lang="scss" scoped>
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
