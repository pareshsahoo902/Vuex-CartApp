import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios';
import store from './store';

//Global declaration for Base Url  and headers
Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
Axios.defaults.headers.get['axios-header-demo'] = 'axiosaxiosheader-testing for demo header';




//Interceptors :
//Request Interceptors

Axios.interceptors.request.use(
    function(config){

        //write anything you want to do while requesting anything.
        //1.Send the access token from local storage .
        //2.any language header 
        //
        return config;
    },
    function(error){
        return Promise.reject(error);
    }

)

//Response Interceptors

Axios.interceptors.response.use(
    function(res){
        //1.Check for the status code and send the user to login again.
        //2.Check status code and show popup
        //3.manipulate data
        
        res.data = [{
            userId:0,
            body:'Nothing found in the API ! Please Try Again',
            title: '404 - Not FOund',
            id:0}
        ]
        return res;
       
    },
    function(error){
        return Promise.reject(error);
    }
)


createApp(App).use(store).mount('#app')
