// 函数重载: 一组具有相同名字, 不同参数列表的和返回值无关并且具有一个实现签名和一个或多个重载签名的函数.
type Message = {
  id: number;
  type: MessageType,
  sendmessage: string
}
enum MessageType {
  "Image" = "Image",
  "Audio" = "Audio",
  "Video" = "Video"
}
let messages: Message[] = [
  {
    id: 1,
    type: MessageType.Image,
    sendmessage: "你好呀"
  },
  {
    id: 2,
    type: MessageType.Audio,
    sendmessage: "我好想你"
  },
  {
    id: 3,
    type: MessageType.Video,
    sendmessage: "名侦探柯南"
  },
  {
    id: 4,
    type: MessageType.Audio,
    sendmessage: "一路生花"
  },
  {
    id: 5,
    type: MessageType.Image,
    sendmessage: "大鱼"
  },
]
function searchMsg(condition: MessageType): Message[]; // 重载签名
function searchMsg(condition: number): Message | undefined; // 重载签名
function searchMsg(condition: MessageType | number): Message | undefined | Message[] { // 实现签名
  if (typeof condition === "number") {
    return messages.find(msg => condition === msg.id)
  } else {
    return messages.filter(msg => condition === msg.type)
  }
}
console.log(searchMsg(1));
searchMsg(MessageType.Image).forEach(msg => {
  console.log(msg);
})

export { }