<script>
import NavbarComponent from './components/NavbarComponent.vue';
import CartComponent from './components/CartComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue';

export default {
  components: {
    NavbarComponent,
    CartComponent,
    ProductsComponent,
  }
}
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name: '新增頁面'}">NewPage</router-link>
  </div>
  <router-view></router-view>
  <br>
  <div class="container">
    <navbar-component></navbar-component>
    <cart-component></cart-component>
    <products-component></products-component>
  </div>
  <router-link to="/newPage">前往 NewPage</router-link>
</template>

<style lang="scss">
@import "./assets/all.scss";
.table-image {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
</style>
