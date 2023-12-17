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

function searchMsg(condition: MessageType | number): Message | undefined | Message[] {
  if (typeof condition === "number") {
    return messages.find(msg => condition === msg.id)
  } else {
    return messages.filter(msg => condition === msg.type)
  }
}

(searchMsg(1) as Message).id;
(searchMsg(MessageType.Image) as Message[]).forEach(element => { });

export { }