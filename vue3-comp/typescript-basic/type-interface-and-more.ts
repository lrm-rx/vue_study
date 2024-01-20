// type interface 
let str = "ming"

// union types
let numberOrString: number | string
function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  }
  const number = input as number
  return number.toString().length
}

// type guard
function getLength2(input: string | number): number {
  if (typeof input === "string") {
    return input.length
  }
  return input.toString().length
}

export { }