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

router.get("/getDefaultAddress/:customerId", getDefaultAddress);
router.get("/getAllAddress/:customerId", getAllAddress);

router.patch("/deleteAddress1/:customerId", deleteAddress1);
router.patch("/deleteAddress2/:customerId", deleteAddress2);

router.patch("/updateDefaultAddress/:customerId", updateDefaultAddress);
router.patch("/updateAddress1/:customerId", updateAddress1);
router.patch("/updateAddress2/:customerId", updateAddress2);


export default router;
