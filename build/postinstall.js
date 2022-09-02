#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

(() => {
  const envLocal = path.resolve(__dirname, './env/.env.local');
  const isExists = fs.existsSync(envLocal);
  if (!isExists) {
    fs.copyFileSync(
      path.resolve(__dirname, './env/.env.example'),
      envLocal,
      fs.constants.COPYFILE_FICLONE
    );
  }
})();
