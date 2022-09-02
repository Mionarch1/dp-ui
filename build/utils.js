const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const resolve = dir => {
  return path.resolve(__dirname, dir);
};

const loadEnv = (envType = 'production', reg = /^(VUE_|APP_|DP_)/) => {
  const envObj = {};

  function mergeEnv(obj) {
    for (const [key, value] of Object.entries(obj)) {
      if (reg.test(key)) {
        envObj[key] = value;
      }
    }
  }

  const envFiles = [
    resolve('./env/.env'),
    resolve(`./env/.env.${envType}`),
    resolve('./env/.env.local'),
    resolve(`./env/.env.${envType}.local`)
  ];

  envFiles.forEach(envFile => {
    if (fs.existsSync(envFile)) {
      mergeEnv(
        dotenv.config({
          path: envFile,
          override: true
        }).parsed
      );
    }
  });

  return envObj;
};

module.exports = {
  resolve,
  loadEnv
};
