'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { publicDir } = require('./util/path');
const errorController = require('./controllers/error.controller');

const shopRoutes = require('./routes/shop.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicDir));

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
  console.log('Listen on port 3000');
});
