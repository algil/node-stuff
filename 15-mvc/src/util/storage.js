'use strict';

const fs = require('fs');
const { promisify } = require('util');
const { getDataFile } = require('../util/path');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const fetchCollectionFromFile = async filename => {
  const file = getDataFile(filename);
  let collection = [];

  try {
    collection = JSON.parse(await readFileAsync(file));
  } catch {}

  return collection;
};

const saveCollectionIntoFile = async (filename, collection) => {
  writeFileAsync(filename, JSON.stringify(collection));
};

module.exports = {
  fetchCollectionFromFile,
  saveCollectionIntoFile
};
