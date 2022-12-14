import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import components from '@/components/UI/index'



//Crunch
localStorage.setItem('hash_to_pass', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOjEsImJsb2NrSWQiOjEwOSwid2VlayI6MSwiaWF0IjoxNjcxMDEyNzQzLCJleHAiOjE2Nzk2NTI3NDN9.eRuNQWgGhKurewP8L_Zn9R7JnEMWDhp4Bu-TiMGLY2s')

localStorage.setItem('user_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInRva2VuVHlwZSI6MiwiYmxvY2tJZCI6MTQyLCJ3ZWVrIjoxLCJpYXQiOjE2NzEwNDgxOTYsImV4cCI6MTY3OTY4ODE5Nn0.gTHknYr9__xomF7xyil2ySYRcRaI5voQG_sPBbfNlLQ')

const app = createApp(App)

components.forEach(component => app.component(component.name, component))

app.use(store).use(router).mount('#app')
