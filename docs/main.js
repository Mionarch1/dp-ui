import { createApp } from 'vue';
import plugins from '@docs/plugins';
import App from '@docs/App';
import '@docs/styles';

import DPUI from '@packages/components/desktop';
import '@themes/desktop';
import DPMUI from '@packages/components/mobile';
import '@themes/mobile';
import MaterialUI from '@packages/components/material';
import '@themes/material';

const app = createApp(App);
app.use(plugins);
app.use(DPUI);
app.use(DPMUI);
app.use(MaterialUI);
app.mount('#app');
