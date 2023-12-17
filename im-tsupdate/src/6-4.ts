class Order {
  orderid!: boolean
  ordername!: string
  static count: number
  printOrd() { }
  static getCount() { }
}

// 泛型约束
type InstancePropKeys<T extends object> = keyof T

type OrdPropKeys = InstancePropKeys<Order>


// type OrdIdType = Order["orderid"]

type OrdInstanceAttrNames = keyof Order
// let oian: OrdInstanceAttrNames = "orderid"

export { }