const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://drcyberx:drcyberx@cluster0.yyra3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{ useUnifiedTopology: true, useNewUrlParser: true }).then(()=> {
  console.log('db connected')
}).catch(()=> {
  console.log('connection failed')
});

const Product = require('./models/products');

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price
  })

  const result = await createdProduct.save();

  res.status(201).json(result);
}

const getProducts = async (req, res, next) => {

}

exports.createProduct = createProduct;
exports.getProducts = getProducts;