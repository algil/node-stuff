'use strict';

const fs = require('fs');
const { promisify } = require('util');
const { getFilePath } = require('../util/path');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const fetchFromFile = async filename => {
  const file = getFilePath(filename);
  return JSON.parse(await readFileAsync(file));
};

const saveIntoFile = async (filename, collection) => {
  const file = getFilePath(filename);
  writeFileAsync(file, JSON.stringify(collection));
};

module.exports = {
  fetchFromFile,
  saveIntoFile
};
