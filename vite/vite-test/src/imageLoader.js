
// 主要是来帮助我们学习怎么加载静态图片资源
import picUrl from "@assets/images/xhh.jpg"

// import picUrl from "./assets/images/xhh.jpg?raw" // 这时服务端会去读取这个图片文件的内容 --> Buffter  二进制的字符串


const img = document.createElement("img")
img.src = picUrl
document.body.append(img)
