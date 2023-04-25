<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// #ifdef APP-PLUS-NVUE
			// 加载公共图标库
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': "url('https://at.alicdn.com/t/font_1365296_2ijcbdrmsg.ttf')"
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/lucky.css";
	@import "./common/common.css";
	/* #ifndef APP-PLUS-NVUE */
	@import "./common/lucky-icon.css";
	/* #endif */
	/* #ifdef MP */
	::-webkit-scrollbar{
		display: none;
	}
	/* #endif */
</style>
