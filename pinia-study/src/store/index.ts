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
