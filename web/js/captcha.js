/*
 * @Author: yangyawen 786878243@qq.com
 * @Date: 2023-10-11 10:58:32
 * @LastEditors: yawen Yang
 * @LastEditTime: 2023-12-21 16:35:16
 * @FilePath: /gt4-public-client-demo/web/js/captcha.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var showCaptcha = function(){}
var resetCaptcha = function(){}
var destroyCaptcha = function(){}

function initCaptcha(){
  initGeetest4({
    captchaId: "xxxx",
    product: 'bind',
    language: 'eng'
},function (captcha) {
  showCaptcha = function(){
    captcha.showCaptcha();
  }
  resetCaptcha = function(){
    captcha.reset()
  }
  destroyCaptcha = function(){
    captcha.destroy()
  }
  // captcha为验证码实例
  captcha
    .onReady(function(){
    })
    .onNextReady(function(){
    })
    .onSuccess(function(){
      var result = captcha.getValidate();
      getSuccess(result.captcha_id,result.lot_number,result.pass_token,result.captcha_output);
    })
    .onFail(function(failObj){
      getFail(failObj.captchaId,failObj.captchaType,failObj.lotNumber)
    })
    .onError(function(error){
      console.log(error)
    })
  })
};
