export interface IProduct {
  id: number
  title: string
  price: number
  inventory: number
}

const _products: IProduct[] = [
  {id: 1, title: 'iPad 8 Mini', price: 5500.02, inventory: 2},
  {id: 2, title: 'iphone 14 pro', price: 8888, inventory: 10},
  {id: 3, title: 'iphone 13', price: 7999, inventory: 5},
]

export const getProducts = async () => {
  await wait(100)
  return _products
}

export const buyProducts = async () => {
  await wait(100)
  return Math.random() > 0.5
}

async function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay))
}