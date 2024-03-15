const express = require("express");
const ProductRouter = express.Router();
const { OrderModel } = require("../model/Order.model");
const mongoose = require("mongoose");
const { productModel } = require("../model/Product");
const stripe = require("stripe")(
  "sk_test_51OqKRnSB46VQlUcl7AuXrCW2HLQWxVIYRDTmSs6LpjOkH60Uq1J8tmxnwtprqw8SaSJN6F3NTPAa4mXvrILMH8po00IZreD1Yd"
);

ProductRouter.post("/product", async (req, res) => {
  try {
    const { title, image, price, rating } = req.body;
    console.log(req.body);
    let newProduct = new productModel({ title, image, price, rating });
    await newProduct.save();
    res.status(200).send({ message: "New Product is added" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

ProductRouter.get("/product", async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send({ msg: "This is your product", data: products });
  } catch (error) {
    res.status(400).send({ msg: "errror", error });
  }
});

ProductRouter.post("/payment/create", async (req, res) => {
  const total = req.body.amount;
  // console.log(total, "total")
  console.log("Payment Request recived for the rupee", total);
  const payment = await stripe.paymentIntents.create({
    amount: total * 100,
    currency: "inr",
  });
  console.log(payment.client_secret);
  res.status(201).send({
    clintSecret: payment.client_secret,
  });
});

ProductRouter.post("/order/add", async (req, res) => {
  const { products, price, email, address } = req.body;

  const orderDetail = {
    product: products,
    price: price,
    address: address,
    email: email,
  };
  console.log(orderDetail);

  try {
    const result = await OrderModel.create(orderDetail);
    console.log("Order added to database >>", result);
    res
      .status(201)
      .send({ message: "Order added successfully", order: result });
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).send({ message: "Error adding order", error: error });
  }
});

ProductRouter.get("/order/get", async (req, res) => {
  const data = await OrderModel.find();
  return res.status(200).send(data);
});

module.exports = {
  ProductRouter,
};
