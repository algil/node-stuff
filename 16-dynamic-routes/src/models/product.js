'use strict';

const uuid = require('uuid/v4');

const { fetchFromFile, saveIntoFile } = require('../util/storage');
const Cart = require('./cart');

class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  async save() {
    try {
      let products = await Product.fetchAll();

      if (this.id) {
        const index = products.findIndex(product => product.id === this.id);
        products[index] = { ...this };
      } else {
        this.id = uuid();
        products.push(this);
      }

      await saveIntoFile('product', products);
    } catch (error) {
      console.error(error);
    }
  }

  static async fetchAll() {
    return (await fetchFromFile('product')) || [];
  }

  static async findById(productId) {
    const products = await Product.fetchAll();
    return products.find(product => product.id === productId);
  }

  static async delete(productId) {
    try {
      let products = await Product.fetchAll();
      let product = products.find(product => product.id === productId);
      products = products.filter(product => product.id !== productId);
      await saveIntoFile('product', products);
      await Cart.deleteProduct(product);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Product;
