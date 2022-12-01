// 微信消息类型
type MessageType = 'image' | 'audio' | string;

type Message = {
  id: number;
  type: MessageType;
  sendMessage: string;
};

const message: Message[] = [
  {
    id: 1,
    type: 'image',
    sendMessage: '纯净与安宁正中靶心，阵阵的寒意只是幽影。'
  },
  {
    id: 2,
    type: 'audio',
    sendMessage: '最大的悲剧就是眼看着悲剧发生却无能为力。'
  },
  {
    id: 3,
    type: 'audio',
    sendMessage: '时间，不在于你拥有多少，而在于你如何使用。'
  },
  {
    id: 4,
    type: 'image',
    sendMessage: '时光啊就像潮水，它送来了一切，也会带走一切。'
  }
];

// 上头这两个叫做重载签名（至少有一个，可以有多个）
function getMessage2(id: number, name: string): Message;
function getMessage2(msgType: MessageType, readRecordCount: number): Message[];
// 实现签名函数，只有实现
function getMessage2(
  payloadFrompage: number | MessageType,
  readRecordCount: string | number
): Message | Message[] | undefined {
  console.log(readRecordCount); // => test

  if (typeof payloadFrompage === 'number') {
    return message.find(v => v.id === payloadFrompage);
  } else {
    if (typeof readRecordCount === 'number') {
      return message.filter(v => v.type === payloadFrompage).slice(0, readRecordCount);
    }
    return message.filter(v => v.type === payloadFrompage);
  }
}

const res = getMessage2(1, 'test');

// ----------------------------------------------------------------------

function getMessage(id: number, name: string): Message;
function getMessage(msgType: MessageType, readRecordCount: number): Message[];
function getMessage(payloadFrompage: any, readRecordCount: any) {
  console.log(readRecordCount); // => test
  if (typeof payloadFrompage === 'number') {
    return message.find(v => v.id === payloadFrompage);
  } else {
    if (typeof readRecordCount === 'number') {
      return message.filter(v => v.type === payloadFrompage).slice(0, readRecordCount);
    }
    return message.filter(v => v.type === payloadFrompage);
  }
}

const res2 = getMessage(1, 'test');