// type alias
let sum: (x: number, y: number) => number = (x, y) => x + y
const result = sum(2, 4)
type PlusType = (x: number, y: number) => number
let sum1 = (x, y) => x + y
const result2: PlusType = sum1(2, 4)

type StrOrNumber = string | number
let result3: StrOrNumber = "12"
result3 = 123

const str: "name" = "name"
const number: 1 = 1

type Directions = "Up" | "Down" | "Left" | "Right"
let toWhere: Directions = "Left"

interface IName {
  name: string
}

type IPerson = IName & { age: number }
let person: IPerson = {
  name: "123",
  age: 123
}

export { }