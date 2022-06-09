import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  captchaHandler=(captchaObj: any)=> {
    (window as any).captchaObj = captchaObj;
    captchaObj
      .appendTo("#captcha")
      .onReady(function () {
        console.log("ready");
      })
      .onNextReady(function () {
        console.log("nextReady");
      })
      .onBoxShow(function () {
        console.log("boxShow");
      })
      .onError(function (e: any) {
        console.log(e);
      })
      .onSuccess(  () => {
        if (this.captchaConfig.config.product === "bind") {
          this.validate();
        }
      });
  }
  captchaConfig = {
    config: {
      captchaId: "54088bb07d2df3c46b79f80300b0abbe",
      language: "en",
      product: "bind",
    },
    handler: this.captchaHandler,
  };
  constructor( private httpClient: HttpClient){}
  validate() {
    var result = (window as any).captchaObj.getValidate();
    if (!result) {
      alert("请先完成验证！");
      return;
    }
    const params = Object.assign(result, {
      captcha_id: "54088bb07d2df3c46b79f80300b0abbe",
    });
    this.httpClient.get("/demo/login", params)
      .subscribe((res: any) => {
        if (res.data.result) {
          console.log(res.data);
          alert(res.data.result);
        }
      });
  }
  login() {
    if (this.captchaConfig.config.product === "bind") {
      if ((window as any).captchaObj) {
        (window as any).captchaObj.showBox();
      } else {
        alert("请等待验证初始化完成");
        // return false;
      }
    } else {
      this.validate();
    }
  }
}

