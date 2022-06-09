import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-geetest-captcha',
  templateUrl: './geetest-captcha.component.html',
  styleUrls: ['./geetest-captcha.component.scss']
})
export class GeetestCaptchaComponent implements OnInit {
  @Input() captchaConfig:any
  constructor() { }

  ngOnInit(): void {
    (window as any).initGeetest4(
      this.captchaConfig.config,
      this.captchaConfig.handler
    );
  }
}
