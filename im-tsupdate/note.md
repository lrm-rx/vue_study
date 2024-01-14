# typescript

### TS关于泛类约束Partial＜T＞、Required＜T＞、Readonly＜T＞、Pick/Omit、Exclude、Extract、ReturnType、Record

#### Partial＜T＞：快速把某个接口类型中定义的属性变成可选

```typescript
type User = {
  id: number;
  name: string;
  age: number;
}

type UpdatedPerson = Partial<User>;

// 等价于

type UpdatedPerson = {
  id?: number;
  name?: string;
  age?: number;
}

// 实现原理
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

> **`keyof` 是 TS 中的索引类型查询操作符**

```
interface User {
  name: string;
  age: number;
  gender: string;
}

type UnionType = keyof User;
// 等价于
type UnionType = "name" | "age" | "gender";
```



#### Required\<T>：把所有可选属性变成必选属性

```typescript
interface Person {
    name: string;
    age: number;
    sex?: string;
}

type PersonRequired = Required<Person>;
// 等价于
interface PersonRequired {
		name: string;
    age: number;
    sex: string;
}
 
// 实现原理
type Required<T> = {
    [P in keyof T]-?: T[P] // `-?` 符号是一个操作符，用于将属性变为必需的，即必须存在并且不能为 undefined 或 null。
}
```



#### Readonly\<T>:把所有属性变成只读属性

```typescript
// 实现原理
type Readonly<T> = {
	readonly [P in keyof T]: T[P];
};
```

#### Pick/Omit **获取/排除 key 类型**

```typescript
interface User{
    id:string;
    name:string;
    age:string;
}
// pick表示获取一个类型中的某些key
// 此时User1就拥有了User中的id和name
type User1 = Pick<User,'id'|'name' >
// 实现
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// Omit则与pick相反
// 表示排除一个类型的某些key
// type User2 = {age: string;}
type User2 = Omit<User,'id'|'name' >
// 实现
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

#### Exclude 排除类型

```typescript
type Dir='1'|'2'|'3'|'4'

// type dir1 = "3" | "4"
type dir1 = Exclude<Dir,'1'|'2'>
```



#### Extract 提取类型

```typescript
type Dir='1'|'2'|'3'|'4'

// type dir1 = "1" | "2"
type dir1 = Extract<Dir,'1'|'2'>
```



#### ReturnType 返回值类型

```typescript
function fn(a:number,b:number){
 return a + b
}
// type A = number
type A = ReturnType<typeof f>
```



#### Record

> `Record`的内部定义，接收两个泛型参数；`Record`后面的泛型就是对象键和值的类型
>
> 作用 :义一个对象的 key 和 value 类型

> 源码

```typescript
Record<key type, value type> 
```

>`Record<string, never>` 空对象
> `Record<string, unknown> `任意对象
> `{}` 任何不为空的对象

```typescript
type Record<K extends string | number | symbol, T> = {
    [P in K]: T;
}
```

> **逐步解析**

>泛型K即为第一次参数
> p in xx 又是什么意思呢？
> in的意思就是遍历，如上就是将 类型string进行遍历，也就是string
> 每个属性都是传入的T类型，如 string: PersonModel

### ts装饰器

注意装饰器的执行顺序：
属性装饰器>方法装饰器>方法参数装饰器>类装饰器
如果一个方法有两个装饰器， 那么 后面的装饰器先执行，再到前面的