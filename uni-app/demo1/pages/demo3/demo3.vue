<template>
	<view>
		<view>标题: {{title}}</view>
		<input type="text" v-model="title">
		
		--------- demo --------
		<view class="out">
			<view class="row">
				<input v-model="info.username" class="border" type="text" placeholder="请输入昵称">
			</view>
			<view class="row">
				<input v-model="info.tel" class="border" type="text" placeholder="请输入号码">
			</view>
			<view class="row">
				<textarea v-model="info.notes" class="border" placeholder="留言内容" cols="30" rows="10"></textarea>
			</view>
			<view>
				<button type="primary" @click="submitData">提交留言</button>
			</view>
			<view>{{info}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '数据双向绑定',
				info: {
					username: '',
					tel: '',
					notes: ''
				}
			};
		},
		methods: {
			submitData() {
				console.log('提交:', this.info)
			}
		}
	}
</script>

<style lang="scss" scoped>
input {
	border: 1px solid #ccc;
}
.out {
	padding: 30rpx;
	.row {
		margin-bottom: 10rpx;
	}
	.border {
		border: 1px solid #ccc;
		width: 100%;
		box-sizing: border-box;
	}
}
</style>
