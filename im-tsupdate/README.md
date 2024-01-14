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

## any, unknown 的两点区别和应用场景
### any和unknown在开发中和第三方包底层源码经常看到,弄清楚它们的区别很重要.
- **相同点: **any和unknown可以是任何类的父类, 所以任何类型的变量都可以赋值给any类型或unknown类型的变量.
- **不同点1: **any也可以是任何类型的子类, 但 unknown 不可以, 所以 any 类型的变量都可以赋值给其他类型的变量.
- **不同点2: **不能拿 unknown 类型的变量来获取任何属性和方法,但 any 类型的变量可以获取任意名称的属性和任意名称的方法.
> ** any 比较典型的应用场景**: 1. 自定义守卫 2.需要进行 as any 类型断言的场景
> **一般用作函数参数: **用来接受任意类型的变量实参, 但在函数内部只用于再次传递或输出结果,不获取属性和场景.
  
## 接口和应用场景
1. **接口: **另一种定义对象类型的类型
2. **接口应用场景: **
   - 一些第三方包或者框架底层源码中有大量的接口类型
   - 提供方法的对象类型的参数时使用
   - 为多个同类别的类提供统一的方法和属性声明
3. **如何定义接口**
4. **继承接口**
**新的接口只是在原来接口继承之上增加了一些属性或方法, 这时就用接口继承**

## interface 和 type区别
### type 和 接口类似, 都用来定义类型, 但 type 和 interface 区别如下:
- 区别1: 定义类型范围不同
  - interface 只能定义对象类型或接口当名字的函数类型.
  - type 可以定义任何类型, 包括基础类型,联合类型,交叉类型, 元组.
  ```typescript
  // type 定义基础类型
  type num = number

  // type 定义联合类型1
  type baseType = string | number | symbol

  // type 定义联合类型2
  interface Car {brandNo: string}
  interface Plane {No: string; brandNo: string}
  type TypeTools = Car | plane

  // 元组
  interface Car {brandNo: string}
  interface Plane {No: string; brandNo: string}
  type typeTools = [Car, Plane]
  ```
- 区别2: 接口可以 extends 一个或者多个接口或类, 也可以继承 type, 但 type 类型没有继承功能, 但一般接口继承 类 和 type 的应用场景很少见.
- 区别3: 用 type 交叉类型 & 可让类型中成员合并成一个新的 type 类型, 但接口不能交叉合并.
- 区别4: 接口可合并声明
  > 定义两个相同名称的接口会合并声明,定义两个同名的 type 会出现编译错误.
  ``` typescript
  interface Error{
    name: string;
  }

  interface Error {
    message: string;
    stack?: string;
  }
  // 接口合并
  let error: Error = {
    message: "空指针",
    name: "NullPointException"
  }
  ```

  ## 元组
  ### 满足以下3点的数组就是元组
  - 在定义时每个元素的类型都确定
  - 元素值的数据类型必须是当前元素定义的类型
  - 元素值的个数必须和定义时个数相同

## 类, 静态属性, 何时用静态属性
1. **定义: 类就是拥有相同属性和方法的一系列对象的集合.**
2. **展开理解: 类是一个模具, 是从这该类包含的所有具体对象中抽象出来的一个概念, 类定义了它所包含的全体对象的静态特征和动态特征.**
3. **举例:**
   - **people类**
  静态循环[属性] name, age, address, phone
  动态特征[方法] doEat, doSport
   - **desk类**
  静态循环[属性] height, width, color, price, brandNo, material
  动态特征[方法] load
   - **order类**
  静态特征[属性] orderId, orderTime, customName
  动态特征[方法] createOrder, modifyOrder, delOrder, chargeBack

## 方法拦截器理解和总结
- 生成新的数据属性 xxx
- 保存 xxx.value , 以保留原来的方法
- 然后修改 xxx.value 的指向, 指向新的空间,创建了一个内存地址赋值给了value
- 然后通过 Object.defineProperty 把修改了 value 指向的 xxx 绑定到原来的方法上
- 执行原来方法,就会找到 xxx.value 的指向的方法来执行

## 深入类型守卫和应用场景
**类型守卫定义:** 在语句的块级作用域[ if语句内或条目运算符表达式内 ]缩小变量的一种类型推断的行为.
**类型守卫产生时机:** TS 条件语句中遇到下列条件关键字时, 会在语句块级作用域内缩小变量的类型, 这种类型推断的行为叫作类型守卫. 类型守卫可以帮助我们在块级作用域中获得更为需要的精确变量类型.
+ 实例判断: instanceof
+ 属性或者方法判断: in
+ 类型判断: typeof
+ 字面量相等判断: ==, ===, !=, !==

## TS自定义守卫
```javascript
function 函数名(形参: 参数类[参数类型大多为any]): 形参 is A类型 {
  return true or false
}
```

## TS in keyof keyof 实战应用 -- 扁平模块化属性名 (8-5.ts)
## TS 高级类型 Extract  (8-7.ts)
## TS 高级类型 -- Exclude 和 它的真实应用 (8-7.ts)