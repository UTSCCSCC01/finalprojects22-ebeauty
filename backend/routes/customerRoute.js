import {
  createCustomer,
  getCustomers,
  getSingleCustomer,
  deleteCustomer,
  updateCustomer,
} from "../controllers/customerController";
import express from "express";

const router = express.Router();

// get all reviews
router.get("/", getCustomers);

// get single review
router.get("/:customerId", getSingleCustomer);

router.post("/", createCustomer);

//
router.delete("/:customerId", deleteCustomer);

router.patch("/:customerId", updateCustomer);

export default router;
