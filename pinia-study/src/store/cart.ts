/*
 * @Author: lrm
 * @Date: 2022-11-02 15:15:24
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-02 16:59:31
 * @FilePath: \pinia-study\src\store\cart.ts
 */
import { defineStore } from 'pinia'
import { IProduct, buyProducts } from '../api/shop'
import { useProductsStore } from './products';

// 合并
type CartProduct = {
  quantity: number
} & Omit<IProduct, 'inventory'>
// Omit<IProduct, 'inventory'> 过滤 IProduct 中的 inventory
// 参数：第一个为继承的type类型，第二个为想要的key的字符串，多个字符串用|分开
export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartProducts: [] as CartProduct[], // 购物车商品列表
      checkoutStatus: null as null | string
    }
  },
  
  getters: {
    totalPrice(state){
      return state.cartProducts.reduce((total, item)=>{
        return total + item.price * item.quantity
      }, 0)
    }
  },

  actions: {
    addProductToCart(product: IProduct) {
      /**
       * 1. 查看商品有没有库存
       * 2. 检查购物车中是否已有该商品
       * 3. 如果有则让商品的数量加1
       * 4. 如果没有则添加到购物车列表中
       */

      // 1. 查看商品有没有库存
      if(product.inventory < 1) {
        alert(`${product.title}没有库存了`)
        return
      }
      // 2. 检查购物车中是否已有该商品
      const cartItem = this.cartProducts.find(item=>item.id === product.id)
      if(cartItem) {
        // 3. 如果有则让商品的数量加1
        cartItem.quantity++
      }else{
        // 4. 如果没有则添加到购物车列表中
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1
        })
      }
      // 更新库存
      // product.inventory-- // 不能通过传过来的参数直接修改
      // 修改源数据
      const productsStore = useProductsStore()
      productsStore.decrementProduct(product)
    },

    async checkout() {
      const res = await buyProducts()
      this.checkoutStatus = res ? '成功':'失败'
      if(res) {
        this.cartProducts = []
      }
    }
  }
})