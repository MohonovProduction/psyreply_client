import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import components from '@/components/UI/index'



//Crunch
localStorage.setItem('user_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInRva2VuVHlwZSI6MiwiYmxvY2tJZCI6MTQyLCJ3ZWVrIjoxLCJpYXQiOjE2NzEwNDgxOTYsImV4cCI6MTY3OTY4ODE5Nn0.gTHknYr9__xomF7xyil2ySYRcRaI5voQG_sPBbfNlLQ')

const app = createApp(App)

components.forEach(component => app.component(component.name, component))

app.use(store).use(router).mount('#app')
