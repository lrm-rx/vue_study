let salary: [string, number, number] = ["lpl", 1, 2]
const account = [10, 20, 30] as const  // 设置只读
// account[1] = 200

// let people: [string, number, number, number] = ["adc", 10, 30, 20]

// 可变元组
let people: [string, number, ...any[]] = ["adc", 10, 30, 20]
// 可变元组解构
let [name, age, ...rest]: [name: string, age: number, ...rest: any[]] = ["adc", 10, 30, 20]

// 可变元组tag(标签)


export { }