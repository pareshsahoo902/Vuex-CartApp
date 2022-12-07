<template>
  <div id="cart">
    <div class="summary">
        <h3>Cart</h3>
        <h5>Total Items : {{ total }}</h5>
    </div>
    <div class="row" v-for="item in cartList" :key="item.id">
        <h4>{{ item.name }}</h4>
        <h5 class="price">{{ item.price }}</h5>
        <span @click="removeFromCart(item)">Remove</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

    name:'cart-list',
    computed:{
        ...mapGetters({
            total:'totalCartCount',
            cartList:'cartListItems'
        })
    },
    methods:{
        removeFromCart(item){
            this.$store.commit('removeFromCart',item);
        }
    }
}
</script>

<style>
    #cart{
        box-shadow: 1px 1px 2px 1px #ccc;
        margin :20px;
        padding :20px;
        display:inline-block;
        width:300px;
        text-align: left;

    }
    .summary{
        text-align: center;
    }
    .row{
        justify-content: space-between;
        display: flex;
        align-items: center;
    }

    .row h4 {
        display:inline-block;
        width: 30%;
        margin: 0 0 10px 0;
        box-sizing: border-box;
    }

    .row span{
        color: red;
        cursor: pointer;

    }
    .price{
        display: inline-block;
        width: 38%;
        text-align: right;
    }
   
</style>