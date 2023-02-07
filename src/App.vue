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
  <div class="container">
    <navbar-component></navbar-component>
    <cart-component></cart-component>
    <products-component></products-component>
  </div>
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
