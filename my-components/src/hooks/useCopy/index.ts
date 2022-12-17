import { ElMessage } from 'element-plus'
// 复制文本
export const useCopy = (text: string) => {
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard 向剪贴板写文本
    navigator.clipboard.writeText(text).then(() => {
      ElMessage.success('复制成功!')
    }).catch(() => {
      ElMessage.error('复制失败!')
    });
  } else {
    try {
      // 创建输入框
      const input = document.createElement('input')
      // 给输入框vaLue赋值
      input.value = text
      // 使text area不在viewport，同时设置不可见
      input.style.position = 'absolute'
      input.style.opacity = '0'
      input.style.left = '-999999px'
      input.style.top = '-999999px'
      // 追加到body里面去
      document.body.appendChild(input)
      // 选择输入框的操作
      input.focus()
      input.select()
      // 执行复制操作
      document.execCommand('Copy')
      document.body.removeChild(input)
      // input.remove()
      ElMessage.success('复制成功!')
    } catch (error) {
      ElMessage.error('复制失败!')
    }
  }
}