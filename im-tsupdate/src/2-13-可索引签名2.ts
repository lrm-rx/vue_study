// 可索引签名 2
const symid = Symbol("productno")
interface Product {
  [symid]: number | string,
  name: string,
  price: number,
  account: number,
  buy(): void
}

type A = Product["name"]

type B = Product["price" | "name"]

type C = Product[typeof symid]

type PKeys = keyof Product // "name" | "price" | "account" | "buy" | typeof symid
let pKeys: PKeys = "account"
let pKeys2: "name" | "price" | "account" | "buy" | typeof symid = "name"

type AllKeys<T> = T extends any ? T : never
type Pkeys3 = AllKeys<keyof Product>

export { }