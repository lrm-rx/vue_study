type T1 = {
  a: string;
  b: number
}
type T2 = {
  c: number;
  d: string
  b: string
}

type T3 = T1 & T2
const t3 = {
  a: "ming",
  b: "12",
  c: 2,
  d: "ning"
}

export { }