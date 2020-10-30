#!/usr/bin/env node
const { execSync } = require('child_process');
const getPackageName = require('./libs/get-package-name');
const getPackagePath = require('./libs/get-package-path');
const copyFile = require('./libs/copy-file');

(async () => {
  const name = await getPackageName();
  const path = await getPackagePath();
  if (path) {
    execSync(`mkdir ${name}`);
    await copyFile(`${name}`);
  }
})();
