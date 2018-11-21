'use strict';

const fs = require('fs');
const { promisify } = require('util');
const { getFilePath } = require('../util/path');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const fetchCollectionFromFile = async filename => {
  const file = getFilePath(filename);
  let collection = [];

  try {
    collection = JSON.parse(await readFileAsync(file));
  } catch {}

  return collection;
};

const saveCollectionIntoFile = async (filename, collection) => {
  const file = getFilePath(filename);
  writeFileAsync(file, JSON.stringify(collection));
};

module.exports = {
  fetchCollectionFromFile,
  saveCollectionIntoFile
};
