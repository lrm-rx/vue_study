
interface Customer {
  name: string
  degree: number
  phone: string
}

type Keys = keyof Customer

type DirectKeys<T> = T extends any ? T : never
type CustKeys = DirectKeys<keyof Customer>


export { }