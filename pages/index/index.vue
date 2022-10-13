<template>
	<view class="container">
		<view class="captcha-box">
			
			<!-- #ifdef H5 -->
			<div id="captcha"></div>
			<!-- #endif -->


			<!-- #ifdef APP-PLUS -->
			<captcha ref="captcha" :config="config" @captchaSuccess="captchaSuccess" @captchaError="captchaError"
				@captchaFail="captchaFail" @captchaReady="captchaReady" @captchaClose="captchaClose"></captcha>
		
		<button class="btn-submit" @click="btnSubmit">打开验证码</button>
		<div class="item">
			<radio-group class="radio-group" @change="radioChange">
				<label class="radio">
					<radio value="match" /> 消消乐
				</label>
				<label class="radio">
					<radio value="winlinze" /> 五子棋
				</label>
				<label class="radio">
					<radio value="slide" checked="1" /> 滑动
				</label>
				<label class="radio">
					<radio value="icon" /> 图标
				</label>
				<label class="radio">
					<radio value="ai" /> 一点即过
				</label>
				<label class="radio">
					<radio value="word" /> 文字
				</label>
				<label class="radio">
					<radio value="phrase" /> 语序
				</label>
				<label class="radio">
					<radio value="nine" /> 九宫格
				</label>
			</radio-group>
		</div>
		<!-- #endif -->
		</view>
	</view>
</template>
<script>
	import captcha from "../../components/captcha4/index.vue";
	export default {
		data() {
			return {
				config: {
					captchaId: "be13c9e8983709233fd1ef8d70df68a0",
					riskType: "slide",
				},
			};
		},
		mounted() {
			// 此处为web场景下接入方式，需要用条件编译兼容处理
			// #ifdef  H5
			var script = document.createElement('script');
			script.src = "https://static.geetest.com/v4/gt4.js";
			document.body.appendChild(script);
			script.onload = script.onreadystatechange = function() {
				initGeetest4({
					captchaId: 'be13c9e8983709233fd1ef8d70df68a0',
					product: 'popup'
				}, function(captcha) {
					captcha.appendTo("#captcha"); // 调用appendTo将验证码插入到页的某一个元素中，这个元素用户可以自定义
					captcha.onSuccess(function() { // web端的回调
						var result = captcha.getValidate();
						console.log(result)
					});
				});
			};
			// #endif
		},
		components: {
			captcha,
		},
		methods: {
			captchaSuccess(result) { // app端的回调
				console.log(result)
			},
			captchaError(e) { // app端的回调
				uni.showToast({
					title: JSON.stringify(e),
					icon: "none",
					duration: 2000,
				});
			},
			captchaReady() { // app端的回调

			},
			captchaFail() { // app端的回调
				uni.showToast({
					title: 'captchaFail',
					icon: "none",
					duration: 2000,
				});
			},
			captchaClose() { // app端的回调
				uni.showToast({
					title: 'captchaClose',
					icon: "none",
					duration: 2000,
				});
			},
			radioChange(e) {
				this.config.riskType = e.detail.value;
			},
			btnSubmit: function() { // app端bind模式唤醒验证码的方法
				this.$refs.captcha.showCaptcha();
			},
		},
	};
</script>

<style lang="scss">
	.container {
		.item {
			padding: 10px;

			.item_title {
				font-size: 20px;
				padding-bottom: 5px;
			}

			input {
				border: 1px solid #cccccc;
				padding: 5px;
			}
		}

		.radio-group {
			display: flex;
			flex-direction: column;

			.radio {
				padding: 10px;
			}
		}

		.btn {
			margin-bottom: 10px;
		}

		.btn-submit {
			margin: 60px 0 40px;
		}
	}
</style>
