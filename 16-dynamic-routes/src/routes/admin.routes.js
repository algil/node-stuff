'use strict';

const express = require('express');
const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.get('/products', adminController.getProducts);

router.get('/product/:productId?', adminController.getProduct);

router.post('/product', adminController.postProduct);

router.post('/delete-product', adminController.deleteProduct);

module.exports = router;
