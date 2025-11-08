import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')

app.mount('#app')
AOS.init({
  duration: 800, // durasi animasi (ms)
  once: true,    // animasi hanya sekali
  offset: 50,    // jarak sebelum elemen terlihat
})