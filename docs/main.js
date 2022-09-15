import { createApp } from 'vue';
import plugins from '@docs/plugins';
import App from '@docs/App';
import '@docs/styles';

import DPUI from '@packages/desktop';
import '@themes/desktop';
import DPMUI from '@packages/mobile';
import '@themes/mobile';
import MaterialUI from '@packages/material';
import '@themes/material';

const app = createApp(App);
app.use(plugins);
app.use(DPUI);
app.use(DPMUI);
app.use(MaterialUI);
app.mount('#app');
