import {
  createTimeslot, 
  getCalenders, 
  getCalendarById, 
  getTimeslot 
} from "../controllers/calendarController";
import express from "express";

const router = express.Router();

router.post("/", createTimeslot);

// get all calendars
router.get("/", getCalenders);

// get one provider's calendar
router.get("/calendar/:id", getCalendarById);

// get the detail of one timeslot
router.delete("/timeslot/:id", getTimeslot);


export default router;
