import Customer from "../models/customerModel";
import mongoose from "mongoose";

// get all customers

const getCustomers = async (req, res) => {
  // descending order createdAt:-1
  const customers = await Customer.find({}).sort({ createdAt: -1 });
  res.status(200).json(customers);
};

const getSingleCustomer = async (req, res) => {
  const { id } = req.params.reviewId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }
  const customer = await Customer.findById(id);

  if (!customer) return res.status(404).json({ error: "No such customer exists" });
  res.status(200).json(customer);
};

// create a new customer
const createCustomer = async (req, res) => {
  const { customerId, providerId, reviewContent, rating } = req.body;

  try {
    const customer = await Customer.create({ customerId, providerId, reviewContent, rating });
    res.status(200).json(customer);
  } catch (err) {
    res.status(400).json(err);
  }
};

// delete a customer

const deleteCustomer = async (req, res) => {
  const { id } = req.params.reviewId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }

  const customer = await Customer.findOneAndDelete({ _id: id });

  if (!customer) return res.status(400).json({ error: "No such customer exists" });

  res.status(200).json(customer);
};

const updateCustomer = async (req, res) => {
  const { id } = req.params.reviewId;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer exists" });
  }

  const customer = await Customer.findOneAndUpdate({ _id: id }, {});

  if (!customer) return res.status(400).json({ error: "No such customer exists" });

  res.status(200).json(customer);
};

module.exports = {
  createCustomer,
  getCustomers,
  getSingleCustomer,
  deleteCustomer,
  updateCustomer
};
