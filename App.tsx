/*
 * @Description: 
 * @Version: 1.0.0
 * @Date: 2022-05-25 15:15:53
 * @LastEditors: Yawen Yang
 * @LastEditTime: 2022-06-24 16:34:15
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

import WebviewDemo from './pages/webview';


const App = () => {
  const [showCaptcha, setCaptcha] = useState(false);
  const onSuccess = (data: any)=> {
    setCaptcha(false)
    console.log('success:'+ JSON.stringify(data) )
  }
  const onFail = (data: any)=> {
    console.log('fail:'+ JSON.stringify(data) )
  }
  const onError = (data: any)=> {
    console.log('error:'+ JSON.stringify(data) )
  }
  const onClose = ()=> {
    setCaptcha(false)
  }

  return (
    <View style={styles.sectionContainer} >
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => setCaptcha(true) }
        />
     <WebviewDemo
      style = {styles.captcha}
      show = {showCaptcha}
      onSuccess = {onSuccess}
      onFail = {onFail}
      onError = {onError}
      onClose = {onClose}
     ></WebviewDemo>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 40
  },
  captcha: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});

export default App;
