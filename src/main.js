import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

// import {getCategoryAPI} from "@/apis/test"
import "@/styles/common.scss"

// getCategoryAPI().then(res => {
//     console.log('11111111111111', res)
// })


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

