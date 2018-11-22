'use strict';

const { fetchFromFile, saveIntoFile } = require('../util/storage');

class Product {
  constructor(title) {
    this.title = title;
  }

  async save() {
    let products = (await fetchFromFile('product')) || [];
    products.push(this);
    await saveIntoFile('product', products);
  }

  static async fetchAll() {
    return (await fetchFromFile('product')) || [];
  }
}

module.exports = Product;
