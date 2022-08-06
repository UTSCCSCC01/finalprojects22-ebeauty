import {
  addService, 
  getAllServices, 
  getServicesById, 
  deleteServiceById
} from "../controllers/serviceController.js";
import express from "express";

const router = express.Router();

// get all services
router.get("/", getAllServices);

// get single service
router.get("/:id", getServicesById);

router.post("/", addService);

router.delete("/:id", deleteServiceById);

export default router;
