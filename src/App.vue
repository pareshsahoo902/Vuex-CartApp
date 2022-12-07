<template>
  <wishlist></wishlist>
  <cart-list></cart-list>
</template>

<script>
import CartList from './components/CartList.vue'
import Wishlist from './components/Wishlist.vue'

export default {
  name: 'App',
  components: {
    Wishlist,
    CartList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
