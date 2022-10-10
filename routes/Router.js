const productController = require("../controllers/productController.js");
const routes = require("express").Router();
routes.post("/addProduct", productController.addProduct);
module.exports = routes;
