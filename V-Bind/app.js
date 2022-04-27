const app = Vue.createApp({
    data(){
        return{
            appMessage: 'First view app presenting',
            plantColor: 'Yellow',
            plantType: 'Sunflower',
            boarderColor: "red",
            picture: 'https://www.jimmysoftllc.com/img/about/4.jpg' 
        }
    },
    methods:{
        buttonPressed(){
            console.log(this.plantColor)
        }
    }
})

app.mount('#app')