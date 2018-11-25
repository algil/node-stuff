'use strict';

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = async (req, res) => {
  const products = await Product.fetchAll();

  res.render('shop/index', {
    title: 'My Shop',
    path: '/',
    products
  });
};

exports.getProduct = async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findById(productId);

  res.render('shop/product-detail', {
    title: product.title,
    path: '/products',
    product
  });
};

exports.getCart = async (req, res) => {
  const cart = await Cart.getCart();
  const products = await Product.fetchAll();
  const cartProducts = [];

  for (let product of products) {
    const productFoundInCart = cart.products.find(
      cartProduct => cartProduct.id === product.id
    );
    if (productFoundInCart) {
      cartProducts.push({ product, quantity: productFoundInCart.quantity });
    }
  }

  res.render('shop/cart', {
    title: 'Cart',
    path: '/cart',
    cartProducts
  });
};

exports.postCart = async (req, res) => {
  const productId = req.body.productId;
  const product = await Product.findById(productId);
  await Cart.addProduct(product);

  res.redirect('/cart');
};

exports.postDeleteCartProduct = async (req, res) => {
  const productId = req.body.productId;
  const product = await Product.findById(productId);
  console.log(productId, product);
  await Cart.deleteProduct(product);

  res.redirect('/cart');
};

exports.getOrders = async (req, res) => {
  res.render('shop/orders', {
    title: 'Orders',
    path: '/orders'
  });
};

exports.getCheckout = async (req, res) => {
  res.render('shop/checkout', {
    title: 'Checkout',
    path: '/checkout'
  });
};
