'use strict';

const { fetchCollectionFromFile, saveIntoFile } = require('../util/storage');

class Product {
  constructor(title) {
    this.title = title;
  }

  async save() {
    let products = await fetchCollectionFromFile('product');
    products.push(this);
    await saveIntoFile('product', products);
  }

  static async fetchAll() {
    return await fetchCollectionFromFile('product');
  }
}

module.exports = Product;
