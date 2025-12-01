<template>
  <div>12313</div>
</template>

<script lang="ts" setup>
import { encrypt, decrypt } from "./utils/cryptoUtils";
const testCases = "<html><body>HTML内容</body></html>";
const testCasesEncrypted = encrypt(testCases, "mySecretKey");
console.log("加密后的内容:", testCasesEncrypted);
const decryptedContent = decrypt(testCasesEncrypted, "mySecretKey");
console.log("解密后的内容:", decryptedContent);


</script>

<style scoped>
/* 可以在这里添加组件的样式 */
</style>
