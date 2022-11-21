# uniapp webview captcha demo

Hbuilder X 3.6.3

#### 介绍
项目为使用uniapp开发客户端和web端的demo示例

#### 使用说明

将demo内的hybrid文件夹内的验证引导页和components内的验证组件复制到项目中,使用方式和vue组件一致。



```

<captcha ref="captcha" :config="config" @captchaSuccess="captchaSuccess" @captchaError="captchaError" @captchaFail="captchaFail" @captchaReady="captchaReady" @captchaClose="captchaClose"></captcha>

```  

将配置参数通过config传入通过ref调用验证组件的showCaptcha方法唤醒验证码，配置参数可参考web端参数文档。
