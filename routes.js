// routes.js
const express = require("express");
const router = express.Router();
const ordersController = require("./controllers/ordersController");

// Define routes
router.get("/orders", ordersController.getOrders);
router.get("/orders/:id", ordersController.getOrderById);
router.post("/orders", ordersController.createOrder);
router.put("/orders/:id", ordersController.updateOrder);
router.delete("/orders/:id", ordersController.deleteOrder);

module.exports = router;
