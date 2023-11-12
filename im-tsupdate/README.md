# 2023TypeScript学习
## 2-2 TS 定义，环境搭建，6大优势
### 定义
> 融合了后端面向对象思想的超级版的javaScript语言。
### 环境搭建
``` typescript

npm init -y

npm i typescript -D

tsc --init

```

### 优势
- **编译时静态类型检测：** 函数或方法传参或变量赋值不匹配时，会出现编译错误提示，规避了开发期间的大量低级错误，省时，省力。
- **自动提示更清晰明确。**
- **引入了泛型和一系列的TS特有的类型**
- **强大的 d.ts 声明文件：**声明文件像一本书的目录一样，清晰直观展示了依赖库文件的接口，type类型，类，函数，变量等声明。
- **轻松编译成 JS 文件：**即使 TS 文件有错误，绝大多数情况也能编译出 JS 文件。
- **灵活性高：**尽管 TS 是一门强类型检查语言，但也提供了 any 类型和 as any 断言，这提供了 TS 的灵活度。

## 2-3 重要问题
## 2-4 类型注解和类型断言
## 2-5 编译和编译优化
> tsc --noEmitOnError  不编译有错误的文件
> ts-node xxx.ts       编译运行一体化

## 2-7 常用的24种 TS 类型
- **基本类型:**
  > number, string, boolean, symbol, null, undefined
- **根类型:**
  > Object, {}
- **对象类型:**
  > Array, object, function
- **枚举:**
  > enum
- **其他特殊类型:**
  > any, unknown, never, void, 元组(tuple), 可变元组
- **合成类型:**
  > 联合类型，交叉类型
- **字面量数据类型:**
  