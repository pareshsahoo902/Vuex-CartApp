<template>
  <div id="wishlist">
    <h3>wishlist</h3>
    <hr>
    <div class="row" v-for="item in Items" :key="item.id">
    <h4>{{ item.name }}</h4>
    <button @click="this.addToCart(item)">Add</button>
    </div>
</div>
</template>

<script>
export default {
    name:'wish-list',
    computed:{
        Items(){
            return this.$store.getters.wishListItems;
        }
    },
    methods:{
        addToCart(item){
            this.$store.commit('addtoCart',item);
        }
    }
}
</script>

<style>
    #wishlist{
        box-shadow: 1px 1px 2px 1px #ccc;
        margin :20px;
        padding :20px;
        display:inline-block;
        width:300px;
        text-align: left;

    }
    button{
        background-color: aquamarine;
        border: none;
        font-size: inherit;
        cursor: pointer;
        text-align: center;
        width: 38%;
        height: 34px;
    }
    
    .row{
        justify-content: space-between;
        display: flex;
        margin: 5px;
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

   
</style>