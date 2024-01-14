// Pick 主要用于提取 type 类型, 接口, 类中抓取需要的属性组成一个新的对象类型
interface Book {
  ISBN: string
  book_name: string
  book_price: number
  book_count: number
  publish: boolean
}

type SubBook = Pick<Book, "ISBN" | "book_name">

class Customer {
  name!: string
  age!: number
}

type SubCustomer = Pick<Customer, "name">

export { }