const app = Vue.createApp({
    data(){
        return{
            appMessage: 'First Vue app presenting',
            plantColor: 'Yellow',
            plantType: 'Sunflower',
            boarderColor: "red",
            picture: 'https://www.jimmysoftllc.com/img/about/4.jpg' 
        }
    },
    methods:{
        buttonPressed(){
            prompt("button pressed")
        }
    }
})

app.mount('#app')