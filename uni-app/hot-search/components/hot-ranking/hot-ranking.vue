<template>
	<view class="ranking-container">
		<image class="ranking-bg" :src="getRankingBg" />
		<text :class="['ranking-text', ranking <= 3 && 'text-white']">{{ ranking }}</text>
	</view>
</template>

<script>
export default {
	name: "hot-ranking",
	props: {
		ranking: {
			type: Number,
			required: true
		}
	},
	data() {
		return {

		};
	},
	computed: {
		getRankingBg() {
			if (this.ranking <= 3) {
				return require(`@/static/images/ranking-${this.ranking}.png`)
			}
			return require("@/static/images/ranking-other.png")
		}
	}
}
</script>

<style lang="scss" scoped>
.ranking-container {
	position: relative;
	text-align: center;
	width: 18px;
	height: 20px;

	.ranking-bg {
		width: 100%;
		height: 100%;
	}

	.ranking-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-55%, -55%);
		font-size: $uni-font-size-sm;
		font-weight: bold;
		color: $uni-text-color;
	}

	.text-white {
		color: #fff;
	}
}
</style>