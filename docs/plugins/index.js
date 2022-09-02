import router from '@docs/router';
import markdown from '@docs/components/markdown';

const install = app => {
  app.use(router);
  app.use(markdown);
  const plugins = {};
  Object.assign(app.config.globalProperties, plugins);
};
export default { install };
