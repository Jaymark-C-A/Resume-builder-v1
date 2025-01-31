import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/fontawesome/css/all.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import the router setup

const app = createApp(App);

// Register the router with the app instance
app.use(router);

app.mount('#app');
