const express = require('express');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

const MongooseFunc = require('./Mongoose');

const { createProduct, getProducts } = MongooseFunc;

const app = express();

app.use(bodyParser.json());

app.post('/products', createProduct);

app.get('/products', getProducts);

app.listen(port, hostname , ()=> {
  console.log(`The server is running at http://${hostname}:${port}`)
});