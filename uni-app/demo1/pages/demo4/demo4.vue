<template>
	<view>
		<form @submit="onSubmit">
			<view class="row">
				<input type="text" name="username">
			</view>
			<view class="row">
				<textarea name="content" cols="30" rows="10"></textarea>
			</view>
			<view class="row">
				<radio-group name="sex">
					<label>
						<radio value="1" /><text>男</text>
					</label>
					<label>
						<radio value="2" /><text>女</text>
					</label>
					<label>
						<radio value="3" /><text>保密</text>
					</label>
				</radio-group>
			</view>
			<view class="row">
				<picker :value="selectVal" :range="options" range-key="name" @change="onSelect" name="select">
					<view>点击选择: {{options[selectVal].name}}</view>
				</picker>
			</view>
			<view class="row">
				<button type="primary" form-type="submit">提交表单</button>
				<button plain form-type="reset">重置表单</button>
			</view>
		</form>
		{{info}}
		
		<input type="text" v-model="title">
		<view>原值: {{title}}</view>
		<view>修改值: {{changeTitle}}</view>
		
		<view>{{demo}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: null,
				options: [{
					id: 1,
					name: '初中'
				}, {
					id: 2,
					name: '高中'
				}, {
					id: 3,
					name: '大专'
				}, {
					id: 4,
					name: '本科'
				}, ],
				selectVal: 2,
				title: ''
			};
		},
		computed: {
			demo() {
				return 'uniapp'
			},
			changeTitle() {
				return this.title.toUpperCase();
			}
		},
		methods: {
			onSubmit(e) {
				console.log(e.detail.value)
				this.info = e.detail.value;
			},
			onSelect(e) {
				console.log(e.detail.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	input,
	textarea {
		border: 1px solid #ccc;
	}

	.row {
		margin: 10rpx;
		box-sizing: border-box;
	}
</style>
