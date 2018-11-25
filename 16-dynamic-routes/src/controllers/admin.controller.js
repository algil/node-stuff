'use strict';

const Product = require('../models/product');

exports.getProducts = async (req, res) => {
  const products = await Product.fetchAll();

  res.render('admin/products', {
    title: 'Admin | Products',
    path: '/admin/products',
    products
  });
};

exports.getProduct = async (req, res) => {
  const productId = req.params.productId;
  let product = {};

  if (productId) {
    product = await Product.findById(productId);
  }

  const title = productId
    ? `Admin | Edit product '${product.title}'`
    : 'Admin | New Product';
  const path = productId ? '/admin/edit-product' : '/admin/add-product';

  res.render('admin/product', {
    title,
    path,
    product
  });
};

exports.postProduct = async (req, res) => {
  const { productId, title, imageUrl, price, description } = req.body;
  const product = new Product(title, imageUrl, price, description);
  product.id = productId;
  await product.save();
  res.redirect('/admin/products');
};

exports.deleteProduct = async (req, res) => {
  const productId = req.body.productId;
  await Product.delete(productId);
  res.redirect('/admin/products');
};
