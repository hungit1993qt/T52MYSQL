const db = require("../model/db.js");
const Product = db.products;
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
  };
  const product = await Product.create(info);
  res.status(200).sent(product);
};
module.exports = { addProduct };
