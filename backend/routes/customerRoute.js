import {
  getCustomers,
  getCustomer,
  deleteCustomer,
  updateCustomer,
  registerCustomer,
  loginCustomer,

  //address operations:
  getDefaultAddress,
  updateDefaultAddress,
} from "../controllers/customerController.js";
import express from "express";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

router.post("/register-customer", registerCustomer);
router.post("/login-customer", loginCustomer);
// router.get('/me', protect, getProvider);

// get all reviews
router.get("/", getCustomers);

router.get("/getDefaultAddress", getDefaultAddress);

router.patch("/updateDefaultAddress", updateDefaultAddress);
// router.patch("/updateAddress1", updateAddress1);
// router.patch("/updateAddress2", updateAddress2);

// get single review
router.get("/:customerId", getCustomer);

router.delete("/:customerId", deleteCustomer);

router.patch("/:customerId", updateCustomer);


export default router;
