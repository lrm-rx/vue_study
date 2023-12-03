// 可索引签名
interface Product {
  name: string,
  price: number,
  account: number,
  [x: string]: any
}

let p: Product = {
  name: "ok",
  price: 100,
  account: 100,
  desc: "123",
  [Symbol("stock")]: 1000,
  100: "ok"
}

export { }