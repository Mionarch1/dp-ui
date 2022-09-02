import { createApp } from 'vue';
import plugins from '@docs/plugins';
import App from '@docs/App';
import '@docs/styles';

import DPUI from '@packages';
import '@themes';

const app = createApp(App);
app.use(plugins);
app.use(DPUI);
app.mount('#app');
