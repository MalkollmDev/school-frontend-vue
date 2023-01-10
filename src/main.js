import { createApp } from 'vue'
import App from './App.vue'
import HeaderComponent from './components/HeaderComponent'
import MainComponent from './components/BodyComponent'
import FooterComponent from './components/FooterComponent'
import TestComponent from './components/TestComponent'

const app = createApp(App);
app.component('header-component', HeaderComponent)
app.component('main-component', MainComponent)
app.component('footer-component', FooterComponent)
app.component('test-component', TestComponent)
app.mount('#app');
