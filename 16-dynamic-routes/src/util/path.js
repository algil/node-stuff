'use strict';

const path = require('path');

const rootDir = path.dirname(process.mainModule.filename);
const viewsDir = path.join(rootDir, 'views');
const publicDir = path.join(rootDir, 'public');
const dataDir = path.join(rootDir, 'data');

const getViewFile = htmlFileName => {
  return path.join(viewsDir, `${htmlFileName}.html`);
};

const getFilePath = filename => {
  return path.join(dataDir, `${filename}.json`);
};

module.exports = {
  rootDir,
  viewsDir,
  publicDir,
  getViewFile,
  getFilePath
};
