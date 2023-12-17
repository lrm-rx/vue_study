interface Customer {
  custname: string
  buymoney: number
}

// infer 的三种使用

type CustFn = (params: Customer) => string;
// type CustParaType = CustFn extends (params: infer P) => any ? P : CustFn

type ParamsType<T> = T extends (params: any) => infer R ? R : never
type CustParaType = ParamsType<CustFn>

type EleOfArr<T> = T extends Array<infer P> ? P : never
type EleOfArrTest = EleOfArr<Array<{ name: string, age: number }>>

export { }