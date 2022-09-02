import { createApp } from 'vue';
import plugins from '@docs/plugins';
import App from '@docs/App';
import '@docs/styles';

const app = createApp(App);
app.use(plugins);
app.mount('#app');
