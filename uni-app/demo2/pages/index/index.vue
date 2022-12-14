<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="clickImg"></image>
		
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		
		<view>
			<navigator url="/pages/demo/demo">跳转到demo</navigator>
		</view>
		
		<view class="box" @click="clickBox"></view>
		
		<button @click="removeBtn">清除k3</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				arr:["三国演义","西游记","红楼梦","水浒传"]
			}
		},
		onLoad() {
			// uni.showLoading({
			// 	title:"数据加载中...",
			// 	mask:true
			// })
			
			// setTimeout(()=>{
			// 	uni.hideLoading()
			// },2000)
			
			// uni.setStorage({
			// 	key:"demo",
			// 	data:123123,
			// 	success:res=>{
			// 		console.log(res)
			// 	}
			// })
			
			uni.setStorageSync('mykey3', 'uniapp学习');
			uni.setStorageSync('mykey2', 'vue项目');
			uni.setStorageSync('mykey', {name:"张三",age:22});			
			
			
			
		},
		methods: {
			removeBtn(){
				// uni.removeStorageSync('mykey3');
				uni.clearStorageSync();
			},
			clickImg(){
				uni.showToast({
					title:"发布失败发布失败发布失败发布失败",
					icon:"none",
					mask:true
				})
				
				setTimeout(()=>{
					uni.navigateTo({
						url:"/pages/demo/demo"
					})
				},1500)
				
			},
			clickBox(){
				// uni.showModal({
				// 	title:"手机验证",
				// 	success:res=>{ 
				// 		console.log(res)
				// 		if(res.confirm){
				// 			uni.navigateTo({
				// 				url:"/pages/demo/demo"
				// 			})
				// 		}else{
				// 			uni.showToast({
				// 				title:"取消",
				// 				icon:"none"
				// 			})
				// 		}
				// 	}
				// })
				
			// 	uni.showModal({
			// 		title:"手机验证",
			// 		editable:true,
			// 		placeholderText:"请输入手机号",
			// 		success:res=>{
			// 			console.log(res)
			// 		}
			
			// 	})
			
			
			uni.showActionSheet({				
				itemList: this.arr,
				success:  (res)=> {
					console.log(this.arr[res.tapIndex])
				}
			});
			
			
			
				
				
			}
			
		}
	}
</script>

<style lang="scss">

	.box{
		width: 200rpx;
		height: 200rpx;
		background: pink;
	}
</style>
