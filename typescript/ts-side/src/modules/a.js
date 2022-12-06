// export const name = 'ming'
// export const age = 18
// export const addr = 'yulin'

const name = 'ming'
const age = 18
const addr = 'yulin'
export {name, age, addr}

export function func () {}
export class A {}

function func1() {}
class B {}
const b = ''

export {
  func1 as fn1,
  B as classB,
  b as StrB
}