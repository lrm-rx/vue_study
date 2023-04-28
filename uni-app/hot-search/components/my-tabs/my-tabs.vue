<template>
	<!-- 
		my-tabs 是一个通用的组件(轮子)
		1. 可以在父组件中定制样式
		2. 可以在父组件中指定数据
		3. 可以在父组件中选中项
	 -->
	<view class="tab-container">
		<view class="tab-box">
			<scroll-view id="_scroll" scroll-x class="scroll-view" scroll-with-animation :scroll-left="scrollLeft">
				<view class="scroll-content">
					<view class="tab-item-box">
						<block v-for="(item, index) in tabList" :key="index">
							<view class="tab-item" :id="'_tab_' + index" :class="{ 'tab-item-active': activeIndex === index }"
								@click="tabClick(index)" :style="{
										color:
											activeIndex === index ? defaultConfig.activeTextColor : defaultConfig.textColor
									}">{{ item.label || item }}</view>
						</block>
					</view>
					<!-- 滑块 -->
					<view class="underLine" :style="{
							transform: 'translateX(' + (slider.left - 16) + 'px)',
							width: defaultConfig.underLineWidth + 'px',
							height: defaultConfig.underLineHeight + 'px',
							backgroundColor: defaultConfig.underLineColor
						}" />
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	name: "my-tabs",
	props: {
		// 1. 可以在父组件中定制样式
		// 配置对象
		config: {
			type: Object,
			// default 如果是复杂数据类型, 那么需要指定 value是一个函数, 通过返回值的形式执行默认值
			default: () => ({})
		},
		// 2, 可以在父组件中指定数据
		tabData: {
			type: Array,
			default: () => []
		},
		// 3. 可以在父组件中指定选中项
		defaultIndex: {
			type: Number,
			default: 0
		}
	},

	data() {
		return {
			// 内部维护的数据对象，为每个 item 单独额外维护一个 slider 的滑块对象
			tabList: [],
			// 当前激活项的 index
			activeIndex: -1,
			// 滑块对象
			slider: {
				// 距离左侧的距离
				left: 0
			},
			// scrollView 的横向滚动条位置
			scrollLeft: 0,
			// 默认配置
			defaultConfig: {
				// 默认的字体颜色
				textColor: '#333333',
				// 高亮字体颜色
				activeTextColor: '#f94d2a',
				// 下划线宽度 px
				underLineWidth: 24,
				// 下划线高度 px
				underLineHeight: 2,
				// 下划线颜色
				underLineColor: '#f94d2a'
			}
		};
	},
	// 侦听器
	watch: {
		// 侦听数据的变化
		tabData: {
			handler(val) {
				this.tabList = val;
				setTimeout(() => {
					this.updateTabWidth();
				}, 0);
			},
			// 该回调将会在侦听开始之后被立即调用
			immediate: true
		},
		// 监听激活项目的变化
		defaultIndex: {
			handler(val) {
				this.activeIndex = val;
				// 定义滑块的位置
				this.tabToIndex();
			},
			// 该回调将会在侦听开始之后被立即调用
			immediate: true
		},
		// 监听 config
		config: {
			handler(val) {
				this.defaultConfig = { ...this.defaultConfig, ...val };
			},
			// 该回调将会在侦听开始之后被立即调用
			immediate: true
		}
	},
	methods: {
		/**
		 * 更新 tab item 的宽度
		 */
		updateTabWidth() {
			/**
			 * 为 tabList 的每个 item 单独额外维护一个 slider 的滑块对象
			 */
			let data = this.tabList;
			if (data.length == 0) return false;

			// 获取 dom 的固定写法
			const query = uni.createSelectorQuery().in(this);
			// 循环数据源
			data.forEach((item, index) => {
				// 获取 dom 的固定写法
				query
					.select('#_tab_' + index)
					.boundingClientRect((res) => {
						// 为数据对象中每一个 item 都维护一个 _slider（滑动条） 对象
						item._slider = {
							// 当前的 tab 距离左侧的距离
							left: res.left + (res.width - this.defaultConfig.underLineWidth) / 2
						};
						// 运算完成之后，执行一次 【滑块】位置运算
						if (data.length - 1 === index) {
							this.tabToIndex();
						}
					})
					.exec();
			});
		},
		/**
		 * tab 的点击事件处理
		 */
		tabClick(index) {
			this.activeIndex = index;
			// 定义滑块的位置
			this.tabToIndex();
			// 发送通知
			this.$emit('tabClick', index);
		},
		/**
		 * 根据当前的 activeIndex 下标，计算 【滑块】 滚动位置
		 */
		tabToIndex() {
			if (this.tabList.length === 0) return;
			// 获取当前的 activeIndex
			const activeIndex = this.activeIndex;
			// 滑块的宽度
			const underLineWidth = this.defaultConfig.underLineWidth;
			// 配置 滚动条 的数据
			this.slider = {
				// TODO：left 如何定义呢？
				// 1. 维护一个单独的数据对象 `tabList`
				// 2. 在 `tabList`  的 `item` 中为一个 `_slider` 属性
				// 3. 该属性保存了 【当前 `item` 下 的滑块位置】
				//    3.1. 计算公式：`滑块左侧位置 = item.left + (item.width - slider.width) / 2`
				left: this.tabList[activeIndex]._slider.left
			};
			// 为 scrollView 设置滚动位置
			this.scrollLeft = this.activeIndex * this.defaultConfig.underLineWidth;
		}
	}
}
</script>

<style lang="scss" scoped>
.tab-container {
	font-size: $uni-font-size-base;
	height: 45px;
	line-height: 45px;
	background-color: $uni-bg-color;

	.tab-box {
		width: 100%;
		height: 45px;
		display: flex;
		position: relative;

		.scroll-view {
			white-space: nowrap;
			width: 100%;
			height: 100%;
			box-sizing: border-box;

			.scroll-content {
				width: 100%;
				height: 100%;
				position: relative;

				.tab-item-box {
					height: 100%;

					.tab-item {
						height: 100%;
						display: inline-block;
						text-align: center;
						padding: 0 15px;
						position: relative;
						text-align: center;
						color: $uni-text-color;

						&-active {
							color: $uni-text-color-hot;
						}
					}
				}

				.underLine {
					height: 2px;
					width: 25px;
					background-color: #f01414;
					border-radius: 3px;
					transition: 0.5s;
					position: absolute;
					bottom: 0;
				}
			}
		}
	}

	/* #ifdef H5 */
	/deep/.uni-scroll-view::-webkit-scrollbar {
		display: none;
	}

	/deep/.uni-scroll-view {
		scrollbar-width: none;
	}

	/* #endif */
}
</style>