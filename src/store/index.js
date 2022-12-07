import { createStore } from 'vuex';

export default createStore(
    {
        state:{
            cartList:[],
            wishList:[
                {id:1,name:'ipod',price:299,inCart:false},
                {id:2,name:'iphone13',price:699,inCart:false},
                {id:3,name:'macmini',price:799,inCart:false},
                {id:4,name:'iphone14promax',price:1299,inCart:false},
            ]
        },
        getters:{
            wishListItems(state){
                return state.wishList.filter(item=>{
                    return !item.inCart;
                });
            },
            cartListItems(state){
                return state.cartList;
            },
            totalCartCount(state){
                return state.cartList.length;
            }
        },
        mutations:{
            addtoCart(state,item){
                const newItem = state.wishList.find(e=>e.id == item.id);

                newItem.inCart = true;
                state.cartList.push(newItem);
            },
            removeFromCart(state,item){
                const newItem = state.wishList.find(e=>e.id = item.id);
                newItem.inCart = false;
                state.cartList.splice(state.cartList.indexOf(item),1);
            }
        }
    }
)