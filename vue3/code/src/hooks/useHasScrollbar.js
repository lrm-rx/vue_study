import { onMounted, onUnmounted, reactive, toRefs } from "vue";

export function useHasScrollbar(targetRef) {
  const hasScrollbar = reactive({
    vertical: false,
    horizontal: false,
  });

  const checkScrollbar = () => {
    const el = targetRef.value;
    if (!el) return;

    const style = window.getComputedStyle(el);
    const overflowY = style.overflowY;
    const overflowX = style.overflowX;

    // 判断垂直滚动条
    const verticalScrollable = el.scrollHeight > el.clientHeight;
    hasScrollbar.vertical =
      overflowY === "scroll" || (overflowY === "auto" && verticalScrollable);

    // 判断水平滚动条
    const horizontalScrollable = el.scrollWidth > el.clientWidth;
    hasScrollbar.horizontal =
      overflowX === "scroll" || (overflowX === "auto" && horizontalScrollable);
  };

  let resizeObserver = null;

  onMounted(() => {
    // 初始化检测
    checkScrollbar();

    // 监听尺寸变化
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(checkScrollbar);
      resizeObserver.observe(targetRef.value);
    }
  });

  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
  });

  return {
    ...toRefs(hasScrollbar),
  };
}
