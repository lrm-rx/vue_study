<template>
  <!-- 
		1. 具备输入框的样式
		2. 不可输入
		3. placeholder内容可以在父组件定义
	 -->
  <view class="my-search-container">
    <!-- 搜索输入框 -->
    <uni-search-bar
      v-if="isShowInput"
      class="my-search-bar"
      :placeholder="placeholderText"
      :radius="config.radiusNum"
      :style="{
        height: config.height + 'px',
        backgroundColor: config.backgroundColor,
      }"
      :value="value"
      @confirm="onSearch"
      @focus="onFocus"
      @blur="onBlur"
      @clear="onClear"
      @cancel="onCancel"
      @input="onInput"
    >
      <uni-icons slot="clearIcon" type="clear" color="#999999" />
    </uni-search-bar>
    <!-- 搜索按钮 -->
    <view
      class="my-search-box"
      :style="{
        height: config.height + 'px',
        backgroundColor: config.backgroundColor,
        border: config.border,
      }"
      v-else
    >
      <!-- 搜索图标 -->
      <image class="icon" src="@/static/images/search.png" />
      <!-- placeholder -->
      <text class="placeholder">{{ placeholderText }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "my-search",
  props: {
    // 输入的内容
    value: {
      type: String,
      default: "",
    },
    // 是否显示输入框
    isShowInput: {
      type: Boolean,
      default: false,
    },
    // 配置对象
    config: {
      type: Object,
      default: () => ({
        height: 36,
        backgroundColor: "#ffffff",
        icon: "/static/images/search.png",
        textColor: "#454545",
        border: "1px solid #c9c9c9",
        radiusNum: 100,
      }),
    },
    placeholderText: {
      type: String,
      default: "搜索",
    },
  },
  data() {
    return {};
  },
  methods: {
    onSearch() {
      this.$emit("search", this.value);
    },
    onFocus() {
      this.$emit("focus", this.value);
    },
    onBlur() {
      this.$emit("blur", this.value);
    },
    onClear() {
      this.$emit("clear", this.value);
    },
    onCancel() {
      this.$emit("cancel", this.value);
    },
    onInput(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-search-container {
  display: flex;
  align-items: center;

  .my-search-bar {
    width: 100%;
  }

  .my-search-box {
    height: 36px;
    background-color: $uni-bg-color;
    border-radius: 16px;
    border: 1px solid $uni-border-4;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 $uni-spacing-row-base;

    .icon {
      width: $uni-img-size-sm;
      height: $uni-img-size-sm;
    }

    .placeholder {
      font-size: $uni-font-size-sm;
      margin-left: $uni-spacing-row-sm;
      color: $uni-text-color-grey;
    }
  }
}
</style>
