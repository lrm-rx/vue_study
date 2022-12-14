<template>
	<view>
			<view @click="clickUser">户信息</view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			clickUser(){
				uni.removeTabBarBadge({
					index:2
				})
			}
		},
		onLoad(){
			uni.setTabBarBadge({
				index:2,
				text:"3"
			})		
				
			uni.showTabBarRedDot({
				index:1
			})
			
			let key=uni.getStorageSync("mykey")
			console.log("用户页面")
			console.log(key)
			
			
		}
	}
</script>

<style>

</style>
