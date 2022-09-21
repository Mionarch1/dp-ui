import { reactive } from 'vue';

const config = reactive(null);

export const useGlobalConfig = (key, value) => {
  config[key] = value;
  return config[key];
};
