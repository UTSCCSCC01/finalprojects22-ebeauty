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
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;

  console.log(firstName, lastName, email, password);

  if (!firstName || !lastName || !email || !password) {
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
    firstName,
    lastName,
    email,
    password: saltedhash,
  });

  if (customer) {
    res.status(201).json({
      _id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
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
      firstName: customer.firstName,
      lastName: customer.lastName,
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
      firstName: req.customer.firstName,
      lastName: req.customer.lastName,
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

// get the default address of a customer
const getDefaultAddress = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({
      id: req.customer.id,
      email: req.customer.email,
      defaultAddress: req.customer.defaultAddress,
    });
  } catch (error) {
    res.status(400);
    throw new Error(
      "get failed, customer not exists (could be deleted but still using the corresponding token)"
    );
  }
});

// get all three addresses of a customer
const getAllAddress = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({
      id: req.customer.id,
      email: req.customer.email,
      defaultAddress: req.customer.defaultAddress,
      address1: req.customer.address1,
      address2: req.customer.address2,
    });
  } catch (error) {
    res.status(400);
    throw new Error(
      "get failed, customer not exists (could be deleted but still using the corresponding token)"
    );
  }
});

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

// removes address1 of the customer
const deleteAddress1 = async (req, res) => {
  const { id } = req.params.customerId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }

  const customer = await Customer.findOneAndUpdate({ _id: id }, {address1: ""});

  if (!customer) return res.status(400).json({ error: "No such customer exists" });

  res.status(200).json(customer);
};

// removes address2 of the customer
const deleteAddress2 = async (req, res) => {
  const { id } = req.params.customerId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }

  const customer = await Customer.findOneAndUpdate({ _id: id }, {address2: ""});

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

// changes the default address of a customer to addr
const updateDefaultAddress = async (req, res, addr) => {
  const { id } = req.params.customerId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }

  const customer = await Customer.findOneAndUpdate({ _id: id }, {defaultAddress: addr});

  if (!customer) return res.status(400).json({ error: "No such customer exists" });

  res.status(200).json(customer);
};

// changes address1 of a customer to addr

const updateAddress1 = async (req, res, addr) => {
  const { id } = req.params.customerId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }

  const customer = await Customer.findOneAndUpdate({ _id: id }, {address1: addr});

  if (!customer) return res.status(400).json({ error: "No such customer exists" });

  res.status(200).json(customer);
};

// changes address2 of a customer to addr

const updateAddress2 = async (req, res, addr) => {
  const { id } = req.params.customerId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }

  const customer = await Customer.findOneAndUpdate({ _id: id }, {address2: addr});

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

  getAllAddress,
  getDefaultAddress,
  
  deleteAddress1,
  deleteAddress2,

  updateAddress1,
  updateAddress2,
  updateDefaultAddress,
};
