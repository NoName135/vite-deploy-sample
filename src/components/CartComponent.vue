<template>
  <div class="bg-light my-4 p-4">
    <!-- v-if -->
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <!-- v-else -->
    <table class="table align-middle" v-else>
      <tbody>
        <tr v-for="cart in cartList.carts" :key="cart.id">
          <td width="100">
            <a href="#" class="text-dark">
              <font-awesome-icon :icon="['fas', 'times']" @click.prevent="removeCartItem(cart.id)" />
              <!-- <i class="fas fa-times" @click.prevent="removeCartItem(cart.id)"></i> -->
            </a>
          </td>
          <td width="100">
            <img :src="cart.product.imageUrl"
              class="table-image"
            >
          </td>
          <td>{{ cart.product.title }}</td>
          <td width="200">
            <select name="" id="" class="form-select" :value="cart.qty" @change="(e) => setCartQty(e.target.value, cart.id)">
              <option v-for="i in 20" :key="i" :value="i">{{ i }}</option>
            </select>
          </td>
          <td width="200" class="text-end"><span>$</span>{{ cart.subTotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT<span>$</span>{{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from '../stores/cartStore';

import { mapState, mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'setCartQty']),
  },
  computed: {
    ...mapState(cartStore, ['cartList']),
  },
}
</script>