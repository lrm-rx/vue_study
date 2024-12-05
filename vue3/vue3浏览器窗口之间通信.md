## 来自你的消息:
vue3 结合<script setup>语法糖实现浏览器窗口之间通信如何实现?应用场景: 从订单列表页面点击新增/编辑订单, 打开一个新窗口,保存之后刷新订单列表.(不考虑使用vuex)

## 来自AI的消息:
在 Vue 3 中结合 `<script setup>` 语法糖实现浏览器窗口之间的通信，可以利用 `window.postMessage` 和 `window.addEventListener` 来实现。以下是一个简单的示例，展示了如何在新窗口中发送消息并在原窗口中接收消息以刷新订单列表。

### 1. 主窗口（订单列表页面）

在订单列表页面中，你需要监听来自新窗口的消息，并在接收到消息后刷新订单列表。

```vue
<template>
  <div>
    <h1>订单列表</h1>
    <ul>
      <li v-for="order in orders" :key="order.id">{{ order.name }}</li>
    </ul>
    <button @click="openNewWindow">新增/编辑订单</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const orders = ref([]);

// 模拟获取订单列表
const fetchOrders = () => {
  orders.value = [
    { id: 1, name: '订单1' },
    { id: 2, name: '订单2' },
  ];
};

// 打开新窗口
const openNewWindow = () => {
  const newWindow = window.open('/new-order', '_blank');
};

// 监听来自新窗口的消息
const handleMessage = (event) => {
  if (event.origin !== window.location.origin) return;
  if (event.data === 'ORDER_UPDATED') {
    fetchOrders(); // 刷新订单列表
  }
};

onMounted(() => {
  fetchOrders();
  window.addEventListener('message', handleMessage);
});

onBeforeUnmount(() => {
  window.removeEventListener('message', handleMessage);
});
</script>
```

### 2. 新窗口（新增/编辑订单页面）

在新窗口中，保存订单后发送消息给主窗口通知其刷新订单列表。

```vue
<template>
  <div>
    <h1>新增/编辑订单</h1>
    <form @submit.prevent="saveOrder">
      <input type="text" v-model="orderName" placeholder="订单名称" />
      <button type="submit">保存</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const orderName = ref('');

// 保存订单并发送消息
const saveOrder = () => {
  // 模拟保存订单
  console.log('保存订单:', orderName.value);

  // 发送消息给主窗口
  window.opener.postMessage('ORDER_UPDATED', window.location.origin);

  // 关闭当前窗口
  window.close();
};
</script>
```

### 3. 应用场景

1. **打开新窗口**：用户在订单列表页面点击“新增/编辑订单”按钮时，会打开一个新窗口。
2. **保存订单**：在新窗口中，用户填写订单信息并保存。
3. **发送消息**：保存订单后，新窗口通过 `window.opener.postMessage` 发送消息给主窗口，通知其订单已更新。
4. **刷新订单列表**：主窗口接收到消息后，调用 `fetchOrders` 方法刷新订单列表。

### 4. 注意事项

- **安全性**：在实际应用中，建议对 `window.postMessage` 的消息进行更严格的验证，确保消息来源的可靠性。
- **跨域问题**：如果新窗口和主窗口在不同的域，需要确保 `postMessage` 的 `origin` 参数正确设置，并进行跨域安全的处理。

通过这种方式，你可以在不使用 Vuex 的情况下，实现浏览器窗口之间的通信，并在订单保存后刷新订单列表。

