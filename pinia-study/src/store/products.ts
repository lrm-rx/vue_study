import { defineStore } from 'pinia'
import { getProducts, IProduct } from '../api/shop'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      allProducts: [] as IProduct[] // 所有商品列表
    }
  },
  
  getters: {},

  actions: {
    // 获取全部商品
    async getAllProducts() {
      const res = await getProducts()
      this.allProducts = res
    },
    // 添加到购物车之后减少库存
    decrementProduct(product: IProduct) {
      const res = this.allProducts.find(item => item.id === product.id)
      if(res) {
        res.inventory--
      }
    }
  }
})