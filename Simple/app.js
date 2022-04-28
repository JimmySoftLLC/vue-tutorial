const app = Vue.createApp({
    template: '<h1>{{appMessage}}</h1>',
    data(){
        return{
            appMessage: 'First Vue app',
        }
    }
})

app.mount('#app')