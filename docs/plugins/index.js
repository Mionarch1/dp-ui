import router from '@docs/router';
import markdown from '@docs/components/markdown';
import Amplitude from './amplitude';


const install = app => {
  app.use(router);
  app.use(markdown);
  const plugins = {};
  app.use(Amplitude, {
    apiKey: process.env.VUE_APP_AMPLITUDE_API_KEY,
    userId: null
  });
  Object.assign(app.config.globalProperties, plugins);
};
export default { install };
