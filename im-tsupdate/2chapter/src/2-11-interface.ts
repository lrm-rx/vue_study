interface Product {
  name: string,
  price: number,
  account: number,
  buy(): void
}

let p: Product = {
  name: "phone",
  price: 10000,
  account: 10,
  buy() { }
}

function getProduct(p: Product) {
  console.log(p);
}

getProduct(p)

interface Pet {
  name: string,
  love: number,
  health: number,
  toHealth(): void
}

interface Dog extends Pet {
  strain: string,
  guardHome(): void
}

interface List {
  add(): void,
  remove(): void
}

class ArrayList implements List {
  add(): void {
    throw new Error("Method not implemented.")
  }
  remove(): void {
    throw new Error("Method not implemented.")
  }
}

class LinkedList implements List {
  add(): void {
    throw new Error("Method not implemented.")
  }
  remove(): void {
    throw new Error("Method not implemented.")
  }
}

export { }