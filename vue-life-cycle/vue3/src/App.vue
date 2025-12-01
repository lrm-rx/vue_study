<template>
  <div v-html="testCases"></div>
</template>

<script lang="ts" setup>
import { encrypt, decrypt } from "./utils/cryptoUtils";
const testCases = `<html><body>HTML内容<br/><img src="https://wx3.sinaimg.cn/mw690/d0f8f22agy1hxly5u9tl2j20u0140djg.jpg" /></body></html>`;
const testCasesEncrypted = encrypt(testCases, "mySecretKey");
console.log("加密后的内容:", testCasesEncrypted);
const decryptedContent = decrypt(testCasesEncrypted, "mySecretKey");
console.log("解密后的内容:", decryptedContent);


</script>

<style scoped>
/* 可以在这里添加组件的样式 */
</style>
