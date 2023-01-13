import { createApp } from 'vue'
import App from './App'
import comp from '@/components/UI'

const app = createApp(App);

comp.forEach(el => {
  app.component(el.name, el);
})

app.mount('#app');
