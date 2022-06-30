import mongoose from "mongoose";
import Customer from "../models/customerModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import express from "express";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

// @desc register new customer
// @route POST /api/customers
// @access Public
const registerCustomer = asyncHandler(async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all fields name, email, and password");
  }

  const customerExist = await Customer.findOne({ email });

  if (customerExist) {
    res.status(400);
    throw new Error("customer already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const saltedhash = await bcrypt.hash(password, salt);

  const customer = await Customer.create({
    name,
    email,
    password: saltedhash,
  });

  if (customer) {
    res.status(201).json({
      _id: customer.id,
      name: customer.name,
      email: customer.email,
      token: generateToken(customer._id),
    });
  } else {
    res.status(400);
    throw new Error("problem with creating customer (invalid customer data)");
  }
});

// @desc login/authenticate customer
// @route POST /api/customers/login
// @access Public
const loginCustomer = asyncHandler(async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    res.status(400);
    throw new Error("please have all fields filled: name, email, and password");
  }

  const customer = await Customer.findOne({ email });

  if (customer && (await bcrypt.compare(password, customer.password))) {
    res.json({
      _id: customer.id,
      name: customer.name,
      email: customer.email,
      token: generateToken(customer._id),
    });
  } else {
    res.status(400);
    throw new Error("login failed, invalid email or password");
  }
});

// @desc get customer data
// @route GET /api/customers/me
// @access Private

// example of protect route, prob should be public
const getCustomer = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({
      id: req.customer.id,
      name: req.customer.name,
      email: req.customer.email,
    });
  } catch (error) {
    res.status(400);
    throw new Error(
      "get failed, customer not exists (could be deleted but still using the corresponding token)"
    );
  }
});

// get all customers

const getCustomers = async (req, res) => {
  // descending order createdAt:-1
  const customers = await Customer.find({}).sort({ createdAt: -1 });
  res.status(200).json(customers);
};

const getSingleCustomer = async (req, res) => {
  const { id } = req.params.customerId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }
  const customer = await Customer.findById(id);

  if (!customer) return res.status(404).json({ error: "No such customer exists" });
  res.status(200).json(customer);
};

// delete a customer

const deleteCustomer = async (req, res) => {
  const { id } = req.params.customerId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }

  const customer = await Customer.findOneAndDelete({ _id: id });

  if (!customer) return res.status(400).json({ error: "No such customer exists" });

  res.status(200).json(customer);
};

const updateCustomer = async (req, res) => {
  const { id } = req.params.customerId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }

  const customer = await Customer.findOneAndUpdate({ _id: id }, {});

  if (!customer) return res.status(400).json({ error: "No such customer exists" });

  res.status(200).json(customer);
};

export {
  registerCustomer,
  loginCustomer,
  getCustomer,
  getCustomers,
  deleteCustomer,
  updateCustomer,
};
