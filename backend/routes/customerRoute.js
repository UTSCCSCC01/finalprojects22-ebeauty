import {
  getCustomers,
  getCustomer,
  deleteCustomer,
  updateCustomer,
  registerCustomer,
  loginCustomer,
} from "../controllers/customerController.js";
import express from "express";

const router = express.Router();

router.post("/register-customer", registerCustomer);
router.post("/login-customer", loginCustomer);
// router.get('/me', protect, getProvider);

// get all reviews
router.get("/", getCustomers);

// get single review
router.get("/:customerId", getCustomer);

router.delete("/:customerId", deleteCustomer);

router.patch("/:customerId", updateCustomer);

export default router;
