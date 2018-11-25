'use strict';

const express = require('express');
const shopController = require('../controllers/shop.controller');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.post('/delete-cart-product', shopController.postDeleteCartProduct);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

module.exports = router;
