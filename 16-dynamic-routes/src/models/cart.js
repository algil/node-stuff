'use strict';

const { fetchFromFile, saveIntoFile } = require('../util/storage');

class Cart {
  static async addProduct({ id, price }) {
    const cart = await Cart.getCart();

    if (!cart.products) {
      cart.products = [];
      cart.totalPrice = 0;
    }

    const productFoundIndex = cart.products.findIndex(
      product => product.id === id
    );

    if (productFoundIndex !== -1) {
      cart.products[productFoundIndex].quantity++;
    } else {
      cart.products.push({
        id,
        quantity: 1
      });
    }

    cart.totalPrice += +price;

    await saveIntoFile('cart', cart);
  }

  static async deleteProduct({ id, price }) {
    const cart = await Cart.getCart();

    const productFound = cart.products.find(product => product.id === id);

    if (productFound) {
      cart.products = cart.products.filter(product => product.id !== id);
      cart.totalPrice = cart.totalPrice - price * productFound.quantity;
      await saveIntoFile('cart', cart);
    }
  }

  static async getCart() {
    return (await fetchFromFile('cart')) || {};
  }
}

module.exports = Cart;
