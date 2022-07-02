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

// checks if customer is logged in, if so store user info in res.locals.customer
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (token){
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
      if (err){
        console.log(err.message);
        res.locals.customer = null;
        next();
      }
      else{
        console.log(decodedToken);
        let customer = await Customer.findById(decodedToken.id);
        res.locals.customer = customer;
        next();
      }
    })
  }
  else{
    res.locals.customer = null;
    next();
  }
}

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

router.get("/getDefaultAddress", checkUser);
// router.get("/getDefaultAddress", checkUser);
// router.get("/getAllAddress", getAllAddress);

// router.patch("/deleteAddress1", deleteAddress1);
// router.patch("/deleteAddress2", deleteAddress2);

// router.patch("/updateDefaultAddress", updateDefaultAddress);
// router.patch("/updateAddress1", updateAddress1);
// router.patch("/updateAddress2", updateAddress2);


export default router;
