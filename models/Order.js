// models/order.js
const mongoose = require("mongoose");

// Define the schema for the order
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  restaurant: {
    type: String,
    required: true,
  },
  restaurantAddress: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "accepted", "picked up", "delivered"],
    default: "pending",
  },
  price: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

// Create the order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
