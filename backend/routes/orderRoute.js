import {
  saveOrder, 
  getOrderByCalendarId
} from "../controllers/orderController.js";
import express from "express";

const router = express.Router();

router.post("/save-order", saveOrder);
router.get("/calendar/:id", getOrderByCalendarId);

export default router;
