'use strict';

const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  res.render('add-product', {
    title: 'Add Product',
    path: '/admin/add-product'
  });
};

exports.postAddProduct = async (req, res) => {
  const product = new Product(req.body.title);
  await product.save();
  res.redirect('/');
};

exports.getProducts = async (req, res) => {
  const products = await Product.fetchAll();

  res.render('index', {
    title: 'My Shop',
    path: '/',
    products: products
  });
};
