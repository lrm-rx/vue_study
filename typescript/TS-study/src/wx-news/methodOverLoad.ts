// 微信消息类型
type MessageType = 'image' | 'audio' | string;
type Message = {
  id: number;
  type: MessageType;
  sendMessage: string;
}

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

// 不使用函数重载来实现
function getMessage(value: number | MessageType): Message | undefined | Message[] {
  if(typeof value === 'number') {
    return message.find(v => v.id === value)
  }
  if(typeof value === 'string') {
    return message.filter(v => v.type === value)
  }
}
// const res = getMessage(1);
// console.log(getMessage('image'));
// console.log(res);

/**
 * 使用普通函数实现此功能(当函数返回多种数据类型时),res的返回类型在存多种且不易于我们直接调用
 * (需要使用时依次判断其具体类型)
 * 
 * TS没有办法在运行之前根据传递的值来推导方法最终返回的数据类型
 * 只可以根据方法定义的类型展现
 * 
 * res --> type: Message | Message[] | undefined
 */

// 重载签名(至少有一个,可以有多个)
function getMessage2(id: number): Message;
function getMessage2(msgType: MessageType): Message[];
// 实现签名函数,只有实现
function getMessage2(payloadFrompage: number | MessageType): Message | Message[] | undefined {
  if(typeof payloadFrompage === 'number') {
    return message.find(v => v.id === payloadFrompage)
  }else{
    return message.filter(v => v.type === payloadFrompage)
  }
}

const res = getMessage2(4)
console.log(getMessage2('image'));
console.log(res);


export default getMessage;

/**
 * 函数签名[function signature]: 函数签名 = 函数名称 + 函数参数 + 函数参数类型 + 返回值类型四者合成. 在TS函数重载中,
 * 包含了实现签名和重载签名,实现签名是一种函数签名,重载签名也是一种函数签名
 * 
 * 不完整模糊的TS函数重载定义: 一组具有相同名字,不同参数列表的和返回值无关的函数
 * 
 * 完整的函数重载定义: 包含了以下规则的一组函数就是TS函数重载
 *    规则1: 由一个实现签名 + 一个或多个重载签名组成
 * 
 *    规则2: 但外部调用函数重载定义的函数时,只能调用重载签名,不能调用实现签名,这看似矛盾的规则,其实是TS的规定:
 *          实现签名下的函数体是给重载签名编写的,实现签名只是在定义时起到了统领所有承载签名的作用,在执行调用时就看不到实现签名了
 * 
 *    规则3: 调用重载函数时,会根据传递的参数来判断你调用的是哪一个函数
 * 
 *    规则4: 只有一个函数体,只有实现签名配备了函数体,所有的重载签名都只是签名,没有配置函数体
 * 
 *    规则5: 关于参数类型规则完整总结如下:
 *          无论重载签名有几个参数,参数类型是何种类型,实现签名都可以是一个无参函数签名;实现签名参数个数可以少于重载签名的参数个数,
 *          但实现签名如果准备包含重载签名的某个位置的参数,那实现签名就必须兼容所有重载签名的参数类型[联合类型或any或unknown类型中的一种]
 * 
 *    规则6: 关于重载签名和实现签名的返回值类型规则完整总结如下:
 *          必须给重载签名提供返回值类型,否则TS无法默认推导
 *          提供给重载签名的返回值类型不一定为其执行时的真实返回值类型,可以为重载签名提供真实返回值类型,也可以提供void或unknown或any类型
 *       如果重载签名的返回值类型是void或unknown或any类型,那么将由实现签名业决定重载签名执行时的真实返回值类型.当然为了调用时能有自动提示 + 可读性更好 +
 *       避免可能出现了类型强制转换,强烈建议为重载签名提供真实返回值类型.
 * 
 *      不管重载签名返回值类型是何种类型[包括泛型类型],实现签名都可以返回any或unknown类型,当然一般我们两者都不选择,让TS默认实现签名自动推导返回值类型
 * 
 *  函数重载或方法重载有以下几个优势:
 *      优势1: 结构分明, 让代码可读性 可维护性提升许多
 *      优势2: 各司其职,自动提示方法和属性: 每一重载签名完成各自功能,输出取值时不用强制转换就能出现自动提示,从而提高开发效率
 *      优势3: 更利于功能扩展 
 */