var express = require('express');
const categoryController = require("../../../src/controllers/categoryController");
const productController = require("../../../src/controllers/productController");
const orderdetailsController = require("../../../src/controllers/orderController");
const userController = require("../../../src/controllers/userController");
var router = express.Router();

router.post("/category/all", categoryController.listCategories);
router.post("/product/all", productController.listProducts);
router.post("/product/add", productController.addProduct);
router.post("/product/add", 
userController.isAuthenticated, 
productController.addProduct);
router.post("/order/details", orderdetailsController.getOrderDetails);
router.post("/order/add", orderdetailsController.createOrder);
router.post("/order/edit", orderdetailsController.editOrder);
router.post("/user/signup", userController.signup);
router.post("/user/login", userController.login);

module.exports = router;
