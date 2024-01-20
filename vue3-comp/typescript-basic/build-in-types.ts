//global objects
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')

//build-in object
Math.pow(2, 2)

//DOM and BOM
let body = document.body
let allLis = document.querySelectorAll('li')
allLis.keys()

document.addEventListener('click', (e) => {
  e.preventDefault()
})

//Utility Types
interface IPerson {
  name: string
  age: number
}
let lucky: IPerson = { name: 'lucky', age: 20 }
type IPartial = Partial<IPerson>
let lucky2: IPartial = { name: 'lucky' }
type IOmit = Omit<IPerson, 'name'>
let lucky3: IOmit = { age: 20 }