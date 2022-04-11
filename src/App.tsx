import React from 'react';
import GeetestCaptcha from './components/Captcha';
import './App.scss';
import axios from 'axios'

interface Window {
  [propName: string]: any;
}

class App extends React.Component{
  captchaConfig: any;
  constructor(props:any) {
    super(props);
    this.captchaConfig={
      config: {
        captchaId: "54088bb07d2df3c46b79f80300b0abbe",
        language: "eng",
        product: "bind",
        protocol: "https://"
      },
      handler: this.captchaHandler.bind(this)
    }
    this.login =this.login.bind(this)
    this.validate = this.validate.bind(this)
  }
  render() {
    return (
    <div className="demoform">
      <form id="form">
        <div
        className={`inp ${this.captchaConfig.config.product === 'bind'?"minWidth":null}`}
        >
          <div className="user">user</div>
          <input
            type="email"
            id="email"
            autoComplete="false"
            placeholder="hello@geetest.com"
          />
        </div>
        <div className="inp">
          <div className="pass"></div>
          <input
            type="password"
            id="pass"
            autoComplete="false"
            placeholder="******"
          />
        </div>
        <div
          id="captcha"
          className={` ${this.captchaConfig.config.product === 'bind'?"hideHeight":null}`}
        >
          <GeetestCaptcha captcha-config={this.captchaConfig} />
        </div>
        <div className="login" onClick={this.login}>
          { this.captchaConfig.config.language === "en" ? "login" : "登录" }
        </div>
      </form>
    </div>   
    );
  }
  login() {
    if (this.captchaConfig.config.product === "bind") {
      if ((window as any).captchaObj) {
        (window as any).captchaObj.showBox();
      } else {
        alert("请等待验证初始化完成");
        return false;
      }
    } else {
      this.validate();
    }
  }
  validate() {
    var result = (window as any).captchaObj.getValidate();
    if (!result) {
      alert("请先完成验证！");
      return;
    }

    axios({
      method: "get",
      url: "/demo/login",
      params: Object.assign(result,{
        captcha_id: '54088bb07d2df3c46b79f80300b0abbe'
      })
    }).then((res:any)=>{
        if(res.data.result){
          console.log(res.data);
          alert(res.data.result);
        }
    })
  }
  captchaHandler(captchaObj: any) {
    (window as any).captchaObj = captchaObj;
    captchaObj
      .appendTo("#captcha")
      .onReady(function () {
        console.log("ready");
      })
      .onNextReady(function () {
      })
      .onBoxShow(function () {
        console.log("boxShow");
      })
      .onError(function (e: any) {
        console.log(e);
      })
      .onSuccess( () => {
        if (this.captchaConfig.config.product === "bind") {
          this.validate();
        }
      });
  }


}

export default App;
