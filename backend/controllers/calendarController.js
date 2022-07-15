import asyncHandler from "express-async-handler";
import express from "express";
import Calendar from "../models/calendarModel.js";


// bug: should check start and end time overlap, also have add a day/weekday field in schema
// @desc post new calendar
// @route POST /api/calendars
// @access Public
const createTimeslot = asyncHandler(async (req, res) => {
  let providerId = req.body.providerId;
  let customerId = req.body.customerId;
  let title = req.body.title;
  let startTime = req.body.startTime;
  let endTime = req.body.endTime;
  let rest = req.body.rest;

  // only goes in if statement when any contain null
  if (!(providerId && startTime && endTime)) {
    res.status(400).json({ msg: 'please have all fields filled'});
    throw new Error('please have all fields filled');
  }

  const timeslot = await Calendar.findOne({providerId: req.body.providerId, startTime: req.body.startTime, endTime: req.body.endTime});
  if (timeslot) {
    res.status(400).json({ msg: 'this time slot already exists' });
    throw new Error('this time slot already exists');
  }

  const calendar = await Calendar.create({
    providerId, customerId, title, startTime, endTime, rest
  });

  if (calendar) {
    res.status(201).json({
      providerId: calendar.providerId,
      customerId: calendar.customerId,
      title: calendar.title,
      startTime: calendar.startTime,
      endTime: calendar.endTime,
      rest: calendar.rest,
    });
  } else {
    res.status(400).json({ msg: 'problem with creating calendar' });
    throw new Error('problem with creating calendar');
  }
});

//@desc    Get all calenders
//@route   GET /api/calenders
//@access  Public
const getCalenders = asyncHandler(async (req, res) => {
  const calendars = await Calendar.find({})
  res.status(200).json(calendars);
});

//@desc    Get a calender with provider id
//@route   GET /api/calenders/calendar/:id
//@access  Public
const getCalendarById = asyncHandler(async (req, res) => {
  const calendar = await Calendar.find({providerId: req.body.providerId});
  console.log(calendar)
  // check if calendar exist
  if (calendar) {
    res.json(calendar);
  } else {
    res.status(404).json({ msg: 'Calendar not found' });
    throw new Error('Calendar not found');
  }
});

//@desc    Get detail of a time slot of calender with provider id
//@route   GET /api/calenders/slot
//@access  Public
// (have not test and go into detail of this yet)
const getTimeslot = asyncHandler(async (req, res) => {
  const timeslot = await Calendar.findById(req.body.Id);
  // check if calendar exist
  if (timeslot) {
    res.json(timeslot);
  } else {
    res.status(404).json({ msg: 'timeslot not found' });
    throw new Error('timeslot not found');
  }
});



export { createTimeslot, getCalenders, getCalendarById, getTimeslot };