import { createApp } from 'vue'
import App from './App.vue'
import { router } from './plugins/router';
import { pinia } from './plugins/pinia';
import { ionic } from './plugins/ionic';
import './theme/variables.css';

const app = createApp(App)
  .use(ionic)
  .use(pinia)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
