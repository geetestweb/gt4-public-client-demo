/*
 * @Description: 验证码组件
 * @Version: 1.0.0
 * @Date: 2022-04-11 16:12:05
 * @LastEditors: Yawen Yang
 * @LastEditTime: 2022-04-11 17:56:30
 */
import React from 'react';

class GeetestCaptcha extends React.Component {
  componentDidMount() {
    (window as any).initGeetest4(
      (this.props as any)['captcha-config'].config,
      (this.props as any)['captcha-config'].handler
    );
  }
  render() {
    return (
      <div className="captcha"></div>    );
  }
}


export default GeetestCaptcha;