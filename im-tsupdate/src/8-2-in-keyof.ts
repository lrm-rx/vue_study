interface Customer {
  name: string
  degree: number
  phone: string
}

type CustKeyValuesType = {
  [P in keyof Customer]: Customer[P]
}

export { }