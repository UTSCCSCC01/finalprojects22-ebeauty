import {
  getCustomers,
  getCustomer,
  deleteCustomer,
  updateCustomer,
  registerCustomer,
  loginCustomer,

  //address operations:
  getAllAddress,
  getDefaultAddress,
  deleteAddress1,
  deleteAddress2,
  updateDefaultAddress,
  updateAddress1,
  updateAddress2,

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
// router.get("/getAllAddress", getAllAddress);

// router.patch("/deleteAddress1", deleteAddress1);
// router.patch("/deleteAddress2", deleteAddress2);

// router.patch("/updateDefaultAddress", updateDefaultAddress);
// router.patch("/updateAddress1", updateAddress1);
// router.patch("/updateAddress2", updateAddress2);

// get single review
router.get("/:customerId", getCustomer);

router.delete("/:customerId", deleteCustomer);

router.patch("/:customerId", updateCustomer);


export default router;
