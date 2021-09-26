import Vue from 'vue'
 
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('message-component', require('./components/MessageComponent.vue').default);


const app = new Vue({
    el: '#app',
    data:{
        message:'',
        chat:{
            message:[],
        }
    },
    methods:{
        send(){
            if(this.message.length != 0)
            {
                this.chat.message.push(this.message);
                this.message = '';
            }
        }
    }
});
