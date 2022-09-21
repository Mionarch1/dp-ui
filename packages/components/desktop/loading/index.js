import { createApp } from 'vue';
import Loading from './loading';

let instance = null;

const open = (config = {}) => {
  if (document.querySelector('.dp-loading')) return;
  let loadingNode = document.createElement('div');
  let attr = document.createAttribute('class');
  attr.value = 'dp-loading-wrapper';
  loadingNode.setAttributeNode(attr);

  instance = createApp(Loading, {
    ...config,
    visible: true,
    remove() {
      close();
    }
  });
  instance.vm = instance.mount(loadingNode);
  document.body.appendChild(loadingNode);
};

const close = () => {
  const loadingNode = document.querySelector('.dp-loading-wrapper');
  instance.unmount(loadingNode);
  document.body.removeChild(loadingNode);
  instance = null;
};

export default {
  open,
  close
};
