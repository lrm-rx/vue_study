
import svgIcon from "./assets/svgs/fullScreen.svg"
import svgRaw from "./assets/svgs/fullScreen.svg?raw"

// 第一种使用svg的方式
// const img = document.createElement("img")
// img.src = svgIcon
// document.body.appendChild(img)

// 第二种使用方式
document.body.innerHTML = svgRaw
const svgEle = document.getElementsByTagName("svg")[0]
svgEle.onmouseenter = function() {
  // svg要通过fill属性修改颜色
  this.style.fill = "pink"
}
svgEle.onmouseleave = function() {
  // svg要通过fill属性修改颜色
  this.style.fill = "#000"
}

