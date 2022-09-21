import createInstance from './instance.js';

const Message = {};

['success', 'warning', 'error'].forEach(type => {
  Message[type] = config => {
    const content = typeof config === 'string' ? config : config.content;
    return createInstance({
      type,
      content,
      duration: config.duration || 3000
    });
  };
});

export default Message;
