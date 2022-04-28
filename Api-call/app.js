const app = Vue.createApp({
    data(){
        return{
            appMessage: 'First Vue app presenting',
            name: 'Sunflower',
            boarderColor: "red",
            picture: 'https://www.jimmysoftllc.com/img/about/4.jpg' 
        }
    },
    methods:{
        async buttonPressed(){
            const res = await fetch('https://api.github.com/users/defunkt')
            const data = await res.text()
            const obj = await JSON.parse(data)
            this.picture = obj.avatar_url 
            this.name = obj.name
        }
    }
})

app.mount('#app')