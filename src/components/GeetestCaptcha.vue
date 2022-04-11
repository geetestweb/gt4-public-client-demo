<!--
 * @Description: 
 * @Version: 1.0.0
 * @Date: 2022-04-11 10:16:14
 * @LastEditors: Yawen Yang
 * @LastEditTime: 2022-04-11 14:33:46
-->
<template>
  <div class="captcha"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GeetestCaptcha",
  props: ["captchaConfig"],
  setup(prop) {
    (window as any).initGeetest4(
      prop.captchaConfig.config,
      prop.captchaConfig.handler
    );
  },
});
</script>
