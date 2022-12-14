<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(){
			// uni.setNavigationBarTitle({
			// 	title:"js操作的title"
			// })
			
			// uni.setNavigationBarColor({
			// 	backgroundColor:"#1AA034",
			// 	frontColor:"#ffffff"
			// })
			
			uni.showNavigationBarLoading();
			
			setTimeout(()=>{
				uni.hideNavigationBarLoading()
			},1500)
			
			
			
			
		}
	}
</script>

<style>

</style>
