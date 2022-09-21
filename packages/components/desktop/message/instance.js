import { createApp } from 'vue';
import { nanoid } from 'nanoid';
import dpMessage from './main.vue';

const createInstance = config => {
  config = config || {};

  let messageNode = document.createElement('div');
  messageNode.className = 'dp-message';
  messageNode.id = nanoid();

  const height = 70;
  const messageList = document.getElementsByClassName('dp-message');
  messageNode.style.top = `${70 + messageList.length * height}px`;

  const resetTop = () => {
    for (let i = 0; i < messageList.length; i++) {
      messageList[i].style.top = `${70 + i * height}px`;
    }
  };

  const handleRemove = () => {
    const element = document.getElementById(messageNode.id);
    if (!element) return;
    app.unmount(messageNode);
    document.body.removeChild(messageNode);
    resetTop();
  };

  const app = createApp(dpMessage, {
    ...config,
    remove() {
      handleRemove();
    }
  });

  app.vm = app.mount(messageNode);
  document.body.appendChild(messageNode);

  app.close = () => {
    handleRemove();
  };

  return app;
};

export default createInstance;
