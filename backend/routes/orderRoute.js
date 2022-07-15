import {
  saveOrder
} from "../controllers/orderController.js";
import express from "express";

const router = express.Router();

router.post("/save-order", saveOrder);

export default router;
