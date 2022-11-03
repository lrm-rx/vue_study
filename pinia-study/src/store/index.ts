/*
 * @Author: lrm
 * @Date: 2022-11-01 22:28:16
 * @LastEditors: lrm
 * @LastEditTime: 2022-11-02 14:44:36
 * @FilePath: \pinia-study\src\store\index.ts
 */
import {useMainStroe} from "./PiniaWorld";
import {useProductsStore} from "./products"
import {useCartStore} from "./cart"

export default function useStore() {
  return {
    mainStroe: useMainStroe(),
    products: useProductsStore(),
    cartProducts: useCartStore()
  };
}
