import productStore from "./productStore.js";

import { defineStore } from "pinia";

export default defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      // console.log(productId, qty);
      // 判斷購物車是否有相同產品
      const sameProduct = this.cart.find(
        (item) => item.productId === productId
      );
      // console.log(sameProduct);
      if (sameProduct) {
        sameProduct.qty++;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
      }
      // console.log(this.cart);
    },
    removeCartItem(id) {
      // 找出購物車要刪除的索引位置
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
    setCartQty(qty = 1, id) {
      // console.log(qty, id);
      const cartItem = this.cart.find((item) => item.id === id);
      cartItem.qty = qty * 1;
    },
  },
  getters: {
    cartList: ({ cart }) => {
      // 1. 購物車品項資訊整合產品資訊
      // 2. 必須計算小計金額
      // 3. 必續算出總金額

      // 從另一個 store 取用資料寫法
      const { products } = productStore();
      // console.log(products);
      const carts = cart.map((item) => {
        // 取出要加入購物車的產品資訊
        const product = products.find((data) => data.id === item.productId);
        // 將購物車品項依序加入產品資訊及小計金額
        return {
          ...item,
          product,
          subTotal: product.price * item.qty,
        };
      });
      // console.log(carts);

      const total = carts.reduce((acc, cur) => acc + cur.subTotal, 0);
      // console.log(total);
      return {
        carts, // 列表
        total,
      };
    },
  },
});
