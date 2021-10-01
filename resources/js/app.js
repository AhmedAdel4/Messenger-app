import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('message-component', require('./components/MessageComponent.vue').default);


const app = new Vue({
    el: '#app',
    data: {
        message: '',
        chat: {
            message: [],
            user: [],
            color: [],
            date: '',
        },
        typing: '',
        numOfUsers: 0
    },
    methods: {
        send() {
            if (this.message.length != 0) {
                this.chat.message.push(this.message);
                this.chat.user.push('you');
                this.chat.color.push('success');
                var temp = this.message;
                this.message = '';
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes();
                this.chat.date = time;
                axios.post('/send', {
                    message: temp
                })
                    .then(response => {

                    })
                    .catch(error => {
                        console.log(error);
                    });


            }

        }
    },
    watch: {
        message() {
            Echo.private('chat')
                .whisper('typing', {
                    message: this.message
                });
        }
    },
    mounted() {
        Echo.private('chat')
            .listen('ChatEvent', (e) => {
                this.chat.message.push(e.message);
                this.chat.user.push(e.user.name);
                this.chat.color.push('dark');
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes();
                this.chat.date = time;
            })
            .listenForWhisper('typing', (e) => {
                if (e.message != '') {
                    this.typing = 'Typing...'
                }
                else {
                    this.typing = '';
                }
            });
        Echo.join('chat')
            .here((users) => {
                this.numOfUsers = users.length;
            })
            .joining((user) => {
                this.numOfUsers++;

            })
            .leaving((user) => {
                this.numOfUsers--;
            })
            .error((error) => {
                console.error(error);
            });

    }
});
