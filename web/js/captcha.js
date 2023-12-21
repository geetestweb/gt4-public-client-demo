/*
 * @Author: yangyawen 786878243@qq.com
 * @Date: 2023-10-11 10:58:32
 * @LastEditors: yangyawen 786878243@qq.com
 * @LastEditTime: 2023-11-08 15:49:40
 * @FilePath: /flutter/my_app/web/js/captcha.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var showCaptcha = function(){}
var resetCaptcha = function(){}
var destroyCaptcha = function(){}

function initCaptcha(){
  initGeetest4({
    captchaId: "21dd8f9031049308efb5d1f16b90004e",
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
