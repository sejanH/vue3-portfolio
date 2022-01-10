require("./vanilla");
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);

app.component('Navbar',require('./components/Navbar').default);

app.mount('#app');