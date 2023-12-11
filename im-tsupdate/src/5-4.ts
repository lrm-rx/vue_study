class Customer {
  custName
  buy() { }
}

console.log(Object.prototype.toString.call(Customer))
let cust = new Customer()
console.log(Object.prototype.toString.call(cust))

export { }