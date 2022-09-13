import '@themes/material'
import * as components from './components';

export default {
  install: Vue => {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
      // Vue.config.globalProperties.$ = component;
    });
  }
};
